import { Item, ItemContent } from "@/components/ui/item";
import { ScrollArea } from "@/components/ui/scroll-area";

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
    <ScrollArea className="max-h-[60vh] rounded-md border border-border">
      <Item className="w-full bg-muted/50">
        <ItemContent>
          <pre className="cursor-text select-text whitespace-pre-wrap break-words text-xs">
            {items.map(({ key, line }) => (
              <span key={key} className="block hover:bg-zinc-200/80">
                {line}
              </span>
            ))}
          </pre>
        </ItemContent>
      </Item>
    </ScrollArea>
  );
}
