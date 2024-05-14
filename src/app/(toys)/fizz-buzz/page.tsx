import FizzBuzzCalc from '@/components/Organisms/FizzBuzzCalc';
import ToyLayout from '@/components/Templates/ToyLayout';
import MdBody from './page.body.mdx';
import MdSupplement from './page.supplement.mdx';

export default function Page() {
  return (
    <ToyLayout
      ToyComponent={FizzBuzzCalc}
      BodyComponent={MdBody}
      SupplementComponent={MdSupplement}
      version="0.1.1"
      onDate="2024-05-12"
    />
  );
}
