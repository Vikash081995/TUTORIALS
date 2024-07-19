"use client";

import Link from "next/link";
import logoImg from "@assets/logo.png";
import Image from "next/image";
import MainHeaderBackground from "./main-header-background";

import classes from "./main-header-background.module.css";
import Navlink from "./nav-link";

export default function MainHeader() {
  return (
    <>
      <MainHeaderBackground />
      <header>
        <Link href="/">
          <Image src={logoImg.src} alt="A plate with food on it" />
          NextLevel Food
        </Link>
        <nav>
          <ul>
            <li>
              <Navlink href="/meals">Browse Meals</Navlink>
            </li>
            <li>
              <Navlink href="/community">Foodies Community</Navlink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
