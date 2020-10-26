import React from 'react';

// fungsi button register, dimana ada 3 variabel :
// title, state untuk merubah judul
// diKlik, state untuk membuat nama parameter kemudian di kirimkan ke page register
// loading, state yang nilainya false
const Button = ({title, diKlik, loading}) => {
    // jika fungsi loading === true, maka memunculkan fungsi dibawah 
    if(loading){ 
            return <button className="button-submit abu">Loading...</button> 
    }
    // jika tidak, maka akan memakai fungsi button di bawah
    return (
        <button className="button-submit" onClick={diKlik}>{title}</button>
    )
}

export default Button;