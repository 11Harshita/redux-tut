import React from 'react'
function Header(props)
{
    console.warn('home',props.data)
    return(
        <div>
            <div className='add-to-cart'>
                <span>{props.data.length}</span>
<img src='https://www.seekpng.com/png/detail/134-1343882_shopping-cart-png-shopping-cart-icon-3d.png'/>

            </div>
       
        </div>
    )
}
export default Header