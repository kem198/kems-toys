import StyledMarkdown from '@/components/Atoms/StyledMarkdown';
import Version from '@/components/Atoms/Version';
import FizzBuzzCalc from '@/components/Organisms/FizzBuzzCalc';

const bodySource = `
# Fizz Buzz

1 以上の整数について、

- 3 で割り切れる場合は \`Fizz!\` を返す。
- 5 で割り切れる場合は \`Buzz!\` を返す。
- 両方で割り切れる場合は \`Fizz Buzz!!\` を返す。
`;

const supplementSource = `
参考文献:

- [Fizz Buzz - Wikipedia](https://ja.wikipedia.org/wiki/Fizz_Buzz)
`;

export default function Page() {
  return (
    <article>
      <StyledMarkdown source={bodySource} />
      <FizzBuzzCalc />
      <div className="divider" />
      <StyledMarkdown source={supplementSource} />
      <Version version="0.1.0" onDate="2024-05-07" />
    </article>
  );
}
