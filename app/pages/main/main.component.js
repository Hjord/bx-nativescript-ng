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
        this.MenuItems.push(new MenuItem("Platform specific UI"));
        this.MenuItems.push(new MenuItem("Platform specific page"));
    }
    MainComponent.prototype.onItemTap = function (args) {
        switch (args.index) {
            case 0:
                this.router.navigate(["customview"]);
                break;
            case 1:
                this.router.navigate(["custompage"]);
                break;
        }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJtYWluLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsc0NBQTBDO0FBQzFDLDBDQUF5QztBQUd6QztJQUNJLGtCQUFtQixJQUFZO1FBQVosU0FBSSxHQUFKLElBQUksQ0FBUTtJQUFJLENBQUM7SUFDeEMsZUFBQztBQUFELENBQUMsQUFGRCxJQUVDO0FBU0QsSUFBYSxhQUFhO0lBSXRCLHVCQUFvQixNQUFjO1FBQWQsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUM5QixJQUFJLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQztRQUNwQixJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLFFBQVEsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDLENBQUM7UUFDMUQsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxRQUFRLENBQUMsd0JBQXdCLENBQUMsQ0FBQyxDQUFDO0lBQ2hFLENBQUM7SUFFTSxpQ0FBUyxHQUFoQixVQUFpQixJQUFJO1FBRWpCLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1lBQ2pCLEtBQUssQ0FBQztnQkFDRixJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUM7Z0JBQ3JDLEtBQUssQ0FBQztZQUNWLEtBQUssQ0FBQztnQkFDRixJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUM7Z0JBQ3JDLEtBQUssQ0FBQztRQUNkLENBQUM7SUFDTCxDQUFDO0lBQ0wsb0JBQUM7QUFBRCxDQUFDLEFBckJELElBcUJDO0FBckJZLGFBQWE7SUFQekIsZ0JBQVMsQ0FBQztRQUNQLFFBQVEsRUFBRSxRQUFRO1FBQ2xCLFdBQVcsRUFBRSxzQkFBc0I7UUFDbkMsU0FBUyxFQUFFLENBQUMsNEJBQTRCLEVBQUUscUJBQXFCLENBQUM7S0FDbkUsQ0FBQztxQ0FPOEIsZUFBTTtHQUp6QixhQUFhLENBcUJ6QjtBQXJCWSxzQ0FBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuXHJcblxyXG5jbGFzcyBNZW51SXRlbSB7XHJcbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgbmFtZTogc3RyaW5nKSB7IH1cclxufVxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogXCJteS1hcHBcIixcclxuICAgIHRlbXBsYXRlVXJsOiBcInBhZ2VzL21haW4vbWFpbi5odG1sXCIsXHJcbiAgICBzdHlsZVVybHM6IFtcInBhZ2VzL21haW4vbWFpbi1jb21tb24uY3NzXCIsIFwicGFnZXMvbWFpbi9tYWluLmNzc1wiXVxyXG59KVxyXG5cclxuXHJcbmV4cG9ydCBjbGFzcyBNYWluQ29tcG9uZW50IHtcclxuXHJcbiAgICBwdWJsaWMgTWVudUl0ZW1zOiBBcnJheTxNZW51SXRlbT47XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXI6IFJvdXRlcikge1xyXG4gICAgICAgIHRoaXMuTWVudUl0ZW1zID0gW107XHJcbiAgICAgICAgdGhpcy5NZW51SXRlbXMucHVzaChuZXcgTWVudUl0ZW0oXCJQbGF0Zm9ybSBzcGVjaWZpYyBVSVwiKSk7XHJcbiAgICAgICAgdGhpcy5NZW51SXRlbXMucHVzaChuZXcgTWVudUl0ZW0oXCJQbGF0Zm9ybSBzcGVjaWZpYyBwYWdlXCIpKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgb25JdGVtVGFwKGFyZ3MpIHtcclxuXHJcbiAgICAgICAgc3dpdGNoIChhcmdzLmluZGV4KSB7XHJcbiAgICAgICAgICAgIGNhc2UgMDpcclxuICAgICAgICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcImN1c3RvbXZpZXdcIl0pO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcImN1c3RvbXBhZ2VcIl0pO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59Il19