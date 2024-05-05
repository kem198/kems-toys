import toys from '../toys.json';

console.log(toys);

console.log(toys.fizzBuzz); // John

export default function HelloWorld() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-3xl font-bold underline">Hello World!</h1>
    </main>
  );
}
