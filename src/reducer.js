const tag = "[reducer]";

export const initialState = {
    basket: [],
};

export const getBasketTotal = (basket) => (
    basket?.reduce(function(prev, value){
        console.log(prev + value.price);
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

        default:
            return state;
    }
}

export default reducer;