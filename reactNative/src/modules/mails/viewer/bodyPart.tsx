import React, { useCallback, useState } from 'react';
import { Text } from 'react-native';
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
  const [height, setHeight] = useState<number>(0);

  const onMessage = useCallback((event: WebViewMessageEvent) => {
    setHeight(parseInt(event.nativeEvent.data, 10));
  }, []);

  switch (htmlBody.type) {
    case MimeType.TEXT_HTML:
      return (
        <WebView
          originWhitelist={['*']}
          source={{
            html: bodyValue.value,
          }}
          injectedJavaScript={computeHeight}
          onMessage={onMessage}
          scrollEnabled={false}
          containerStyle={{ flex: 0, height }}
        />
      );
    default:
      return <Text style={style.textBody}>{bodyValue.value}</Text>;
  }
}

export default BodyPart;
