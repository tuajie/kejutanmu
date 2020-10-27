import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { addDataToAPI, getDataFromAPI } from '../config/redux/action/actionApp';

class Dashboard extends Component {
    state = {
        title: '',
        konten: '',
        date: ''
    } 

    componentDidMount() {
        const userData = JSON.parse(localStorage.getItem('userData'));
        this.props.getKonten(userData.uid);
    }

    urusanSaveKonten = () => {
        const {title, konten} = this.state;
        const {saveKonten} = this.props;
        const userData = JSON.parse(localStorage.getItem('userData'))

        const data = {
            title: title,
            konten: konten,
            date: new Date().getTime(),
            userId: userData.uid
        } 
        saveKonten(data)
        console.log(data)
    }

    onInputChange = (e, type) => {
        this.setState({
            [type] : e.target.value
        })
    }

    render() {
        const {title, konten, date} = this.state;
        
        const { kontenAPI } = this.props;
        // console.log('respon kontenAPI: ', kontenAPI)

        return(
            <div>
                <h4>Dashboard Page</h4>
                <div className="isian">
                    <input placeholder="Judul" value={title} onChange={(e) => this.onInputChange(e, 'title')} />
                    <textarea placeholder="Deskripsi konten" value={konten} onChange={(e) => this.onInputChange(e, 'konten')}></textarea>
                    <button className="btn-simpan" onClick={this.urusanSaveKonten}  loading={this.props.isLoading}>Simpan</button>
                </div> 
                {
                    kontenAPI.length > 0 ? (
                        <Fragment>
                            {
                                kontenAPI.map(isiKontenAPI => {
                                    return(
                                        <div className="isi-firebase" key={isiKontenAPI.id}>
                                            <h6> {isiKontenAPI.data.title} </h6>
                                            <p> {isiKontenAPI.data.date}0 </p>
                                            <p>  {isiKontenAPI.data.konten} </p>
                                        </div>
                                    )  
                                }) 
                            } 
                        </Fragment> 
                    ) : null 
                } 
            </div>


        )
    }
}

const reduxState = (state) => ({
    userData: state.user,
    kontenAPI: state.kontenAPI
})

const reduxDispatch = (dispatch) => ({
    saveKonten : (data) => dispatch(addDataToAPI(data)),
    getKonten: (data) => dispatch(getDataFromAPI(data))
})

export default connect(reduxState, reduxDispatch)(Dashboard);
