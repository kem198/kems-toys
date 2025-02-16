"use client";

import { toys } from "@/assets/toys";
import Link from "next/link";
import { usePathname } from "next/navigation";

const ToyList = () => {
  // 現在のパスを取得しておく
  const pathname = usePathname();

  // li 要素のコンポーネントをループ生成する関数
  const generateToyList = () =>
    Object.keys(toys).map((key) => {
      const toy = toys[key];

      // 現在のパスが toy.link と同じであれば 'active' をセットする
      // Link > ClassName へ渡してプライマリカラーを表示する
      // https://zenn.dev/k_neko3/articles/8eda31133109fe
      // https://daisyui.com/components/menu/#menu-with-active-item
      const active = pathname === toy.link ? "active" : "";

      return (
        <li key={key}>
          <Link href={toy.link} className={active}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.25"
              stroke="currentColor"
              className="h-5 w-5"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d={toy.svgD} />
            </svg>
            {toy.title}
          </Link>
        </li>
      );
    });

  // コンポーネントの配列を返す
  return <ul>{generateToyList()}</ul>;
};

export { ToyList };
