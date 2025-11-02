import { Item, ItemContent } from "@/components/ui/item";

export function JsonDisplay({ data }: { data: unknown }) {
  const jsonString = data ? JSON.stringify(data, undefined, 2) : " ";
  const lines = jsonString.split("\n");

  const occurrences = new Map<string, number>();

  const items = lines.map((line) => {
    const count = occurrences.get(line) ?? 0;
    occurrences.set(line, count + 1);
    return { key: `${line}#${count}`, line };
  });

  return (
    <Item variant="outline" className="w-full bg-muted/50">
      <ItemContent>
        {/* limit height and allow scrolling when JSON is long */}
        <pre className="max-h-[60vh] cursor-text select-text overflow-auto whitespace-pre-wrap break-words text-xs">
          {items.map(({ key, line }) => (
            <span key={key} className="block hover:bg-zinc-200/80">
              {line}
            </span>
          ))}
        </pre>
      </ItemContent>
    </Item>
  );
}
