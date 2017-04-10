import { Component, OnInit } from '@angular/core';
import { RouterExtensions } from 'nativescript-angular/router';
import * as application from 'application';
import { Page } from 'ui/page';


@Component({
	selector: "custompage",
	templateUrl: "pages/custompage/custompage.html",
	styleUrls: ["pages/custompage/custompage.css"]
})

export class CustompageComponent implements OnInit {

	constructor(private routerExtensions: RouterExtensions) { }

	ngOnInit() {
	}

	goBack() {
		this.routerExtensions.backToPreviousPage();
	}
}