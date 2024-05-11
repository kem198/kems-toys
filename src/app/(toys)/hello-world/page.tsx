import Link from 'next/link';

export default function HelloWorld() {
  return (
    <article className="prose">
      <h1>Hello World</h1>
      <p>スタイルやコンポーネントなどの確認用ページ</p>
      <ul>
        <li>
          <Link href="/hello-world/sub-page/">Sub page</Link>
        </li>
      </ul>
    </article>
  );
}
