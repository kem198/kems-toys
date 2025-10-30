import { ToyCard } from "@/components/molecules/toy-card";
import { ItemGroup } from "@/components/ui/item";
import { TOYS } from "@/constants/toys";

const ToyCards = () => (
  <ItemGroup className="flex flex-row flex-wrap justify-center gap-4 lg:justify-normal">
    {Object.entries(TOYS).map(([key, toy]) => (
      <ToyCard
        key={key}
        title={toy.title}
        description={toy.description}
        link={toy.link}
        Icon={toy.Icon}
      />
    ))}
  </ItemGroup>
);

export { ToyCards };
