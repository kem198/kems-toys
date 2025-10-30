import { ToyList } from "@/components/organisms/toy-list";
import Link from "next/link";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

/**
 * FIXME:
 * 次の指定で lg 幅の際の表示崩れを無理くり抑えている
 *
 * <div className="bg-base-200">                                                          (bg-base-200)
 * <div className="navbar w-full bg-neutral text-neutral-content lg:min-h-10 lg:text-sm"> (lg:min-h-10) ※ 2.5rem 分
 * <div className="drawer-content flex flex-col bg-base-100">                             (bg-base-100)
 * <div className="drawer-side lg:h-[calc(100dvh_-_2.5rem)]">                             (lg:h-[calc(100dvh_-_2.5rem)])
 */
const TwoColumnLayout = ({ children }: Props) => (
  <div className="bg-base-200">
    {/* Navbar */}
    <div className="navbar bg-neutral text-neutral-content w-full lg:min-h-10 lg:text-sm">
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
      <div className="drawer-content bg-base-100 flex flex-col">
        <main className="container mx-auto my-4 px-4">{children}</main>
      </div>
      {/* サイドバーのトグル用 */}
      <input id="drawer-toggle" type="checkbox" className="drawer-toggle" />
      {/* サイドバー */}
      <div className="drawer-side lg:h-[calc(100dvh_-_2.5rem)]">
        <label
          htmlFor="drawer-toggle"
          aria-label="close sidebar"
          className="drawer-overlay"
        >
          <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
        </label>
        <div className="menu bg-base-200 min-h-full w-64 p-4">
          <ToyList />
        </div>
      </div>
    </div>
  </div>
);

export { TwoColumnLayout };
