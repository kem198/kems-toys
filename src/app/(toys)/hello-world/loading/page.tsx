import Spinner from '@/components/Atoms/Spinner';
import Link from 'next/link';
import { Suspense } from 'react';
import WaitComponent from './wait';

export default function Page() {
  return (
    <div>
      <h1>Loading Test</h1>
      <p>This is a page for testing spinner display.</p>
      <Suspense fallback={<Spinner />}>
        <WaitComponent />
      </Suspense>
      <h2>Reference</h2>
      <ul>
        <li>
          <Link href="https://nextjs.org/docs/app/building-your-application/routing/loading-ui-and-streaming">
            Routing: Loading UI and Streaming | Next.js
          </Link>
        </li>
        <li>
          <Link href="https://www.tohoho-web.com/ex/nextjs.html#loading">
            とほほのNext.js入門 - とほほのWWW入門
          </Link>
        </li>
      </ul>
    </div>
  );
}
