import {connect} from 'react-redux'
import {addToCart} from '../services/Actions/action'
import HomeRedux from "../components/HomeRedux";


const mapStateToProps = state => ({
       cardData:state
})

const mapDispatchToProps = dispatch => ({
    addToCartHandler :data => dispatch(addToCart(data))
})

export default connect(mapStateToProps,mapDispatchToProps)(HomeRedux)

// export default HomeRedux;