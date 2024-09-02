import { Component } from '@angular/core';
import { Model } from '../model/repository.model';
import { generate } from '@pdfme/generator';
import template from '../../assets/template_contrat_1.json';

@Component({
  selector: 'app-formulaire',
  templateUrl: './formulaire.component.html',
  styleUrls: ['./formulaire.component.css']
})
export class FormulaireComponent {
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
    this.choices.push(choice);
  }

  onNextClick() {
    this.nextChoices = this.model.getNextChoices(this.choices);
  }

  async generatePdf() {
    const today = new Date().toLocaleDateString();

    const inputs = [{pdfDate: today}]

    generate({ template, inputs }).then((pdf) => {
      const blob = new Blob([pdf.buffer], { type: 'application/pdf' });
      window.open(URL.createObjectURL(blob));

    });
  }

  restart() {
    this.choices = [];
    this.nextChoices = this.model.getNextChoices(this.choices);
  }
}
