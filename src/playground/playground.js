import React, { Component, Fragment } from 'react';
import axios from 'axios';
import GetAPI from './component/GetAPI'

class Playground extends Component {
    state = { 
        post: []
    }

    componentDidMount() {
        // axios.get('http://localhost:1337/kontens')
        axios({
            method: 'get',
            url: 'http://localhost:1337/kontens', 
        })
        .then((result)=> {
            console.log(result.data);
            this.setState({
                post: result.data, 
            })   
        }) 
    }

    render() { 
        return( 
            <Fragment>
                <h2> Playground </h2>
                {
                    this.state.post.map(post => {
                        return <GetAPI key={post.id} title={post.title} banner={post.banner} desc={post.desc}/> 
                    }) 
                }

                {/* <GetAPI /> */}
            </Fragment>
        )
    }
}

export default Playground;
