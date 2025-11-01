import { Button } from "@/components/ui/button";

export default function ShadcnPage() {
  return (
    <>
      <h1>shadcn/ui</h1>
      <div className="flex gap-4">
        <div className="flex w-40 flex-col gap-4">
          <Button>default</Button>
          <Button variant="destructive">destructive</Button>
          <Button variant="ghost">ghost</Button>
          <Button variant="link">link</Button>
          <Button variant="outline">outline</Button>
          <Button variant="secondary">secondary</Button>
        </div>

        <div className="flex w-40 flex-col gap-4">
          <Button size="sm">sm</Button>
          <Button>default</Button>
          <Button size="lg">lg</Button>

          <div className="flex items-center gap-2">
            <Button size="icon" />
            <p>icon</p>
          </div>
        </div>
      </div>
    </>
  );
}
