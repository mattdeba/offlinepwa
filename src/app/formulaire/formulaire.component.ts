import { Component } from '@angular/core';
import { generate } from '@pdfme/generator';
import template from '../../assets/template_contrat.json';
import { Answer, Question } from '../model/data.model';
import { SimpleDataSource } from '../model/simple-datasource';

@Component({
  selector: 'app-formulaire',
  templateUrl: './formulaire.component.html',
  styleUrls: ['./formulaire.component.css'],
})
export class FormulaireComponent {
  selectedAnswers: (Answer | null)[] = [];
  selectedAnswer: Answer | null = null;
  question: Question | null = null;
  answers: Answer[];
  finalAnswer = false;
  lastAnswer: any;

  rawQuestions: Question[] = [];
  rawAnswers: Answer[] = [];

  constructor(private dataSource: SimpleDataSource) {}

  ngOnInit() {
    this.dataSource.getQuestionSet().subscribe((res) => {
      this.rawQuestions = res.questions;
      this.rawAnswers = res.answers;
      const { question, answers } = this.getNextQuestionAnswer(1);
      if (question) this.question = question;
      this.answers = answers;
    });
  }

  getNextQuestionAnswer(id: number) {
    const question = this.rawQuestions.find((q) => q.id == id);
    const answers = this.rawAnswers.filter((a) => a.questionId == question?.id);
    return {
      question,
      answers,
    };
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
      const { question, answers } = this.getNextQuestionAnswer(
        this.selectedAnswer.nextQuestionId,
      );
      if (question) this.question = question;
      this.answers = answers;
      const noNextQuestionId = this.answers.every(
        (answer) => !answer.nextQuestionId,
      );
      if (noNextQuestionId) {
        this.finalAnswer = true;
      }
    } else {
      this.lastAnswer = this.selectedAnswer;
    }

    this.selectedAnswer = null;
  }

  redirectToResource(answer: string | undefined) {
    if (answer) {
      console.log('redirect to ', answer);
    }
  }

  async generatePdf() {
    const today = new Date().toLocaleDateString();

    const inputs = [
      {
        pdfDate: today,
        choice1: this.answers.map((answer) => answer.libelle).join(','),
      },
    ];

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
    const { question, answers } = this.getNextQuestionAnswer(1);
    if (question) this.question = question;
    this.answers = answers;
  }
}
