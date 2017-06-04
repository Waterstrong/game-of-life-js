
import React from 'react';
import Paper from 'material-ui/Paper';

const GameBoard = (props) => (
	<div>
		{props.cells.map((row, xAxis)=>(
			<div key={xAxis}>
				{row.map((cell, yAxis) => {
					const styles = {height: props.size, width: props.size, margin: props.margin, textAlign: 'center', 
						display: 'inline-block', background: cell === 0 ? 'white' : 'black' };
					return (<Paper key={`${xAxis}${yAxis}`} style={styles} circle={props.circle} 
						onClick={() => props.updateCellState(xAxis, yAxis)} />);
				})
				}
			</div>
			))
		}
	</div>
);

export default GameBoard;