import React from "react";
import Image from "next/image";
import styles from "./Navbar.module.scss";
import utilStyles from "../styles/utils.module.scss";

export const MobileNavbar = () => {
  return (
    <nav className={styles.mobileNavbar}>
      <div>
        <Image
          priority
          src="/icons/icon-menu.svg"
          height={15}
          width={16}
          alt="icon menu"
        />
        <h1 className={utilStyles.headingLg}>Sneakers</h1>
      </div>

      <div>
        <Image
          priority
          src="/icons/icon-cart.svg"
          height={20}
          width={22}
          alt="icon cart"
        />
        <Image
          priority
          src="/images/image-avatar.png"
          height={25}
          width={25}
          alt="avatar"
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
    <nav className={styles.desktopNavbar}>
      <h1 className="heading">Sneakers</h1>

      <ul>
        <li>
          <a href="">Collections</a>
        </li>{" "}
        <li>
          <a href="">Men</a>
        </li>{" "}
        <li>
          <a href="">Women</a>
        </li>{" "}
        <li>
          <a href="">About</a>
        </li>{" "}
        <li>
          <a href="">Contact</a>
        </li>
      </ul>

      <div>
        <Image
          priority
          src="/icons/icon-cart.svg"
          height={20}
          width={22}
          alt="icon cart"
        />
        <Image
          priority
          src="/images/image-avatar.png"
          height={25}
          width={25}
          alt="avatar"
        />
      </div>
    </nav>
  );
};
