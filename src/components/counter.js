import react from 'react';



export default function Counter({ setCount, count }){
    
    return(
        <div>
        <i className="fas fa-minus" onClick={() => {setCount(count - 1)}}></i>
        <span>{count}</span>
        <i className="fas fa-plus" onClick={() => setCount(count + 1)}></i>
        </div>
    );
}