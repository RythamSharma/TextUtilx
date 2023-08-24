import React, {useState} from 'react';
export default function TextForm(props) {
    const [Text, setText] = useState('');
    const handleonchange = (event) =>
    {
        setText(event.target.value);
    }
    const handleonclick = () =>
    {
        let text=Text.toUpperCase();
        setText(text)
    }
    const handleloclick = () =>{
        let text=Text.toLowerCase();
        setText(text)
    }
    const handleclearclick = () =>{
        setText('')
    }
    const handlespacesclick = () =>{
      let text=Text.replace(/\s+/g, ' ').trim();
      setText(text)
    }
    const handlecopyclick = () =>{
      navigator.clipboard.writeText(`${Text}`);
    }
    // const handleemailclick = () =>{
    //   const emailRegex = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b/g;
    //   const reg = Text.match(emailRegex)
    //   setText(reg);
    // }
    const handletitleclick = () =>{
        let text = Text.split(" ");
        for(let i=0; i<text.length; i++)
        {
            let temp =text[i].charAt(0).toUpperCase()+ text[i].toLowerCase().slice(1);
            text[i]=temp;
        }
        let capitalizedText = text.join(" ");
        setText(capitalizedText);
    }
  return (
    <div >
      <div className="mb-3 container my-3 " style={{color:(props.mode)==='dark'?'white':'black'}} >
        <label htmlFor="exampleFormControlTextarea1"  className="form-label fw-bold ">Enter Text below to analyze</label>
        <textarea className="form-control" style={{backgroundColor:(props.mode)==='dark'?'#3B3B3B':'white',color:(props.mode)==='dark'?'white':'black'}} value={Text} onChange={handleonchange} id="exampleFormControlTextarea1" rows="14"></textarea>
        <h2>Your text summary</h2>
        <p>Number of words {Text.split(" ").length} and Number of letters {Text.length}</p>
        <p>Time to read : {Text.split(" ").length*0.24} minutes</p>
        <button className='btn'onClick={handleonclick} style={{backgroundColor: ' #AF0064',color:'white'}} >Uppercase</button>
        <button className='btn  my-2 mx-2'onClick={handleloclick} style={{backgroundColor: ' #AF0064',color:'white'}} >Lowercase</button>
        <button className='btn my-2 mx-0.5'onClick={handletitleclick} style={{backgroundColor: ' #AF0064',color:'white'}} >Titlecase</button>
        <button className='btn my-2 mx-2'onClick={handlespacesclick} style={{backgroundColor: ' #AF0064',color:'white'}} >Remove extra spaces</button>
        {/* <button className='btn mx-2'onClick={handleemailclick} style={{backgroundColor: ' #AF0064',color:'white'}} >extract emails</button> */}
        <button className='btn my-2 mx-0.5'onClick={handleclearclick} style={{backgroundColor: ' #AF0064',color:'white'}} >Clear text</button>
        <button className='btn mx-2'onClick={handlecopyclick} style={{backgroundColor: ' #AF0064',color:'white'}} >Copy text</button>

        <h2>Preview</h2>
        <p>{Text}</p>

      </div>
    </div>
  );
}
