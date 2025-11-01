import { cn } from "@/lib/utils";
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
        <Color className="bg-secondary text-secondary-foreground">
          secondary
        </Color>
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
    </>
  );
}
