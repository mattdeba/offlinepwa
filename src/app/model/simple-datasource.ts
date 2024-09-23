import data from '../../assets/data.json';

export class SimpleDataSource {
  readonly questions: any[];
  readonly answers: any[];

  constructor() {
    this.questions = data.questions;
    this.answers = data.answers;
  }
}
