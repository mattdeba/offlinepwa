import { ChoiceSet } from "./choice-set.model";
import { SimpleDataSource } from "./simple-datasource";
export class Model {
  private dataSource: SimpleDataSource;
  private choiceSets: ChoiceSet[];
  private locator = (p: ChoiceSet, id: number | any) => p.id == id;
  constructor() {
    this.dataSource = new SimpleDataSource();
    this.choiceSets = new Array<ChoiceSet>();
    this.dataSource.getData().forEach(p => this.choiceSets.push(p));
  }
  getChoiceSets(): ChoiceSet[] {
    return this.choiceSets;
  }
  getChoiceSet(id: number): ChoiceSet | undefined {
    return this.choiceSets.find(p => this.locator(p, id));
  }
  getNextChoices(currentChoices: string[]): string[] {
    const nextChoiceIndex = currentChoices.length;
    const distinctValues = new Set<string>();

    this.choiceSets.forEach(choiceSet => {
      const choices = [
        choiceSet.choice1,
        choiceSet.choice2,
        choiceSet.choice3,
        choiceSet.choice4,
        choiceSet.choice5,
        choiceSet.choice6,
        choiceSet.choice7
      ];

      if (choices.slice(0, nextChoiceIndex).every((choice, index) => choice === currentChoices[index])) {
        const nextChoice = choices[nextChoiceIndex];
        if (nextChoice !== undefined) {
          distinctValues.add(nextChoice);
        }
      }
    });

    return Array.from(distinctValues).filter(value => value !== undefined && value !== "");
  }
  saveChoiceSet(choiceSet: ChoiceSet) {
    if (choiceSet.id == 0 || choiceSet.id == null) {
      choiceSet.id = this.generateID();
      this.choiceSets.push(choiceSet);
    } else {
      let index = this.choiceSets.findIndex(p => this.locator(p, choiceSet.id));
      this.choiceSets.splice(index, 1, choiceSet);
    }
  }
  deleteChoiceSet(id: number) {
    let index = this.choiceSets.findIndex(p => this.locator(p, id));
    if (index > -1) {
      this.choiceSets.splice(index, 1);
    }
  }
  swapChoiceSet() {
    let p = this.choiceSets.shift();
    if (p != null) {
      this.choiceSets.push(new ChoiceSet(p.id, p.choice1, p.choice2, p.choice3, p.choice4, p.choice5, p.choice6, p.choice7));
    }
  }
  private generateID(): number {
    let candidate = 100;
    while (this.getChoiceSet(candidate) != null) {
      candidate++;
    }
    return candidate;
  }
}
