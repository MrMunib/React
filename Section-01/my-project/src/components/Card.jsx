import React from "react";

function Card(){

    const data = [
        {image : "https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            name : "Amazon Basics",
            "description": "Amazon lorem ipsum dolor sit amet, consectetur adipiscing",
            instock : true
        },
        {image : "https://www.ecommerce-nation.com/wp-content/uploads/2018/01/Shopify-ecommerce-platform.png.webp",
            name : "Shopify Basics",
            "description": "Shopify lorem ipsum dolor sit amet, consectetur adipiscing",
            instock : false
        },
        {image : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNJwQP12hOP9Ii2RGGFtMgQxm9lD29ecIZ1g&s",
            name : "Ebay Basics",
            "description": "Ebay lorem ipsum dolor sit amet, consectetur adipiscing",
            instock : true
        },
    ]
    
    return (
        <>

        <div  className="w-full h-screen flex items-center justify-center flex-wrap gap-10 bg-zinc-200">

        {data.map((elem, index)=>(
            <div className="w-52 bg-zinc-100  rounded-md overflow-hidden" >
            <div className="w-full h-32 bg-zinc-300">
                <img className="w-full h-full object-cover" src={elem.image} alt="" />
            </div>
            <div className="w-full px-3 py-4">
                <h2 className="font-semibold">{elem.name}</h2>
                <p className="text-xs mt-5">{elem.description}</p>
                <button className={`py-1 px-4 text-xs rounded mt-3 text-zinc-100 ${elem.instock ? 'bg-blue-600' : 'bg-red-600'}`}>
                    {elem.instock ? "In Stock" : "Out of Stock"}
                </button>
            </div>
            </div>
        ))}
            
        </div>
        
        </>
    )
}


export default Card;