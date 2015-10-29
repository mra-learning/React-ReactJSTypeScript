interface ICommentData {
    author: string;
    text: string;
}
var _data: ICommentData[] = [
    { author: "Pete Hunt", text: "This is one commenttttt" },
    { author: "Jordan Walke", text: "This is another comment" }
];

interface ICommentForm extends React.Props<any> {
    //refs: 
}


class CommentForm extends React.Component<ICommentForm, any> {

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

    public render() {
        return (
            <form className="commentForm">
                <input type="text" placeholder="Your name" />
                <input type="text" placeholder="Say something..." ref="text" />
                <input type="submit" value="Post" />
            </form>
        );
    }
}

interface ICommentItem extends React.Props<any> {
    author: string;
}

class CommentItem extends React.Component<ICommentItem, any> {

    public render() {

        return <div className="comment">
                <h2 className="commentAuthor">
                  {this.props.author}
                    </h2>
                {this.props.children}
               </div>;
    }
}

interface ICommentList extends React.Props<any>{
    data: ICommentData[];
}

class CommentList extends React.Component<ICommentList, any> {

    public render() {

        var comentList = this.props.data.map(function (comment) {
            return <CommentItem author={comment.author}>{comment.text}</CommentItem>
        });

        return <div className="commentList">
                    {comentList}
               </div>;
    }
}

interface ICommentBox extends React.Props<any>{
}

class CommentBox extends React.Component<ICommentBox, any> {

    public render() {

        return <div className="commentBox">
                <h1>Comments</h1>
                <CommentList data={ _data } />
                <CommentForm />
               </div>;
    }
}


React.render(<CommentBox />, document.getElementById('content')); 
