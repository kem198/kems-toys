"use client";

import { toEtrianDate } from "@/app/(toys)/etrian-dob-note/_utils/etrian-utils";
import { Etrian } from "@/app/(toys)/etrian-dob-note/types/month";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
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
import { Cake, House, Pencil, Trash2, UserRoundPlus } from "lucide-react";
import * as React from "react";
import { useEffect, useState } from "react";

const KEY = "etrianBirthOfDateNoteData";

const etrianBirthOfDateNoteData: Etrian[] = [
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
      day: 0,
    },
    orderNum: 0,
  },
  {
    id: "c",
    name: "ジェッタ",
    guild: [{ name: "ブレイバント" }],
    dateOfBirth: {
      month: "火鳥ノ月",
      day: 0,
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

export function EtrianBirthOfDateNote() {
  const [etrians, setEtrians] = useState<Etrian[]>(() => {
    const stored = localStorage.getItem(KEY);
    try {
      return stored ? JSON.parse(stored) : etrianBirthOfDateNoteData;
    } catch {
      return etrianBirthOfDateNoteData;
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

                    {/* TODO: これコンポネにする */}
                    {(() => {
                      const today = toEtrianDate(new Date());
                      const isSameMonth =
                        etrian.dateOfBirth?.month === today.month.name;
                      const isSameDay = etrian.dateOfBirth?.day === today.day;

                      if (isSameMonth && isSameDay) {
                        return (
                          <span className="text-xs text-red-400">
                            本日がお誕生日です！
                          </span>
                        );
                      }

                      if (isSameMonth) {
                        return (
                          <span className="text-xs text-red-400">
                            今月がお誕生日です！
                          </span>
                        );
                      }

                      return null;
                    })()}
                  </ItemTitle>
                  <ItemDescription className="flex items-center gap-2">
                    <Badge className="flex items-end gap-1 rounded-full bg-red-100 text-red-500 hover:bg-red-100">
                      <Cake strokeWidth={1.5} size={14} />
                      {etrian.dateOfBirth?.month !== "鬼乎ノ日"
                        ? `${etrian.dateOfBirth?.month} ${etrian.dateOfBirth?.day} 日`
                        : `${etrian.dateOfBirth?.month}`}
                    </Badge>

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
              {index !== etrians.length - 1 && <ItemSeparator />}
            </React.Fragment>
          ))}
        </ItemGroup>
      </div>
    </div>
  );
}
