import React from 'react'
import iphone from '../images/iphone.png'

function HomeRedux(props) {
    console.warn("homeredux",props)
    return (
        <div>
            <div className="add-to-cart">
                <img src="https://static.vecteezy.com/system/resources/thumbnails/000/496/007/small/Ecommerce_998.jpg" />
            </div>
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