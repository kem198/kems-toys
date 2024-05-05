'use client';

import toysData from '@/assets/toys.json';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function ToyList() {
  // 現在のパスを取得しておく
  const pathname = usePathname();

  // li 要素のコンポーネントをループ生成する関数
  const generateToyList = () =>
    Object.keys(toysData).map((key) => {
      const toy = toysData[key];

      // 現在のパスが toy.link と同じであれば 'active' をセットする
      // Link > ClassName へ渡してプライマリカラーを表示する
      // https://zenn.dev/k_neko3/articles/8eda31133109fe
      // https://daisyui.com/components/menu/#menu-with-active-item
      const active = pathname === toy.link ? 'active' : '';

      return (
        <li key={key}>
          <Link href={toy.link} className={active}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={toy.svgD}
              />
            </svg>
            {toy.title}
          </Link>
        </li>
      );
    });

  // コンポーネントの配列を返す
  return <ul>{generateToyList()}</ul>;
}
