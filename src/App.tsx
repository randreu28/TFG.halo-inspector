import { Suspense } from "react";
import Scene from "./components/Scene";
import { useAtomValue } from "jotai";
import { matAtom } from "./store";
import { MatName } from "./types";
import { TextScramble } from "@a7sc11u/scramble";
import Signature from "./components/Signature";
import Loading from "./components/Loading";

function getInfo(material: MatName) {
  switch (material) {
    case "Spartan_Arms_Mat":
      return {
        title: "Spartan bionic arms",
        description:
          "A highly resistant material that covers the Spartan's arms and provides a high level of protection against physical impacts. It is made of a layered composite that can withstand extreme temperatures and pressure.",
      };
    case "Spartan_Ear_Mat":
      return {
        title: "Spartan ultra-sensitive ears",
        description:
          "A tough yet comfortable material designed to protect the Spartan's ears from any possible harm. It is made of a highly resistant polymer that absorbs shock and prevents damage from high-frequency noises.",
      };
    case "Spartan_Chest_Mat":
      return {
        title: "Spartan blinded chest",
        description:
          "A tough material that covers the Spartan's chest and provides a high level of protection against physical impacts. It is made of a layered composite that can withstand extreme temperatures and pressure.",
      };
    case "Spartan_Helmet_Mat":
      return {
        title: "Spartan inteligent helmet",
        description:
          "The helmet is the most important part of a Spartan's armor. This material is a lightweight yet highly durable alloy that can withstand heavy blows and ballistic impacts. It also has a built-in oxygen filtration system to protect the Spartan from harmful particles in the air.",
      };
    case "Spartan_Legs_Mat":
      return {
        title: "Spartan blinded legs",
        description:
          "A highly resistant material designed to protect the Spartan's legs from any possible harm. It is made of a layered composite that can withstand extreme temperatures and pressure.",
      };
    case "Spartan_Shoulders_Mat":
      return {
        title: "Spartan shoulder protectors",
        description:
          "A durable material that covers the Spartan's shoulders and provides a high level of protection against physical impacts. It is made of a layered composite that can withstand extreme temperatures and pressure.",
      };
    case "Spartan_Undersuit_Mat":
      return {
        title: "Spartan high-quality undersuit",
        description:
          " A comfortable and breathable material that is worn underneath the Spartan's armor. It is made of a stretchable fabric that provides support and flexibility.",
      };
    default:
      return {
        title: "No material selected",
        description: "Click on any part of the armor to see more",
      };
  }
}

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
