import { Component, OnInit } from '@angular/core';
import { CvServiceService } from '../service/cv-service.service';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css'],
})
export class PortfolioComponent implements OnInit {
  constructor(public form: CvServiceService) {}
  url: string;
  arr: any;
  ngOnInit(): void {
    this.arr = this.form.data.person;
    this.url = this.form.ImageUrl;
    console.log(this.form.data);
  }

  afficher() {
    console.log(this.form.formulaire);
  }
}
