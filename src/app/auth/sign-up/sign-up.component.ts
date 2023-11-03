import { Component, ElementRef, ViewChild } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent {
  constructor(private _snackBar: MatSnackBar) {}

  @ViewChild('name')
  nameRef!: ElementRef;

  @ViewChild('email')
  emailRef!: ElementRef;

  @ViewChild('password')
  passwordRef!: ElementRef;

  @ViewChild('confirmPassword')
  confirmPasswordRef!: ElementRef;

  openSnackBar(message: string, action: any) {
    const config = new MatSnackBarConfig();
    config.duration = 5000;
    config.panelClass = 'custom-snackbar';
    this._snackBar.open(message, action, config);
  }

  checkSignupForm() {
    const passwordInput = this.passwordRef.nativeElement.value;
    const confirmPasswordInput = this.confirmPasswordRef.nativeElement.value;

    if (passwordInput != confirmPasswordInput) {
      this.openSnackBar('Confirmação de senha incorreta', 'X');
    }
  }
}
