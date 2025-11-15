import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";

export default function ShadcnPage() {
  return (
    <>
      <h1>shadcn/ui</h1>
      <section>
        <h2>Button</h2>
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
      </section>

      <section>
        <h2>Alert Dialog</h2>
        <AlertDialog>
          <AlertDialogTrigger asChild>
            <Button variant="outline">Show Dialog</Button>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
              <AlertDialogDescription>
                This action cannot be undone. This will permanently delete your
                account and remove your data from our servers.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction>Continue</AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </section>
    </>
  );
}
