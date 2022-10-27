import React, { FunctionComponent, Fragment } from 'react';

import classNames from 'clsx';

const Navigation: FunctionComponent<NavigationProps> = ({
  toggleNav,
  clickToggle
}) => {
  return (
    <Fragment>
      <header
        className={classNames({
          header: true,
          'body-pd': toggleNav
        })}
        id="header"
      >
        <div className="header_toggle" onClick={e => clickToggle(e)}>
          Toggle
        </div>
      </header>
      <div
        className={classNames({
          'l-navbar ': true,
          show: toggleNav
        })}
        id="nav-bar"
      >
        <nav className="nav">
          <div>
            <a href="/#" className="nav_logo">
              <i className="bx bx-layer nav_logo-icon" />
              <span className="nav_logo-name">Shuttle Desktop</span>
            </a>
            <div className="nav_list">
              <a href="/#" className="nav_link active">
                <i className="bx bx-grid-alt nav_icon" />
                <span className="nav_name">Dashboard</span>
              </a>
              <a href="/#" className="nav_link">
                <i className="bx bx-user nav_icon" />
                <span className="nav_name">Users Management</span>
              </a>
              <a href="/#" className="nav_link">
                <i className="bx bx-message-square-detail nav_icon" />
                <span className="nav_name">Pages</span>
              </a>
              <a href="/#" className="nav_link">
                <i className="bx bx-bookmark nav_icon" />
                <span className="nav_name">Media</span>
              </a>
              <a href="/#" className="nav_link">
                <i className="bx bx-folder nav_icon" />
                <span className="nav_name">Analytics</span>
              </a>
              <a href="/#" className="nav_link">
                <i className="bx bx-bar-chart-alt-2 nav_icon" />
                <span className="nav_name">Settings</span>
              </a>
            </div>
          </div>
          <a href="/#" className="nav_link">
            <div className="header_img">
              <img
                src="https://media-exp1.licdn.com/dms/image/D5603AQFeIditkRUGFg/profile-displayphoto-shrink_100_100/0/1665686759172?e=1672272000&v=beta&t=FeTChCYYyV0U6cKM_-acpfY_AHm-r_mewE3QIyRj6Pg"
                alt=""
              />
            </div>
            <span className="nav_name">Log Out</span>
          </a>
        </nav>
      </div>
    </Fragment>
  );
};

export interface NavigationProps {
  toggleNav: boolean;
  clickToggle: Function;
}

export default Navigation;
