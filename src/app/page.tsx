"use client";

import { useState } from "react";
import { Fjalla_One } from "next/font/google";
import { MoonStars, Sun } from "@phosphor-icons/react";
import styles from "@/app/styles.module.css";

const fjallaOne = Fjalla_One({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export enum Theme {
  Light = "Light",
  Dark = "Dark",
}

export default function Home() {
  const [theme, setTheme] = useState<Theme>(Theme.Light);
  const [isFading, setIsFading] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  function handleThemeChange() {
    setIsAnimating(true);
    setIsFading(true);

    // Remove animation class after it completes
    setTimeout(() => {
      setIsAnimating(false);
    }, 600);

    setTimeout(() => {
      if (theme !== Theme.Light && theme !== Theme.Dark) {
        setTheme(Theme.Dark);
        console.log(`Error: something went wrong initializing theme value`);
        return;
      }

      if (theme === Theme.Light) {
        setTheme(Theme.Dark);
      } else if (theme === Theme.Dark) {
        setTheme(Theme.Light);
      }

      setIsFading(false);
    }, 150);
  }

  return (
    <div
      className={`${styles.theme} ${fjallaOne.className}`}
      data-theme={theme}
      data-testid="body-container"
    >
      <div className={styles.btnContainer}>
        <button
          className={`${styles.themeBtn} ${isAnimating ? styles.animate : ""}`}
          data-testid="change-theme-btn"
          onClick={handleThemeChange}
        >
          <span
            className={`${styles.btnContents} ${isFading ? styles.isFading : ""}`}
          >
            {theme === Theme.Light ? "Light Theme" : "Dark Theme"}
            {theme === Theme.Light ? (
              <Sun size={50} />
            ) : (
              <MoonStars size={50} weight="fill" />
            )}
          </span>
        </button>
      </div>
      <div className={styles.signatureContainer}>
        <p className={styles.signatureContents}>
          by <a href="https://github.com/ryner-gold">Ryner Gold</a>
        </p>
      </div>
    </div>
  );
}
