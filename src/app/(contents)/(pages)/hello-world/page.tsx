import Link from 'next/link';

const Page = () => (
  <article>
    <h1>Hello World</h1>
    <p>スタイルの確認やライブラリのテスト・練習用ページ。</p>
    <ul>
      <li>
        <Link href="/hello-world/markdown/">Markdown</Link>
      </li>
      <li>
        <Link href="/hello-world/react-hooks/">React Hooks</Link>
      </li>
      <li>
        <Link href="/hello-world/react-hook-form/">React Hook Form</Link>
      </li>
      <li>
        <Link href="/hello-world/device-orientation/">Device orientation</Link>
      </li>
    </ul>
  </article>
);

export default Page;
