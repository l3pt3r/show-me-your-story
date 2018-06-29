import React from "react";

const HeaderBar = (props) => {
 
return (
  <header className="ui teal inverted top fixed menu item">
  <div className="item">
      <h1>{props.name}</h1>
  </div>
</header>
  );
};

export default HeaderBar;