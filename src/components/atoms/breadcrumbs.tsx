"use client";

import Link from "next/link";
import { useSelectedLayoutSegments } from "next/navigation";

const Breadcrumbs = () => {
  // 呼び出されたページまでのセグメントを配列として取得する
  const pathnames = useSelectedLayoutSegments();

  // ルートグループの要素を除去する
  const pathnamesIgnoredRouteGroups = pathnames.filter(
    (pathname) => !pathname.startsWith("("),
  );

  return (
    <div className="breadcrumbs pb-4 pt-0 text-sm text-stone-600">
      <ul>
        {/* ホームへのリンクは静的に作成する */}
        <li>
          <Link href="/">Home</Link>
        </li>
        {/* セグメントを map で繰り返し生成 */}
        {pathnamesIgnoredRouteGroups.map((segment, index) => (
          <li key={segment}>
            {/**
             * 最後のセグメント以外はリンクとして表示する
             * 最後のセグメントはテキストとして表示する
             */}
            {index === pathnamesIgnoredRouteGroups.length - 1 ? (
              <span className="text-stone-400">{segment}</span>
            ) : (
              <Link
                href={`/${pathnamesIgnoredRouteGroups.slice(0, index + 1).join("/")}`}
              >
                {segment}
              </Link>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export { Breadcrumbs };
