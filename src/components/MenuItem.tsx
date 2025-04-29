import React from "react";
import styles from "./MenuItem.module.css";
import { DefaultAnchor } from "./Anchors";

interface MenuItemProps {
  label: string;
  link: string;
  active?: boolean;
}

const MenuItem: React.FC<MenuItemProps> = ({ label, link, active }) => {
  return (
    <li className={`${styles.menuItem} ${active ? styles.active : ""}`}>
      <DefaultAnchor url={link}>{label}</DefaultAnchor>
    </li>
  );
};

export default MenuItem;
