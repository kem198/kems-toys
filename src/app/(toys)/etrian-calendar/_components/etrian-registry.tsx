"use client";

import {
  AffiliationBadge,
  DateOfBirthBadge,
} from "@/app/(toys)/etrian-calendar/_components/badge";
import { EtrianItemSkeleton } from "@/app/(toys)/etrian-calendar/_components/skeleton";
import {
  etrianMonths,
  etrianNewYearsEve,
} from "@/app/(toys)/etrian-calendar/_constants/month";
import { toEtrianDate } from "@/app/(toys)/etrian-calendar/_utils/etrian-utils";
import { Etrian } from "@/app/(toys)/etrian-calendar/types/etrian";
import { JsonDisplay } from "@/components/shared/json-display";
import { Required } from "@/components/shared/required";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
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
  ItemFooter,
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
import { zodResolver } from "@hookform/resolvers/zod";
import { Pencil, Trash2, UserRoundCheck, UserRoundPlus } from "lucide-react";
import {
  ComponentProps,
  Fragment,
  ReactNode,
  useCallback,
  useEffect,
  useState,
} from "react";
import { Controller, useForm } from "react-hook-form";
import { toast } from "sonner";
import * as z from "zod";

const UNSET_SELECT_VALUE = "未設定";

const formSchema = z.object({
  name: z
    .string()
    .min(1, "1 文字以上入力してください。")
    .max(20, "20 文字以下で入力してください。"),
  memo: z.string().max(100, "100 文字以下で入力してください。").optional(),
  dateOfBirth: z.object({
    month: z.string().optional(),
    day: z.string().optional(),
  }),
  affiliations: z.string().optional(),
});

type BirthdayMessageProps = {
  etrian: Etrian;
};

function BirthdayMessage({ etrian }: BirthdayMessageProps) {
  return (() => {
    const today = toEtrianDate(new Date());
    const isSameMonth = etrian.dateOfBirth?.month === today.month.name;
    const isSameDay = etrian.dateOfBirth?.day === today.day;

    if (isSameMonth && isSameDay) {
      return (
        <span className="text-xs text-red-400">🎉本日がお誕生日です！</span>
      );
    }

    if (isSameMonth) {
      return <span className="text-xs text-red-400">今月がお誕生日です！</span>;
    }

    return null;
  })();
}

type DialogProps = {
  children: ReactNode;
} & ComponentProps<typeof DialogTrigger>;

type EditDialogProps = DialogProps & {
  etrian: Etrian;
  onSave: (updated: Etrian) => void;
};

