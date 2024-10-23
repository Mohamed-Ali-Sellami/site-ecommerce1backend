import React from 'react'
import "./Accessoires.css"
const Accessoires = () => {

  const allproducts = useSelector((store)=>store.Product?.product)
  console.log("voici all products",allproducts)
   const accessoires = allproducts.filter((data) => data?.Category === "Accessoires");
   console.log(accessoires)

  return (
    <div className='content-accessoires'>
      <h1>Accessoires</h1>

      <div className='boxphone'>
    {accessoires?.map((el)=><Card data={el}/>)}
      </div>
    </div>
  )
}

export default Accessoires
