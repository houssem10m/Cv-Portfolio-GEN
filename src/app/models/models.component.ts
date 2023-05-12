import { Component, OnInit } from '@angular/core';
import { CvServiceService } from '../service/cv-service.service';
import { FormGroup } from '@angular/forms';
import * as html2pdf from 'html2pdf.js';

@Component({
  selector: 'app-models',
  templateUrl: './models.component.html',
  styleUrls: ['./models.component.css'],
})
export class ModelsComponent implements OnInit {
  arr: any;
  imageUrl: any;

  person: any;
  experiences: any;
  educations: any;
  certificates: any;
  skills: any;

  constructor(private form: CvServiceService) {}
  ngOnInit(): void {
    this.imageUrl = this.form.ImageUrl;
    this.arr = this.form.data;
    this.person = this.form.data.person;
    this.experiences = this.form.data.experiences;
    console.log(this.experiences);
    console.log(this.experiences.experience);

    this.educations = this.form.data.educations;
    this.certificates = this.form.data.certificates;
    this.skills = this.form.data.skills;
    console.log(this.arr);
  }

  download(): void {
    html2pdf()
      .from(document.getElementById('myPDF'))
      .set({
        filename: this.person.Name + '_cv.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
      })
      .save();
  }
}
