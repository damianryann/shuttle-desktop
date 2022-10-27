import React, { FunctionComponent, useState } from 'react';
import classNames from 'clsx';

import { Navigation } from '../../elements';

import './App.scss';

const App: FunctionComponent = () => {
  const [toggle, setToggle] = useState<boolean>(false);

  return (
    <div
      className={`body ${toggle ? 'body-pd' : undefined}`}
      id="body-pd"
    >
      <Navigation toggle={toggle} setToggle={setToggle} />
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
