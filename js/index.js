 function log(log){
	console.log(log);
}
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
class Todo extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			title: this.props.data.title,
			items: this.props.data.todo,
			inputValue: 'I need to...'
		}
		this.addToList = this.addToList.bind(this);
		this.changeValue = this.changeValue.bind(this);
		this.deleteItem = this.deleteItem.bind(this);
	}
	addToList(e){
		e.preventDefault();
		let newArray = this.state.items.slice();
		newArray.push({
			name: this.state.inputValue
		})
		this.setState({
			items: newArray
		})
	}
	changeValue(e){
		this.setState({
			inputValue: e.target.value
		})
	}
	deleteItem(item){
		let currentItems = this.state.items;
		currentItems.splice(item, 1);
		this.setState({
			items: currentItems
		})
	}
	render(){
		// <span><i className="material-icons">close</i></span>
		return(
			<div className="jumbotron">
				<div className="container">
					<h1 className="mb-5">React Todo Application</h1>
					<div className="row">
						<div className="col-12 col-sm-6">
							<h3 className="mb-2">{this.state.title}</h3>
							<ul className="list-group">
								{this.state.items.map(function(item, i){
									return(
										<li className="list-group-item list-group-item_flex" key={i}>
											<span><span className="font-weight-bold">{i+1}</span>. {item.name}</span>
											<span onClick={this.deleteItem}><i className="material-icons">close</i></span>
										</li>
									)
								}.bind(this))}
							</ul>
						</div>
						<div className="col-12 col-sm-6">
							<h3 className="mb-2">You can add more items to your list.</h3>
							<form onSubmit={this.addToList}>
								<div className="input-group">
									<input type="text" className="form-control" placeholder="Add..." value={this.state.inputValue} onChange={e => this.changeValue(e)}/>
									<span className="input-group-btn">
										<button onClick={this.addToList} className="btn btn-primary" type="button">Add item</button>
									</span>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		)
	}
}
ReactDOM.render(<Todo data={data} />, document.getElementById('todo'));