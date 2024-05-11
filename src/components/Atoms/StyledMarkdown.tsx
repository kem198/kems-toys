import Markdown from 'react-markdown';

interface Props {
  source: string;
}

export default function StyledMarkdown({ source }: Props) {
  return (
    <div className="prose">
      <Markdown>{source}</Markdown>
    </div>
  );
}
