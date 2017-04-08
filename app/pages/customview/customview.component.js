"use strict";
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var application = require("application");
var CustomviewComponent = (function () {
    function CustomviewComponent(routerExtensions) {
        this.routerExtensions = routerExtensions;
    }
    CustomviewComponent.prototype.ngOnInit = function () {
        if (application.android) {
        }
        else if (application.ios) {
        }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VzdG9tdmlldy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjdXN0b212aWV3LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsc0NBQWtEO0FBQ2xELHNEQUErRDtBQUMvRCx5Q0FBMkM7QUFTM0MsSUFBYSxtQkFBbUI7SUFFL0IsNkJBQW9CLGdCQUFrQztRQUFsQyxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO0lBQUksQ0FBQztJQUUzRCxzQ0FBUSxHQUFSO1FBRUMsRUFBRSxDQUFDLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7UUFFMUIsQ0FBQztRQUNELElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUUzQixDQUFDO0lBRUYsQ0FBQztJQUVELG9DQUFNLEdBQU47UUFDQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztJQUM1QyxDQUFDO0lBQ0YsMEJBQUM7QUFBRCxDQUFDLEFBbEJELElBa0JDO0FBbEJZLG1CQUFtQjtJQU4vQixnQkFBUyxDQUFDO1FBQ1YsUUFBUSxFQUFFLFlBQVk7UUFDdEIsV0FBVyxFQUFFLGtDQUFrQztRQUMvQyxTQUFTLEVBQUUsQ0FBQyxpQ0FBaUMsQ0FBQztLQUM5QyxDQUFDO3FDQUlxQyx5QkFBZ0I7R0FGMUMsbUJBQW1CLENBa0IvQjtBQWxCWSxrREFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgKiBhcyBhcHBsaWNhdGlvbiBmcm9tICdhcHBsaWNhdGlvbic7XG5cblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiBcImN1c3RvbXZpZXdcIixcblx0dGVtcGxhdGVVcmw6IFwicGFnZXMvY3VzdG9tdmlldy9jdXN0b212aWV3Lmh0bWxcIixcblx0c3R5bGVVcmxzOiBbXCJwYWdlcy9jdXN0b212aWV3L2N1c3RvbXZpZXcuY3NzXCJdXG59KVxuXG5leHBvcnQgY2xhc3MgQ3VzdG9tdmlld0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXJFeHRlbnNpb25zOiBSb3V0ZXJFeHRlbnNpb25zKSB7IH1cblxuXHRuZ09uSW5pdCgpIHtcblxuXHRcdGlmIChhcHBsaWNhdGlvbi5hbmRyb2lkKSB7XG5cblx0XHR9XG5cdFx0ZWxzZSBpZiAoYXBwbGljYXRpb24uaW9zKSB7XG5cdFx0XHRcblx0XHR9XG5cblx0fVxuXG5cdGdvQmFjaygpIHtcblx0XHR0aGlzLnJvdXRlckV4dGVuc2lvbnMuYmFja1RvUHJldmlvdXNQYWdlKCk7XG5cdH1cbn0iXX0=