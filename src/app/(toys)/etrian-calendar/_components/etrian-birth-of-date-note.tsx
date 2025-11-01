"use client";

import {
  EtrianMonthName,
  EtrianNewYearsEveName,
} from "@/app/(toys)/etrian-calendar/_constants/month";
import { toEtrianDate } from "@/app/(toys)/etrian-calendar/_utils/etrian-utils";
import { Etrian } from "@/app/(toys)/etrian-calendar/types/month";
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
    birthOfDate: {
      month: "鬼乎ノ日",
      date: 0,
    },
    orderNum: 0,
  },
  {
    id: "b",
    name: "クレシィ",
    guild: [{ name: "トロイメライ" }],
    birthOfDate: {
      month: "皇帝ノ月",
      date: 0,
    },
    orderNum: 0,
  },
  {
    id: "c",
    name: "ジェッタ",
    guild: [{ name: "ブレイバント" }],
    birthOfDate: {
      month: "火鳥ノ月",
      date: 0,
    },
    orderNum: 0,
  },
  {
    id: "d",
    name: "キサラギ",
    guild: [{ name: "ブレイバント" }],
    birthOfDate: {
      month: "火鳥ノ月",
      date: 25,
    },
    orderNum: 0,
  },
];

export function EtrianBirthOfDateNote() {
  const [etrianData, setEtrianData] = useState<Etrian[]>(() => {
    const stored = localStorage.getItem(KEY);
    try {
      return stored ? JSON.parse(stored) : etrianBirthOfDateNoteData;
    } catch {
      return etrianBirthOfDateNoteData;
    }
  });

  const [newName, setNewName] = useState("");
  const [newGuild, setNewGuild] = useState("");
  const [newBirthMonth, setNewBirthMonth] = useState<
    EtrianMonthName | EtrianNewYearsEveName
  >("皇帝ノ月");
  const [newBirthDate, setNewBirthDate] = useState<number>(1);

  useEffect(() => {
    localStorage.setItem(KEY, JSON.stringify(etrianData));
  }, [etrianData]);

  const addEtrian = () => {
    if (newName.trim() && newGuild.trim()) {
      const newEtrian: Etrian = {
        id: crypto.randomUUID(),
        name: newName.trim(),
        guild: [{ name: newGuild.trim() }],
        birthOfDate: {
          month: newBirthMonth,
          date: newBirthDate,
        },
        orderNum: 0,
      };
      setEtrianData([...etrianData, newEtrian]);
      setNewName("");
      setNewGuild("");
    }
  };

  return (
    <div className="flex flex-col gap-4">
      <div>
        <Button>
          <UserRoundPlus />
          冒険者を登録する
        </Button>
      </div>
      <div className="not-prose flex w-full flex-col gap-6">
        <ItemGroup>
          {etrianData.map((etrian, index) => (
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
                    {(() => {
                      const today = toEtrianDate(new Date());
                      const isSameMonth =
                        etrian.birthOfDate.month === today.month.name;
                      const isSameDay = etrian.birthOfDate.date === today.day;

                      if (isSameMonth && isSameDay) {
                        return (
                          <span className="text-xs text-red-500">
                            今日がお誕生日です！
                          </span>
                        );
                      }

                      if (isSameMonth) {
                        return (
                          <span className="text-xs text-red-500">
                            今月がお誕生日です！
                          </span>
                        );
                      }

                      return null;
                    })()}
                  </ItemTitle>
                  <ItemDescription className="flex items-center gap-2">
                    <Badge className="flex items-end gap-1 rounded-full bg-red-100 text-red-500">
                      <Cake strokeWidth={1.5} size={14} />
                      {etrian.birthOfDate.month}
                      {etrian.birthOfDate.month !== "鬼乎ノ日"
                        ? ` ${etrian.birthOfDate.date} 日`
                        : ""}
                    </Badge>

                    {etrian.guild.map((g) => (
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
              {index !== etrianData.length - 1 && <ItemSeparator />}
            </React.Fragment>
          ))}
        </ItemGroup>
      </div>

      <div className="flex flex-col gap-2">
        <Input
          placeholder="パラ子"
          value={newName}
          onChange={(e) => setNewName(e.target.value)}
        />
        <Input
          placeholder="アトラス"
          value={newGuild}
          onChange={(e) => setNewGuild(e.target.value)}
        />
        <Input
          placeholder="皇帝ノ月"
          value={newBirthMonth}
          onChange={(e) => setNewBirthMonth(e.target.value)}
        />
        <Input
          placeholder="1"
          value={newBirthDate}
          type="number"
          onChange={(e) => setNewBirthDate(Number(e.target.value))}
        />
        <Button
          onClick={addEtrian}
          disabled={!newName.trim() || !newGuild.trim()}
        >
          追加
        </Button>
      </div>
    </div>
  );
}
