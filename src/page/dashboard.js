import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addDataToAPI } from '../config/redux/action/actionApp'

class Dashboard extends Component {
    state = {
        title: '',
        konten: '',
        date: ''
    }

    urusanSaveKonten = () => {
        const {title, konten} = this.state;
        const {saveKonten} = this.props;

        const data = {
            title: title,
            konten: konten,
            date: new Date().getTime(),
            userId: this.props.userData.uid
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
        return(
            <div>
                <h4>Dashboard Page</h4>
                <form>
                    <input placeholder="Judul" value={title} onChange={(e) => this.onInputChange(e, 'title')} />
                    <textarea placeholder="Deskripsi konten" value={konten} onChange={(e) => this.onInputChange(e, 'konten')}></textarea>
                    <button className="btn-simpan" onClick={this.urusanSaveKonten}  loading={this.props.isLoading}>Simpan</button>
                </form>

                <div className="isi-firebase">
                    <h6> Judul </h6>
                    <p> 20 Desember 2020 </p>
                    <p>  Konten isi </p>
                </div>
            </div>


        )
    }
}

const reduxState = (state) => ({
    userData: state.user
})

const reduxDispatch = (dispatch) => ({
    saveKonten : (data) => dispatch(addDataToAPI(data))
})

export default connect(reduxState, reduxDispatch)(Dashboard);
