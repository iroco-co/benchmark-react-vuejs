import React from 'react';
import { BodyValue, HtmlBodyPart, MimeType } from '../model';

export interface Props {
  htmlBody: HtmlBodyPart;
  bodyValue: BodyValue;
}

function BodyPart({ htmlBody, bodyValue }: Props): React.ReactElement {
  switch (htmlBody.type) {
    case MimeType.TEXT_HTML:
      return <iframe srcDoc={bodyValue.value} scrolling="no" />;
    default:
      return <p className='textBody'>{bodyValue.value}</p>;
  }
}

export default BodyPart;
