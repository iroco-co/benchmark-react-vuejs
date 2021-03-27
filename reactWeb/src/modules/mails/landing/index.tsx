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
    if (!pending && mails.length && selectedMail === null) {
      setSelectedMail(mails[0])
      history.push(`/${mails[0].id}`);
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
