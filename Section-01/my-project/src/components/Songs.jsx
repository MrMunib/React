import React from 'react'

function Songs() {
    const myData = [
        { name: 'Mahiya Vey',
            description : "lorem ipsum dolor sit amet, consectetur adipiscing",
        },
        { name: 'Musafir',
            description : "lorem ipsum dolor sit amet, consectetur adipiscing",
        },
    ]
    let btnClickController = ()=>{
        alert('Download Started')
    }
  return (
    <div className='w-full h-screen bg-zinc-200 flex flex-col gap-4 items-center justify-center'>
    {myData.map((elem, index)=>(
            <div className='w-90 px-3 py-2 bg-zinc-100 rounded '>
            <h3 className='font-semibold text-xl'>{elem.name}</h3>
            <p className='text-xs mt-2'>{elem.description}</p>
            {/* <button onClick={()=>{alert('Download Started')}} className='px-2 py-1 bg-blue-400 text-xs font-semibold text-zinc-100 rounded-md mt-3'>Download Now</button> */}
            <button onMouseOver={btnClickController} className='px-2 py-1 bg-blue-400 text-xs font-semibold text-zinc-100 rounded-md mt-3'>Download Now</button>
        </div>
    ))}
    </div>
  )
}

export default Songs