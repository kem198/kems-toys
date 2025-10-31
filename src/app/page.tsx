import { ToyCard } from "@/components/molecules/toy-card";
import { ItemGroup } from "@/components/ui/item";
import { TOYS } from "@/constants/toys";

function Home() {
  return (
    <ItemGroup className="grid grid-cols-2 gap-4 md:flex md:flex-row md:flex-wrap md:justify-normal">
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

export default Home;
