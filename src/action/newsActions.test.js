import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as actionCreators from './newsActions';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const mockServiceCreator = (body, succeeds = true) => () =>
  new Promise((resolve, reject) => {
    setTimeout(() => (succeeds ? resolve(body) : reject(body)), 10);
  });

  describe("News actions", () => {
    let store;
    // set up a fake store for all our tests
    beforeEach(() => {
      store = mockStore({ newsFeed: {} });
    });

    test('should fetch news from service',()=>{
        store
        .dispatch(
          mockServiceCreator("REQUIRED_BODY"),
        )
        .then((res) => expect(store.dispatch(actionCreators.setNews(res.data.hits))).toContainEqual({
            type:"SET_NEWS",
            payload:res.data.hits
        }));
    })
    test('should setup setNews action object ', () => {
        const payload =[]
        const action = actionCreators.setNews(payload)
        expect(action).toEqual({
            type:"SET_NEWS",
            payload:payload
        })
      });
    
      test('should setup setPageViewNews action object ', () => {
        const payload =[]
        const action = actionCreators.setPageViewNews(payload)
        expect(action).toEqual({
            type:"SET_PAGE_VIEW_NEWS",
            payload:payload
        })
      });
    
      test('should setup updateNews action object ', () => {
        const news =[]
        const viewNews =[]
        const action = actionCreators.updateNews(news,viewNews)
        expect(action).toEqual({
            type:"UPDATE_NEWS",
            payload:{news,viewNews}
        })
      });
  });