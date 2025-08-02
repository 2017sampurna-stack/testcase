import React, { useState } from 'react';
// import Alert from './Alert';

export default function TextForm(props) {
  const [text, setText] = useState('');
  const [history, setHistory] = useState([]);
  const [future, setFuture] = useState([]);

  const updateText = (newText) => {
    setHistory([...history, text]);
    setFuture([]);
    setText(newText);
  };

 const handleUpclick = () => {
  updateText(text.toUpperCase());
  props.showAlert("Converted to Uppercase!", "success");
};

const handleLoclick = () => {
  updateText(text.toLowerCase());
  props.showAlert("Converted to Lowercase!", "success");
};


  const handleClearclick = () => {
    updateText('');
  };

  const handleCopyClick = () => {
    navigator.clipboard.writeText(text);
    alert("Text copied to clipboard!");
  };

  const handleExtraSpaces = () => {
    updateText(text.split(/[ ]+/).join(" "));
  };

  const handleBoldClick = () => {
    updateText(`**${text}**`);
  };

  const handleItalicClick = () => {
    updateText(`*${text}*`);
  };

  const handleUndo = () => {
    if (history.length > 0) {
      const prev = history[history.length - 1];
      setFuture([text, ...future]);
      setHistory(history.slice(0, history.length - 1));
      setText(prev);
    }
  };

  const handleRedo = () => {
    if (future.length > 0) {
      const next = future[0];
      setHistory([...history, text]);
      setFuture(future.slice(1));
      setText(next);
    }
  };

  const handleonChange = (event) => {
    setText(event.target.value);
  };

  return (
    <>
      <div className='container'>
        <h1 className="mb-4">{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            style={{
              backgroundColor: '#ffffff',
              color: 'black',
              border: '1px solid #ced4da',
              borderRadius: '6px'
            }}
            value={text}
            onChange={handleonChange}
            id="MyBox"
            rows="8"
          ></textarea>
        </div>

        <div className="d-flex flex-wrap gap-2 mb-4">
          <button className='btn btn-primary' onClick={handleUpclick}>Uppercase</button>
          <button className='btn btn-primary' onClick={handleLoclick}>Lowercase</button>
          <button className='btn btn-primary' onClick={handleBoldClick}>Bold</button>
          <button className='btn btn-primary' onClick={handleItalicClick}>Italic</button>
          <button className='btn btn-primary' onClick={handleClearclick}>Clear</button>
          <button className='btn btn-primary' onClick={handleCopyClick}>Copy</button>
          <button className='btn btn-primary' onClick={handleExtraSpaces}>Remove Spaces</button>
          <button className='btn btn-primary' onClick={handleUndo} disabled={history.length === 0}>Undo</button>
          <button className='btn btn-primary' onClick={handleRedo} disabled={future.length === 0}>Redo</button>
        </div>
      </div>

      <div className='container my-4'>
        <h2>Your text summary</h2>
        <p>{text.split(/\s+/).filter((element) => element.length !== 0).length} words and {text.length} characters</p>
        <p>{0.008 * text.split(/\s+/).filter((e) => e.length !== 0).length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text : "Enter your text to preview...."}</p>
      </div>
    </>
  );
}
