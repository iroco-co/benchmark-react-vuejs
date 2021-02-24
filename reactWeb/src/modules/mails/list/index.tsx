import React from 'react';
import { useMails } from '../api';
import Thumbnail from '../thumbnail';

function List(): React.ReactElement {
  const mails = useMails();

  return (
    <div className="mails-list">
      {mails.mails.map((mail) => (
        <div className="mail" key={mail.id}>
          <Thumbnail mail={mail} />
        </div>
      ))}
    </div>
  );
}

export default List;
