import { CommonModule } from '@angular/common';
import { Component, inject, Injector } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { AppBase } from '../../@core/base/base';
import { RadioButton } from 'primeng/radiobutton';
import { CommonService } from './../../@core/services/common.service';
@Component({
  selector: 'app-signin',
  imports: [ReactiveFormsModule, CommonModule, RadioButton],
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.scss',
})
export class SigninComponent extends AppBase {
  private fb = inject(FormBuilder);
  protected injector = inject(Injector);
  private commonService = inject(CommonService);

  signInForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
  });

  familyForm = this.fb.group({
    familyId: [0],
    mahalId: [0],
    familyName: ['', [Validators.required, Validators.maxLength(100)]],
    houseName: ['', [Validators.required, Validators.maxLength(100)]],
    houseNumber: ['', [Validators.required, Validators.maxLength(20)]],
    area: ['', [Validators.required, Validators.maxLength(100)]],
    address: ['', [Validators.required, Validators.maxLength(100)]],
    post: ['', [Validators.required, Validators.maxLength(100)]],
    pin: ['', [Validators.required]],
    district: ['', [Validators.required, Validators.maxLength(100)]],
    phoneNumber: ['', [Validators.required]],
    wardNo: ['', [Validators.required, Validators.maxLength(20)]],
    rationCardType: ['', [Validators.required, Validators.maxLength(20)]],
    houseAge: ['', [Validators.required, Validators.maxLength(255)]],
    mahalTenancyAge: ['', [Validators.required, Validators.maxLength(255)]],
    ownHouse: [1, Validators.required],
    remarks: ['', [Validators.maxLength(100)]],
  });
  constructor() {
    super(inject(Injector));
  }

  ngOnInit(): void { }

  ValidateLogin() {
    console.log(this.signInForm.value);
    if (this.signInForm.value.email && this.signInForm.value.password) {
      // this.post('Admin/ValidateLogin', this.user)
      //   .subscribe({
      //     next: async (res) => {
      //       // Step 5: Handle different login responses
      //       if (res.pwdPrompt == "true") {
      //         this.showFlag = "C";
      //         this.user.password = "";
      //       } else if (res.id > 0) {
      //         // If successful, get user details
      //         await this.getUserDetails(res);
      //       } else {
      //         this.resetCaptcha()
      //         // If login fails, show an error message
      //         this.commonService.displayMessage(res.message, 'error');
      //       }
      //     },
      //     error: (err) => {
      //       this.resetCaptcha()
      //       // Step 6: Handle errors
      //       this.commonService.displayMessage('Error Occurred', 'error');
      //     },
      //   });
    }
  }

  RegisterUser() {
    if (this.familyForm.valid) {
      console.log('VALID', this.familyForm.value);
    } else {
      this.commonService.checkFormValidation(this.familyForm);
    }
  }
}
