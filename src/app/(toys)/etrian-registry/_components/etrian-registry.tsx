"use client";

import { etrianMonths } from "@/app/(toys)/etrian-registry/_constants/month";
import { toEtrianDate } from "@/app/(toys)/etrian-registry/_utils/etrian-utils";
import { Etrian } from "@/app/(toys)/etrian-registry/types/etrian";
import { JsonDisplay } from "@/components/shared/json-display";
import { Required } from "@/components/shared/required";
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
  FieldError,
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
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Cake,
  House,
  Pencil,
  Trash2,
  UserRoundCheck,
  UserRoundPlus,
} from "lucide-react";
import * as React from "react";
import { useEffect } from "react";
import { Controller, useForm } from "react-hook-form";
import { toast } from "sonner";
import * as z from "zod";

const formSchema = z.object({
  name: z
    .string()
    .min(1, "名前は 1 文字以上入力してください。")
    .max(20, "名前は 20 文字以下で入力してください。"),
  memo: z.string().max(100, "メモは 100 文字以下で入力してください。"),
});

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

type DialogProps = {
  children: React.ReactNode;
} & React.ComponentProps<typeof DialogTrigger>;

function EditDialog({ children, ...props }: DialogProps) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      memo: "",
    },
  });

  function onSubmit(data: z.infer<typeof formSchema>) {
    toast.success(`冒険者の登録情報を更新しました！`, {
      description: `冒険者: ${data.name.trim()}`,

      // description: (
      //   <pre className="bg-code text-code-foreground mt-2 w-[320px] overflow-x-auto rounded-md p-4">
      //     <code>{JSON.stringify(data, null, 2)}</code>
      //   </pre>
      // ),
    });
  }

  return (
    <Dialog>
      <DialogTrigger {...props}>{children}</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>登録情報の編集</DialogTitle>
          <DialogDescription>
            冒険者のプロフィールを設定してください。
            <br />
            <Required /> は必須項目です。
          </DialogDescription>
        </DialogHeader>

        <form id="edit" onSubmit={form.handleSubmit(onSubmit)}>
          <FieldGroup>
            <FieldSet>
              <Controller
                name="name"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel htmlFor="name">
                      名前
                      <Required />
                    </FieldLabel>
                    <Input
                      {...field}
                      id="name"
                      aria-invalid={fieldState.invalid}
                      placeholder="ししょー"
                      autoComplete="off"
                    />
                    {fieldState.invalid && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                )}
              />

              <div className="grid grid-cols-2 gap-4">
                <Field>
                  <FieldLabel htmlFor="date-of-birth-month">誕生月</FieldLabel>
                  <Select defaultValue="">
                    <SelectTrigger id="date-of-birth-month">
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
                  <FieldLabel htmlFor="date-of-birth-day">日</FieldLabel>
                  <Select defaultValue="">
                    <SelectTrigger id="date-of-birth-day">
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
                <FieldLabel htmlFor="affiliations">所属</FieldLabel>
                <Input
                  id="affiliations"
                  placeholder="ギルド名,エトリア,etc..."
                />
                <FieldDescription>
                  所属ギルドや居住地などを入力してください。
                  <br />, で区切ると、複数の所属を登録できます。
                </FieldDescription>
              </Field>

              <Controller
                name="memo"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field>
                    <FieldLabel htmlFor="memo">メモ</FieldLabel>
                    <Textarea
                      {...field}
                      id="memo"
                      placeholder="ウルトラCだろう…私もそう思う"
                      rows={4}
                      className="resize-none"
                      aria-invalid={fieldState.invalid}
                    />
                    <FieldDescription>
                      その他お好みの情報を入力してください。
                    </FieldDescription>
                    {fieldState.invalid && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                )}
              />
            </FieldSet>
          </FieldGroup>
        </form>
        <DialogFooter>
          <DialogClose asChild>
            <Button type="button" variant="outline">
              キャンセル
            </Button>
          </DialogClose>
          <Button type="submit" form="edit">
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

type EtrianItemProps = {
  etrian: Etrian;
};

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

          {(etrian.affiliations ?? []).map((affiliation) => (
            <Badge
              variant="outline"
              className="flex items-end gap-1 rounded-full font-normal"
              key={affiliation}
            >
              <House strokeWidth={1.5} size={14} />
              <span>{affiliation}</span>
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
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      memo: "",
    },
  });

  const KEY = "etrianRegistry";
  const initialEtrians: Etrian[] = [
    {
      id: "a",
      name: "ししょー",
      affiliations: ["アトラス", "エトリア"],
      dateOfBirth: {
        month: "皇帝ノ月",
        day: 1,
      },
      orderNum: 0,
    },
    {
      id: "a",
      name: "メディ子",
      affiliations: ["アトラス", "エトリア"],
      dateOfBirth: {
        month: "皇帝ノ月",
        day: 1,
      },
      orderNum: 0,
    },
    {
      id: "a",
      name: "ガン子",
      affiliations: ["アトラス", "ハイ・ラガード"],
      dateOfBirth: {
        month: "皇帝ノ月",
        day: 1,
      },
      orderNum: 0,
    },
  ];

  const [storedEtrians, setStoredEtrians] = React.useState<Etrian[]>(() => {
    try {
      const storedEtriansString = localStorage.getItem(KEY);
      return storedEtriansString
        ? JSON.parse(storedEtriansString)
        : initialEtrians;
    } catch (e) {
      return initialEtrians;
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(KEY, JSON.stringify(storedEtrians));
    } catch (e) {
      // ignore storage errors in this simple toy app
    }
  }, [storedEtrians]);

  const onSubmit = (data: z.infer<typeof formSchema>) => {
    const newEtrian: Etrian = {
      id: crypto.randomUUID(),
      name: data.name.trim(),
      dateOfBirth: {},
      affiliations: [],
      orderNum: 0,
    };
    setStoredEtrians((prev) => [newEtrian, ...prev]);
    form.reset();

    toast.success(`冒険者を登録しました！`, {
      description: `冒険者: ${data.name.trim()}`,

      // description: (
      //   <pre className="bg-code text-code-foreground mt-2 w-[320px] overflow-x-auto rounded-md p-4">
      //     <code>{JSON.stringify(data, null, 2)}</code>
      //   </pre>
      // ),
    });
  };

  return (
    <div className="flex flex-col gap-4">
      <div className="not-prose flex w-full flex-col gap-6">
        <form id="add" onSubmit={form.handleSubmit(onSubmit)}>
          <div className="flex gap-2">
            <Controller
              name="name"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <Input
                    {...field}
                    id="name"
                    aria-invalid={fieldState.invalid}
                    placeholder="ししょー"
                    autoComplete="off"
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
            <Button type="submit" form="add">
              <UserRoundPlus />
              登録
            </Button>
          </div>
        </form>
        <ItemGroup>
          {storedEtrians.map((etrian, index) => (
            <React.Fragment key={etrian.id}>
              <EtrianItem etrian={etrian} />
              {index !== storedEtrians.length - 1 && <ItemSeparator />}
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
