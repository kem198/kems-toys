'use client';

import Link from 'next/link';
import { useSelectedLayoutSegments } from 'next/navigation';

function Breadcrumbs() {
  const pathnames = useSelectedLayoutSegments();

  const pathnamesIgnoredRouteGroups = pathnames.filter(
    (pathname) => !pathname.startsWith('('),
  );

  return (
    <div className="breadcrumbs pb-4 pt-0 text-sm text-stone-600">
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        {pathnamesIgnoredRouteGroups.map((segment, index) => (
          <li key={index}>
            {index === pathnamesIgnoredRouteGroups.length - 1 ? (
              <span className="text-stone-400">{segment}</span>
            ) : (
              <Link
                href={`/${pathnamesIgnoredRouteGroups.slice(0, index + 1).join('/')}`}
              >
                {segment}
              </Link>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Breadcrumbs;
