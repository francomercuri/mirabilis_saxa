import react, {useState} from 'react';




export default function Counter({onAdd, initial, stock}){
    
    const [count,setCount] = useState(initial);

    function addItem(){
        {count < stock && setCount ( count + 1 )};
    }
    function substractItem(){
    {count > 0 && setCount ( count - 1 )};
    }
    return(
        <div>
            <div>
        <i className="fas fa-minus" onClick={substractItem}></i>
        <span>{count}</span>
        <i className="fas fa-plus" onClick={addItem}></i>
        </div>
        <div>
        <button onClick={onAdd}>
			Agregar al carrito
		</button>
        </div>
        </div>
    );
}