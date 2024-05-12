import Version from '@/components/Atoms/Version';
import GcdCalc from '@/components/Organisms/GcdCalc';
import MdBody from './page.body.mdx';
import MdSupplement from './page.supplement.mdx';

export default function Page() {
  return (
    <article>
      <MdBody />
      <GcdCalc />
      <div className="divider" />
      <MdSupplement />
      <Version version="0.1.1" onDate="2024-05-12" />
    </article>
  );
}
