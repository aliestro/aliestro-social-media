"use client";

import { LogoIcon } from "@/public/Icons";
import { MessageSquare, Phone, Settings, Sun, Users2 } from "lucide-react";
import styles from "./Sidebar.module.scss";
import Link from "next/link";
import { MENU } from "./Sidebar.data";
import cn from "clsx";
import { usePathname } from "next/navigation";

export function Sidebar() {
  const pathname = usePathname();
  console.log("pathname = ", pathname);
  return (
    <aside className={styles.sidebar}>
      <LogoIcon size={50} />
      <div>
        {MENU.map((item) => (
          <Link
            href={item.url}
            key={item.url}
            className={cn({
              [styles.active]: pathname === item.url,
            })}
          >
            <item.icon size={27} />
          </Link>
        ))}
      </div>
      <Sun />
    </aside>
  );
}

export default Sidebar;
