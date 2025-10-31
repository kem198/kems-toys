"use client";

import Link from "next/link";
import { useSelectedLayoutSegments } from "next/navigation";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "../ui/breadcrumb";

function Breadcrumbs() {
  // 呼び出されたページまでのセグメントを配列として取得する
  const pathnames = useSelectedLayoutSegments();

  // ルートグループの要素を除去する
  const pathnamesIgnoredRouteGroups = pathnames.filter(
    (pathname) => !pathname.startsWith("("),
  );

  return (
    <Breadcrumb>
      <BreadcrumbList>
        {/* ホームへのリンクは静的に作成する */}
        <BreadcrumbItem>
          <BreadcrumbLink asChild>
            <Link href="/">Home</Link>
          </BreadcrumbLink>
        </BreadcrumbItem>
        {/* セグメントを map で繰り返し生成 */}
        {pathnamesIgnoredRouteGroups.map((segment, index) => (
          <>
            <BreadcrumbSeparator />
            <BreadcrumbItem key={segment}>
              {/**
               * 最後のセグメント以外はリンクとして表示する
               * 最後のセグメントはテキストとして表示する
               */}
              {index === pathnamesIgnoredRouteGroups.length - 1 ? (
                <span className="text-stone-400">{segment}</span>
              ) : (
                <BreadcrumbLink asChild>
                  <Link
                    href={`/${pathnamesIgnoredRouteGroups.slice(0, index + 1).join("/")}`}
                  >
                    {segment}
                  </Link>
                </BreadcrumbLink>
              )}
            </BreadcrumbItem>
          </>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  );
}

export { Breadcrumbs };
