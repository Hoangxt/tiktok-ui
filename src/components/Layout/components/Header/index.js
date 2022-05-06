import classNames from "classnames/bind";
import React from "react";
import styles from "./Header.module.scss";

const cx = classNames.bind(styles);

const Header = () => {
  return (
    <header className={cx("wrapper")}>
      <div className={cx("inner")}>
        {/* {Logo} */}
        {/* {Search} */}
      </div>
    </header>
  );
};

export default Header;
