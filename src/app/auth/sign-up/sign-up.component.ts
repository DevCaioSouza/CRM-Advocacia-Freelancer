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

  visible: boolean = false;
  visibleConfirm: boolean = false;

  changeTypeA: boolean = true;
  changeTypeB: boolean = true;

  changeIconPassword() {
    this.visible = !this.visible;
    this.changeTypeA = !this.changeTypeA;
  }

  changeIconConfirm() {
    this.visibleConfirm = !this.visibleConfirm;
    this.changeTypeB = !this.changeTypeB;
  }

  openSnackBar(message: string, action: any) {
    const config = new MatSnackBarConfig();
    config.duration = 5000;
    config.panelClass = 'custom-snackbar';
    this._snackBar.open(message, action, config);
  }

  checkSignupForm() {
    const nameInput = this.nameRef.nativeElement.value;
    const emailInput = this.emailRef.nativeElement.value;
    const passwordInput = this.passwordRef.nativeElement.value;
    const confirmPasswordInput = this.confirmPasswordRef.nativeElement.value;

    if (passwordInput != confirmPasswordInput) {
      this.openSnackBar('Confirmação de senha incorreta', 'X');
    }

    if (!nameInput || !emailInput || !passwordInput || !confirmPasswordInput) {
      this.openSnackBar('Preencha os campos obrigatórios', 'X');
    }
  }
}
