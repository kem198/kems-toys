import toysData from '@/assets/toys.json';
import Link from 'next/link';

export default function ToyList() {
  // li 要素のコンポーネントをループ生成する関数
  const generateToyList = () =>
    Object.keys(toysData).map((key) => {
      const toy = toysData[key];
      return (
        <li key={key}>
          <Link href={toy.link}>{toy.title}</Link>
        </li>
      );
    });

  // コンポーネントの配列を返す
  return <ul>{generateToyList()}</ul>;
}
