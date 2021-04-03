import { NotifierComponent } from './notifier/notifier.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NotifierService {

  constructor(private snackbar: MatSnackBar) { }

  showNotification(displayMessage:string, buttonText:string, messageType:'error'|'success'){
    this.snackbar.openFromComponent(NotifierComponent, {
      data: {
        message:displayMessage,
        buttonText: buttonText,
        type: messageType,
      },
      duration:5000,
      horizontalPosition:'center',
      verticalPosition: 'bottom',
      panelClass: messageType,
    })
  }
}
