import { ETRIAN_CALENDAR_COLOR_VARIANTS } from "@/app/(toys)/etrian-calendar/_common/constants/color";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { HTMLAttributes, ReactNode } from "react";

type ColorProps = {
  children: ReactNode;
} & HTMLAttributes<HTMLDivElement>;

function Color({ children, className }: ColorProps) {
  return (
    <div
      className={cn(
        `flex h-10 items-center justify-center rounded text-sm`,
        className,
      )}
    >
      {children}
    </div>
  );
}

type ColorBackgroundProps = {
  children: ReactNode;
} & HTMLAttributes<HTMLDivElement>;

function ColorBackground({ children, className }: ColorBackgroundProps) {
  return (
    <div
      className={cn(
        `grid grid-cols-2 gap-2 rounded-md bg-zinc-300 p-2 md:grid-cols-3`,
        className,
      )}
    >
      {children}
    </div>
  );
}

export function Colors() {
  return (
    <>
      <h2>Common UI Colors</h2>
      <p>Shows common background and text color combinations.</p>

      <pre>
        {'<Color className="bg-background text-foreground">background</Color>'}
      </pre>
      <ColorBackground>
        <Color className="bg-background text-foreground">background</Color>
        <Color className="bg-card text-card-foreground">card</Color>
        <Color className="bg-popover text-popover-foreground">popover</Color>
        <Color className="bg-primary text-primary-foreground">primary</Color>
        <Color className="bg-secondary text-secondary-foreground">
          secondary
        </Color>
        <Color className="bg-tertiary text-tertiary-foreground">tertiary</Color>
        <Color className="bg-muted text-muted-foreground">muted</Color>
        <Color className="bg-accent text-accent-foreground">accent</Color>
        <Color className="bg-destructive text-destructive-foreground">
          destructive
        </Color>
      </ColorBackground>

      <h2>Component colors</h2>
      <p>Shows background color for components.</p>

      <pre>{'<Color className="bg-border">border</Color>'}</pre>
      <ColorBackground>
        <Color className="bg-border">border</Color>
        <Color className="bg-input">input</Color>
        <Color className="bg-ring text-white">ring</Color>
        <Color className="bg-chart-1">chart-1</Color>
        <Color className="bg-chart-2">chart-2</Color>
        <Color className="bg-chart-3 text-white">chart-3</Color>
        <Color className="bg-chart-4">chart-4</Color>
        <Color className="bg-chart-5">chart-5</Color>
      </ColorBackground>

      <h2>Sidebar colors</h2>
      <p>Shows background colors for sidebar.</p>

      <pre>
        {
          '<Color className="bg-sidebar text-sidebar-foreground">sidebar-background</Color>'
        }
      </pre>
      <ColorBackground>
        <Color className="bg-sidebar text-sidebar-foreground">
          sidebar-background
        </Color>
        <Color className="bg-sidebar-primary text-sidebar-primary-foreground">
          sidebar-primary
        </Color>
        <Color className="bg-sidebar-accent text-sidebar-accent-foreground">
          sidebar-accent
        </Color>
        <Color className="bg-sidebar-border">sidebar-border</Color>
        <Color className="bg-sidebar-ring text-white">sidebar-ring</Color>
      </ColorBackground>

      <h2>Etrian calendar colors</h2>
      <p>
        Shows background and text color combination for{" "}
        <Link href="/etrian-calendar">Etrian calendar</Link>.
      </p>

      <ColorBackground>
        <Color
          className={cn(
            ETRIAN_CALENDAR_COLOR_VARIANTS.emperor,
            "hover:bg-cyan-100",
          )}
        >
          emperor
        </Color>
        <Color
          className={cn(
            ETRIAN_CALENDAR_COLOR_VARIANTS.sakura,
            "hover:bg-pink-100",
          )}
        >
          sakura
        </Color>
        <Color
          className={cn(
            ETRIAN_CALENDAR_COLOR_VARIANTS.koseki,
            "hover:bg-green-100",
          )}
        >
          koseki
        </Color>
        <Color
          className={cn(
            ETRIAN_CALENDAR_COLOR_VARIANTS.johi,
            "hover:bg-amber-100",
          )}
        >
          johi
        </Color>
        <Color
          className={cn(
            ETRIAN_CALENDAR_COLOR_VARIANTS.rikka,
            "hover:bg-sky-100",
          )}
        >
          rikka
        </Color>
        <Color
          className={cn(
            ETRIAN_CALENDAR_COLOR_VARIANTS.summoner,
            "hover:bg-pink-500",
          )}
        >
          summoner
        </Color>
      </ColorBackground>

      <h2>Other colors</h2>
      <p>Shows other colors.</p>

      <ColorBackground>
        <Color className="bg-personal text-personal-foreground">personal</Color>
        <Color className="bg-modane text-modane-foreground">modane</Color>
      </ColorBackground>
    </>
  );
}
