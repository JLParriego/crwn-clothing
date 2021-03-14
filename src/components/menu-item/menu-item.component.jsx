import React from "react";
import { withRouter } from "react-router-dom"; //higher order component that retun a new modify component give us access to location, history and match props

import "./menu-item.styles.scss";

/* ***Functional Component MemuItem*** 

- Called by the Directory Component
- title, imageUrl, linkUrl and size are props passed from Directory Component
- history, match are passed with withRouter from react-router-dom
- className: if size = large apply one css style otherwise apply other css style
- Example onClick={() => history.push(`${match.url}${linkUrl}`)}
- Example onClick={() => history.push('/' & 'shop/hats')}

- Change style - backgroundImage to imageUrl

- Title as prop from Directory Component
- Subtitle fixed

*/

const MenuItem = ({ title, imageUrl, size, history, linkUrl, match }) => (
  <div
    className={`${size} menu-item`}
    onClick={() => history.push(`${match.url}${linkUrl}`)} //push(path, [state]) - (function) Pushes a new entry onto the history stack
  >
    <div
      className="background-image"
      style={{
        backgroundImage: `url(${imageUrl})`,
      }}
    />
    <div className="content">
      <h1 className="title">{title.toUpperCase()}</h1>
      <span className="subtitle"> SHOP NOW</span>
    </div>
  </div>
);

export default withRouter(MenuItem);
