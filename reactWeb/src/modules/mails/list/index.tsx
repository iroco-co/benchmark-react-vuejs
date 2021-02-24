import React from 'react';
import { NavLink } from 'react-router-dom';
import Thumbnail from '../thumbnail';
import Mail from '../model';

export interface Props {
  mails: Mail[];
}

function List({ mails }: Props): React.ReactElement {
  return (
    <div className="mails-list">
      {mails.map((mail: Mail) => (
        <NavLink to={`/${mail.id}`} className="mail" key={mail.id}>
          <Thumbnail mail={mail} />
        </NavLink>
      ))}
    </div>
  );
}

export default List;
