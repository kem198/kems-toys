"use client";

import { etrianMonths } from "@/app/(toys)/etrian-registry/_constants/month";
import { toEtrianDate } from "@/app/(toys)/etrian-registry/_utils/etrian-utils";
import {
  Etrian,
  EtrianDay,
  EtrianMonthName,
  EtrianNewYearsEveName,
} from "@/app/(toys)/etrian-registry/types/month";
import { JsonDisplay } from "@/components/shared/json-display";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge, BadgeProps } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldSet,
} from "@/components/ui/field";
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import {
  Cake,
  House,
  Pencil,
  Trash2,
  UserRoundCheck,
  UserRoundPlus,
} from "lucide-react";
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

      {/*
      誕生日の設定状況によって次のいずれかで出力する
      - 皇帝ノ月 1 日
      - 鬼乎ノ日
      - 未設定
      */}
      {(() => {
        const month = etrian.dateOfBirth?.month;
        const day = etrian.dateOfBirth?.day;
        if (!month) return <>未設定</>;
        return (
          <>
            {month}
            {day != null && month !== "鬼乎ノ日" && <> {day} 日</>}
          </>
        );
      })()}
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

type DialogProps = {
  children: React.ReactNode;
} & React.ComponentProps<typeof DialogTrigger>;

