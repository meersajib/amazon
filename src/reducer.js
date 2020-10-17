export const initialState = {
    basket: [],
}

export const getBasketTotal = (basket) => 
    basket?.reduce((amount,item) => item.price + amount, 0)

function reducer(state, action) {
    console.log(action)
    switch (action.type) {
        case 'ADD_TO_BASKET':
            //LOGIC FOR ADD PRODUCT TO BASKET
            return {
                ...state,
                basket: [...state.basket, action.item]
            }
        case 'REMOVE_FROM_BASKET':
            //LOGIC FOR REMOVING ITEM FROM BASKET
            let newBasket = [...state.basket]
            const index = state.basket.findIndex((basketItem) => basketItem.id === action.id)
            if (index >= 0) {
                newBasket.splice( index, 1 )
            }
            else {
                console.warn(`Can't remove product (id: ${action.id} it's not in basket!)`)
            }
            return {
                ...state,
                basket: newBasket
            }
        default:
            return state
        
    }
}

export default reducer