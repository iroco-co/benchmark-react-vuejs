import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TouchableWithoutFeedback,
  ScrollView,
  Platform,
  TouchableOpacity,
} from 'react-native';
import { useRoute, RouteProp, useNavigation } from '@react-navigation/native';
import { useMail } from '../api';
import Mail, { HtmlBodyPart } from '../model';
import style from './style';
import ChevronLeft from '../../../theme/icons/chevronLeft';
import { formatRelativeTime } from '../../../helpers/time';
import BodyPart from './bodyPart';

function Viewer(): React.ReactElement {
  const route = useRoute<RouteProp<{ params: { mail: Mail } }, 'params'>>();
  const navigation = useNavigation();
  const [resolvedMail, setResolvedMail] = useState<Mail>(route.params.mail);

  const mail = useMail(route.params.mail.id);

  useEffect(() => {
    if (mail.mail) {
      setResolvedMail(mail.mail);
    }
  }, [mail]);

  return (
    <View style={style.container}>
      <SafeAreaView>
        <View style={style.header}>
          <TouchableWithoutFeedback
            onPress={navigation.goBack}
            testID={'back'}
            accessibilityLabel={'back'}
            accessible={Platform.OS !== 'ios'}>
            <View style={style.navigation}>
              <ChevronLeft />
              <View style={style.metas}>
                <Text style={style.name}>{resolvedMail.from?.name}</Text>
                <Text style={style.email}>{resolvedMail.from?.email}</Text>
              </View>
            </View>
          </TouchableWithoutFeedback>

          {resolvedMail.receivedAt ? (
            <Text style={style.time}>
              {formatRelativeTime(resolvedMail.receivedAt)}
            </Text>
          ) : null}
        </View>
      </SafeAreaView>

      <ScrollView contentContainerStyle={style.body}>
        <Text style={style.subject}>{mail.mail?.subject}</Text>

        {resolvedMail.htmlBody && resolvedMail.htmlBody.length
          ? resolvedMail.htmlBody.map((htmlBody: HtmlBodyPart) =>
              resolvedMail.bodyValues &&
              htmlBody.partId in resolvedMail.bodyValues ? (
                <View style={style.bodyPart} key={htmlBody.partId}>
                  <BodyPart
                    htmlBody={htmlBody}
                    bodyValue={resolvedMail.bodyValues[htmlBody.partId]}
                  />
                </View>
              ) : null,
            )
          : null}
      </ScrollView>
    </View>
  );
}

export default Viewer;
