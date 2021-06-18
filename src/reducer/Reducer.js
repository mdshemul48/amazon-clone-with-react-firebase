export const initialState = {
    basket: [{ id: "3434234234", title: "new apple ipad pro max", price: 59, rating: 3, image: "https://fdn2.gsmarena.com/vv/bigpic/apple-ipad-pro-12-2020.jpg" }],
}

function reducer(state, action) {
    console.log(action)
    switch (action.type) {
        case "ADD_TO_BASKET":
            // logic for adding item to basket

            return { ...state, basket: [...state.basket, action.item] }
        case "REMOVE_FROM_BASKET":
            // logic for removing item from basket
            let newBasket = [...state.basket]
            const index = state.basket.findIndex((basketItem) => basketItem.id === action.id)
            if (index => 0) {
                newBasket.splice(index, 1)
            } else {
                console.warn("can't remove product.")
            }
            return { ...state, basket: newBasket }
        default:
            return state;
    }
}

export default reducer;