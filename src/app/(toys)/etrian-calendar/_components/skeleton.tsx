import { Item, ItemContent, ItemMedia, ItemTitle } from "@/components/ui/item";
import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";

export function EtrianItemSkeleton() {
  return (
    <Item>
      <ItemMedia>
        <Skeleton className="w-fullrelative flex aspect-square h-10 w-10 shrink-0 overflow-hidden rounded-full" />
      </ItemMedia>

      <ItemContent className="gap-1">
        <ItemTitle>
          <Skeleton className="h-5 w-60 rounded-full" />
        </ItemTitle>

        <div
          className={cn(
            "line-clamp-2 text-balance text-sm font-normal leading-normal text-muted-foreground",
            "[&>a:hover]:text-primary [&>a]:underline [&>a]:underline-offset-4",
            "flex gap-2",
          )}
        >
          <Skeleton className="h-5 w-80 rounded-full" />
        </div>
      </ItemContent>
    </Item>
  );
}
