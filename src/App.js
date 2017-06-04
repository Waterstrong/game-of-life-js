import React from 'react';
import _ from 'lodash';
import MyAppBar from './AppBar';
import GameBoard from './GameBoard';
import ControllPanel from './ControllPanel';
import Footer from './Footer';
import nextGeneration from './core/conway';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			cells: [[0,0,0],[0,0,0],[0,0,0]],
			size: 50,
			margin: 10,
			inProgress: false,
			circle: false,
			duration: 1000,
			showControllPanel: false,
			timer: null
		};
	}

	updateControllPanelSate() {
		this.setState({
			showControllPanel: !this.state.showControllPanel
		});
	}

	updateCellState(xAxis, yAxis) {
		if (this.state.inProgress) {
			return ;
		}
		const currentCellState = this.state.cells[xAxis][yAxis];
		let newCells = [];
		this.state.cells.map(function(row) {
			newCells = _.concat(newCells, [[...row]]);
		});
		newCells[xAxis][yAxis] = currentCellState === 0 ? 1 : 0;
		this.setState({
			cells: newCells
		});
	}

	handleToggle(toggle) {
		this.setState({circle: toggle});
	}

	handleNumberOfRowChange(value) {
		this.setState({
			cells: _.fill(Array(value), [...this.state.cells[0]])
		});
	}

	handleNumberOfColumnNumbChange(value) {
		this.setState({
			cells: _.fill(Array(this.state.cells.length), _.fill(Array(value), 0))
		});
	}

	handleStyleChange(value, propsName) {
		let newStyle = {};
		newStyle[propsName] = value;
		this.setState(newStyle);
	}

	handleChangeDuration(value) {
		this.setState({
			duration: value
		});
	}

	startGame() {
		const timerId = setInterval(() => {
			let currentCellsCopy = [];
			this.state.cells.map((row) => (
				currentCellsCopy = _.concat(currentCellsCopy, [[...row]])
			));
			const nextCells = nextGeneration(currentCellsCopy);
			this.setState({
				inProgress: true,
				cells: nextCells
			});
		},this.state.duration);

		this.setState({
			timer: timerId,
			showControllPanel: false
		});
	}

	stopGame() {
		clearInterval(this.state.timer);
		this.setState({
			inProgress: false
		});
	}

	render() {
		return (
		<div>
			<MyAppBar updateControllPanelSate={() => this.updateControllPanelSate()}/>
			<ControllPanel showControllPanel={this.state.showControllPanel} toggled={this.state.circle} 
				rows={this.state.cells.length} columns={this.state.cells[0].length} 
				handleToggle={(toggle) => this.handleToggle(toggle)} 
				size={this.state.size} margin={this.state.margin} duration={this.state.duration}
				handleChangeDuration={(event, value) => this.handleChangeDuration(value)}
				styleChange={(value, propsName) => this.handleStyleChange(value, propsName)}
				rowsChange={(value) => this.handleNumberOfRowChange(value)} start={() => this.startGame()}
				columnsChange={(value) => this.handleNumberOfColumnNumbChange(value)}/>
			<GameBoard cells={this.state.cells} size={this.state.size} margin={this.state.margin} circle={this.state.circle}
				updateCellState={(xAxis, yAxis) => this.updateCellState(xAxis, yAxis)}/>
			<Footer stop={() => this.stopGame()}/>
		</div>
		);
	}
		

}

export default App;