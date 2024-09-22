import Link from "next/link";
import React from "react";
import logoImg from "@/assets/logo.png";
import Image from "next/image";
import classes from "./main-header.module.css";

export default function MainHeader() {
  return (
    <header>
      <Link href="/" className={classes.logo}>
        <Image src={logoImg}></Image>
      </Link>
      <nav>
        <li>
          <Link href="/meals">둘러보기</Link>
        </li>
        <li>
          <Link href="/community">모임</Link>
        </li>
      </nav>
    </header>
  );
}
