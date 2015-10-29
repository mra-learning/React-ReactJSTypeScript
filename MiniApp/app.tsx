interface ICommentData {
    author: string;
    text: string;
}


interface ICommentForm extends React.Props<any> {
    onCommentSubmit: any;
}


class CommentForm extends React.Component<ICommentForm, any> {

    constructor(props: ICommentForm, context) {
        super(props, context);
        
        this.state = { name: '', text: '' };
    }
    

    handleSubmit(e: React.FormEvent): React.FormEventHandler {
        e.preventDefault();
        var name = this.refs["name"];
        var text = this.refs["text"];

        if (!text || !name) {
            return;
        }

        this.props.onCommentSubmit({ author: name["value"], text: text["value"] });
        
        
        return;
    }

    public render() {
        var name = this.state.name;
        var text = this.state.text; 

        return (
            <form className="commentForm" onSubmit={this.handleSubmit.bind(this) }>
                <input type="text" placeholder="Your name" ref="name"/>
                <input type="text" placeholder="Say something..."  ref="text"/>
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

        var comentListt = this.props.data.map(function (comment, i) {
            return <CommentItem key={i} author={comment.author}>{comment.text}</CommentItem>
        });

        return <div className="commentList">
                    {comentListt}
               </div>;
    }
}

interface ICommentBox extends React.Props<any>{
    
}

class CommentBox extends React.Component<ICommentBox, any> {

    _data: ICommentData[] = [
        { author: "Pete Hunt", text: "This is one commenttttt" },
        { author: "Jordan Walke", text: "This is another comment" }
    ];

    constructor(props: ICommentBox, context) {
        super(props, context);
        
        this.state = { data: this._data };
    }

    handleCommentSubmit(comment) {
        // TODO: submit to the server and refresh the list
        var currentList = this.state["data"];
        currentList.push({ author: comment.author, text: comment.text });
        this.setState({ data: currentList });
    }

    public render() {


        return <div className="commentBox">
                <h1>Comments</h1>
                <CommentList data={ this._data } />
                <CommentForm onCommentSubmit={ this.handleCommentSubmit.bind(this) }/>
               </div>;
    }
}


React.render(<CommentBox />, document.getElementById('content')); 
