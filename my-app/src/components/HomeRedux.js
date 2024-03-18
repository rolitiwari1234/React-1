import React from 'react'
import iphone from '../images/iphone.png'

function HomeRedux(props) {
    // console.warn("homeredux",props.data)
    return (
        <div>
            
            <h1>HomeRedux Component</h1>    
            <div className="cart-wrapper">
                <div className="img-wrapper item">
                    <img src= {iphone} width = '150'height='150'/>
                </div>
                <div className="text-wrapper item">
                    <span>
                        I-Phone
                    </span>
                    <span>
                        Price: $1000.00
                    </span>
                </div>
                <div className="btn-wrapper item">
                    <button onClick = {()=>props.addToCartHandler({price:10000,name:'iphone-13'})}>Add To Cart</button>
                </div>
            </div>
        </div>
    )
}
export default HomeRedux