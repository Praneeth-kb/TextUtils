// import React ,{useState} from 'react'



// export default function TextForm(props) {
//     const handleUpClick=()=>{
//         setText(text.toUpperCase());
//     }

//     const handlelowClick=()=>{
//         setText(text.toLowerCase());
//     }
//     const handleClear=()=>{
//         setText('');
//     }

   

//     const handleOnChange=(event)=>{
//           setText(event.target.value)
//     }
//     const handleCopy=()=>{
//       var text=document.getElementById("MyBox");
//       text.select();
//       navigator.clipboard.writeText(text.value);
//     }

//     const handleExtraSpaces = () => {
//       let newText=text.split(/[ ]+/);
//       setText(newText.join(" "))
//     }

//     const [text,setText]=useState("");

//   return (
//     <>
//     <div className="container" style={{color:props.mode==='dark'?'white':'black'}}>
//     <h1>{props.heading}</h1>
// <div className="mb-3">
//   <textarea className="form-control" value={text} onChange={handleOnChange}  style={{backgroundColor:props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'black'}}  id="MyBox" rows="8"></textarea>
// </div>
//   <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to UpperCase</button>
//   <button className="btn btn-primary mx-2" onClick={handlelowClick}>Convert to lowerCase</button>
//   <button className="btn btn-primary mx-2" onClick={handleClear}>Clear Text</button>
//   <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy Text</button>
//   <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
//     </div>
//     <div className="container my-3" style={{color:props.mode==='dark'?'white':'black'}}>
//         <h2>Your text summary</h2>
//         <p> {text.split(" ").length} words and {text.length} characters</p>
//         <p>{0.008 *text.split(" ").length} minutes to read</p>
//         <h2>Preview</h2>
//         <p>{text.length>0?text:"Enter something in the above textBox to preview"}</p>
//     </div>
       
//     </>
//   )
// }
import React, { useState } from 'react';
import './TextForm.css';

export default function TextForm(props) {
    const handleUpClick = () => {
        setText(text.toUpperCase());
    };

    const handleLowClick = () => {
        setText(text.toLowerCase());
    };

    const handleClear = () => {
        setText('');
    };

    const handleOnChange = (event) => {
        setText(event.target.value);
    };

    const handleCopy = () => {
        navigator.clipboard.writeText(text);
    };

    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
    };

    const [text, setText] = useState("");

    const textStyle = {
        color: props.mode === 'dark' ? 'white' : '#333',
        backgroundColor: props.mode === 'dark' ? '#444' : '#f7f7f7',
    };

    const buttonStyle = {
        backgroundColor: props.mode === 'dark' ? '#555' : '#007bff',
        color: props.mode === 'dark' ? 'white' : 'white',
        borderColor: props.mode === 'dark' ? '#444' : '#007bff'
    };

    return (
        <div className="container" style={{ color: textStyle.color }}>
            <h1 className="mb-4">{props.heading}</h1>

            <div className="mb-3">
                <textarea
                    className="form-control styled-textarea"
                    value={text}
                    onChange={handleOnChange}
                    style={{
                        ...textStyle,
                        borderRadius: '5px',
                        borderColor: props.mode === 'dark' ? '#666' : '#ddd',
                    }}
                    id="MyBox"
                    rows="8"
                    placeholder="Type or paste your text here..."
                ></textarea>
            </div>

            <div className="button-group mb-4">
                <button className="btn mx-1" style={buttonStyle} onClick={handleUpClick}>Uppercase</button>
                <button className="btn mx-1" style={buttonStyle} onClick={handleLowClick}>Lowercase</button>
                <button className="btn mx-1" style={buttonStyle} onClick={handleClear}>Clear</button>
                <button className="btn mx-1" style={buttonStyle} onClick={handleCopy}>Copy</button>
                <button className="btn mx-1" style={buttonStyle} onClick={handleExtraSpaces}>Remove Extra Spaces</button>
            </div>

            <div className="container text-summary" style={{ color: textStyle.color }}>
                <h2>Text Summary</h2>
                <p>{text.split(/\s+/).filter((word) => word).length} words and {text.length} characters</p>
                <p>{(0.008 * text.split(" ").filter((word) => word).length).toFixed(2)} minutes to read</p>
                <h2>Preview</h2>
                <p>{text.length > 0 ? text : "Nothing to preview"}</p>
            </div>
        </div>
    );
}

