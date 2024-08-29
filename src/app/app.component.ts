import { Component } from '@angular/core';
import { Template } from '@pdfme/common';
import { generate } from '@pdfme/generator';

import template from '../assets/template_contrat_1.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'findYourTime4T';

  async generatePdf() {
    const today = new Date().toLocaleDateString();

    const inputs = [{pdfDate: today}]

    generate({ template, inputs }).then((pdf) => {
      // Browser
      const blob = new Blob([pdf.buffer], { type: 'application/pdf' });
      window.open(URL.createObjectURL(blob));

    });
  }
}
