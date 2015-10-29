var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var HelloMessage = (function (_super) {
    __extends(HelloMessage, _super);
    function HelloMessage() {
        _super.apply(this, arguments);
    }
    HelloMessage.prototype.render = function () {
        var helloList = this.props.data.map(function (item) {
            return (React.createElement("li", null, "item"));
        });
        return React.createElement("ul", null, " ", helloList, " ");
    };
    return HelloMessage;
})(React.Component);
var list = ['a', 'b', 'c'];
React.render(React.createElement(HelloMessage, {"data": list}), document.getElementById('content'));
//# sourceMappingURL=app.js.map