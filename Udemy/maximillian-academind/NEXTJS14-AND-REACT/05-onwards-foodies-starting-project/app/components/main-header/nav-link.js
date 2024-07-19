"use client";

import Link from "next/link";
import { usePathName } from "next/navigation";
import classes from "./nav-link.module.css";

export default function Navlink({ href, children }) {
  const path = usePathName();
  return (
    <Link
      href="/meals"
      className={
        path.startsWith(href)
          ? `${classes.link}${classes.active}`
          : classes.link
      }
    >
      {children}
    </Link>
  );
}
