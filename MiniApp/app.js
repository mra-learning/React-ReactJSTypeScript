var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var _data = [
    { author: "Pete Hunt", text: "This is one commenttttt" },
    { author: "Jordan Walke", text: "This is another comment" }
];
var CommentForm = (function (_super) {
    __extends(CommentForm, _super);
    function CommentForm() {
        _super.apply(this, arguments);
    }
    //handleSubmit(e: React.FormEvent): React.FormEventHandler {
    //    e.preventDefault();
    //    var author = this.refs["author"];
    //    var text = this.refs["text"];
    //    if (!text || !author) {
    //        return;
    //    }
    //    // TODO: send request to the server
    //    this.refs["author"] = '';
    //    this.refs["author"] = '';
    //    return;
    //}
    CommentForm.prototype.render = function () {
        return (React.createElement("form", {"className": "commentForm"}, React.createElement("input", {"type": "text", "placeholder": "Your name"}), React.createElement("input", {"type": "text", "placeholder": "Say something...", "ref": "text"}), React.createElement("input", {"type": "submit", "value": "Post"})));
    };
    return CommentForm;
})(React.Component);
var CommentItem = (function (_super) {
    __extends(CommentItem, _super);
    function CommentItem() {
        _super.apply(this, arguments);
    }
    CommentItem.prototype.render = function () {
        return React.createElement("div", {"className": "comment"}, React.createElement("h2", {"className": "commentAuthor"}, this.props.author), this.props.children);
    };
    return CommentItem;
})(React.Component);
var CommentList = (function (_super) {
    __extends(CommentList, _super);
    function CommentList() {
        _super.apply(this, arguments);
    }
    CommentList.prototype.render = function () {
        var comentList = this.props.data.map(function (comment) {
            return React.createElement(CommentItem, {"author": comment.author}, comment.text);
        });
        return React.createElement("div", {"className": "commentList"}, comentList);
    };
    return CommentList;
})(React.Component);
var CommentBox = (function (_super) {
    __extends(CommentBox, _super);
    function CommentBox() {
        _super.apply(this, arguments);
    }
    CommentBox.prototype.render = function () {
        return React.createElement("div", {"className": "commentBox"}, React.createElement("h1", null, "Comments"), React.createElement(CommentList, {"data": _data}), React.createElement(CommentForm, null));
    };
    return CommentBox;
})(React.Component);
React.render(React.createElement(CommentBox, null), document.getElementById('content'));
//# sourceMappingURL=app.js.map