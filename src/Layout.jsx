import { useEffect, useState } from "react";


function Layout(){

    const [todos, setTodos] = useState([]);
    const [count, setCount] = useState(10);
    const [Load, setLoading] = useState(false);


    useEffect(()=>{
        setLoading(true)
        const getUsers = fetch (`https://jsonplaceholder.typicode.com/comments?_limit=${count}`);

        getUsers.then((data)=>

        data.json().then((getData)=>{

          return setTodos(getData)
        })
        ).catch((error)=>console.log(error)).finally(()=>setLoading(false));
    }, [count])


    return (
        <>
        <div className=' text-3xl text-center text-red-600 font-bold py-4'>This is Layout page here now</div>
        <div className=" flex flex-wrap justify-center gap-4">
         {todos.map((item, index)=>{
            return(
                <div className=" bg-green-400 my-2 py-3 px-9 text-center w-80 rounded-lg text-blue-700 font-bold" key={index}>
                    <h2>{item.id}</h2>
                    <h2>{item.name}</h2>
                    <h2>{item.email}</h2>
                    <p>{item.bold}</p>
                </div>
            )
         })}

          </div>

          <div className="text-center"><button className=" bg-green-900 py-2 px-4 rounded-md my-4 text-white font-bold bttn" onClick={()=>setCount(count+10)}>{Load === true ? "Loading..." : "Load More"}</button></div>
        </>
    )
}

export default Layout;