import React, { useState } from 'react';
import phrases from '../phrases.json'



const Phrase = () => {

    const random = Math.floor(Math.random() * phrases.length)
    const [newPhrase, setNewPhrse] = useState(random)

    const newButton = () => {
        const randomPhrase = Math.floor(Math.random() * phrases.length)
        setNewPhrse(randomPhrase)
    }

    const colors = ["#4A1647", "#F0B1E8", "#00C9C9", "#9EA0FF", "#E8D5B5", "#FFFADE", "#FFF6FF", "#F9F871"]
    const newColor = Math.floor(Math.random() * colors.length)
    document.body.style = `background: ${colors[newColor]}`

    

    const [likess, setLike] = useState(true)

    const like = () => {
     setLike(!likess)
      } 


    return (
        <div className='container' style={{ color: colors[newColor] }}>
            <h3 > <i className='bx bxs-quote-alt-left bx-lg'></i> {" "} {phrases[newPhrase].quote}</h3>
            <h4>{phrases[newPhrase].author}</h4>
            <button style={{ background: colors[newColor] }} onClick={newButton}><i className="fa-solid fa-chevron-right "></i></button>
            
            <div className='like' onClick={like} style= {{color: "fuchsia"}} >
             {likess ? <i className='bx bx-heart'></i> : <i className='bx bxs-heart' ></i>}
            </div>
        </div>
    );
};

export default Phrase; 
