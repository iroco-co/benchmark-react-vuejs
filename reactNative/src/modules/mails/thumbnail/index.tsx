import React from 'react';
import { View, Text } from 'react-native';
import Mail from '../model';
import style from './style';
import { formatRelativeTime } from '../../../helpers/time';

export interface Props {
  mail: Mail;
}

function Thumbnail({ mail }: Props): React.ReactElement {
  return (
    <View style={style.container}>
      <View style={style.body}>
        <Text style={style.from} numberOfLines={1}>
          {mail.from?.name || mail.from?.email}
        </Text>
        <Text style={style.subject} numberOfLines={1}>
          {mail.subject}
        </Text>
      </View>
      <View style={style.metas}>
        {mail.receivedAt ? (
          <Text style={style.receivedAt} numberOfLines={1}>
            {formatRelativeTime(mail.receivedAt)}
          </Text>
        ) : null}
      </View>
    </View>
  );
}

export default Thumbnail;
