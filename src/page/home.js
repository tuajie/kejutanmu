import React, { Component } from 'react';
import { connect } from 'react-redux';

class Home extends Component {
    render() {
        return(
            <div className="App">
                <div className="member">
                    <p>Email</p>
                    <p>Terverifikasi</p>
                    <div className="btn-kluar">Logout</div>
                </div>
    
                <div>
                    <h2>Test Body</h2> 
                </div>
    
                <footer>
                    <h3>Test Footer</h3>
                </footer>
            </div>
        )
    }
    
}

export default connect()(Home);
