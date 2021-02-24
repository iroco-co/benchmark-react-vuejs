import React, { useState } from 'react';

function Header(): React.ReactElement {
  const [search, setSearch] = useState('');

  return (
    <header>
      <div className="search">
        <input
          type="text"
          value={search}
          onChange={(event) => setSearch(event.target.value)}
          placeholder="Recherche ..."
        />
      </div>
    </header>
  );
}

export default Header;
