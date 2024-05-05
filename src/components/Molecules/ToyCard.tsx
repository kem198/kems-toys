import Link from 'next/link';

interface ToyCardProps {
  title: string;
  description: string;
  link: string;
  svgD: string;
}

export default function ToyCard({
  title,
  description,
  link,
  svgD,
}: ToyCardProps) {
  return (
    <Link
      className="card w-48 border border-base-200 bg-base-100 shadow-lg transition hover:scale-105"
      href={link}
    >
      <figure>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.25}
          stroke="currentColor"
          className="m-8 h-16 w-16"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d={svgD} />
        </svg>
      </figure>
      <div className="card-body p-6 pt-0">
        <h2 className="card-title">{title}</h2>
        <p className="prose prose-sm">{description}</p>
      </div>
    </Link>
  );
}
