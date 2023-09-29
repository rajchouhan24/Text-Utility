/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable no-restricted-globals */
import React,{useState} from 'react'



export default function Textform(props) {
  const handleUpClick = () => {
    let newText = text.toUpperCase(); 
    setText(newText)
    props.showAlert(" Convert to UpperCase", "success");
  }

   const handlelowClick = () => {
    let newText = text.toLowerCase(); 
    setText(newText)
    props.showAlert(" Convert to LowerCase", "success");
  } 
  
  const handleChangeClick =()=>{
    let newText = document.getElementById("")
    setText(newText)
  }
  
  const handleClearClick = () => {
    let newText = ''
    setText(newText);
    props.showAlert(" Text clear!", "succes");
  }

  const handleExtraSpace = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert(" Remove extra spaces", "succes");
  }

  const handleCopyClick = () => {
    var text = document.getElementById("Textarea1");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert(" Copy text", "succes");
  }
  
  const handleOnchange = () => {
    setText(event.target.value);
  }
  // eslint-disable-next-line no-unused-vars
  const [text, setText ] = useState('');

  return (
    <>
    <div className="container" style={{color: props.mode==='dark'?'white':'black' }}>
        <h4>{props.heading}</h4>
          <div className="mb-3">
            {/* <label for="exampleFormControlTextarea1" className="form-label fs-5">Input Your Text Here</label> */}
            <textarea className="form-control mt-md-5" value = {text} onChange={handleOnchange} style={{backgroundColor: props.mode==='dark'?'grey':'white', color: props.mode==='dark'?'white':'black' }} id="Textarea1" rows="8"></textarea>
            </div>

            <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to UpperCase</button>
            <button className="btn btn-primary mx-1" onClick={handlelowClick}>Convert to LowerCase</button>
            <button className="btn btn-primary mx-1" onClick={handleChangeClick}>Change Langague</button>
            <button className="btn btn-primary mx-1" onClick={handleExtraSpace}>Remove Sapce</button>
            <button className="btn btn-primary mx-1" onClick={handleClearClick}>Clear</button>
            <button className="btn btn-primary mx-1" onClick={handleCopyClick}>Copy</button>
    </div>

    <div className="container my-3" style={{color: props.mode==='dark'?'white':'black' }}>
      <h2>Your Written Summary</h2>
      <p>{text.split(" ").length} word & {text.length} Characater</p>
      <p>{0.08*text.split(" ").length} Time to read</p>
      <h3>Preview</h3>
      <p>{text}</p>
    </div>

    </>
  )
}
