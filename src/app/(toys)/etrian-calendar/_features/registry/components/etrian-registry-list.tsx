import { Etrian } from "@/app/(toys)/etrian-calendar/_common/types/etrian";
import {
  AffiliationBadge,
  DateOfBirthBadge,
} from "@/app/(toys)/etrian-calendar/_features/registry/components/badge";
import { BirthdayMessage } from "@/app/(toys)/etrian-calendar/_features/registry/components/birthday-message";
import { ConfirmDialog } from "@/app/(toys)/etrian-calendar/_features/registry/components/dialog/confirm-dialog";
import { EditDialog } from "@/app/(toys)/etrian-calendar/_features/registry/components/dialog/edit-dialog";
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

function EtrianRegistrySkeleton() {
  return (
    <Item className="px-0">
      <ItemMedia>
        <Skeleton className="relative flex aspect-square h-10 w-10 shrink-0 overflow-hidden rounded-full" />
      </ItemMedia>

      <ItemContent className="gap-1">
        <ItemTitle>
          <Skeleton className="h-4 w-60 rounded-full" />
        </ItemTitle>

        <div
          className={cn(
            "line-clamp-2 text-balance text-sm font-normal leading-normal text-muted-foreground",
            "[&>a:hover]:text-primary [&>a]:underline [&>a]:underline-offset-4",
            "flex gap-2",
          )}
        >
          <Skeleton className="h-4 w-80 rounded-full" />
        </div>
      </ItemContent>
    </Item>
  );
}

type EtrianRegistryItemProps = {
  etrian: Etrian;
  onDelete: (etrian: Etrian) => void;
  onUpdate: (etrian: Etrian) => void;
};

function EtrianRegistryItem({
  etrian,
  onDelete,
  onUpdate,
}: EtrianRegistryItemProps) {
  return (
    <Item className="px-0">
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

type EtrianRegistryItemListProps = {
  etrians: Etrian[];
  isLoaded: boolean;
  onDelete: (etrian: Etrian) => void;
  onUpdate: (etrian: Etrian) => void;
};

export function EtrianRegistryItemList({
  etrians,
  isLoaded,
  onDelete,
  onUpdate,
}: EtrianRegistryItemListProps) {
  if (!isLoaded) {
    return (
      <ItemGroup>
        <EtrianRegistrySkeleton />
        <EtrianRegistrySkeleton />
        <EtrianRegistrySkeleton />
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
          <EtrianRegistryItem
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
