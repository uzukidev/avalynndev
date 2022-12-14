import Link from "next/link";
import { FC } from "react";
import { logger } from "../../../logs";
import { ThemeSwitcher } from "../Theme";
import styles from "./Nav.module.scss";

const items = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "Posts",
    href: "/posts",
  },
];

export const Nav: FC = () => {
  return (
    <nav className={styles.nav}>
      <ul className={styles.list}>
        {items.map((item) => (
          <li key={item.title} className={styles.item}>
            <Link href={item.href}>
              <a
                className={styles.link}
                onClick={() =>
                  logger.track("clicked-nav-link", {
                    title: item.title,
                  })
                }
              >
                {item.title}
              </a>
            </Link>
          </li>
        ))}
        <li className={styles.item}>
          <ThemeSwitcher className={styles.linkTokens} />
        </li>
      </ul>
    </nav>
  );
};
