import React from 'react';
import { NavLink } from 'react-router-dom';
import Thumbnail from '../thumbnail';
import Mail from '../model';

export interface Props {
  mails: Mail[];
  setSelectedMail: (mail: Mail) => void;
}

function List({ mails, setSelectedMail }: Props): React.ReactElement {
  return (
    <div className="mails-list">
      {mails.map((mail: Mail) => (
        <NavLink
          to={`/${mail.id}`}
          className="mail"
          key={mail.id}
          onClick={() => setSelectedMail(mail)}>
          <Thumbnail mail={mail} />
        </NavLink>
      ))}
    </div>
  );
}

export default List;
