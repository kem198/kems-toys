import { FizzBuzzCalc } from '@/components/Organisms/FizzBuzzCalc';
import { ToyLayout } from '@/components/Templates/ToyLayout';
import MdBody from './page.body.mdx';
import MdSupplement from './page.supplement.mdx';

const Page = () => (
  <ToyLayout
    title="Fizz Buzz"
    ToyComponent={FizzBuzzCalc}
    BodyComponent={MdBody}
    SupplementComponent={MdSupplement}
    version="0.2.0"
    onDate="2024-05-18"
  />
);

export default Page;
