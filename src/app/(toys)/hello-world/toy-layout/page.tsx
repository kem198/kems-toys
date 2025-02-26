import { CongratsButton } from "@/app/(toys)/congrats-button/_components/congrats-button";
import { ToyLayout } from "@/components/templates/toy-layout";
import MdBody from "./md/body.mdx";
import MdSupplement from "./md/supplement.mdx";

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
