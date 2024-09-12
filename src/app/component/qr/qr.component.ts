import { Component } from '@angular/core';
import { Clipboard } from '@angular/cdk/clipboard';

@Component({
  selector: 'app-qr',
  templateUrl: './qr.component.html',
  styleUrl: './qr.component.css'
})
export class QrComponent {
  qrCodeImage = 'www.tazkty.com/473847';
  constructor(private clipboard: Clipboard){}

  copyText(text: string) {
    this.clipboard.copy(text);
    console.log('Text copied to clipboard:', text);
  }
  
  onDelete() {
    console.log('Ticket deleted');
  }

  onShare() {
    console.log('Ticket shared');
  }
}
