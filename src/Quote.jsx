import { useEffect, useState } from "react";

//import htmlToImage from 'html-to-image';
//import {saveAs} from 'file-saver';

//import './quote.css';

export default function Quote(){
    let [quote ,setQuote] = useState({});
    const[color,setColor]=useState('White');
    const[fontFamily,setFontFamily]=useState();

    const quote_URL="https://api.quotable.io/quotes?tags=happiness";

    const quoteGenerator = async ()=>{
        let result = await fetch(quote_URL);
        let jsonResponse = await result.json();
        console.log(jsonResponse);
        setQuote({setup:jsonResponse.results[0].content , author:jsonResponse.results[0].author});
        
    }
    
    /*
    const handleDownload=()=>{
        htmlToImage.toJpeg((curQuote)=>{saveAs(curQuote)});
    }
    */
   
    const handleColor=color=>{
        setColor(color);
    }
    const handleFont=fontFamily=>{
        setFontFamily(fontFamily);
    }
    useEffect(()=>{
        document.body.style.fontFamily=fontFamily;
    },[fontFamily])
    useEffect(()=>{
        document.body.style.color = color;
    },[color])
    
   return(
        <div>
            <h2>Quote Generator</h2>
            <div className="quote">
                <h2 className="quote">{quote.setup}</h2>
                <h3 className="quote">{quote.author}</h3>
            </div>
            <button onClick={quoteGenerator}>Get New quote</button>
            <hr />
            <h4>Color Button</h4>
            <button style={{color: "red",marginInline:5}}onClick={()=>handleColor("red")}>Red</button>
            <button style={{color: "blue",marginInline:5}}onClick={()=>handleColor("blue")}>Blue</button>
            <button style={{color: "yellow",marginInline:5}}onClick={()=>handleColor("yellow")}>yellow</button>
            <button style={{color: "pink",marginInline:5}}onClick={()=>handleColor("pink")}>pink</button>
            <button style={{color: "orange",marginInline:5}}onClick={()=>handleColor("orange")}>orange</button>
            <hr />
            <h4>For the Font</h4>
            <button style={{color: "orange",marginInline:5,fontFamily:"Plus Jakarta Sans, sans-serif"}}onClick={()=>handleFont("Plus Jakarta Sans, sans-serif")}>Plus Jakarta Sans</button>
            <button style={{color: "orange",marginInline:5,fontFamily:"Single Day, cursive"}}onClick={()=>handleFont("Single Day, cursive")}>single day</button>
            <button style={{color: "orange",marginInline:5,fontFamily:"Rubik Burned', system-ui"}}onClick={()=>handleFont("Rubik Burned, system-ui")}>Rubik Burned</button>
            <button style={{color: "orange",marginInline:5,fontFamily:"IBM Plex Sans Condensed, sans-serif"}}onClick={()=>handleFont("IBM Plex Sans Condensed, sans-serif")}>IBM Plex</button>
            <button style={{color: "orange",marginInline:5,fontFamily:"Rubik Glitch Pop, system-ui"}}onClick={()=>handleFont("Rubik Glitch Pop, system-ui")}>Glitch Pop</button>
            <hr />
            <br />
            <button> Download </button>
        </div>
    )
}