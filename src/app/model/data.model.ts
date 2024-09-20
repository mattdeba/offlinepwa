export interface Question {
  id: number;
  libelle: string;
}

export interface Answer {
  libelle: string;
  questionId: number;
  nextQuestionId: number | null;
}
