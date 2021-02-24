import React from 'react';
import Mail from '../model';
import { formatRelativeTime } from '../../../helpers/time';

export interface Props {
  mail: Mail;
}

function Thumbnail({ mail }: Props): React.ReactElement {
  return (
    <div className="mails-thumbnail">
      <div className="infos">
        <p className="name">{mail.from?.name}</p>
        <p className="subject">{mail.subject}</p>
      </div>
      <div className="metas">
        {mail.receivedAt ? <p>{formatRelativeTime(mail.receivedAt)}</p> : null}
      </div>
    </div>
  );
}

export default Thumbnail;
