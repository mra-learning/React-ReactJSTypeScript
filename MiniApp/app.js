var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var CommentForm = (function (_super) {
    __extends(CommentForm, _super);
    function CommentForm(props, context) {
        _super.call(this, props, context);
        this.state = { name: '', text: '' };
    }
    CommentForm.prototype.handleSubmit = function (e) {
        e.preventDefault();
        var name = this.refs["name"];
        var text = this.refs["text"];
        if (!text || !name) {
            return;
        }
        this.props.onCommentSubmit({ author: name["value"], text: text["value"] });
        return;
    };
    CommentForm.prototype.render = function () {
        var name = this.state.name;
        var text = this.state.text;
        return (React.createElement("form", {"className": "commentForm", "onSubmit": this.handleSubmit.bind(this)}, React.createElement("input", {"type": "text", "placeholder": "Your name", "ref": "name"}), React.createElement("input", {"type": "text", "placeholder": "Say something...", "ref": "text"}), React.createElement("input", {"type": "submit", "value": "Post"})));
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
        var comentListt = this.props.data.map(function (comment, i) {
            return React.createElement(CommentItem, {"key": i, "author": comment.author}, comment.text);
        });
        return React.createElement("div", {"className": "commentList"}, comentListt);
    };
    return CommentList;
})(React.Component);
var CommentBox = (function (_super) {
    __extends(CommentBox, _super);
    function CommentBox(props, context) {
        _super.call(this, props, context);
        this._data = [
            { author: "Pete Hunt", text: "This is one commenttttt" },
            { author: "Jordan Walke", text: "This is another comment" }
        ];
        this.state = { data: this._data };
    }
    CommentBox.prototype.handleCommentSubmit = function (comment) {
        // TODO: submit to the server and refresh the list
        var currentList = this.state["data"];
        currentList.push({ author: comment.author, text: comment.text });
        this.setState({ data: currentList });
    };
    CommentBox.prototype.render = function () {
        return React.createElement("div", {"className": "commentBox"}, React.createElement("h1", null, "Comments"), React.createElement(CommentList, {"data": this._data}), React.createElement(CommentForm, {"onCommentSubmit": this.handleCommentSubmit.bind(this)}));
    };
    return CommentBox;
})(React.Component);
React.render(React.createElement(CommentBox, null), document.getElementById('content'));
//# sourceMappingURL=app.js.map