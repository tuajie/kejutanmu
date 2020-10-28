import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { addDataToAPI, getDataFromAPI, updateDataAPI, deleteDataAPI } from '../config/redux/action/actionApp';

class Dashboard extends Component {
    state = {
        title: '',
        konten: '',
        date: '',
        textButton: 'Simpan',
        kontenId: ''
    } 

    componentDidMount() {
        const userData = JSON.parse(localStorage.getItem('userData'));
        this.props.getKonten(userData.uid);
    }

    urusanSaveKonten = () => {
        const {title, konten, textButton, kontenId} = this.state;
        const {saveKonten, updateDataKonten} = this.props;
        const userData = JSON.parse(localStorage.getItem('userData'))

        const data = {
            title: title,
            konten: konten,
            date: new Date().getTime(),
            userId: userData.uid
        } 
        if(textButton === 'Simpan'){
            saveKonten(data)
        } else {
            data.kontenId = kontenId;
            updateDataKonten(data)
        }
        
        console.log(data)
    }

    onInputChange = (e, type) => {
        this.setState({
            [type] : e.target.value
        })
    }
    
    updateKonten = (isiKontenAPI) => {
        console.log(isiKontenAPI)
        this.setState({
            title: isiKontenAPI.data.title,
            konten: isiKontenAPI.data.konten,
            textButton: 'Update',
            kontenId: isiKontenAPI.id
        })
    }

    batalUpdate = () => {
        this.setState({
            title: '',
            konten: '',
            textButton: 'Simpan'
        })
    }

    deleteKonten = (e, isiKontenAPI) => {
        e.stopPropagation();
        const {hapusKonten} = this.props;
        const userData = JSON.parse(localStorage.getItem('userData'))
        const data = {
            userId: userData.uid,
            kontenId: isiKontenAPI.id
        }
        hapusKonten(data) 
    }

    render() {
        const {title, konten, textButton} = this.state; 
        const { kontenAPI } = this.props;
        const { updateKonten, batalUpdate, deleteKonten } = this;
        console.log('respon kontenAPI: ', kontenAPI)

        return(
            <div>
                <h4>Dashboard Page</h4>
 
                <div className="isian">
                    <input placeholder="Judul" value={title} onChange={(e) => this.onInputChange(e, 'title')} />
                    <textarea placeholder="Deskripsi konten" value={konten} onChange={(e) => this.onInputChange(e, 'konten')}></textarea>
                        {
                            textButton === 'Update' ? (
                                <button className="btn-batal" onClick={batalUpdate} loading={this.props.isLoading}>Batal</button>
                            ) : null
                        } 
                    <button className="btn-simpan" onClick={this.urusanSaveKonten}  loading={this.props.isLoading}>{textButton}</button> 
                    <div className="clear"></div>
                </div> 
                {
                    kontenAPI.length > 0 ? (
                        <Fragment>
                            {
                                kontenAPI.map(isiKontenAPI => {
                                    return(
                                        <div className="isi-firebase" key={isiKontenAPI.id} onClick={() => updateKonten(isiKontenAPI)}>
                                            <h6> {isiKontenAPI.data.title} </h6>
                                            <p> {isiKontenAPI.data.date}</p>
                                            <p>  {isiKontenAPI.data.konten} </p>
                                            <div className="btn-delete" onClick={(e) => deleteKonten(e, isiKontenAPI)}> X </div>
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
    getKonten: (data) => dispatch(getDataFromAPI(data)),
    updateDataKonten: (data) => dispatch(updateDataAPI(data)),
    hapusKonten: (data) => dispatch(deleteDataAPI(data)),
})

export default connect(reduxState, reduxDispatch)(Dashboard);
