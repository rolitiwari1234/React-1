import {connect} from 'react-redux'
import {addToCart} from '../services/Actions/action'
import HomeRedux from "../components/HomeRedux";
import { removeToCart } from '../services/Actions/action';

const mapStateToProps = state => ({
    data:state.cardItems
})

const mapDispatchToProps = dispatch => ({
    addToCartHandler :data => dispatch(addToCart(data)),
    removeToCartHandler : data => dispatch (removeToCart(data))
})

export default connect(mapStateToProps,mapDispatchToProps)(HomeRedux)

// export default HomeRedux;