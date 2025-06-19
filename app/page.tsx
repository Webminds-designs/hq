import TempCom from "./Components/TempCom";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <h1 className="font-avengenz text-8xl">FONT 01 :- `font-avengenz` </h1>
      <h1 className="font-avenir font-normal text-7xl">
        FONT 02 :- `font-avenir`
      </h1>
      <h1 className="font-avenir font-Bold text-7xl">
        FONT 02 :- `font-avenir font-bold`
      </h1>
      <h1 className="font-avenir font-light text-7xl">
        FONT 02 :- `font-avenir font-light`
      </h1>
      <TempCom />
    </div>
  );
}
