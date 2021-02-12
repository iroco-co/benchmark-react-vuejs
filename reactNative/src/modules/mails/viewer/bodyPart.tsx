import React, { useCallback, useState } from 'react';
import { View, Text, Platform } from 'react-native';
import { WebView, WebViewMessageEvent } from 'react-native-webview';
import { BodyValue, HtmlBodyPart, MimeType } from '../model';
import style from './style';

export interface Props {
  htmlBody: HtmlBodyPart;
  bodyValue: BodyValue;
}

const computeHeight = `
  window.addEventListener("load", () => {
    window.ReactNativeWebView.postMessage(
      Math.max(
        document.body.scrollHeight,
        document.body.offsetHeight,
        document.documentElement.clientHeight,
        document.documentElement.scrollHeight,
        document.documentElement.offsetHeight
      )
    );
  });
  true;
`;

function BodyPart({ htmlBody, bodyValue }: Props): React.ReactElement {
  const [height, setHeight] = useState<number>(300);

  const onMessage = useCallback((event: WebViewMessageEvent) => {
    console.log(event.nativeEvent.data);
    setHeight(parseInt(event.nativeEvent.data, 10));
  }, []);

  switch (htmlBody.type) {
    case MimeType.TEXT_HTML:
      return (
        <View renderToHardwareTextureAndroid={true}>
          <WebView
            originWhitelist={['*']}
            source={{
              html: bodyValue.value,
            }}
            injectedJavaScript={computeHeight}
            onMessage={onMessage}
            scrollEnabled={false}
            containerStyle={{ flex: 0, height }}
            androidHardwareAccelerationDisabled={Platform.OS === 'android'}
            javaScriptEnabledAndroid={true}
          />
        </View>
      );
    default:
      return <Text style={style.textBody}>{bodyValue.value}</Text>;
  }
}

export default BodyPart;
