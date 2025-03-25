import Link from "next/link";
import React, { Fragment } from "react";
// import styles from "./MenuItem.module.css";

interface MenuItemProps {
  label: string;
  link: string;
  active?: boolean;
}

const MenuItem: React.FC<MenuItemProps> = ({ label, link, active }) => {
  return (
    // <li className={`${styles.menuItem} ${active ? styles.active : ""}`}>
    //   <Link href={link}>{label}</Link>
    // </li>
    <Fragment>
      <Link href={link}>{label}</Link>
    </Fragment>
  );
};

export default MenuItem;
