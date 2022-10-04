import React, { useState } from 'react'

export default function Alhamdulillah() {
     const [count, setCount] = useState(0);
     const handleIncrease = () => {
          setCount(count + 1);
     };
     return (
          <div className="tasbih">
               <div className="text-container">
                    <h1 className='tasbih-text'>Alhamdulillah</h1>
               </div>
               <div className='btn-containar'>
                    <div className='circle-1'>
                         <div className='circle-2'>
                              <button className="btn" onClick={handleIncrease}>{count}</button>
                         </div>
                    </div>
               </div>
          </div>
     )
}