function EditDialog({ children, ...props }: DialogProps) {
  return (
    <Dialog>
      <DialogTrigger {...props}>{children}</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>登録情報の編集</DialogTitle>
          <DialogDescription>
            冒険者のプロフィールを設定してください
          </DialogDescription>
        </DialogHeader>

        <FieldGroup>
          <FieldSet>
            <FieldGroup>
              <Field>
                <FieldLabel htmlFor="checkout-7j9-card-name-43j">
                  名前
                </FieldLabel>
                <Input
                  id="checkout-7j9-card-name-43j"
                  placeholder="ししょー"
                  required
                />
              </Field>
              <div className="grid grid-cols-2 gap-4">
                <Field>
                  <FieldLabel htmlFor="checkout-exp-month-ts6">
                    誕生月
                  </FieldLabel>
                  <Select defaultValue="">
                    <SelectTrigger id="checkout-exp-month-ts6">
                      <SelectValue placeholder={etrianMonths[0].name} />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value={etrianMonths[0].name}>
                        {etrianMonths[0].name}
                      </SelectItem>
                      <SelectItem value={etrianMonths[1].name}>
                        {etrianMonths[1].name}
                      </SelectItem>
                      <SelectItem value={etrianMonths[2].name}>
                        {etrianMonths[2].name}
                      </SelectItem>
                      <SelectItem value={etrianMonths[3].name}>
                        {etrianMonths[3].name}
                      </SelectItem>
                      <SelectItem value={etrianMonths[4].name}>
                        {etrianMonths[4].name}
                      </SelectItem>
                      <SelectItem value={etrianMonths[5].name}>
                        {etrianMonths[5].name}
                      </SelectItem>
                      <SelectItem value={etrianMonths[6].name}>
                        {etrianMonths[6].name}
                      </SelectItem>
                      <SelectItem value={etrianMonths[7].name}>
                        {etrianMonths[7].name}
                      </SelectItem>
                      <SelectItem value={etrianMonths[8].name}>
                        {etrianMonths[8].name}
                      </SelectItem>
                      <SelectItem value={etrianMonths[9].name}>
                        {etrianMonths[9].name}
                      </SelectItem>
                      <SelectItem value={etrianMonths[10].name}>
                        {etrianMonths[10].name}
                      </SelectItem>
                      <SelectItem value={etrianMonths[11].name}>
                        {etrianMonths[11].name}
                      </SelectItem>
                      <SelectItem value={etrianMonths[12].name}>
                        {etrianMonths[12].name}
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </Field>
                <Field>
                  <FieldLabel htmlFor="checkout-7j9-exp-year-f59">
                    日
                  </FieldLabel>
                  <Select defaultValue="">
                    <SelectTrigger id="checkout-7j9-exp-year-f59">
                      <SelectValue placeholder="1" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1">1</SelectItem>
                      <SelectItem value="2">2</SelectItem>
                      <SelectItem value="3">3</SelectItem>
                      <SelectItem value="4">4</SelectItem>
                      <SelectItem value="5">5</SelectItem>
                      <SelectItem value="6">6</SelectItem>
                      <SelectItem value="7">7</SelectItem>
                      <SelectItem value="8">8</SelectItem>
                      <SelectItem value="9">9</SelectItem>
                      <SelectItem value="10">10</SelectItem>
                      <SelectItem value="11">11</SelectItem>
                      <SelectItem value="12">12</SelectItem>
                      <SelectItem value="13">13</SelectItem>
                      <SelectItem value="14">14</SelectItem>
                      <SelectItem value="15">15</SelectItem>
                      <SelectItem value="16">16</SelectItem>
                      <SelectItem value="17">17</SelectItem>
                      <SelectItem value="18">18</SelectItem>
                      <SelectItem value="19">19</SelectItem>
                      <SelectItem value="20">20</SelectItem>
                      <SelectItem value="21">21</SelectItem>
                      <SelectItem value="22">22</SelectItem>
                      <SelectItem value="23">23</SelectItem>
                      <SelectItem value="24">24</SelectItem>
                      <SelectItem value="25">25</SelectItem>
                      <SelectItem value="26">26</SelectItem>
                      <SelectItem value="27">27</SelectItem>
                      <SelectItem value="28">28</SelectItem>
                    </SelectContent>
                  </Select>
                </Field>
              </div>
              <Field>
                <FieldLabel htmlFor="checkout-7j9-card-number-uw1">
                  タグ
                </FieldLabel>
                <Input
                  id="checkout-7j9-card-number-uw1"
                  placeholder="{ギルド名}、エトリア、世界樹の迷宮 III、etc..."
                  required
                />
                <FieldDescription>
                  所属ギルドや居住地などを設定してください
                </FieldDescription>
              </Field>
              <Field>
                <FieldLabel htmlFor="checkout-7j9-optional-comments">
                  メモ
                </FieldLabel>
                <Textarea
                  id="checkout-7j9-optional-comments"
                  placeholder="ウルトラCだろう…私もそう思う"
                  className="resize-none"
                />
                <FieldDescription>
                  その他プロフィール情報を入力してください
                </FieldDescription>
              </Field>
            </FieldGroup>
          </FieldSet>
        </FieldGroup>

        <DialogFooter>
          <DialogClose asChild>
            <Button type="button" variant="outline">
              キャンセル
            </Button>
          </DialogClose>
          <Button type="submit">
            <UserRoundCheck />
            更新
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

function DeleteDialog({ children, ...props }: DialogProps) {
  return (
    <Dialog>
      <DialogTrigger {...props}>{children}</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>登録情報の削除</DialogTitle>
          <DialogDescription>この操作は元に戻せません！</DialogDescription>
        </DialogHeader>

        <DialogFooter>
          <DialogClose asChild>
            <Button type="button" variant="outline">
              キャンセル
            </Button>
          </DialogClose>
          <Button type="submit" variant="destructive">
            削除
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

type BackupDialogProps = {
  localStorageKey: string;
} & DialogProps;

function BackupDialog({
  localStorageKey,
  children,
  ...props
}: BackupDialogProps) {
  return (
    <Dialog>
      <DialogTrigger {...props}>{children}</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>バックアップ</DialogTitle>
          <DialogDescription>
            ブラウザ (localStorage) 上に保存されている情報を表示します
            <br />
            コピーしておくと復元しやすい……かも
          </DialogDescription>
        </DialogHeader>

        <JsonDisplay
          data={(() => {
            const stored = localStorage.getItem(localStorageKey);
            return stored ? JSON.parse(stored) : null;
          })()}
        />
      </DialogContent>
    </Dialog>
  );
}

function EtrianItem({ etrian }: EtrianItemProps) {
  return (
    <Item>
      <ItemMedia>
        <Avatar>
          <AvatarImage
            // src={`https://github.com/${etrian.name.toLowerCase()}.png`}
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

          {(etrian.tags ?? []).map((g) => (
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
        <EditDialog>
          <Button variant="ghost" size="icon" className="rounded-full">
            <Pencil />
          </Button>
        </EditDialog>
        <DeleteDialog>
          <Button variant="ghost" size="icon" className="rounded-full">
            <Trash2 />
          </Button>
        </DeleteDialog>
      </ItemActions>
    </Item>
  );
}

export function EtrianRegistry() {
  const KEY = "etrianRegistry";
  const initialEtrianRegistryValue: Etrian[] = [
    {
      id: "a",
      name: "リン",
      tags: [{ name: "フィンドリム" }, { name: "ブレイバント" }],
      dateOfBirth: {
        month: "鬼乎ノ日",
      },
      orderNum: 0,
    },
    {
      id: "b",
      name: "クレシィ",
      tags: [{ name: "トロイメライ" }],
      dateOfBirth: {
        month: "皇帝ノ月",
        day: 1,
      },
      orderNum: 0,
    },
    {
      id: "c",
      name: "ジェッタ",
      tags: [{ name: "ブレイバント" }],
      dateOfBirth: {
        month: "火鳥ノ月",
        day: 22,
      },
      orderNum: 0,
    },
    {
      id: "d",
      name: "キサラギ",
      tags: [{ name: "ブレイバント" }],
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
      return stored ? JSON.parse(stored) : initialEtrianRegistryValue;
    } catch {
      return initialEtrianRegistryValue;
    }
  });

  const [newName, setNewName] = useState("");
  const [newDateOfBirthMonth, setNewDateOfBirthMonth] = useState<
    EtrianMonthName | EtrianNewYearsEveName
  >();
  const [newDateOfBirthDay, setNewDateOfBirthDay] = useState<EtrianDay>();
  const [newTag, setNewTag] = useState("");

  useEffect(() => {
    localStorage.setItem(KEY, JSON.stringify(etrians));
  }, [etrians]);

  const addEtrian = () => {
    const newEtrian: Etrian = {
      id: crypto.randomUUID(),
      name: newName.trim(),
      dateOfBirth: {
        month: newDateOfBirthMonth,
        day: newDateOfBirthDay,
      },
      tags: [],
      orderNum: 0,
    };

    setEtrians([newEtrian, ...etrians]);
    setNewName("");
    setNewTag("");
    setNewDateOfBirthMonth(undefined);
    setNewDateOfBirthDay(undefined);
  };

  return (
    <div className="flex flex-col gap-4">
      <div className="not-prose flex w-full flex-col gap-6">
        <div className="flex gap-2">
          <Input
            name="newEtrianName"
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
            placeholder="ししょー"
          />
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

        <BackupDialog localStorageKey={KEY} className="w-fit">
          <Button variant="ghost">バックアップ</Button>
        </BackupDialog>
      </div>
    </div>
  );
}
