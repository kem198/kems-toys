import Version from '@/components/Atoms/Version';
import NabeatsuAssessmenter from '@/components/Organisms/NabeatsuAssessmenter';
import MdBody from './page.body.mdx';
import MdSupplement from './page.supplement.mdx';

export default function Page() {
  return (
    <article>
      <MdBody />
      <NabeatsuAssessmenter />
      <div className="divider" />
      <MdSupplement />
      <Version version="0.1.0" onDate="2024-05-12" />
    </article>
  );
}
