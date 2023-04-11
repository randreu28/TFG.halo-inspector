import { Suspense } from "react";
import Scene from "./components/Scene";
import { useAtomValue } from "jotai";
import { matAtom } from "./store";
import { MatName } from "./types";
import { TextScramble } from "@a7sc11u/scramble";
import Signature from "./components/Signature";

function getInfo(material: MatName) {
  switch (material) {
    case "Spartan_Arms_Mat":
      return {
        title: "Spartan bionic arm",
        description:
          "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis nisi nam illo consectetur! Maxime quae ut accusantium blanditiis ullam deserunt, rerum libero voluptas culpa repellendus earum temporibus repellat neque adipisci.",
      };
    case "Spartan_Ear_Mat":
      return {
        title: "Spartan ultra-sensitive ears",
        description:
          "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis nisi nam illo consectetur! Maxime quae ut accusantium blanditiis ullam deserunt, rerum libero voluptas culpa repellendus earum temporibus repellat neque adipisci.",
      };
    case "Spartan_Chest_Mat":
      return {
        title: "Spartan blinded chest",
        description:
          "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis nisi nam illo consectetur! Maxime quae ut accusantium blanditiis ullam deserunt, rerum libero voluptas culpa repellendus earum temporibus repellat neque adipisci.",
      };
    case "Spartan_Helmet_Mat":
      return {
        title: "Spartan inteligent helmet",
        description:
          "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis nisi nam illo consectetur! Maxime quae ut accusantium blanditiis ullam deserunt, rerum libero voluptas culpa repellendus earum temporibus repellat neque adipisci.",
      };
    case "Spartan_Legs_Mat":
      return {
        title: "Spartan blinded legs",
        description:
          "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis nisi nam illo consectetur! Maxime quae ut accusantium blanditiis ullam deserunt, rerum libero voluptas culpa repellendus earum temporibus repellat neque adipisci.",
      };
    case "Spartan_Shoulders_Mat":
      return {
        title: "Spartan shoulder protectors",
        description:
          "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis nisi nam illo consectetur! Maxime quae ut accusantium blanditiis ullam deserunt, rerum libero voluptas culpa repellendus earum temporibus repellat neque adipisci.",
      };
    case "Spartan_Undersuit_Mat":
      return {
        title: "Spartan high-quality undersuit",
        description:
          "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis nisi nam illo consectetur! Maxime quae ut accusantium blanditiis ullam deserunt, rerum libero voluptas culpa repellendus earum temporibus repellat neque adipisci.",
      };
    default:
      return {
        title: "No material selected",
        description: "Please, click on any part of the suit",
      };
  }
}

export default function App() {
  const material = useAtomValue(matAtom);
  const info = getInfo(material);

  return (
    <div className="h-screen w-screen flex justify-center items-center">
      <Suspense fallback={<p className="text-4xl">Loading...</p>}>
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
            speed={1}
            text={info.description}
          />
        </div>
        <Signature />
        <Scene />
      </Suspense>
    </div>
  );
}
