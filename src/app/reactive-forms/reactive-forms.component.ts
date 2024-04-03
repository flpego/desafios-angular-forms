import { Component } from '@angular/core';
import { FormBuilder, Validators, FormGroup, NgForm } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrl: './reactive-forms.component.scss',
})
export class ReactiveFormsComponent {
  signUpForm = this.formBuilder.group({
    userName: this.formBuilder.control('', [
      Validators.required,
      Validators.pattern('[a-zA-Z0-9]*'),
    ]),
    email: this.formBuilder.control('', [
      Validators.required,
      Validators.email,
    ]),
    password: this.formBuilder.control('', [
      Validators.required,
      Validators.minLength(8),
    ]),
  });

  get userNameControl() {
    return this.signUpForm.get('userName');
  }

  get emailControl() {
    return this.signUpForm.get('email');
  }
  get passwordControl() {
    return this.signUpForm.get('password');
  }

  constructor(private formBuilder: FormBuilder) {}

  onSubmit(): void {
    if (this.signUpForm.valid) {
      alert("Usuario registrado con exito")
      console.log(this.signUpForm);
    } else {
      alert("Completa los campos antes de continuar")
      this.signUpForm.markAllAsTouched();
    }
  }
}
