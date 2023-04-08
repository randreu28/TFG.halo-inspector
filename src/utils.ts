import type { MatSelection } from "./types";

export class SelectionFactory implements MatSelection<boolean> {
  lambert2: boolean;
  lambert1: boolean;
  Spartan_Ear_Mat: boolean;
  Spartan_Shoulders_Mat: boolean;
  Spartan_Helmet_Mat: boolean;
  Spartan_Legs_Mat: boolean;
  Spartan_Undersuit_Mat: boolean;
  Spartan_Arms_Mat: boolean;
  Spartan_Chest_Mat: boolean;

  constructor(value: boolean) {
    this.lambert2 = value;
    this.lambert1 = value;
    this.Spartan_Ear_Mat = value;
    this.Spartan_Shoulders_Mat = value;
    this.Spartan_Helmet_Mat = value;
    this.Spartan_Legs_Mat = value;
    this.Spartan_Undersuit_Mat = value;
    this.Spartan_Arms_Mat = value;
    this.Spartan_Chest_Mat = value;
  }

  select(attribute: keyof this): void {
    this.lambert2 = false;
    this.lambert1 = false;
    this.Spartan_Ear_Mat = false;
    this.Spartan_Shoulders_Mat = false;
    this.Spartan_Helmet_Mat = false;
    this.Spartan_Legs_Mat = false;
    this.Spartan_Undersuit_Mat = false;
    this.Spartan_Arms_Mat = false;
    this.Spartan_Chest_Mat = false;

    /* @ts-ignore */
    this[attribute] = true;
  }
}

/**
 * Creates a spring object initalizator to interpolate the opacities
 *
 * @param opacity The value of the material's opacity when not selected
 * @param selectedOpacity The value of the material's opacity when selected
 * @param selectedMat the selectedMat object where it's stored what is selected and what isn't
 */
export function initSprings(
  opacity: number,
  selectedOpacity: number,
  selectedMat: MatSelection<boolean>
): MatSelection<number> {
  return {
    lambert2: selectedMat.lambert2 ? selectedOpacity : opacity,
    lambert1: selectedMat.lambert1 ? selectedOpacity : opacity,
    Spartan_Ear_Mat: selectedMat.Spartan_Ear_Mat ? selectedOpacity : opacity,
    Spartan_Shoulders_Mat: selectedMat.Spartan_Shoulders_Mat
      ? selectedOpacity
      : opacity,
    Spartan_Helmet_Mat: selectedMat.Spartan_Helmet_Mat
      ? selectedOpacity
      : opacity,
    Spartan_Legs_Mat: selectedMat.Spartan_Legs_Mat ? selectedOpacity : opacity,
    Spartan_Undersuit_Mat: selectedMat.Spartan_Undersuit_Mat
      ? selectedOpacity
      : opacity,
    Spartan_Arms_Mat: selectedMat.Spartan_Arms_Mat ? selectedOpacity : opacity,
    Spartan_Chest_Mat: selectedMat.Spartan_Chest_Mat
      ? selectedOpacity
      : opacity,
  };
}
