import GcdCalc from '@/components/Organisms/GcdCalc';
import ToyLayout from '@/components/Templates/ToyLayout';
import MdBody from './page.body.mdx';
import MdSupplement from './page.supplement.mdx';

export default function Page() {
  return (
    <ToyLayout
      title="ユークリッドの互除法"
      ToyComponent={GcdCalc}
      BodyComponent={MdBody}
      SupplementComponent={MdSupplement}
      version="0.1.1"
      onDate="2024-05-12"
    />
  );
}
