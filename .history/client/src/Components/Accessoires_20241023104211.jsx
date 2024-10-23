import React from 'react'
import "./Accessoires.css"
const Accessoires = () => {

  const allproducts = useSelector((store)=>store.Product?.product)
  console.log("voici all products",allproducts)
   const smartphones = allproducts.filter((data) => data?.Category === "Accessoires");
   console.log(smartphones)

  return (
    <div className='content-accessoires'>
      <h1>Accessoires</h1>
    </div>
  )
}

export default Accessoires
