import React from 'react';
import Mail from '../model';

export interface Props {
  mail: Mail;
}

function Thumbnail({ mail }: Props): React.ReactElement {
  return (
    <div className="mails-thumbnail">
      <p>{mail.from}</p>
    </div>
  );
}

export default Thumbnail;
