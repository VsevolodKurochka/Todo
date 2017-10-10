let data = {
	title: 'List to run!',
	todo: [
		{
			name: 'Wash the floor'
		},
		{
			name: 'Clean the dishes'
		},
		{
			name: 'To water flowers'
		}
	]
}
class TodoElement extends React.Component{
	constructor(props){
		super(props);
	}
	render(){
		return(
			<li className="list-group-item">{this.props.text}</li>
		)
	}
}
class Todo extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			data: this.props.data
		}
	}
	render(){
		return(
			<div className="jumbotron">
				<div className="container">
					<div className="row">
						<div className="col-12 col-sm-6">

						</div>
						<div className="col-12 col-sm-6">
							<h1 className="mb-3">{this.state.data.title}</h1>
							<ul className="list-group">
								{this.state.data.todo.map(function(item){
									return <TodoElement key={item.name} text={item.name} />
								})}
							</ul>
						</div>
					</div>
				</div>
			</div>
			
		)
	}
}
ReactDOM.render(<Todo data={data} />, document.getElementById('todo'));