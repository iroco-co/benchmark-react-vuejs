import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import List from '../list';
import Viewer from '../viewer';
import { useMails } from '../api';
import Mail from '../model';

function Landing(): React.ReactElement {
  const { pending, mails } = useMails();
  const history = useHistory();
  const params = useParams<{ mail?: string }>();
  const [selectedMail, setSelectedMail] = useState<Mail | undefined>();

  useEffect(() => {
    if (pending) {
      // Nothing
    } else if (!mails.length) {
      history.push('/');
    } else if ('mail' in params && params.mail) {
      const currentMail = mails.find((mail: Mail) => mail.id === params.mail);
      if (!currentMail) {
        history.push(`/${mails[0].id}`);
        setSelectedMail(mails[0]);
      } else {
        setSelectedMail(currentMail);
      }
    } else {
      history.push(`/${mails[0].id}`);
      setSelectedMail(mails[0]);
    }
  }, [pending, params.mail, mails]);

  return (
    <div className="mails-landing">
      <div className="list">
        <List mails={mails} />
      </div>
      {selectedMail ? (
        <div className="viewer">
          <Viewer selectedMail={selectedMail} />
        </div>
      ) : null}
    </div>
  );
}

export default Landing;
