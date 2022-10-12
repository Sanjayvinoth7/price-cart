import React from 'react'

function Cart({cartItems,removeFromCart}) {
  return (
    <>
      {
        cartItems.length === 0 ? <div>No items in Cart</div> :
        <>
     <ol class="list-group list-group-numbered">
    {
        cartItems.map((items)=>{
           return ( <li class="list-group-item d-flex justify-content-between align-items-start">
           <div class="ms-2 me-auto">
             <div class="fw-bold">{items.name}</div>
             Rs.{items.price}
           </div>
           <button onClick={() => { 
           removeFromCart(items)
           }} class="badge bg-primary rounded-pill">x</button>
         </li>
           );
        })
    }
</ol>  
<h3>Total : Rs.{
   cartItems.reduce((prev,curr)=>{
       return prev =prev + curr.price
   },0) }

</h3>
</>
}
</>
  )
}

export default Cart;


