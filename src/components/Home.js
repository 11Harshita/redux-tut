import React from 'react'
function Home(props)
{
    console.warn('home',props)
    return(
        <div>
            
            <h1>Home Component</h1>


        <div className='cart-wrapper'>
            <div className='img-wrapper item'>
                <img src='https://pngimage.net/wp-content/uploads/2018/06/new-mobile-png-3.png'/>
            </div>

            <div className='text-wrapper item'>
                <span>
                    IPhone

                </span>
                <br/>
                <span>
                    Price:$1000.00
                    </span>
            </div>

            <div className='btn-wrapper item'>
                <button onClick={()=>
                    props.addToCartHandler({Price:1000,Name:'IPhone 14'})
                }>Add To Cart</button>

                 <button className='remove-to-cart' 
                 onClick={()=>
                    props.removeToCartHandler({Price:1000,Name:'IPhone 14'})
                }>Remove To Cart</button>
            </div>

            
        </div>
        
        
        </div>
    )
}
export default Home