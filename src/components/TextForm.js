import React ,{useState} from 'react'



export default function TextForm(props) {
    const handleUpClick=()=>{
        setText(text.toUpperCase());
    }

    const handlelowClick=()=>{
        setText(text.toLowerCase());
    }
    const handleClear=()=>{
        setText('');
    }

   

    const handleOnChange=(event)=>{
          setText(event.target.value)
    }
    const handleCopy=()=>{
      var text=document.getElementById("MyBox");
      text.select();
      navigator.clipboard.writeText(text.value);
    }

    const handleExtraSpaces = () => {
      let newText=text.split(/[ ]+/);
      setText(newText.join(" "))
    }

    const [text,setText]=useState("");

  return (
    <>
    <div className="container" style={{color:props.mode==='dark'?'white':'black'}}>
    <h1>{props.heading}</h1>
<div className="mb-3">
  <textarea className="form-control" value={text} onChange={handleOnChange}  style={{backgroundColor:props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'black'}}  id="MyBox" rows="8"></textarea>
</div>
  <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to UpperCase</button>
  <button className="btn btn-primary mx-2" onClick={handlelowClick}>Convert to lowerCase</button>
  <button className="btn btn-primary mx-2" onClick={handleClear}>Clear Text</button>
  <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy Text</button>
  <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
    </div>
    <div className="container my-3" style={{color:props.mode==='dark'?'white':'black'}}>
        <h2>Your text summary</h2>
        <p> {text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008 *text.split(" ").length} minutes to read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter something in the above textBox to preview"}</p>
    </div>
       
    </>
  )
}
