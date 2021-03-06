import React, { Component } from 'react';
//import { Link } from "react-router-dom";
import UpdateSettings from './UpdateSettings';
import app from '../Auth/Base';
//import AddNewWebExample from './AddNewWebExample';

class Dashboard extends Component {
    render() {
        const { settings } = this.props;
        return (
            <div id="dashboard-page" className="dashboard-page inner">
                <button style={{float: "right"}} onClick={() => app.auth().signOut()}>Sign Out</button>
                <h1>Settings</h1>
                <UpdateSettings settings={settings} />
                {/* <h2>Add A Web Project</h2>
                <AddNewWebExample settings={settings} /> */}
            </div>
        );
    }
}

export default Dashboard;
