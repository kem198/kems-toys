import { CongratsButton } from '@/app/(contents)/(toys)/congrats-button/components/CongratsButton';
import { ToyLayout } from '@/components/Templates/ToyLayout';
import MdBody from './md/Body.mdx';
import MdSupplement from './md/Supplement.mdx';

const Page = () => (
  <ToyLayout
    title="ToyLayout"
    ToyComponent={CongratsButton}
    BodyComponent={MdBody}
    SupplementComponent={MdSupplement}
    version="0.1.2"
    onDate="2024-05-11"
  />
);

export default Page;
