
const initialState={
    news :[],
    pageViewNews:[]
};

const newsReducer = (state=initialState,action)=>{
    switch(action.type){
        case 'SET_NEWS':
        return{
            ...state,
            news:[...state.news,...action.payload],
            pageViewNews:[...action.payload]
        }
        case "SET_PAGE_VIEW_NEWS":
        return{
            ...state,
            pageViewNews:[...action.payload]
        }
        case 'UPDATE_NEWS':
            return{
                ...state,
                news:[...action.payload.news],
                pageViewNews:[...action.payload.viewNews]
            }
        default:
        return state
    }
};

export default newsReducer;
