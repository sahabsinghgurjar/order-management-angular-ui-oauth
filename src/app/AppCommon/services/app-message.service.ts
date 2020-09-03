import { Injectable } from '@angular/core';
import {MessageService} from 'primeng/api';

@Injectable({
  providedIn: 'root'
})
export class AppMessageService {
  readonly USER_REGISTERATION="user-registeration-msg";
  constructor(private messageService: MessageService) {}

  addUserReisterSucessMsg(msg:any) {
    this.messageService.clear(this.USER_REGISTERATION);
    this.messageService.add({severity:'success', summary:'User Registeration.', detail:msg});
}

}
