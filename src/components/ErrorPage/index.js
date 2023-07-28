import React from 'react';
import Batman from '../../images/batman.png';
const ErrorPage = () => {
    const centerH2={
        textAlign:'center',
        marginTop:'50px'
    }
    const centerImg={
        display:'block',
        margin:'40px auto'
    }
    return (
        <div className='quiz-bg'>
            <div className="container">
                <h2 style={centerH2}>Oups! page d'Erreur</h2>
                <img style={centerImg} src={Batman} alt="error page"/>
            </div>
        </div>
    );
}

export default ErrorPage;
