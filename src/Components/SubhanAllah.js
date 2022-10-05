import React, { useState } from 'react';
import '../index.css';
export default function SubhanAllah() {
     const [count, setCount] = useState(0);
     const handleIncrease = () => {
          setCount(count + 1);
     };
     const handleReset = () => {
          setCount(0);
     };
     return (
          <div>
               <h1 className="header-text english">Tasbiyah</h1>
               <div className="tasbih">
                    <div className="text-container">
                         <h1 className='tasbih-text arabic'>سُـبْحانَ الله</h1>
                         <h1 className='tasbih-text bengali'>সুবহান আল্লাহ</h1>
                         <h1 className='tasbih-text english'>SubhanAllah</h1>
                         <button className='reset-btn english' onClick={handleReset}>Reset</button>
                    </div>
                    <div className='btn-container'>
                         <div className='circle-1'>
                              <div className='circle-2'>
                                   <button className="btn english" onClick={handleIncrease}>{count}</button>
                              </div>
                         </div>
                    </div>
               </div>
          </div>
     )
}
