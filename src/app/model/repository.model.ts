import { SimpleDataSource } from "./simple-datasource";
export class Model {
  private dataSource: SimpleDataSource;
  constructor() {
    this.dataSource = new SimpleDataSource();
  }

  getNextQuestionAnswer(id: number) {
    const question = this.dataSource.questions.find((q) => q.id == id);
    const answers = this.dataSource.answers.filter((a) => a.questionId == question.id);
    return {
      question,
      answers
    }
  }
}
