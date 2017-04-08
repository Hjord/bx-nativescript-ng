"use strict";
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var MenuItem = (function () {
    function MenuItem(name) {
        this.name = name;
    }
    return MenuItem;
}());
var MainComponent = (function () {
    function MainComponent(router) {
        this.router = router;
        this.MenuItems = [];
        this.MenuItems.push(new MenuItem("Custom view"));
        this.MenuItems.push(new MenuItem("Calling native method"));
    }
    MainComponent.prototype.onItemTap = function (args) {
        switch (args.index) {
            case 0:
                this.router.navigate(["customview"]);
                break;
        }
        console.log(this.MenuItems[args.index].name);
    };
    return MainComponent;
}());
MainComponent = __decorate([
    core_1.Component({
        selector: "my-app",
        templateUrl: "pages/main/main.html",
        styleUrls: ["pages/main/main-common.css", "pages/main/main.css"]
    }),
    __metadata("design:paramtypes", [router_1.Router])
], MainComponent);
exports.MainComponent = MainComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJtYWluLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsc0NBQTBDO0FBQzFDLDBDQUF5QztBQUd6QztJQUNJLGtCQUFtQixJQUFZO1FBQVosU0FBSSxHQUFKLElBQUksQ0FBUTtJQUFJLENBQUM7SUFDeEMsZUFBQztBQUFELENBQUMsQUFGRCxJQUVDO0FBU0QsSUFBYSxhQUFhO0lBSXRCLHVCQUFvQixNQUFjO1FBQWQsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUM5QixJQUFJLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQztRQUNwQixJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLFFBQVEsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDO1FBQ2pELElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksUUFBUSxDQUFDLHVCQUF1QixDQUFDLENBQUMsQ0FBQztJQUMvRCxDQUFDO0lBRU0saUNBQVMsR0FBaEIsVUFBaUIsSUFBSTtRQUVqQixNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztZQUNqQixLQUFLLENBQUM7Z0JBQ0YsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDO2dCQUNyQyxLQUFLLENBQUM7UUFDZCxDQUFDO1FBRUQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNqRCxDQUFDO0lBQ0wsb0JBQUM7QUFBRCxDQUFDLEFBcEJELElBb0JDO0FBcEJZLGFBQWE7SUFQekIsZ0JBQVMsQ0FBQztRQUNQLFFBQVEsRUFBRSxRQUFRO1FBQ2xCLFdBQVcsRUFBRSxzQkFBc0I7UUFDbkMsU0FBUyxFQUFFLENBQUMsNEJBQTRCLEVBQUUscUJBQXFCLENBQUM7S0FDbkUsQ0FBQztxQ0FPOEIsZUFBTTtHQUp6QixhQUFhLENBb0J6QjtBQXBCWSxzQ0FBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuXHJcblxyXG5jbGFzcyBNZW51SXRlbSB7XHJcbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgbmFtZTogc3RyaW5nKSB7IH1cclxufVxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogXCJteS1hcHBcIixcclxuICAgIHRlbXBsYXRlVXJsOiBcInBhZ2VzL21haW4vbWFpbi5odG1sXCIsXHJcbiAgICBzdHlsZVVybHM6IFtcInBhZ2VzL21haW4vbWFpbi1jb21tb24uY3NzXCIsIFwicGFnZXMvbWFpbi9tYWluLmNzc1wiXVxyXG59KVxyXG5cclxuXHJcbmV4cG9ydCBjbGFzcyBNYWluQ29tcG9uZW50IHtcclxuXHJcbiAgICBwdWJsaWMgTWVudUl0ZW1zOiBBcnJheTxNZW51SXRlbT47XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXI6IFJvdXRlcikge1xyXG4gICAgICAgIHRoaXMuTWVudUl0ZW1zID0gW107XHJcbiAgICAgICAgdGhpcy5NZW51SXRlbXMucHVzaChuZXcgTWVudUl0ZW0oXCJDdXN0b20gdmlld1wiKSk7XHJcbiAgICAgICAgdGhpcy5NZW51SXRlbXMucHVzaChuZXcgTWVudUl0ZW0oXCJDYWxsaW5nIG5hdGl2ZSBtZXRob2RcIikpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBvbkl0ZW1UYXAoYXJncykge1xyXG5cclxuICAgICAgICBzd2l0Y2ggKGFyZ3MuaW5kZXgpIHtcclxuICAgICAgICAgICAgY2FzZSAwOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wiY3VzdG9tdmlld1wiXSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuTWVudUl0ZW1zW2FyZ3MuaW5kZXhdLm5hbWUpO1xyXG4gICAgfVxyXG59Il19