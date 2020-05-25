import{createStore,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducer/index';


const saveToLocalStorage= (state)=>{
try{
let serializedState =JSON.stringify(state);
localStorage.setItem('state',serializedState);
}
catch(e){
    console.log(e)
}
}

const loadFromLocalStorage=()=>{
    try {
        let serializedState = localStorage.getItem('state');
        if(serializedState===null) return undefined
        return JSON.parse(serializedState)
    }
    catch(e){
        console.log(e)  
        return undefined;
    }
}

const persistedState = loadFromLocalStorage();

const Store= createStore(
             rootReducer, 
             persistedState,
             applyMiddleware(thunk)
             );
Store.subscribe(()=>{saveToLocalStorage(Store.getState())})


export default Store;