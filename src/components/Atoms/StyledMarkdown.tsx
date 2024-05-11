import Markdown from 'react-markdown';

interface MdProps {
  source: string;
}

export default function StyledMarkdown({ source }: MdProps) {
  return (
    <div className="prose">
      <Markdown>{source}</Markdown>
    </div>
  );
}
