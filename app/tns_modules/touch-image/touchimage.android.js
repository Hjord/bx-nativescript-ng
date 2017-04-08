"use strict";
var touchimage_common_1 = require("./touchimage-common");
var TouchImage = (function (_super) {
    __extends(TouchImage, _super);
    function TouchImage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TouchImage.prototype.OnTouchEvent = function (ev) {
        console.log("something");
    };
    return TouchImage;
}(touchimage_common_1.TouchImageBase));
exports.TouchImage = TouchImage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG91Y2hpbWFnZS5hbmRyb2lkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidG91Y2hpbWFnZS5hbmRyb2lkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSx5REFBcUQ7QUFFckQ7SUFBZ0MsOEJBQWM7SUFBOUM7O0lBUUEsQ0FBQztJQU5jLGlDQUFZLEdBQW5CLFVBQW9CLEVBQTRCO1FBRTVDLE9BQU8sQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLENBQUM7SUFFN0IsQ0FBQztJQUVULGlCQUFDO0FBQUQsQ0FBQyxBQVJELENBQWdDLGtDQUFjLEdBUTdDO0FBUlksZ0NBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBUb3VjaEltYWdlQmFzZSB9IGZyb20gXCIuL3RvdWNoaW1hZ2UtY29tbW9uXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgVG91Y2hJbWFnZSBleHRlbmRzIFRvdWNoSW1hZ2VCYXNlIHtcclxuICAgIFxyXG4gICAgICAgIHB1YmxpYyBPblRvdWNoRXZlbnQoZXY6IGFuZHJvaWQudmlldy5Nb3Rpb25FdmVudCl7XHJcblxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcInNvbWV0aGluZ1wiKTtcclxuXHJcbiAgICAgICAgfVxyXG5cclxufSJdfQ==