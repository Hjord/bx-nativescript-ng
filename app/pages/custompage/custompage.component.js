"use strict";
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var CustompageComponent = (function () {
    function CustompageComponent(routerExtensions) {
        this.routerExtensions = routerExtensions;
    }
    CustompageComponent.prototype.ngOnInit = function () {
    };
    CustompageComponent.prototype.goBack = function () {
        this.routerExtensions.backToPreviousPage();
    };
    return CustompageComponent;
}());
CustompageComponent = __decorate([
    core_1.Component({
        selector: "custompage",
        templateUrl: "pages/custompage/custompage.html",
        styleUrls: ["pages/custompage/custompage.css"]
    }),
    __metadata("design:paramtypes", [router_1.RouterExtensions])
], CustompageComponent);
exports.CustompageComponent = CustompageComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VzdG9tcGFnZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjdXN0b21wYWdlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsc0NBQWtEO0FBQ2xELHNEQUErRDtBQVcvRCxJQUFhLG1CQUFtQjtJQUUvQiw2QkFBb0IsZ0JBQWtDO1FBQWxDLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7SUFBSSxDQUFDO0lBRTNELHNDQUFRLEdBQVI7SUFDQSxDQUFDO0lBRUQsb0NBQU0sR0FBTjtRQUNDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO0lBQzVDLENBQUM7SUFDRiwwQkFBQztBQUFELENBQUMsQUFWRCxJQVVDO0FBVlksbUJBQW1CO0lBTi9CLGdCQUFTLENBQUM7UUFDVixRQUFRLEVBQUUsWUFBWTtRQUN0QixXQUFXLEVBQUUsa0NBQWtDO1FBQy9DLFNBQVMsRUFBRSxDQUFDLGlDQUFpQyxDQUFDO0tBQzlDLENBQUM7cUNBSXFDLHlCQUFnQjtHQUYxQyxtQkFBbUIsQ0FVL0I7QUFWWSxrREFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0ICogYXMgYXBwbGljYXRpb24gZnJvbSAnYXBwbGljYXRpb24nO1xyXG5pbXBvcnQgeyBQYWdlIH0gZnJvbSAndWkvcGFnZSc7XHJcblxyXG5cclxuQENvbXBvbmVudCh7XHJcblx0c2VsZWN0b3I6IFwiY3VzdG9tcGFnZVwiLFxyXG5cdHRlbXBsYXRlVXJsOiBcInBhZ2VzL2N1c3RvbXBhZ2UvY3VzdG9tcGFnZS5odG1sXCIsXHJcblx0c3R5bGVVcmxzOiBbXCJwYWdlcy9jdXN0b21wYWdlL2N1c3RvbXBhZ2UuY3NzXCJdXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgQ3VzdG9tcGFnZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyRXh0ZW5zaW9uczogUm91dGVyRXh0ZW5zaW9ucykgeyB9XHJcblxyXG5cdG5nT25Jbml0KCkge1xyXG5cdH1cclxuXHJcblx0Z29CYWNrKCkge1xyXG5cdFx0dGhpcy5yb3V0ZXJFeHRlbnNpb25zLmJhY2tUb1ByZXZpb3VzUGFnZSgpO1xyXG5cdH1cclxufSJdfQ==