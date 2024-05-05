import ToyCard from '@/components/Molecules/ToyCard';
import ToysData from './toys.json';

// Toysオブジェクトの型をアノテーション
const Toys = ToysData;

export default function Home() {
  // ToyCardコンポーネントを生成する関数
  const generateToyCards = () =>
    Object.keys(Toys).map((key) => {
      const toy = Toys[key];
      return (
        <div
          className="flex flex-wrap justify-center gap-4 lg:justify-normal"
          key={key}
        >
          <ToyCard
            title={toy.title}
            description={toy.description}
            link={toy.link}
            svgD={toy.svgD}
          />
        </div>
      );
    });

  // ToyCardコンポーネントの配列を生成し、返す
  return (
    <div className="flex flex-wrap justify-center gap-4 lg:justify-normal">
      {generateToyCards()}
    </div>
  );
}
