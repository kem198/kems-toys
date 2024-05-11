import Markdown from 'react-markdown';

const mdSource = `
# Markdown

This page was written in **Markdown** !

## Used libraries

- [remarkjs/react-markdown](https://github.com/remarkjs/react-markdown?tab=readme-ov-file)
- [tailwindlabs/tailwindcss-typography](https://github.com/tailwindlabs/tailwindcss-typography)

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
`;

export default function Page() {
  return (
    <article className="prose">
      <Markdown>{mdSource}</Markdown>
    </article>
  );
}
