import Version from '@/components/Atoms/Version';
import CongratsButton from '@/components/Organisms/CongratsButton';
import MdBody from './page.body.mdx';
import MdSupplement from './page.supplement.mdx';

export default function Page() {
  return (
    <article>
      <MdBody />
      <CongratsButton />
      <div className="divider" />
      <MdSupplement />
      <Version version="0.1.2" onDate="2024-05-11" />
    </article>
  );
}
