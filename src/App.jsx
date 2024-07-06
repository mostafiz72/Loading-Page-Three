import { useState } from 'react';
import Layout from './Layout';
import './App.css'



function App(){
const [post, setPost] = useState(false);

  return(
      <>
    <header  className=" bg-blue-700 text-center text-white font-bold text-3xl py-8">
         <div className="container">
         <h1>This is Heading.</h1>
         <div className="text-right"><button onClick={()=>setPost(!post)} className=' bg-red-600 py-2 px-4 rounded-md bbtn'>Change Page!</button></div>
         </div>
    </header>

     {post === true ? <Layout /> : <div className=' text-3xl text-center text-red-600 font-bold py-4'>This is App page here now</div>}

    <footer className=' bg-slate-700 text-center text-white font-bold text-3xl py-8'>
      <h2>This is footer.</h2>
      <p className=' text-sm py-4'>2024 All Right Reserved.</p>
    </footer>
    </>
  )
}

export default App;