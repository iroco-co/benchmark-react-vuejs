import React, { useEffect, useState } from 'react';
import Mail, { HtmlBodyPart } from '../model';
import { useMail } from '../api';
import { formatRelativeTime } from '../../../helpers/time';
import BodyPart from './bodyPart';

export interface Props {
  selectedMail: Mail;
}

function Viewer({ selectedMail }: Props): React.ReactElement {
  const [mail, setMail] = useState<Mail>(selectedMail);

  const fetchedMail = useMail(selectedMail.id);

  useEffect(() => {
    if (!fetchedMail.pending && fetchedMail.mail) {
      setMail(fetchedMail.mail);
    } else {
      setMail(selectedMail);
    }
  }, [selectedMail, fetchedMail]);

  return (
    <div className="mails-viewer">
      <div className="header">
        <div className="infos">
          <p className="name">{selectedMail.from?.name}</p>
          <p className="mail">{selectedMail.from?.email}</p>
        </div>
        <div className="metas">
          {selectedMail.receivedAt ? (
            <p className="receivedAt">{formatRelativeTime(selectedMail.receivedAt)}</p>
          ) : null}
        </div>
      </div>
      <div className="body">
        <h1>{selectedMail.subject}</h1>

        {mail.htmlBody && mail.htmlBody.length
          ? mail.htmlBody.map((htmlBody: HtmlBodyPart) =>
              mail.bodyValues && htmlBody.partId in mail.bodyValues ? (
                <div key={htmlBody.partId}>
                  <BodyPart htmlBody={htmlBody} bodyValue={mail.bodyValues[htmlBody.partId]} />
                </div>
              ) : null
            )
          : null}
      </div>
    </div>
  );
}

export default Viewer;
