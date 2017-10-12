 function log(log){
	console.log(log);
}
let data = {
	todo: [
		{
			name: 'Wash the floor'
		},
		{
			name: 'Clean the dishes'
		},
		{
			name: 'Learn React'
		},
		{
			name: 'Shadow DOM'
		},
		{
			name: 'Help older brother'
		},
		{
			name: 'Help my father'
		}
	]
}
class Todo extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			items: this.props.data.todo,
			inputValue: ''
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
	deleteItem(i){
		let array = this.state.items.slice();
		array.splice(i, 1);
		this.setState({
			items: array
		})
		// this.setState({
		// 	items: this.state.items.splice(item, 1)
		// })
		log(array);
		//log(currentItems.indexOf(item));
		//log(item.name);
	}
	render(){
		let that = this;
		// <span><i className="material-icons">close</i></span>
		return(
			<div className="jumbotron">
				<div className="container">
					<h1 className="mb-5 text-primary">React Todo Application</h1>
					<div className="row">
						<div className="col-12 col-sm-6">
							<h3 className="mb-2">{this.state.title}</h3>
							<ul className="list-group">
								{this.state.items.map(function(item, i){
									return(
										<li className="list-group-item list-group-item_flex" key={i}>
											<span><span className="font-weight-bold">{i}</span>. {item.name}</span>
											<span onClick={()=>{that.deleteItem(i)}}><i className="material-icons">close</i></span>
										</li>
									)
								}.bind(this))}
							</ul>
						</div>
						<div className="col-12 col-sm-6">
							<h3 className="mb-2">You can add more items to your list.</h3>
							<form onSubmit={this.addToList}>
								<div className="input-group">
									<input type="text" className="form-control" placeholder='Add element' value={this.state.inputValue} onChange={this.changeValue}/>
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