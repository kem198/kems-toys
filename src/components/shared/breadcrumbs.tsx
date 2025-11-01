"use client";

import Link from "next/link";
import { useSelectedLayoutSegments } from "next/navigation";
import React from "react";
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
        <BreadcrumbItem>
          <BreadcrumbLink asChild>
            <Link href="/">Home</Link>
          </BreadcrumbLink>
        </BreadcrumbItem>
        {pathnamesIgnoredRouteGroups.map((segment, index) => (
          <React.Fragment key={segment}>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              {/**
               * 最後のセグメント以外はリンクとして表示する
               * 最後のセグメントはテキストとして表示する
               */}
              {index === pathnamesIgnoredRouteGroups.length - 1 ? (
                <span className="text-stone-400">{segment}</span>
              ) : (
                <BreadcrumbLink asChild>
                  <Link
                    href={`/${pathnamesIgnoredRouteGroups
                      .slice(0, index + 1)
                      .join("/")}`}
                  >
                    {segment}
                  </Link>
                </BreadcrumbLink>
              )}
            </BreadcrumbItem>
          </React.Fragment>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  );
}

export { Breadcrumbs };
