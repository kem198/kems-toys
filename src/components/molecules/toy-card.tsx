import Link from "next/link";

interface ToyCardProps {
  title: string;
  description: string;
  link: string;
  Icon: React.ComponentType<any>;
}

const ToyCard = ({ title, description, link, Icon }: ToyCardProps) => (
  <Link
    className="card w-48 border border-base-200 bg-base-100 shadow-lg transition hover:scale-105"
    href={link}
  >
    <figure>
      <Icon className="m-8 h-16 w-16" strokeWidth={1.5} />
    </figure>
    <div className="card-body p-6 pt-0">
      <h2 className="card-title">{title}</h2>
      <p className="prose prose-sm">{description}</p>
    </div>
  </Link>
);

export { ToyCard };
