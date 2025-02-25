import { ToyCard } from "@/components/Molecules/ToyCard";
import { TOYS } from "@/constants/toys";

const ToyCards = () => (
  <div className="flex flex-wrap justify-center gap-4 lg:justify-normal">
    {Object.entries(TOYS).map(([key, toy]) => (
      <ToyCard
        key={key}
        title={toy.title}
        description={toy.description}
        link={toy.link}
        svgD={toy.svgD}
      />
    ))}
  </div>
);

export { ToyCards };
