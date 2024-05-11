import Markdown from 'react-markdown';

const mdSource = `
# Markdown

This page was written in **Markdown** !

## Used libraries

- [react-markdown](https://github.com/remarkjs/react-markdown?tab=readme-ov-file)
- [tailwindcss-typography](https://github.com/tailwindlabs/tailwindcss-typography)

## Code

\`\`\`ts
import Markdown from 'react-markdown';

const mdSource = \`
# Markdown

This page was written in **Markdown** !
...
\`

export default function Page() {
  return (
    <article className="prose">
      <Markdown>{mdSource}</Markdown>
    </article>
  );
}
\`\`\`

- [Full source](https://github.com/kenkenpa198/kems-toys/blob/main/src/app/%28toys%29/hello-world/markdown/page.tsx)
- [Arranged Component](https://github.com/kenkenpa198/kems-toys/blob/main/src/components/Atoms/StyledMarkdown.tsx)

`;

export default function Page() {
  return (
    <article className="prose">
      <Markdown>{mdSource}</Markdown>
    </article>
  );
}
