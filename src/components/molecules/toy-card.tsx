import {
  Item,
  ItemContent,
  ItemDescription,
  ItemHeader,
  ItemTitle,
} from "@/components/ui/item";
import Link from "next/link";

interface ToyCardProps {
  title: string;
  description: string;
  link: string;
  Icon: React.ComponentType<any>;
}

const ToyCard = ({ title, description, link, Icon }: ToyCardProps) => (
  <Item
    variant="outline"
    className="block min-h-64 w-44 border shadow-lg transition ease-out hover:scale-105"
    asChild
  >
    <Link href={link}>
      <ItemHeader>
        <Icon className="m-8 h-16 w-full" strokeWidth={1.375} />
      </ItemHeader>
      <ItemContent>
        <ItemTitle>{title}</ItemTitle>
        <ItemDescription className="line-clamp-3">
          {description}
        </ItemDescription>
      </ItemContent>
    </Link>
  </Item>
);

export { ToyCard };
