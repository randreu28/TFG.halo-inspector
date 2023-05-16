import { TextScramble } from "@a7sc11u/scramble";
import { useAtomValue } from "jotai";
import { Suspense } from "react";
import Loading from "./components/Loading";
import Scene from "./components/Scene";
import Signature from "./components/Signature";
import { matAtom } from "./lib/store";
import { getInfo } from "./lib/utils";


export default function App() {
  const material = useAtomValue(matAtom);
  const info = getInfo(material);

  return (
    <div className="h-screen w-screen flex justify-center items-center">
      <Suspense fallback={<Loading />}>
        <div className="absolute left-10 top-10 z-10 max-w-xl space-y-5">
          <TextScramble
            className="text-5xl font-bold"
            as="h2"
            speed={1}
            text={info.title}
          />
          <TextScramble
            className=" text-xl"
            as="p"
            speed={5}
            text={info.description}
          />
        </div>
        <Signature />
        <Scene />
      </Suspense>
    </div>
  );
}
