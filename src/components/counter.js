import react, {useState} from 'react';




export default function Counter({ initial, stock}){
    const [count,setCount] = useState(initial);
    function addItem(){
        if(count < stock){
        setCount ( count + 1 );
        }
    }
    function substractItem(){
        if(count > 0){
            setCount ( count - 1 );
        };
    }
    return(
        <div>
        <i className="fas fa-minus" onClick={substractItem}></i>
        <span>{count}</span>
        <i className="fas fa-plus" onClick={addItem}></i>
        </div>
    );
}