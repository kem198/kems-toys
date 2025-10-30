import { ToyCard } from "@/components/molecules/toy-card";
import { ItemGroup } from "@/components/ui/item";
import { TOYS } from "@/constants/toys";

function ToyCards() {
  return (
    <ItemGroup className="flex flex-row flex-wrap justify-center gap-4 lg:justify-normal">
      {TOYS.map((toy) => (
        <ToyCard
          key={toy.title}
          title={toy.title}
          description={toy.description}
          link={toy.link}
          Icon={toy.icon}
        />
      ))}
    </ItemGroup>
  );
}

export { ToyCards };
