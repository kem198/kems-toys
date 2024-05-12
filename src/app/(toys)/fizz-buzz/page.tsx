import Version from '@/components/Atoms/Version';
import FizzBuzzCalc from '@/components/Organisms/FizzBuzzCalc';
import MdBody from './page.body.mdx';
import MdSupplement from './page.supplement.mdx';

export default function Page() {
  return (
    <article>
      <MdBody />
      <FizzBuzzCalc />
      <div className="divider" />
      <MdSupplement />
      <Version version="0.1.1" onDate="2024-05-12" />
    </article>
  );
}
