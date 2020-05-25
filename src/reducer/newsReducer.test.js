import newsReducer from './newsReducer'
describe("News reducers", () => {
test("dataRequested", () => {
    const initialState={
        news :[],
        pageViewNews:[]
    };
    const action =  {
        type:"SET_NEWS",
        payload:[]
    };
    const newState = newsReducer(initialState, action);
    expect(newState).toEqual({
        news:[...initialState.news,...action.payload],
        pageViewNews:[...action.payload]
    });
  });
  test("dataRequested", () => {
    const initialState={
        news :[],
        pageViewNews:[]
    };
    const action =  {
        type:"SET_PAGE_VIEW_NEWS",
        payload:[]
    };
    const newState = newsReducer(initialState, action);
    expect(newState).toEqual({
        news:[],
        pageViewNews:action.payload
    });
  });
  test("dataRequested", () => {
    const initialState={
        news :[],
        pageViewNews:[]
    };
    const action =  {
        type:"UPDATE_NEWS",
        payload:{news:[],viewNews:[]}
    };
    const newState = newsReducer(initialState, action);
    expect(newState).toEqual({
        news:[...action.payload.news],
        pageViewNews:[...action.payload.viewNews]
    });
  });
});