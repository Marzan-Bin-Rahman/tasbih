import React, { useState } from 'react'

export default function Alhamdulillah() {
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
                    <h1 className='tasbih-text arabic'>ٱلْحَمْدُ لِلَّٰهِ</h1>
                    <h1 className='tasbih-text bengali'>আলহামদুলিল্লাহ</h1>
                    <h1 className='tasbih-text english'>Alhamdulillah</h1>
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
