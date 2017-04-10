import { Component } from "@angular/core";
import { Router } from "@angular/router";


class MenuItem {
    constructor(public name: string) { }
}

@Component({
    selector: "my-app",
    templateUrl: "pages/main/main.html",
    styleUrls: ["pages/main/main-common.css", "pages/main/main.css"]
})


export class MainComponent {

    public MenuItems: Array<MenuItem>;

    constructor(private router: Router) {
        this.MenuItems = [];
        this.MenuItems.push(new MenuItem("Platform specific UI"));
        this.MenuItems.push(new MenuItem("Platform specific page"));
    }

    public onItemTap(args) {

        switch (args.index) {
            case 0:
                this.router.navigate(["customview"]);
                break;
            case 1:
                this.router.navigate(["custompage"]);
                break;
        }
    }
}