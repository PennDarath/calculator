import './App.css'
import { useState } from 'react'
import { Howl } from 'howler'


function App() {
  var sound = new Howl({
  src: ['/public/Untitled.mp3'],
  volume: 0.5,
});


  const [result, setResult] = useState('')
  const handleClick = (e) => {
    setResult(result.concat(e.target.id))
    sound.play();
  }
  const clear = () => setResult("")
  const deleteEl = () => setResult(result.slice(0,-1))

  const calculate = () => {
    try {
      setResult(eval(result).toString())
    } catch(error) {
      setResult("Error")
    }
  }
  return (
    <div className='flex justify-center items-center h-screen w-screen bg-slate-900'>
    <div className='bg-gradient-to-r from-teal-900 via-cyan-900 to-sky-950 w-[300px] h-[410px] pt-9 px-5 rounded-2xl'>
      <h1></h1>
      <input type="text"  value={result} disabled className='w-full mb-9 rounded-lg p-4 text-black bg-slate-400 font-extrabold text-3xl' style={{fontFamily: "monospace", textAlign: 'right'}}/>

      <div className=''>

        <div className='flex justify-between mb-3'> 
        <button className='px-[18px] py-1 bg-red-500 rounded-lg w-14 font-bold text-lg border-2 hover:scale-125 duration-300' style={{fontFamily: "monospace"}} onClick={clear}>AC</button>
        <button className='px-[18px] py-1 bg-gray-100 rounded-lg w-14 font-bold text-lg border-2 border-black hover:scale-125 duration-300' style={{fontFamily: "monospace"}} onClick={deleteEl}>DE</button>
        <button id='.' className='px-[18px] py-1 bg-gray-100 rounded-lg w-14 font-bold text-lg border-2 border-black hover:scale-125 duration-300' style={{fontFamily: "monospace"}} onClick={handleClick}>.</button>
        <button id='/' className='px-[18px] py-1 bg-blue-700 text-white rounded-lg w-14 font-bold text-xl border-2 border-white hover:scale-125 duration-300' style={{fontFamily: "monospace"}} onClick={handleClick}>/</button>
        </div>

        <div className='flex justify-between mb-3'>
        <button id='7' className='px-[18px] py-1 bg-black text-white border-2 rounded-lg w-14 font-bold text-lg hover:scale-125 duration-300' style={{fontFamily: "monospace"}} onClick={handleClick}>7</button>
        <button id='8' className='px-[18px] py-1 bg-black text-white border-2 rounded-lg w-14  font-bold text-lg hover:scale-125 duration-300' style={{fontFamily: "monospace"}} onClick={handleClick}>8</button>
        <button id='9' className='px-[18px] py-1 bg-black text-white border-2 rounded-lg w-14  font-bold text-lg hover:scale-125 duration-300' style={{fontFamily: "monospace"}} onClick={handleClick}>9</button>
        <button id='*' className='px-[18px] bg-blue-700 text-white rounded-lg w-14  font-bold text-xl border-2 border-white hover:scale-125 duration-300' style={{fontFamily: "monospace"}} onClick={handleClick}>*</button>
        </div>

        <div className='flex justify-between mb-3'>
        <button id='4' className='px-[18px] py-1 bg-black text-white border-2  rounded-lg w-14 font-bold text-lg hover:scale-125 duration-300' style={{fontFamily: "monospace"}} onClick={handleClick}>4</button>
        <button id='5' className='px-[18px] py-1 bg-black text-white border-2  rounded-lg w-14 font-bold text-lg hover:scale-125 duration-300' style={{fontFamily: "monospace"}} onClick={handleClick}>5</button>
        <button id='6' className='px-[18px] py-1 bg-black text-white border-2  rounded-lg w-14 font-bold text-lg hover:scale-125 duration-300' style={{fontFamily: "monospace"}} onClick={handleClick}>6</button>
        <button id='+' className='px-[18px] py-1 bg-blue-700 text-white rounded-lg w-14 font-bold text-xl border-2 border-white hover:scale-125 duration-300' style={{fontFamily: "monospace"}} onClick={handleClick}>+</button>
        </div>

        <div className='flex justify-between mb-3'>
        <button id='1' className='px-[18px] py-1 bg-black text-white border-2 rounded-lg w-14  font-bold text-lg hover:scale-125 duration-300' style={{fontFamily: "monospace"}} onClick={handleClick}>1</button>
        <button id='2' className='px-[18px] py-1 bg-black text-white border-2 rounded-lg w-14  font-bold text-lg hover:scale-125 duration-300' style={{fontFamily: "monospace"}} onClick={handleClick}>2</button>
        <button id='3' className='px-[18px] py-1 bg-black text-white border-2 rounded-lg w-14  font-bold text-lg hover:scale-125 duration-300' style={{fontFamily: "monospace"}} onClick={handleClick}>3</button>
        <button id='-' className='px-[18px] py-1 bg-blue-700 text-white rounded-lg w-14 font-bold text-xl border-2 border-white hover:scale-125 duration-300' style={{fontFamily: "monospace"}} onClick={handleClick}>-</button>
        </div>

        <div className='flex justify-between mb-3'>
        <button id='0' className='px-[18px] py-1 bg-black text-white border-2 rounded-lg  w-14 font-bold text-lg hover:scale-125 duration-300' disabled={!result} onClick={handleClick}>0</button>
        <button id='00' className='px-[18px] py-1 bg-black text-white border-2 rounded-lg w-14 font-bold text-lg flex justify-center hover:scale-125 duration-300' disabled={!result} onClick={handleClick}>00</button>
        <button className='px-[18px] py-1 bg-gray-100 rounded-lg w-[123px] font-bold text-lg border-2 border-black hover:scale-125 duration-300'  onClick={!result ? '' : calculate}>=</button>
        </div>

      </div>

    </div>
    </div>
  )
}

export default App