function EditDialog({ etrian, onSave, children, ...props }: EditDialogProps) {
  const [open, setOpen] = useState(false);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      memo: "",
      dateOfBirth: {
        month: UNSET_SELECT_VALUE,
        day: UNSET_SELECT_VALUE,
      },
      affiliations: "",
    },
  });

  const resetFormValues = useCallback(() => {
    form.reset({
      name: etrian.name,
      memo: etrian.memo,
      dateOfBirth: {
        month: etrian.dateOfBirth.month ?? UNSET_SELECT_VALUE,
        day: etrian.dateOfBirth.day
          ? String(etrian.dateOfBirth.day)
          : UNSET_SELECT_VALUE,
      },
      affiliations: etrian.affiliations?.join(","),
    });
  }, [etrian, form]);

  useEffect(() => {
    if (!open) {
      return;
    }

    resetFormValues();
  }, [etrian, open, resetFormValues]);

  function handleSubmit(data: z.infer<typeof formSchema>) {
    const normalizedAffiliations = (data.affiliations ?? "")
      .split(",")
      .map((value) => value.trim())
      .filter((value) => value.length > 0);

    const selectedMonth = data.dateOfBirth.month;
    const isKnownMonth = [...etrianMonths, etrianNewYearsEve].some(
      (monthItem) => monthItem.name === selectedMonth,
    );
    const month =
      selectedMonth && selectedMonth !== UNSET_SELECT_VALUE && isKnownMonth
        ? (selectedMonth as Etrian["dateOfBirth"]["month"])
        : undefined;

    const dayNumber =
      data.dateOfBirth.day !== UNSET_SELECT_VALUE
        ? Number(data.dateOfBirth.day)
        : undefined;
    const day =
      dayNumber !== undefined && dayNumber >= 1 && dayNumber <= 28
        ? (dayNumber as Etrian["dateOfBirth"]["day"])
        : undefined;

    const updatedEtrian: Etrian = {
      ...etrian,
      name: data.name.trim(),
      affiliations: normalizedAffiliations,
      dateOfBirth: {
        month,
        day,
      },
      memo: data.memo?.trim(),
    };

    onSave(updatedEtrian);
    setOpen(false);
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild {...props}>
        {children}
      </DialogTrigger>

      <DialogContent>
        <DialogHeader>
          <DialogTitle>登録情報の編集</DialogTitle>
          <DialogDescription>
            冒険者のプロフィールを設定してください。
            <br />
            <Required /> は必須項目です。
          </DialogDescription>
        </DialogHeader>

        <form id="edit" onSubmit={form.handleSubmit(handleSubmit)}>
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
                  <Controller
                    name="dateOfBirth.month"
                    control={form.control}
                    render={({ field }) => (
                      <Select
                        value={field.value ?? UNSET_SELECT_VALUE}
                        onValueChange={field.onChange}
                      >
                        <SelectTrigger id="date-of-birth-month">
                          <SelectValue placeholder={etrianMonths[0].name} />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value={UNSET_SELECT_VALUE}>
                            {UNSET_SELECT_VALUE}
                          </SelectItem>
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
                          <SelectItem value={etrianNewYearsEve.name}>
                            {etrianNewYearsEve.name}
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    )}
                  />
                </Field>

                <Field>
                  <FieldLabel htmlFor="date-of-birth-day">日</FieldLabel>
                  <Controller
                    name="dateOfBirth.day"
                    control={form.control}
                    render={({ field }) => (
                      <Select
                        value={field.value ?? UNSET_SELECT_VALUE}
                        onValueChange={field.onChange}
                      >
                        <SelectTrigger id="date-of-birth-day">
                          <SelectValue placeholder="1" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value={UNSET_SELECT_VALUE}>
                            {UNSET_SELECT_VALUE}
                          </SelectItem>
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
                    )}
                  />
                </Field>
              </div>

              <Field>
                <FieldLabel htmlFor="affiliations">所属</FieldLabel>
                <Input
                  id="affiliations"
                  placeholder="ギルド名,エトリア,etc..."
                  autoComplete="off"
                  {...form.register("affiliations")}
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
                      お好みの情報を入力してください。
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
        <DialogFooter className="gap-y-2">
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

type ConfirmDialogProps = {
  title: ReactNode;
  description?: ReactNode;
  content?: ReactNode;
  confirmButtonLabel?: ReactNode;
  confirmButtonVariant?: ComponentProps<typeof Button>["variant"];
  cancelButtonLabel?: ReactNode;
  onConfirm?: () => void;
  onCancel?: () => void;
  className?: string;
  children: ReactNode;
};

function ConfirmDialog({
  title,
  description,
  content,
  confirmButtonLabel = "はい",
  confirmButtonVariant = "default",
  cancelButtonLabel = "キャンセル",
  onConfirm,
  onCancel,
  className,
  children,
}: ConfirmDialogProps) {
  return (
    <Dialog>
      <DialogTrigger className={className} asChild>
        {children}
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          {description && <DialogDescription>{description}</DialogDescription>}
        </DialogHeader>

        {content}

        <DialogFooter className="gap-y-2">
          <DialogClose asChild>
            <Button variant="outline" onClick={onCancel}>
              {cancelButtonLabel}
            </Button>
          </DialogClose>
          <DialogClose asChild>
            <Button variant={confirmButtonVariant} onClick={onConfirm}>
              {confirmButtonLabel}
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

type BackupDialogProps = {
  storedEtrians: Etrian[];
} & DialogProps;

function BackupDialog({
  storedEtrians,
  children,
  ...props
}: BackupDialogProps) {
  return (
    <Dialog>
      <DialogTrigger asChild {...props}>
        {children}
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>登録状況のバックアップ</DialogTitle>
          <DialogDescription>
            ブラウザ (localStorage) 上に保存されている情報を表示します。
            <br />
            コピーしておくと復元しやすい……かも。
          </DialogDescription>
        </DialogHeader>

        <JsonDisplay data={storedEtrians} />
      </DialogContent>
    </Dialog>
  );
}

type EtrianItemProps = {
  etrian: Etrian;
  onDelete: (etrian: Etrian) => void;
  onUpdate: (etrian: Etrian) => void;
};

function EtrianItem({ etrian, onDelete, onUpdate }: EtrianItemProps) {
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

      <ItemContent>
        <ItemTitle className="flex flex-col items-start gap-1">
          {etrian.name}
          <BirthdayMessage etrian={etrian} />
        </ItemTitle>

        <ItemDescription>{etrian.memo}</ItemDescription>

        <ItemFooter className={etrian.memo && "pt-2"}>
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

export function EtrianRegistry() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      memo: "",
      dateOfBirth: {
        month: UNSET_SELECT_VALUE,
        day: UNSET_SELECT_VALUE,
      },
      affiliations: "",
    },
  });

  const KEY = "etrianRegistry";

  const [storedEtrians, setStoredEtrians] = useState<Etrian[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const data = localStorage.getItem(KEY);
      try {
        setStoredEtrians(data ? JSON.parse(data) : []);
      } catch {
        setStoredEtrians([]);
      } finally {
        setIsLoaded(true);
      }
    }
  }, []);

  useEffect(() => {
    if (isLoaded && typeof window !== "undefined") {
      localStorage.setItem(KEY, JSON.stringify(storedEtrians));
    }
  }, [storedEtrians, isLoaded]);

  const handleDelete = useCallback((targetEtrian: Etrian) => {
    setStoredEtrians((prev) =>
      prev.filter((etrian) => etrian.id !== targetEtrian.id),
    );

    toast.success(`冒険者を削除しました`, {
      description: `冒険者: ${targetEtrian.name}`,
    });
  }, []);

  const handleUpdate = useCallback((updatedEtrian: Etrian) => {
    setStoredEtrians((prev) =>
      prev.map((etrian) =>
        etrian.id === updatedEtrian.id ? updatedEtrian : etrian,
      ),
    );

    toast.success(`冒険者の登録情報を更新しました！`, {
      description: `冒険者: ${updatedEtrian.name}`,
    });
  }, []);

  const handleReset = useCallback(() => {
    setStoredEtrians([]);

    toast.success(`登録状況をリセットしました`);
  }, []);

  const onSubmit = (data: z.infer<typeof formSchema>) => {
    const newEtrian: Etrian = {
      id: crypto.randomUUID(),
      name: data.name.trim(),
      orderNum: 0,
      dateOfBirth: {},
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
          {!isLoaded && <EtrianItemSkeleton />}
          {storedEtrians.map((etrian, index) => (
            <Fragment key={etrian.id}>
              <EtrianItem
                etrian={etrian}
                onDelete={handleDelete}
                onUpdate={handleUpdate}
              />
              {index !== storedEtrians.length - 1 && <ItemSeparator />}
            </Fragment>
          ))}
        </ItemGroup>

        <div className="flex justify-end gap-2">
          <ConfirmDialog
            title="登録状況のリセット"
            description="登録状況を初期状態に戻します。この操作は元に戻せません！"
            confirmButtonLabel="リセット"
            confirmButtonVariant="destructive"
            onConfirm={() => handleReset()}
            className="w-fit"
          >
            <Button variant="ghost">リセット</Button>
          </ConfirmDialog>

          <BackupDialog storedEtrians={storedEtrians} className="w-fit">
            <Button variant="ghost">バックアップ</Button>
          </BackupDialog>
        </div>
      </div>
    </div>
  );
}
