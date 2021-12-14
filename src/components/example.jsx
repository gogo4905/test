import React, {useState, useEffect} from 'react';

const Example = props =>{
    const [count, setCount] = useState(0);

    useEffect(()=>{
       document.title = `What time?${count}`;
    });

    return(
        <div>
            <p>You Clicked {count} Times</p>
            <button onClick={()=>setCount(count + 1 )}>
                Click me
            </button>
        </div>
    );
}

export default Example;
