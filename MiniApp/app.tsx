interface IHelloMessage {
    data: string[];
}

class HelloMessage extends React.Component<IHelloMessage, any> {

    public render() {

        var helloList = this.props.data.map(function (item) {
            return (
                <li>item</li>
            );
        });

        return <ul> { helloList } </ul>;
    }
}

var list = ['a', 'b', 'c'];

React.render(<HelloMessage data = { list } />, document.getElementById('content'));
