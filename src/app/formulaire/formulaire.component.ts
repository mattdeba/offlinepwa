import { Component } from '@angular/core';
import { Model } from '../model/repository.model';
import { generate } from '@pdfme/generator';
import template from '../../assets/template_contrat.json';

@Component({
  selector: 'app-formulaire',
  templateUrl: './formulaire.component.html',
  styleUrls: ['./formulaire.component.css']
})
export class FormulaireComponent {
  selectedChoice: string = "";
  choices: string[] = [];
  nextChoices: string[] = this.model.getNextChoices([]);

  constructor(private model: Model) {
  }
  getChoiceSet() {
    console.log(this.model.getChoiceSet(1))
  }
  getNextChoices() {
    console.log(this.model.getNextChoices( this.choices))
  }

  onChoiceClick(choice: any) {
    if (this.selectedChoice === choice) {
      this.selectedChoice = "";
    } else {
      this.selectedChoice = choice;
    }
  }

  onNextClick() {
    this.choices.push(this.selectedChoice);
    this.selectedChoice = "";
    this.nextChoices = this.model.getNextChoices(this.choices);
  }

  async generatePdf() {
    const choicesLength = this.choices.length;
    const today = new Date().toLocaleDateString();

  const inputs = [{
    pdfDate: today,
    choice1: choicesLength >= 1 ? this.choices[0] : null,
    choice2: choicesLength >= 2 ? this.choices[1] : null,
    choice3: choicesLength >= 3 ? this.choices[2] : null,
    choice4: choicesLength >= 4 ? this.choices[3] : null,
    choice5: choicesLength >= 5 ? this.choices[4] : null,
    choice6: choicesLength >= 6 ? this.choices[5] : null,
    choice7: choicesLength >= 7 ? this.choices[6] : null,
  }]

    generate({ template, inputs }).then((pdf) => {
      const blob = new Blob([pdf.buffer], { type: 'application/pdf' });
      window.open(URL.createObjectURL(blob));

    });
  }

  restart() {
    this.choices = [];
    this.selectedChoice = "";
    this.nextChoices = this.model.getNextChoices(this.choices);
  }
}
