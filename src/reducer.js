const tag = "[reducer]";

export const initialState = {
    basket: [],
    user: null
};

export const getBasketTotal = (basket) => (
    basket?.reduce(function(prev, value){
        return prev + value.price;
    }, 0)
)

const reducer = (state, action) => {

    console.log(tag, action);
    
    switch(action.type){
        case 'ADD_TO_BASKET' : 
            return {
                ...state,
                basket: [...state.basket, action.item]
            };

        case 'DELETE_FROM_BASKET' : 
            let newBasket = [...state.basket];

            const deleteIdx = newBasket.findIndex(element => (
                element.id === action.item.id
            ))
            
            if(deleteIdx >= 0) newBasket.splice(deleteIdx, 1);
            else console.warn("Cannot remove product!!!")
            
            return {
                ...state,
                basket: newBasket
            };
        
        case 'SET_USER':
            return {
                ...state,
                user : action.user
            }

        case 'EMPTY_BASKET' : 
            return {
                ...state,
                basket : []
            }

        default:
            return state;
    }
}

export default reducer;