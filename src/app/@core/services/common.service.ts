import { HttpClient } from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ConfirmationService, MessageService } from 'primeng/api';
import { AppBase } from '../base/base';

@Injectable()
export class CommonService extends AppBase {
  constructor(
    private injectable: Injector,
    private http: HttpClient,
    private messageService: MessageService,
    private confirmationService: ConfirmationService
  ) {
    super(injectable);
  }

  /**
   * @summary for check form validation
   * @author shahil
   * @param form for check form validation
   */
  checkFormValidation(form: FormGroup) {
    if (form) {
      Object.keys(form.controls).forEach((key) => {
        const control = form.get(key);
        if (control?.errors) {
          console.log(`${key} errors:`, control.errors);
        }
      });
    }
  }
  /**
   *
   * @param message for display message
   * @param position for display position
   * @param status for message type
   */
  displayMessage(message: string, status: any) {
    message = message.replace('<br>', '');
    message = message.replace('<span>', '');
    message = message.replace('</span>', '');
    this.messageService.add({ key: 'br', severity: status, detail: message });
  }

  confirm(msg: any, accept: any, reject: any) {
    this.confirmationService.confirm({
      message: msg,
      header: 'Confirmation',
      icon: 'pi pi-exclamation-triangle',
      accept: accept,
      reject: reject,
    });
  }
}
