import { useEffect, useState } from 'react';
import './ItemCount.css';
import Counter from './counter.js'


export default function ItemCount({ suma, resta }) {
    const [count, setCount] = useState(0);
    return (
      <div>
        <Counter setCount={setCount} count={count} />
        {/* <Button func={suma} numA={count} numB={count} /> */}
      </div>
    );
  }
  
