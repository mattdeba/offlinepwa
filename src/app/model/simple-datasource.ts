import { ChoiceSet } from "./choice-set.model";

export class SimpleDataSource {
  private data: ChoiceSet[];
  constructor() {
    this.data = new Array<ChoiceSet>(
      new ChoiceSet(1, "Temps plein","CDI","Alternance de haute et basse activité","Cadre","Peut suivre l'horaire collectif","35h Annualisé",""),
      new ChoiceSet(2, "Temps plein","CDI","Alternance de haute et basse activité","Cadre","Peut suivre l'horaire collectif","35h JRTT",""),
      new ChoiceSet(3, "Temps plein","CDI","Alternance de haute et basse activité","Cadre","Peut suivre l'horaire collectif","Forfait annuel en heures",""),
      new ChoiceSet(4, "Temps plein","CDI","Alternance de haute et basse activité","Cadre","Ne peut pas suivre l'horaire collectif","gere son emploi du temps","35h annualisé"),
      new ChoiceSet(5, "Temps plein","CDI","Alternance de haute et basse activité","Cadre","Ne peut pas suivre l'horaire collectif","gere son emploi du temps","35h JRTT"),
      new ChoiceSet(6, "Temps plein","CDI","Alternance de haute et basse activité","Cadre","Ne peut pas suivre l'horaire collectif","gere son emploi du temps","Forfait annuel en heures"),
      new ChoiceSet(7, "Temps plein","CDI","Alternance de haute et basse activité","Cadre","Ne peut pas suivre l'horaire collectif","ne gère pas son emploi du temps","35h annualisé"),
      new ChoiceSet(8, "Temps plein","CDI","Alternance de haute et basse activité","Cadre","Ne peut pas suivre l'horaire collectif","ne gère pas son emploi du temps","35h JRTT"),
      new ChoiceSet(9, "Temps plein","CDI","Alternance de haute et basse activité","Non cadre","gere son emploi du temps","35H annualisé",""),
      new ChoiceSet(10, "Temps plein","CDI","Alternance de haute et basse activité","Non cadre","gere son emploi du temps","35h JRTT",""),
      new ChoiceSet(11, "Temps plein","CDI","Alternance de haute et basse activité","Non cadre","gere son emploi du temps","Forfait annuel en heures",""),
      new ChoiceSet(12, "Temps plein","CDI","Alternance de haute et basse activité","Non cadre","ne gère pas son emploi du temps","35h annualisé",""),
      new ChoiceSet(13, "Temps plein","CDI","Alternance de haute et basse activité","Non cadre","ne gère pas son emploi du temps","35h JRTT",""),
      new ChoiceSet(14, "Temps plein","CDI","Sans alternance","Cadre","39h Hebdo","",""),
      new ChoiceSet(15, "Temps plein","CDI","Sans alternance","Cadre","35h JRTT","",""),
      new ChoiceSet(16, "Temps plein","CDI","Sans alternance","Cadre","35h Hebdo","",""),
      new ChoiceSet(17, "Temps plein","CDI","Sans alternance","Non cadre","39h Hebdo","",""),
      new ChoiceSet(18, "Temps plein","CDI","Sans alternance","Non cadre","35h JRTT","",""),
      new ChoiceSet(19, "Temps plein","CDI","Sans alternance","Non cadre","35h Hebdo","",""),
      new ChoiceSet(20, "Temps plein","CDD","avec alternance","35H annualisé","","",""),
      new ChoiceSet(21, "Temps plein","CDD","avec alternance","35h JRTT","","",""),
      new ChoiceSet(22, "Temps plein","CDD","avec alternance","Forfait annuel en heures","","",""),
      new ChoiceSet(23, "Temps plein","CDD","sans alternance","39h hebdo","","",""),
      new ChoiceSet(24, "Temps plein","CDD","sans alternance","35h JRTT","","",""),
      new ChoiceSet(25, "Temps partiel","CDI","avec alternance","temps partiel annualisé","","",""),
      new ChoiceSet(26, "Temps partiel","CDI","avec alternance","temps partiel modulé","","",""),
      new ChoiceSet(27, "Temps partiel","CDI","sans alternance","temps partiel hebdo/mensuel","","",""),
      new ChoiceSet(28, "Temps partiel","CDD","avec alternance","temps partiel annualisé","","",""),
      new ChoiceSet(29, "Temps partiel","CDD","avec alternance","temps partiel modulé","","",""),
      new ChoiceSet(30, "Temps partiel","CDD","sans alternance","temps partiel hebdo/mensuel","","",""),
      new ChoiceSet(31, "Intermittence","","","","","","")
    )
  }
  getData(): ChoiceSet[] {
    return this.data;
  }
}
