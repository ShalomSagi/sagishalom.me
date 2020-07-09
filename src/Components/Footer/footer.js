import React from "react";
import classes from "./footer.module.scss";

const Footer = () => {
  return (
    <div className={classes.footer}>
      <h3 className={classes.h3}>
        I am currently looking for a job around Tel Aviv / Haifa.
      </h3>
      <div className={classes["contact-me"]}>
        If you think I can fit in your company, please contact me!
      </div>
      <div className={classes["contact-method"]}>
        <a href="mailto:sagishalom1@gmail.com">sagishalom1@gmail.com</a>
        <a href="tel:+972-50-555-2705">+927-50-555-2705</a>
      </div>
    </div>
  );
};

export default Footer;
