import { Component } from '@angular/core';
import { CustomerService } from '../service/customer.service';

interface AutoCompleteCompleteEvent {
  originalEvent: Event;
  query: string;
}

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrl: './sales.component.css'
})
export class SalesComponent {
  customersData: any[]=[
    {
      user: {name:'أحمد محمود',number:'0123456789',image:''},
      ticketNumber:'C-101',
      ticketPrice:'$40',
      cinemas:'سينما مصر , مول العرب , برج الأطنان , سرايا القبة ...',
      numberOfPeople:'1',
      numberOfPurchases:'مرة واحدة',
      ticket: 'تذكرة رقم 45.pdf'
    },
    {
      user: {name:'محمد الغريب',number:'0123456789',image:''},
      ticketNumber:'C-101',
      ticketPrice:'$30',
      cinemas:'سينما مصر , مول العرب , برج الأطنان , سرايا القبة ...',
      numberOfPeople:'1',
      numberOfPurchases:'مرة واحدة',
      ticket: 'تذكرة رقم 45.pdf'
    },
    {
      user: {name:'محمد الغريب',number:'0123456789',image:''},
      ticketNumber:'C-101',
      ticketPrice:'$25',
      cinemas:'سينما مصر , مول العرب , برج الأطنان , سرايا القبة ...',
      numberOfPeople:'1',
      numberOfPurchases:'مرة واحدة',
      ticket: 'تذكرة رقم 45.pdf'
    },
    {
      user: {name:'أحمد محمود',number:'0123456789',image:''},
      ticketNumber:'C-101',
      ticketPrice:'$10',
      cinemas:'سينما مصر , مول العرب , برج الأطنان , سرايا القبة ...',
      numberOfPeople:'1',
      numberOfPurchases:'مرة واحدة',
      ticket: 'تذكرة رقم 45.pdf'
    },
    {
      user: {name:'محمد الغريب',number:'0123456789',image:''},
      ticketNumber:'C-101',
      ticketPrice:'$40',
      cinemas:'سينما مصر , مول العرب , برج الأطنان , سرايا القبة ...',
      numberOfPeople:'1',
      numberOfPurchases:'مرة واحدة',
      ticket: 'تذكرة رقم 45.pdf'
    },
    {
      user: {name:'محمد الغريب',number:'0123456789',image:''},
      ticketNumber:'C-101',
      ticketPrice:'$40',
      cinemas:'سينما مصر , مول العرب , برج الأطنان , سرايا القبة ...',
      numberOfPeople:'1',
      numberOfPurchases:'مرة واحدة',
      ticket: 'تذكرة رقم 45.pdf'
    },    {
      user: {name:'أحمد محمود',number:'0123456789',image:''},
      ticketNumber:'C-101',
      ticketPrice:'$40',
      cinemas:'سينما مصر , مول العرب , برج الأطنان , سرايا القبة ...',
      numberOfPeople:'1',
      numberOfPurchases:'مرة واحدة',
      ticket: 'تذكرة رقم 45.pdf'
    },
  
    
  ]
  checked: boolean = true;
  items!: any[];
  selectedItem: any;
  suggestions: any[] =[];
  first = 0;
  rows = 10;
  ascending = true;
  filterDialog: boolean = false;
  searchQuery: any;
  filteredCustomersData: any[] = this.customersData;

  constructor(private customerService: CustomerService) {}
  
  ngOnInit() {  }
  search(event: any) {
    const query = event.query.toLowerCase();
    this.suggestions = this.customersData.filter(customer =>
      customer.user.name.toLowerCase().includes(query)
    );
  }
  
  performSearch() {
    let filteredC: any[] = [];
    const query = this.searchQuery;
    if (query) {
      filteredC.push(query)
      this.filteredCustomersData = filteredC
      
    } else {
      // show all data if no search query 
      this.filteredCustomersData = this.customersData; 
    }
  
  }
  toggleSort() {
    this.ascending = !this.ascending;
    this.sortTicketsByPrice(this.ascending)
    console.log('Sorting...');
  }

  sortTicketsByPrice(ascending: boolean) {
    this.customersData.sort((a, b) => {
    const priceA = parseFloat(a.ticketPrice.replace('$', ''));
    const priceB = parseFloat(b.ticketPrice.replace('$', ''));
    return ascending ? priceA - priceB : priceB - priceA;
     });
  }
    // Show filter dialog
  showFilterDialog() {
    this.filterDialog = true;
  }
    // apply filters
    applyFilters() {
      console.log('Filters applied...');
      this.filterDialog = false;
    }

    pageChange(event:any) {
      this.first = event.first;
      this.rows = event.rows;
  }
  downloadTicket(fileName: string) {
    this.customerService.downloadTicket(fileName);
  }
}
