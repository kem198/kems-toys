"use client";

import { toEtrianDate } from "@/app/(toys)/etrian-registry/_utils/etrian-utils";
import { Etrian } from "@/app/(toys)/etrian-registry/types/month";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge, BadgeProps } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemGroup,
  ItemMedia,
  ItemSeparator,
  ItemTitle,
} from "@/components/ui/item";
import { cn } from "@/lib/utils";
import { Cake, House, Pencil, Trash2, UserRoundPlus } from "lucide-react";
import * as React from "react";
import { useEffect, useState } from "react";

type DateOfBirthBadgeProps = {
  etrian: Etrian;
} & BadgeProps;

function DateOfBirthBadge({
  etrian,
  className,
  ...props
}: DateOfBirthBadgeProps) {
  return (
    <Badge
      className={cn(
        "flex items-end gap-1 rounded-full bg-red-100 text-red-500 hover:bg-red-100",
        className,
      )}
      {...props}
    >
      <Cake strokeWidth={1.5} size={14} />
      {etrian.dateOfBirth?.month !== "鬼乎ノ日"
        ? `${etrian.dateOfBirth?.month} ${etrian.dateOfBirth?.day} 日`
        : `${etrian.dateOfBirth?.month}`}
    </Badge>
  );
}

type BirthdayMessageProps = {
  etrian: Etrian;
};

function BirthdayMessage({ etrian }: BirthdayMessageProps) {
  return (() => {
    const today = toEtrianDate(new Date());
    const isSameMonth = etrian.dateOfBirth?.month === today.month.name;
    const isSameDay = etrian.dateOfBirth?.day === today.day;

    if (isSameMonth && isSameDay) {
      return <span className="text-xs text-red-400">本日がお誕生日です！</span>;
    }

    if (isSameMonth) {
      return <span className="text-xs text-red-400">今月がお誕生日です！</span>;
    }

    return null;
  })();
}

type EtrianItemProps = {
  etrian: Etrian;
};

function EtrianItem({ etrian }: EtrianItemProps) {
  return (
    <Item>
      <ItemMedia>
        <Avatar>
          <AvatarImage
            src={`https://github.com/${etrian.name.toLowerCase()}.png`}
            className="grayscale"
          />
          <AvatarFallback>{etrian.name.charAt(0)}</AvatarFallback>
        </Avatar>
      </ItemMedia>

      <ItemContent className="gap-1">
        <ItemTitle>
          {etrian.name}
          <BirthdayMessage etrian={etrian} />
        </ItemTitle>

        <ItemDescription className="flex items-center gap-2">
          <DateOfBirthBadge etrian={etrian} />

          {(etrian.guild ?? []).map((g) => (
            <Badge
              variant="outline"
              className="flex items-end gap-1 rounded-full font-normal"
              key={g.name}
            >
              <House strokeWidth={1.5} size={14} />
              {g.name}
            </Badge>
          ))}
        </ItemDescription>
      </ItemContent>

      <ItemActions>
        <Button variant="ghost" size="icon" className="rounded-full">
          <Pencil />
        </Button>
        <Button variant="ghost" size="icon" className="rounded-full">
          <Trash2 />
        </Button>
      </ItemActions>
    </Item>
  );
}

export function EtrianRegistry() {
  const KEY = "etrianRegistryData";
  const etrianRegistryData: Etrian[] = [
    {
      id: "a",
      name: "リン",
      guild: [{ name: "フィンドリム" }, { name: "ブレイバント" }],
      dateOfBirth: {
        month: "鬼乎ノ日",
        day: 0,
      },
      orderNum: 0,
    },
    {
      id: "b",
      name: "クレシィ",
      guild: [{ name: "トロイメライ" }],
      dateOfBirth: {
        month: "皇帝ノ月",
        day: 1,
      },
      orderNum: 0,
    },
    {
      id: "c",
      name: "ジェッタ",
      guild: [{ name: "ブレイバント" }],
      dateOfBirth: {
        month: "火鳥ノ月",
        day: 22,
      },
      orderNum: 0,
    },
    {
      id: "d",
      name: "キサラギ",
      guild: [{ name: "ブレイバント" }],
      dateOfBirth: {
        month: "火鳥ノ月",
        day: 25,
      },
      orderNum: 0,
    },
  ];

  const [etrians, setEtrians] = useState<Etrian[]>(() => {
    const stored = localStorage.getItem(KEY);
    try {
      return stored ? JSON.parse(stored) : etrianRegistryData;
    } catch {
      return etrianRegistryData;
    }
  });

  const [newName, setNewName] = useState("");
  const [newGuild, setNewGuild] = useState("");

  useEffect(() => {
    localStorage.setItem(KEY, JSON.stringify(etrians));
  }, [etrians]);

  const addEtrian = () => {
    if (newName.trim() && newGuild.trim()) {
      const newEtrian: Etrian = {
        id: crypto.randomUUID(),
        name: newName.trim(),
        guild: [],
        orderNum: 0,
      };
      setEtrians([...etrians, newEtrian]);
      setNewName("");
      setNewGuild("");
    }
  };

  return (
    <div className="flex flex-col gap-4">
      <div className="not-prose flex w-full flex-col gap-6">
        <div className="flex gap-2">
          <Input name="todoTitle" type="text" placeholder="ししょー" />
          <Button onClick={addEtrian}>
            <UserRoundPlus />
            登録
          </Button>
        </div>
        <ItemGroup>
          {etrians.map((etrian, index) => (
            <React.Fragment key={etrian.id}>
              <EtrianItem etrian={etrian} />
              {index !== etrians.length - 1 && <ItemSeparator />}
            </React.Fragment>
          ))}
        </ItemGroup>
      </div>
    </div>
  );
}
