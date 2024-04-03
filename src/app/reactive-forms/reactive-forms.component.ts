import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrl: './reactive-forms.component.scss'
})
export class ReactiveFormsComponent {

  signUpForm = this.formBuilder.group({
    userName:this.formBuilder.control('', [Validators.required, Validators.pattern('[a-zA-Z0-9]*')]),
    email: this.formBuilder.control("", [Validators.required ,Validators.email]),
    password: this.formBuilder.control("", [Validators.required, Validators.minLength(8)]),
    confirmPassword: this.formBuilder.control("", [Validators.required, Validators.minLength(8)])
  });

  get userNameControl() {
    return this.signUpForm.get('userName')
  }
  
  get emailControl() {
    return this.signUpForm.get('email')
  }
  get passwordControl() {
    return this.signUpForm.get('password')
  }
  get confirmPasswordControl() {
    return this.signUpForm.get('confirmPassword')
  }



  constructor(private formBuilder : FormBuilder) {
  }

  onSubmit (): void {
    alert("Usuario registrado con exito")
  }
}
