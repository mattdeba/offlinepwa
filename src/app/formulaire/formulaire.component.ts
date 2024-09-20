import { Component } from '@angular/core';
import { Model } from '../model/repository.model';
import { generate } from '@pdfme/generator';
import template from '../../assets/template_contrat.json';
import {Answer, Question} from "../model/data.model";

@Component({
  selector: 'app-formulaire',
  templateUrl: './formulaire.component.html',
  styleUrls: ['./formulaire.component.css']
})
export class FormulaireComponent {
  selectedAnswers: (Answer|null)[] = [];
  selectedAnswer: Answer | null = null;
  question: Question;
  answers: Answer[];
  finalAnswer = false;
  lastAnswer: any;

  constructor(private model: Model) {
    const { question, answers} = this.model.getNextQuestionAnswer(1);
    this.question = question;
    this.answers = answers;
  }

  onChoiceClick(answer: any) {
    if (this.selectedAnswer === answer.libelle) {
      this.selectedAnswer = null;
    } else {
      this.selectedAnswer = answer;
    }
  }

  onNextClick() {
    this.selectedAnswers.push(this.selectedAnswer);
    if (this.selectedAnswer?.nextQuestionId) {
      const {
        question, answers
      } = this.model.getNextQuestionAnswer(this.selectedAnswer.nextQuestionId);
      this.question = question;
      this.answers = answers;
    }
    else {
      this.finalAnswer = true;
      this.lastAnswer = this.selectedAnswer;
    }

    this.selectedAnswer = null;
  }

  async generatePdf() {
    const today = new Date().toLocaleDateString();

  const inputs = [{
    pdfDate: today,
    choice1: this.lastAnswer.libelle,
  }]

    generate({ template, inputs }).then((pdf) => {
      const blob = new Blob([pdf.buffer], { type: 'application/pdf' });
      window.open(URL.createObjectURL(blob));
    });
  }

  restart() {
    this.finalAnswer = false;
    this.lastAnswer = null;
    this.selectedAnswers = [];
    this.selectedAnswer = null;
    const {
      question, answers } =this.model.getNextQuestionAnswer(1);
    this.question = question;
    this.answers = answers;
  }
}
