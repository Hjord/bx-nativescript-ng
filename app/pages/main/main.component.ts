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
        this.MenuItems.push(new MenuItem("Custom view"));
        this.MenuItems.push(new MenuItem("Calling native method"));
    }

    public onItemTap(args) {

        switch (args.index) {
            case 0:
                this.router.navigate(["customview"]);
                break;
        }

        console.log(this.MenuItems[args.index].name);
    }
}