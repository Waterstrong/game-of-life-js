import React from 'react';
import Drawer from 'material-ui/Drawer';
import Divider from 'material-ui/Divider';
import Toggle from 'material-ui/Toggle';
import RaisedButton from 'material-ui/RaisedButton';
import Card from 'material-ui/Card';
import Slider from 'material-ui/Slider';
import TextField from 'material-ui/TextField';
import Rules from './Rules';
import './ControllPanel.css';
import {
  Table,
  TableBody,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';

const ControllPanel = (props) => (
	<Drawer width={400} openSecondary={true} open={props.showControllPanel} >
		<Rules />
		<Card>
			<Table>
				<TableBody>
					<TableRow selectable={false}>
						<TableRowColumn>
							Cell Rows
						</TableRowColumn>
						<TableRowColumn>
							<Slider min={2} max={40} step={1} value={props.rows} 
								onChange={(event, value) => props.rowsChange(value)} />
						</TableRowColumn>
					</TableRow>
					<TableRow selectable={false}>
						<TableRowColumn>
							Cell Columns
						</TableRowColumn>
						<TableRowColumn>
							<Slider min={2} max={40} step={1} value={props.columns} 
								onChange={(event, value) => props.columnsChange(value)}/>
						</TableRowColumn>
					</TableRow>
					<TableRow selectable={false}>
						<TableRowColumn>
							Cell Size
						</TableRowColumn>
						<TableRowColumn>
							<Slider min={10} max={100} step={1} value={props.size} 
								onChange={(event, value) => props.styleChange(value, 'size')} />
						</TableRowColumn>
					</TableRow>
					<TableRow selectable={false}>
						<TableRowColumn>
							Cell Margin
						</TableRowColumn>
						<TableRowColumn>
							<Slider min={1} max={20} step={1} value={props.margin} 
								onChange={(event, value) => props.styleChange(value, 'margin')} />
						</TableRowColumn>
					</TableRow>
					<TableRow selectable={false}>
						<TableRowColumn>
							<TextField floatingLabelText="Duration in ms" value={props.duration}
							onChange={props.handleChangeDuration}/>
						</TableRowColumn>
						<TableRowColumn>
							<Toggle toggled={props.toggled} onToggle={(event, toggle) => props.handleToggle(toggle)} label="Circle" />							
						</TableRowColumn>
					</TableRow>
					<TableRow selectable={false}>
						<TableRowColumn>
							<RaisedButton label="Start" onClick={props.start} secondary={true} />
						</TableRowColumn>
					</TableRow>
				</TableBody>
			</Table>
		</Card>
	</Drawer >
);

export default ControllPanel;

