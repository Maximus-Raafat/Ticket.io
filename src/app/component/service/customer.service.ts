import { Injectable } from '@angular/core';
import { FileSaverService } from 'ngx-filesaver';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private fileSaverService: FileSaverService) {}
  downloadTicket(fileName: string): void {
    const ticketContent = `This is the content of the ticket: ${fileName}`;
    const blob = new Blob([ticketContent], { type: 'application/pdf' });

    this.fileSaverService.save(blob, fileName);
    
  }

}
