import react, {useState} from 'react';




export default function Counter({ initial, count, setCount, stock }){
    
    return(
        <div>
        <i className="fas fa-minus" onClick={() => {setCount( count -1 )}}></i>
        <span>{initial}</span>
        <i className="fas fa-plus" onClick={() => setCount( count +1 )}></i>
        </div>
    );
}