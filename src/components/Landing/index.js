import React,{useRef,useEffect,useState,Fragment} from 'react';
import {Link} from 'react-router-dom';

const Landing = () => {
    const refWolverine=useRef(null);
    const [btn,setBtn]=useState(false);
    //console.log(refWolverine);
    useEffect(()=>{
         refWolverine.current.classList.add("startingImg");
        setTimeout(()=>{
          refWolverine.current.classList.remove("startingImg");
          setBtn(true);
        },1000)
    },[])
const setLeftImg =()=>{
    refWolverine.current.classList.add("leftImg");
}
const setRightimg =()=>{
    refWolverine.current.classList.add("rightImg");
}
const clearImg=()=>{
    if(refWolverine.current.classList.contains("leftImg")){
        refWolverine.current.classList.remove("leftImg");
    }else if(refWolverine.current.classList.contains("rightImg")){
        refWolverine.current.classList.remove("rightImg");
    }
}
const displayBtn= btn && (
        <Fragment>
            <div className="leftBox" onMouseOver={setLeftImg} onMouseOut={clearImg}>
                <Link className='btn-welcome'  to='/Signup'>Inscription</Link>
            </div>
            <div className="rightBox" onMouseOver={setRightimg} onMouseOut={clearImg}>
                <Link className='btn-welcome' to='/Login'>Connection</Link>
            </div>
        </Fragment>    
    )
    return (
        <main ref={refWolverine} className='welcomePage'>
            {displayBtn}
        </main>
    );
}

export default Landing;
