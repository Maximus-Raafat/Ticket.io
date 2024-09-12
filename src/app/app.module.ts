import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QRCodeModule } from 'angularx-qrcode';
import { QrComponent } from './component/qr/qr.component';
import { SalesComponent } from './component/sales/sales.component';
import { StatisticsComponent } from './component/statistics/statistics.component';
import { TableModule } from 'primeng/table';
import { TooltipModule } from 'primeng/tooltip';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InputTextModule } from 'primeng/inputtext';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { InputSwitchModule } from 'primeng/inputswitch';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { ClipboardModule } from '@angular/cdk/clipboard';
import { FileSaverModule } from 'ngx-filesaver';

@NgModule({
  declarations: [
    AppComponent,
    SalesComponent,
    QrComponent,
    StatisticsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    QRCodeModule,
    TableModule,
    TooltipModule,
    DropdownModule,
    FormsModule,
    InputTextModule,
    AutoCompleteModule,
    InputSwitchModule,
    ButtonModule,
    DialogModule,
    ClipboardModule,
    FileSaverModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
