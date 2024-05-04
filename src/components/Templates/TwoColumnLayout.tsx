import Link from 'next/link';

export default function Navbar({ title, link, children }) {
  return (
    <div>
      {/* Navbar */}
      <div className="navbar w-full bg-primary lg:min-h-fit">
        {/* ハンバーガーアイコン */}
        <div className="flex-none lg:hidden">
          <label
            htmlFor="my-drawer-3"
            aria-label="open sidebar"
            className="btn btn-square btn-ghost"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block h-6 w-6 stroke-current text-primary-content"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </label>
        </div>
        <div className="mx-2 flex-1">
          <Link href="/" className="text-primary-content">
            KeM&apos;s Toys
          </Link>
        </div>
      </div>
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col">
          {/* Page content here */}
          <main className="container mx-auto my-4 px-4">{children}</main>
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-3"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu min-h-full w-56 bg-base-200 p-4">
            {/* Sidebar content here */}
            <li>
              <Link href={link}>{title}</Link>
            </li>
            <li>
              <a>Sidebar Item 2</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
