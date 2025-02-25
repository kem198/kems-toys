import { ToyCard } from "@/components/Molecules/ToyCard";
import { TOYS } from "@/constants/toys";

const ToyCards = () => {
  // ToyCard コンポーネントをループ生成する関数
  const generateToyCards = () =>
    Object.keys(TOYS).map((key) => {
      const toy = TOYS[key];
      return (
        <ToyCard
          key={key}
          title={toy.title}
          description={toy.description}
          link={toy.link}
          svgD={toy.svgD}
        />
      );
    });

  // ToyCard コンポーネントの配列を生成して返す
  return (
    <div className="flex flex-wrap justify-center gap-4 lg:justify-normal">
      {generateToyCards()}
    </div>
  );
};

export { ToyCards };
