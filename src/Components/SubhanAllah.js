import React, { useState } from 'react';
import '../index.css';
export default function SubhanAllah() {
     const [count, setCount] = useState(0);
     const handleIncrease = () => {
          setCount(count + 1);
     };
     return (
          <div>
               <h1 className="header-text">Tasbih</h1>
               <div className="tasbih">
                    <div className="text-container">
                         <h1 className='tasbih-text'>SubhanAllah</h1>
                    </div>
                    <div className='btn-containar'>
                         <div className='circle-1'>
                              <div className='circle-2'>
                                   <button className="btn" onClick={handleIncrease}>{count}</button>
                              </div>
                         </div>
                    </div>
               </div>
          </div>
     )
}
