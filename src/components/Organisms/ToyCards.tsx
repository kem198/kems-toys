import { toys } from '@/assets/toys';
import ToyCard from '@/components/Molecules/ToyCard';

export default function ToyCards() {
  // ToyCard コンポーネントをループ生成する関数
  const generateToyCards = () =>
    Object.keys(toys).map((key) => {
      const toy = toys[key];
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
}
