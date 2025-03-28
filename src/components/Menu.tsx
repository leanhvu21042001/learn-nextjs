"use client";

import React, { useState, useEffect } from "react";
import MenuItem from "./MenuItem";
import styles from "./Menu.module.css";
import { usePathname } from "next/navigation";

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <nav className={styles.menuContainer}>
      <div className={styles.menuLogo}>
        <span>MyApp</span>
      </div>

      <div className={styles.hamburger} onClick={() => setIsOpen(!isOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <ul className={`${styles.menuItems} ${isOpen ? styles.menuOpen : ""}`}>
        <MenuItem label="Home" link="/" active={pathname === "/"} />
        <MenuItem
          label="App Todo"
          link="/app-todo"
          active={pathname === "/app-todo"}
        />
        <MenuItem
          label="Page Todo"
          link="/todo"
          active={pathname === "/todo"}
        />
        <MenuItem
          label="App Blog"
          link="/app-blog"
          active={pathname === "/app-blog"}
        />
        <MenuItem
          label="Page Blog"
          link="/blog"
          active={pathname === "/blog"}
        />
        <MenuItem label="About" link="/about" active={pathname === "/about"} />
      </ul>
    </nav>
  );
};

export default Menu;
