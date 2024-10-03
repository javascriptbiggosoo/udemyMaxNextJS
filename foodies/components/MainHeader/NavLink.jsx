"use client";
import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import classes from "./NavLink.module.css";

export default function NavLink({ href, children }) {
  const path = usePathname();

  return (
    <Link
      href={href}
      className={path.startsWith(href) ? classes.active : undefined}
    >
      {children}
    </Link>
  );
}
