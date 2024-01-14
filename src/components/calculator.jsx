import React, { useRef, useState } from 'react'
import "./style.css"


const Calculator = () => {
    const [firstnum, setFirstumber] = useState()
    const [firstmas, setFirstmas] = useState([])
    const monitor = useRef()

    function spitter(num){
       
        if(firstmas.length < 14){
            setFirstmas(current => [...current, num]);
            setFirstumber(firstmas.toString())
            console.log(firstmas);
        }
    }   
    function clener() {
        setFirstmas([])
    }
    console.log(firstmas.length);
  return (
    <div className='calculator_body'>
        <div className="monitor" ref={monitor}>
            {
                firstmas.map(item=>{
                    return(
                        <p>{item}</p>
                    )
                })
            }
        </div>
        <div className="buttons">
            <div className="nummbers">
                <div>
                    <button name='1' onClick={(item)=>{spitter(item.target.innerHTML)}}>1</button>
                    <button name='2' onClick={(item)=>{spitter(item.target.innerHTML)}}>2</button>
                    <button name='3' onClick={(item)=>{spitter(item.target.innerHTML)}}>3</button>
                </div>
                <div>
                    <button name='4' onClick={(item)=>{spitter(item.target.innerHTML)}}>4</button>
                    <button name='5' onClick={(item)=>{spitter(item.target.innerHTML)}}>5</button>
                    <button name='6' onClick={(item)=>{spitter(item.target.innerHTML)}}>6</button>
                </div>
                <div>
                    <button name='7' onClick={(item)=>{spitter(item.target.innerHTML)}}>7</button>
                    <button name='8' onClick={(item)=>{spitter(item.target.innerHTML)}}>8</button>
                    <button name='9' onClick={(item)=>{spitter(item.target.innerHTML)}}>9</button>
                </div>
                <div>
                    <button name='0' onClick={(item)=>{spitter(item.target.innerHTML)}}>0</button>
                </div>
            </div>
            <div className="argument">
                <button onClick={()=>{clener()}}>C</button>
                <button>-</button>
                
                <button>+</button>
                <button>=</button>
            </div>
        </div>
    </div>
  )
}

export default Calculator