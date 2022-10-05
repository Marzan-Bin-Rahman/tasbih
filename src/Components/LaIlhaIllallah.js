import React, { useState } from 'react'

export default function LaIlhaIllallah() {
     const [count, setCount] = useState(0);
     const handleIncrease = () => {
          setCount(count + 1);
     };
     const handleReset = () => {
          setCount(0);
     };
     return (
          <div className="tasbih">
               <div className="text-container">
                    <h1 className='tasbih-text arabic'>لا إله إلا الله</h1>
                    <h1 className='tasbih-text bengali'>লা ইলাহা ইল্লাল্লাহ</h1>
                    <h1 className='tasbih-text english'>La Ilha Illallah</h1>
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
     )
}
