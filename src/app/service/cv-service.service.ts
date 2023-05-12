import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class CvServiceService {
  ImageUrl: string;

  formulaire: FormGroup;

  constructor() {}

  data = {
    person: [],
    skills: [],
    experiences: [],
    educations: [],
    certificates: [],
  };
}
