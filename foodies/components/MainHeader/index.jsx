import Link from "next/link";
import React from "react";
import Image from "next/image";

import logoImg from "@/assets/logo.png";
import classes from "./MainHeader.module.css";
import MainHeaderBackground from "./MainHeaderBackground";

export default function MainHeader() {
  return (
    <>
      <MainHeaderBackground />
      <header className={classes.header}>
        <Link href="/" className={classes.logo}>
          <Image src={logoImg} alt="음식이 담긴 접시" priority></Image>
          NextLevel Food
        </Link>
        <nav className={classes.nav}>
          <ul>
            <li>
              <Link href="/meals">둘러보기</Link>
            </li>
            <li>
              <Link href="/community">모임</Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
