"use client";

import { TOYS } from "@/constants/toys";
import Link from "next/link";
import { usePathname } from "next/navigation";

const ToyList = () => {
  const pathname = usePathname();

  return (
    <ul>
      {Object.entries(TOYS).map(([key, toy]) => (
        <li key={key}>
          <Link
            href={toy.link}
            // 現在のパスが toy.link と同じであれば背景色を表示する
            // https://zenn.dev/k_neko3/articles/8eda31133109fe
            // https://daisyui.com/components/menu/#menu-with-active-item
            className={pathname === toy.link ? "active" : ""}
          >
            <toy.Icon className="h-5 w-5" />
            {toy.title}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export { ToyList };
