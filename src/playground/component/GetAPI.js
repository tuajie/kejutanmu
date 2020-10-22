import React from 'react';


// class GetAPI extends Component {
//     render() {
//         return(
//                 <div className="GetAPIstyle">
//                     <h4 className="title">{this.state.title}</h4> 
//                     <img src={this.state.banner[0].url} alt="banner" /> 
//                     <p className="desc">{this.state.desc}</p>
//                 </div>
//         )
//     }
// }

// const logo = require('http://localhost:1337/kontens');


const GetAPI = (props) => {
    return (
        <div className="GetAPIstyle">
            <h4 className="title">{props.title}</h4> 
            <img src={props.banner[0].formats.medium.url} alt="banner" /> 
            <p className="desc">{props.desc}</p>
        </div>
    )
}

export default GetAPI;