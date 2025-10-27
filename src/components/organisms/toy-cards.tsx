import { ToyCard } from "@/components/molecules/toy-card";
import { TOYS } from "@/constants/toys";

const ToyCards = () => (
  <div className="flex flex-wrap justify-center gap-4 lg:justify-normal">
    {Object.entries(TOYS).map(([key, toy]) => (
      <ToyCard
        key={key}
        title={toy.title}
        description={toy.description}
        link={toy.link}
        Icon={toy.Icon}
      />
    ))}
  </div>
);

export { ToyCards };
