import React, { FunctionComponent, useState } from 'react';
import classNames from 'clsx';

import { Navigation } from '../../elements';

import './App.scss';

const App: FunctionComponent = () => {
  const [toggle, setToggle] = useState<boolean>(false);

  const clickToggle = () => {
    setToggle(!toggle);
  };

  return (
    <div className={`body ${toggle ? 'body-pd' : undefined}`} id="body-pd">
        <Navigation toggleNav={toggle} clickToggle={clickToggle} />
      <div
        className={classNames({
          'height-100': true
        })}
      >
        <h4>Main Components</h4>
      </div>
    </div>
  );
};

export default App;
