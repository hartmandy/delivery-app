import React, { Fragment } from "react";
import classes from "./Header.module.css";
import headerImage from "../../assets/header.jpg";
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  return (
    <React.Fragment>
      <header className={classes.header}>
        <h1>The Piebrary</h1>
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      <div className={classes.main}>
        <img src={headerImage} alt="pies and fruit on table" />
      </div>
    </React.Fragment>
  );
};

export default Header;
