import { Item, ItemContent } from "@/components/ui/item";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";
import { ComponentProps } from "react";

export type JsonDisplayProps = {
  data: unknown;
  scrollAreaProps?: ComponentProps<typeof ScrollArea>;
  itemProps?: ComponentProps<typeof Item>;
  itemContentProps?: ComponentProps<typeof ItemContent>;
  preProps?: ComponentProps<"pre">;
};

export function JsonDisplay({
  data,
  scrollAreaProps,
  itemProps,
  itemContentProps,
  preProps,
}: JsonDisplayProps) {
  const jsonString = data ? JSON.stringify(data, undefined, 2) : " ";
  const lines = jsonString.split("\n");

  const occurrences = new Map<string, number>();

  const items = lines.map((line) => {
    const count = occurrences.get(line) ?? 0;
    occurrences.set(line, count + 1);
    return { key: `${line}#${count}`, line };
  });

  return (
    <ScrollArea
      {...scrollAreaProps}
      className={cn(
        "rounded-md border border-border",
        scrollAreaProps?.className,
      )}
    >
      <Item
        {...itemProps}
        className={cn("w-full bg-muted/50", itemProps?.className)}
      >
        <ItemContent {...itemContentProps}>
          <pre
            {...preProps}
            className={cn(
              "cursor-text select-text whitespace-pre-wrap break-words text-xs",
              preProps?.className,
            )}
          >
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
