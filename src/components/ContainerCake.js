import React from "react";
import {buyCake} from "../redux/cakeActions";
import { connect } from "react-redux";
const ContainerCake = (props) => {
    return (
        <div>
            <h1> Numbers of Cake : {props.numberOfCakes} </h1>
            <button onClick={props.buyCake}> Buy cake</button>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        numberOfCakes :  state.numberOfCakes 
    }
}

const mapDispatchToProps = (dispatch) => {
     return {
        buyCake : ()=> dispatch(buyCake())
     }
}
export default connect(mapStateToProps , mapDispatchToProps)(ContainerCake);