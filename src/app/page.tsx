import ToyCard from '@/components/Molecules/ToyCard';
import Toys from './toys.json';

export default function Home() {
  return (
    <div className="flex flex-wrap justify-center gap-4 lg:justify-normal">
      <ToyCard
        title={Toys.fizzBuzz.title}
        description={Toys.fizzBuzz.description}
        link={Toys.fizzBuzz.link}
        svgD={Toys.fizzBuzz.svgD}
      />
    </div>
  );
}
