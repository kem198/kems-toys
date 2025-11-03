import { DndSample } from "@/app/(toys)/hello-world/dnd-kit/_components/dnd-sample";

export default function DnDKitPage() {
  return (
    <div>
      <h1>@dnd-kit</h1>

      <DndSample />

      <hr />
      <section>
        <h2>References</h2>
        <ul>
          <li>
            <a href="https://docs.dndkit.com/">@dnd-kit – Documentation</a>
          </li>
          <ul>
            <li>
              <a href="https://docs.dndkit.com/introduction/getting-started">
                Quick start | @dnd-kit – Documentation
              </a>
            </li>
          </ul>
        </ul>
      </section>
    </div>
  );
}
