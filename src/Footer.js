
import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';

const Footer = (props) => (
	<Toolbar style={{ position: 'fixed', bottom: 0, right: 0, left: 0 }}>
		<ToolbarGroup>
			<ToolbarTitle text="Please mark alive cells first by click the cells" />
			<ToolbarSeparator />
			<RaisedButton label="Stop" secondary={true} onClick={props.stop}/>
		</ToolbarGroup>
  </Toolbar>
);

export default Footer;

