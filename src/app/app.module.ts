import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

import { AppComponent } from './app.component';
import { TransactionComponent } from './transaction/tansaction.component';

import { TransactionsService } from './common/services/transactions.service';

@NgModule({
	declarations: [
		AppComponent,
		TransactionComponent
	],
	imports: [
		BrowserModule,
		HttpModule,
		RouterModule
	],
	providers: [
		TransactionsService
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
