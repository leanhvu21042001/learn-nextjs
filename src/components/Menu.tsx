"use client";

import React, { useState, useEffect } from "react";
import MenuItem from "./MenuItem";
import styles from "./Menu.module.css";
import { usePathname } from "next/navigation";
import { appRouters, hasParam, pageRouters } from "@/lib/routes";
import { DefaultAnchor } from "./Anchors";

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <nav className={styles.menuContainer}>
      <div className={styles.menuLogo}>
        <DefaultAnchor url="/">
          <span>MyApp</span>
        </DefaultAnchor>
      </div>

      <div className={styles.hamburger} onClick={() => setIsOpen(!isOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <ul className={`${styles.menuItems} ${isOpen ? styles.menuOpen : ""}`}>
        {Object.values(appRouters).map((router) => {
          if (!router.url) return null;
          if (hasParam(router.url)) return null; // Skip if the URL has a parameter

          return (
            <MenuItem
              key={router.url}
              label={router.label}
              link={router.url}
              active={pathname === router.url}
            />
          );
        })}

        {Object.values(pageRouters).map((router) => {
          if (!router.url) return null;
          if (hasParam(router.url)) return null; // Skip if the URL has a parameter

          return (
            <MenuItem
              key={router.url}
              label={router.label}
              link={router.url}
              active={pathname === router.url}
            />
          );
        })}
      </ul>
    </nav>
  );
};

export default Menu;
