import Link from "next/link";

const Page = () => (
  <div>
    <h1>Vitest</h1>
    <ul>
      <li>
        <Link href="/">To top</Link>
      </li>
    </ul>
    <h2>Reference</h2>
    <ul>
      <li>
        <a href="https://nextjs.org/docs/app/building-your-application/testing/vitest#creating-your-first-vitest-unit-test">
          Testing: Vitest | Next.js
        </a>
      </li>
    </ul>
  </div>
);

export default Page;
