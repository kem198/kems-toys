import Link from 'next/link';

export default function HelloWorld() {
  return (
    <article>
      <h1>Hello World</h1>
      <p>スタイルやルーティングなどの確認用ページ。</p>
      <ul>
        <li>
          <Link href="/hello-world/sub-page/">Sub page</Link>
        </li>
        <li>
          <Link href="/hello-world/md/">Markdown</Link>
        </li>
        <li>
          <Link href="/hello-world/loading/">Loading</Link>
        </li>
      </ul>
    </article>
  );
}
