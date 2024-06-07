import React, { useState } from 'react'


const PasswordGenerater = () => {

  const[length,setLength] = useState(8);

  const[uppercase,setUppercase]=useState(true);
  const[lowercase,setLowercase]=useState(true);
  const[number,setNumber]=useState(true);
  const[symbols,setSymbols]=useState(true);
  const[password,setPassword]=useState("");

  const generatePassword=()=>{

    let charset="";
    if(uppercase) charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if(lowercase) charset += "abcdefghijklmnopqrstuvwxyz";
    if(number) charset += "0123456789";
    if(symbols) charset += "!#$%&'()*+,-./:;<=>?@[]^_`{|}~";
    let generatedPassword ="";
    for(let i =0;i<length;i++)
      {
        const randomIndex =  Math.floor(Math.random()* charset.length)
        generatedPassword+=charset[randomIndex];
      }

 
     setPassword(generatedPassword);

  };

  const copyToClipborad =()=>
    {navigator.clipboard.writeText(password);
      alert("Password Coppied");

    };

  return (
    <div className="Password-generater"><h2>Strong Password Generater</h2>
    <div className="input-group"><label htmlFor='num'>Pasword Length :</label>
    <input  type='number' name="" id='num' value={length} onChange={(e)=>{setLength(parseInt(e.target.value))}}></input></div>
    <div className="checkbox-group">
      <input type="checkbox" name="" id="upper"  checked={uppercase} onChange={(e)=>setUppercase(e.target.checked)}/>
      <label htmlFor='upper'> Include Upper Case</label>
      
    </div>
    <div className="checkbox-group">
      <input type="checkbox" name="" id="lower" checked={lowercase} onChange={(e)=>setLowercase(e.target.checked)} />
      <label htmlFor='lower'> Include Lower Case</label>
      
    </div>
    <div className="checkbox-group">
      <input type="checkbox" name="" id="numbers"  checked={number} onChange={(e)=>setNumber(e.target.checked)}/>
      <label htmlFor='numbers'> Include Numbers</label>
      
    </div>
    <div className="checkbox-group">
      <input type="checkbox" name="" id="symbols"  checked={symbols} onChange={(e)=>setSymbols(e.target.checked)}/>
      <label htmlFor='symbols'> Include symbols</label>
      
    </div>
    <button className='Generate-btn' onClick={generatePassword}>Genertae Password</button>
    <div className="generate-password">
      <input type="text" readOnly  value={password}/>
      <button className='copy-btn' onClick={copyToClipborad}>Copy</button>
    </div>
    
    </div>
      
  
  )
}

export default PasswordGenerater
