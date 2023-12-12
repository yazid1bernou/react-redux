import { BUY_CAKE } from "./ActionsType";
const initialState =  {
    numberOfCakes : 15 ,
} ;

const reducer =  (state = initialState ,  action) => {
    switch(action.type) {
        case BUY_CAKE : 
          return {
            numberOfCakes :  state.numberOfCakes - 1  
          }
    }
}

export default reducer ;