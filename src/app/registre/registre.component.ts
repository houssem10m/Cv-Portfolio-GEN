import { Component } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-registre',
  templateUrl: './registre.component.html',
  styleUrls: ['./registre.component.css'],
})
export class RegistreComponent {
  submitted = false;
  registerForm: FormGroup = new FormGroup(
    {
      fName: new FormControl('', [Validators.required]),
      lName: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
      ]),
      confirmpassword: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
      ]),
    },
    {
      validators: [this.passwordValidator],
    }
  );

  constructor(private route: Router, private userService: AuthService) {}

  ngOnInit(): void {}
  register() {
    this.submitted = true;
    if (this.registerForm.invalid) {
      return;
    }
    this.userService.SignupUser(this.registerForm.value);
    this.route.navigate(['/login']);
  }
  passwordValidator(group: AbstractControl): { [key: string]: boolean } | null {
    const password = group.get('password');
    const confirmPassword = group.get('confirmpassword');
    if (password?.pristine || confirmPassword?.pristine) {
      return null;
    }
    return password &&
      confirmPassword &&
      password.value !== confirmPassword.value
      ? { misMatch: true }
      : null;
  }
}
