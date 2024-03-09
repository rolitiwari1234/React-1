import {connect} from 'react-redux'
import {addToCart} from '../services/Actions/action'
import HomeRedux from "../components/HomeRedux";


const mapStateToProps = state => ({

})

const mapDispatchToProps = display => ({
    addToCartHandler :data => display(addToCart(data))
})

export default connect(mapStateToProps,mapDispatchToProps)(HomeRedux)

// export default HomeRedux;