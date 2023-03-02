import React from "react";
import Image from "next/image";
import styles from "./Navbar.module.scss";

export const MobileNavbar = () => {
  return (
    <nav className={styles.mobilenavbar}>
      <div className={styles.menuANDheading}>
        <Image
          priority
          src="/icons/icon-menu.svg"
          height={15}
          width={16}
          alt=""
        />
        <h1>Sneakers</h1>
      </div>

      <div className={styles.cartANDavatarIcon}>
        <Image
          priority
          src="/icons/icon-cart.svg"
          height={20}
          width={22}
          alt=""
        />
        <Image
          priority
          src="/images/image-avatar.png"
          height={25}
          width={25}
          alt=""
        />
      </div>
      {/* <ul>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul> */}
    </nav>
  );
};

export const DesktopNavbar = () => {
  return (
    <nav>
      <ul>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </nav>
  );
};
