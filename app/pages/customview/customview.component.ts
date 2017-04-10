import { Component, OnInit } from '@angular/core';
import { RouterExtensions } from 'nativescript-angular/router';
import * as application from 'application';
import { Page } from 'ui/page';


@Component({
	selector: "customview",
	templateUrl: "pages/customview/customview.html",
	styleUrls: ["pages/customview/customview.css"]
})

export class CustomviewComponent implements OnInit {

	constructor(private routerExtensions: RouterExtensions) { }

	ngOnInit() {

		

	}

	goBack() {
		this.routerExtensions.backToPreviousPage();
	}
}