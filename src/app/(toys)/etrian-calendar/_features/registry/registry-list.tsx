import {
  AffiliationBadge,
  BirthdayMessage,
  ConfirmDialog,
  DateOfBirthBadge,
  EditDialog,
} from "@/app/(toys)/etrian-calendar/_features/registry";
import { Etrian } from "@/app/(toys)/etrian-calendar/types/etrian";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemFooter,
  ItemGroup,
  ItemMedia,
  ItemSeparator,
  ItemTitle,
} from "@/components/ui/item";
import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";
import { Pencil, Trash2 } from "lucide-react";
import { Fragment } from "react";

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

type RegistryListItemProps = {
  etrian: Etrian;
  onDelete: (etrian: Etrian) => void;
  onUpdate: (etrian: Etrian) => void;
};

function RegistryListItem({
  etrian,
  onDelete,
  onUpdate,
}: RegistryListItemProps) {
  return (
    <Item>
      <ItemMedia>
        <Avatar>
          <AvatarImage className="grayscale" />
          <AvatarFallback>{etrian.name.charAt(0)}</AvatarFallback>
        </Avatar>
      </ItemMedia>

      <ItemContent>
        <ItemTitle className="flex flex-col items-start gap-0">
          {etrian.name}
          <BirthdayMessage etrian={etrian} />
        </ItemTitle>

        <ItemDescription>{etrian.memo}</ItemDescription>

        <ItemFooter className={etrian.memo ? "pt-2" : undefined}>
          <div className="flex flex-wrap items-center gap-2">
            <DateOfBirthBadge dateOfBirth={etrian.dateOfBirth} />
            {(etrian.affiliations ?? []).map((affiliation) => (
              <AffiliationBadge key={affiliation} affiliation={affiliation} />
            ))}
          </div>
        </ItemFooter>
      </ItemContent>

      <ItemActions>
        <EditDialog etrian={etrian} onSave={onUpdate}>
          <Button variant="ghost" size="icon" className="rounded-full">
            <Pencil />
          </Button>
        </EditDialog>
        <ConfirmDialog
          title="冒険者情報の削除"
          description="下記の冒険者情報を削除します。この操作は元に戻せません！"
          content={
            <p>
              冒険者名: <span className="font-semibold">{etrian.name}</span>
            </p>
          }
          confirmButtonLabel="削除"
          confirmButtonVariant="destructive"
          onConfirm={() => onDelete(etrian)}
        >
          <Button variant="ghost" size="icon" className="rounded-full">
            <Trash2 />
          </Button>
        </ConfirmDialog>
      </ItemActions>
    </Item>
  );
}

type RegistryListProps = {
  etrians: Etrian[];
  isLoaded: boolean;
  onDelete: (etrian: Etrian) => void;
  onUpdate: (etrian: Etrian) => void;
};

export function RegistryList({
  etrians,
  isLoaded,
  onDelete,
  onUpdate,
}: RegistryListProps) {
  if (!isLoaded) {
    return (
      <ItemGroup>
        <EtrianItemSkeleton />
      </ItemGroup>
    );
  }

  if (etrians.length === 0) {
    return <ItemGroup />;
  }

  return (
    <ItemGroup>
      {etrians.map((etrian, index) => (
        <Fragment key={etrian.id}>
          <RegistryListItem
            etrian={etrian}
            onDelete={onDelete}
            onUpdate={onUpdate}
          />
          {index !== etrians.length - 1 && <ItemSeparator />}
        </Fragment>
      ))}
    </ItemGroup>
  );
}
