import { Injectable } from '@angular/core';
import {MessageService} from 'primeng/api';

@Injectable({
  providedIn: 'root'
})
export class AppMessageService {
  readonly USER_REGISTERATION="user-registeration-msg";
  readonly ORDER_FORM="order-form--msg";
  constructor(private messageService: MessageService) {}

  addUserReisterSucessMsg(msg:any) {
    this.messageService.clear();
    this.messageService.clear(this.USER_REGISTERATION);
    this.messageService.add({severity:'success', summary:'User Registeration.', detail:msg});
}
addUserReisterFailedMsg(msg:any) {
  this.messageService.clear();
  this.messageService.clear(this.USER_REGISTERATION);
  this.messageService.add({severity:'error', summary:'User Registeration.', detail:msg});
}

addOrderSucessMsg(msg:any) {
  this.messageService.clear();
  this.messageService.clear(this.ORDER_FORM);
  this.messageService.add({severity:'success', summary:'User Registeration.', detail:msg});
}
addOrderFailedMsg(msg:any) {
this.messageService.clear();
this.messageService.clear(this.ORDER_FORM);
this.messageService.add({severity:'error', summary:'User Registeration.', detail:msg});
}

}
