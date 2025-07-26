import React from 'react';
import {useState} from 'react';

function Xspell(){

    const customDictionary = {
        teh : "the",
        wrok : "work",
        fot : "for",
        exampl : "example"
    }
    const [data, setData] = useState("")
    const [currWord, setcurrWord] = useState();

    function handleInputChange(e){
        const input = e.target.value;
       setData(input);
       const words = input.split(" ");
       const currectWord = words.map((word)=>{
          const currectWord = customDictionary[word.toLocaleLowerCase()];
          return currectWord || word;
       })

       const currectText = currectWord.join(" ");
     const  fcurrectedWord = currectWord.find((word, index)=>
         word !== words[index]
       )
       setcurrWord(fcurrectedWord||"");
    }
    return(
        <div>
            <h1>Spell Check and Auto-Correction</h1>
            <textarea
                value={data}
                placeholder='Enter text...'
                onChange={handleInputChange}
                rows={5}
                cols={40}
            />
            {
                currWord && (
                    <p>Did you mean <strong>{currWord}</strong>?</p>
                )
            }
        </div>
    )
}

export default Xspell;