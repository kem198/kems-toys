import { ToyList } from '@/components/Organisms/ToyList';
import Link from 'next/link';
import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

const TwoColumnLayout = ({ children }: Props) => (
  <div>
    {/* Navbar */}
    <div className="navbar w-full bg-neutral text-neutral-content lg:min-h-fit lg:text-sm">
      <div className="flex-none lg:hidden">
        {/* ハンバーガーメニュー */}
        <label
          htmlFor="drawer-toggle"
          aria-label="open sidebar"
          className="btn btn-square btn-ghost"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="inline-block h-6 w-6 stroke-current"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </label>
      </div>
      {/* サイト名 */}
      <div className="mx-2 flex-1">
        <Link href="/">KeM&apos;s Toys</Link>
      </div>
    </div>
    <div className="drawer lg:drawer-open">
      {/* メインコンテンツ */}
      <div className="drawer-content flex flex-col">
        <main className="container mx-auto my-4 px-4">{children}</main>
      </div>
      {/* サイドバーのトグル用 */}
      <input id="drawer-toggle" type="checkbox" className="drawer-toggle" />
      {/* サイドバー */}
      <div className="drawer-side">
        <label
          htmlFor="drawer-toggle"
          aria-label="close sidebar"
          className="drawer-overlay"
        >
          <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
        </label>
        <div className="menu min-h-full w-64 bg-base-200 p-4">
          <ToyList />
        </div>
      </div>
    </div>
  </div>
);

export { TwoColumnLayout };
