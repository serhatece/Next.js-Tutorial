import React from "react";
import Link from "next/link";

import styles from "./styles.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      Made with ❤️ by&nbsp;
      <Link href="www.linkedin.com/in/serhatece" target="_blank">
        Serhat Ece
      </Link>
    </footer>
  );
}

export { Footer };
