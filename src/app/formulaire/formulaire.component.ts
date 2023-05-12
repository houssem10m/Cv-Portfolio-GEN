import { Component, OnInit } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  NgForm,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { CvServiceService } from '../service/cv-service.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-formulaire',
  templateUrl: './formulaire.component.html',
  styleUrls: ['./formulaire.component.css'],
})
export class FormulaireComponent implements OnInit {
  cvForm: FormGroup;
  formSkills: FormGroup;
  formCertificates: FormGroup;
  formEducations: FormGroup;
  experienceForm: FormGroup;

  constructor(private fb: FormBuilder, private service: CvServiceService) {
    this.formSkills = this.fb.group({
      skillsArray: this.fb.array([
        this.fb.group({
          skills: ['', Validators.required],
          level: ['', Validators.required],
        }),
      ]),
    });

    this.formCertificates = this.fb.group({
      certificatesArray: this.fb.array([
        this.fb.group({
          title: ['', Validators.required],
          certificate_date: ['', Validators.required],
        }),
      ]),
    });

    this.formEducations = this.fb.group({
      educationsArray: this.fb.array([
        this.fb.group({
          education_school: ['', Validators.required],
          education_place: ['', Validators.required],
          education_date: ['', Validators.required],
        }),
      ]),
    });

    this.experienceForm = this.fb.group({
      experienceArray: this.fb.array([
        this.fb.group({
          experience: ['', Validators.required],
          experience_place: ['', Validators.required],
          experience_date: ['', Validators.required],
        }),
      ]),
    });
  }

  imageUrl: any = '';
  ngOnInit() {
    this.cvForm = new FormGroup({
      Picture: new FormControl(this.imageUrl),
      Name: new FormControl(null, Validators.required),
      Title: new FormControl(null),
      Description: new FormControl(null),
      Phone: new FormControl(null),
      LinkedIn: new FormControl(null),
      GitHub: new FormControl(null),
      Adress: new FormControl(null),
      Email: new FormControl(null),
    });
  }
  save() {
    this.service.formulaire = this.cvForm.value;
    console.log(this.imageUrl);
  }

  sendData() {
    this.service.data.skills = this.formSkills.value.skillsArray;
    this.service.data.certificates =
      this.formCertificates.value.certificatesArray;
    this.service.data.educations = this.formEducations.value.educationsArray;
    this.service.data.experiences = this.experienceForm.value.experienceArray;
    this.service.data.person = this.cvForm.value;
  }
  onFileSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.imageUrl = URL.createObjectURL(file);
    }
    this.service.ImageUrl = this.imageUrl;
    console.log(this.imageUrl);
  }
  get skillsArray() {
    return this.formSkills.get('skillsArray') as FormArray;
  }

  addSkill() {
    this.skillsArray.push(
      this.fb.group({
        skills: ['', Validators.required],
        level: ['', Validators.required],
      })
    );
  }

  removeSkill(index: number) {
    this.skillsArray.removeAt(index);
  }

  onSubmit2() {
    console.log(this.formSkills.value);
  }
  get certificatesArray() {
    return this.formCertificates.get('certificatesArray') as FormArray;
  }

  addcertificates() {
    this.certificatesArray.push(
      this.fb.group({
        title: ['', Validators.required],
        certificate_date: ['', Validators.required],
      })
    );
  }

  removecertificates(index: number) {
    this.certificatesArray.removeAt(index);
  }

  onSubmit3() {
    console.log(this.formCertificates.value);
  }
  get educationsArray() {
    return this.formEducations.get('educationsArray') as FormArray;
  }

  addeducations() {
    this.educationsArray.push(
      this.fb.group({
        education_school: ['', Validators.required],
        education_place: ['', Validators.required],
        education_date: ['', Validators.required],
      })
    );
  }

  removeeducations(index: number) {
    this.educationsArray.removeAt(index);
  }

  onSubmit4() {
    console.log(this.formEducations.value);
  }
  get experienceArray() {
    return this.experienceForm.get('experienceArray') as FormArray;
  }

  addexperience() {
    this.experienceArray.push(
      this.fb.group({
        experience: ['', Validators.required],
        experience_place: ['', Validators.required],
        experience_date: ['', Validators.required],
      })
    );
  }

  removeexperience(index: number) {
    this.experienceArray.removeAt(index);
  }

  onSubmit5() {
    console.log(this.experienceForm.value);
  }
}
