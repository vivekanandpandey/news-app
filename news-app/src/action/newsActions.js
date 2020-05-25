import axiosInstance from '../utils/axiosInstance';

export const getNews=(pageNo)=>
{ return (dispatch) =>{
    axiosInstance(`search?page=${pageNo}`).then(
        result=>{
            dispatch(setNews(result.data.hits))
        }
    ).catch(error=>{
        console.log(error);
    })
}
   
    
}

export const setNews= (news)=>{
    return{
        type:"SET_NEWS",
        payload:news
    }
}

export const setPageViewNews =(viewNews)=>{
  return {
      type:"SET_PAGE_VIEW_NEWS",
      payload:viewNews
  }
}

export const updateNews =(news,viewNews)=>{
    return {
        type:"UPDATE_NEWS",
        payload:{news,viewNews}
    }
}