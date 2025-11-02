import { Item, ItemContent } from "@/components/ui/item";

export function JsonDisplay({ data }: { data: unknown }) {
  const jsonString = data ? JSON.stringify(data, undefined, 2) : " ";
  const lines = jsonString.split("\n");

  return (
    <Item variant="outline" className="w-full bg-muted/50">
      <ItemContent>
        {/* limit height and allow scrolling when JSON is long */}
        <pre className="max-h-[60vh] cursor-text select-text overflow-auto whitespace-pre-wrap break-words text-xs">
          {lines.map((line, index) => (
            <span
              key={`${index}-${line}`}
              className="block hover:bg-zinc-200/80"
            >
              {line}
            </span>
          ))}
        </pre>
      </ItemContent>
    </Item>
  );
}
