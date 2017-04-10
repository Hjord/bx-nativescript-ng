"use strict";
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var CustomviewComponent = (function () {
    function CustomviewComponent(routerExtensions) {
        this.routerExtensions = routerExtensions;
    }
    CustomviewComponent.prototype.ngOnInit = function () {
    };
    CustomviewComponent.prototype.goBack = function () {
        this.routerExtensions.backToPreviousPage();
    };
    return CustomviewComponent;
}());
CustomviewComponent = __decorate([
    core_1.Component({
        selector: "customview",
        templateUrl: "pages/customview/customview.html",
        styleUrls: ["pages/customview/customview.css"]
    }),
    __metadata("design:paramtypes", [router_1.RouterExtensions])
], CustomviewComponent);
exports.CustomviewComponent = CustomviewComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VzdG9tdmlldy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjdXN0b212aWV3LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsc0NBQWtEO0FBQ2xELHNEQUErRDtBQVcvRCxJQUFhLG1CQUFtQjtJQUUvQiw2QkFBb0IsZ0JBQWtDO1FBQWxDLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7SUFBSSxDQUFDO0lBRTNELHNDQUFRLEdBQVI7SUFJQSxDQUFDO0lBRUQsb0NBQU0sR0FBTjtRQUNDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO0lBQzVDLENBQUM7SUFDRiwwQkFBQztBQUFELENBQUMsQUFiRCxJQWFDO0FBYlksbUJBQW1CO0lBTi9CLGdCQUFTLENBQUM7UUFDVixRQUFRLEVBQUUsWUFBWTtRQUN0QixXQUFXLEVBQUUsa0NBQWtDO1FBQy9DLFNBQVMsRUFBRSxDQUFDLGlDQUFpQyxDQUFDO0tBQzlDLENBQUM7cUNBSXFDLHlCQUFnQjtHQUYxQyxtQkFBbUIsQ0FhL0I7QUFiWSxrREFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgKiBhcyBhcHBsaWNhdGlvbiBmcm9tICdhcHBsaWNhdGlvbic7XG5pbXBvcnQgeyBQYWdlIH0gZnJvbSAndWkvcGFnZSc7XG5cblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiBcImN1c3RvbXZpZXdcIixcblx0dGVtcGxhdGVVcmw6IFwicGFnZXMvY3VzdG9tdmlldy9jdXN0b212aWV3Lmh0bWxcIixcblx0c3R5bGVVcmxzOiBbXCJwYWdlcy9jdXN0b212aWV3L2N1c3RvbXZpZXcuY3NzXCJdXG59KVxuXG5leHBvcnQgY2xhc3MgQ3VzdG9tdmlld0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXJFeHRlbnNpb25zOiBSb3V0ZXJFeHRlbnNpb25zKSB7IH1cblxuXHRuZ09uSW5pdCgpIHtcblxuXHRcdFxuXG5cdH1cblxuXHRnb0JhY2soKSB7XG5cdFx0dGhpcy5yb3V0ZXJFeHRlbnNpb25zLmJhY2tUb1ByZXZpb3VzUGFnZSgpO1xuXHR9XG59Il19