const initialState = {
    users: [],
    accounts: [],
};

const rootReducer = (state = initialState, action) => {
    
    switch(action.type){
        case 'ADD_USER':
            return Object.assign({}, state, { users: state.users.concat(action.payload)});
        default:
            return state; 
    }
}

export default rootReducer;