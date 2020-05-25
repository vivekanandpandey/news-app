import React, {useEffect} from 'react';
import {useSelector , useDispatch} from 'react-redux';
import * as actioncreators from '../action/newsActions';
import {useParams , useHistory }from 'react-router-dom';
import TableComponent from './TableComponent';
import {LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer} from 'recharts';

function NewsComponent() {
    const dispatch =useDispatch();
    const newsFeed = useSelector(state=> state.newsFeed)
    const params = useParams();
    const history = useHistory(); 
    useEffect(() => {
        let pageNo =  params.pageNo === undefined ? 1:params.pageNo;
        dispatch(actioncreators.getNews(parseInt(pageNo)))
      },[]);
    function handlePagination(pageFlow){
          let pageNo =  params.pageNo === undefined ? 1:params.pageNo;
          let PageViewNo=  pageFlow ==="prev" ? parseInt(pageNo)-1:parseInt(pageNo)+1;
          let startIndex = (PageViewNo-1)*20;
          let endIndex = (PageViewNo)*20 ;
          let viewNews = JSON.parse(JSON.stringify(newsFeed.news.slice(startIndex, endIndex)));
          history.push(`/news/${PageViewNo}`);
          if (viewNews.length>0){
         dispatch(actioncreators.setPageViewNews([...viewNews]));
          }else{
            dispatch(actioncreators.getNews(PageViewNo));
          }
    }
    
       const handlenews=(objectid,action)=>{
        const tempNews =[...newsFeed.news];
        const tempPageNews =[...newsFeed.pageViewNews];
        let newsIndex =tempNews.findIndex(news=>{return news.objectID === objectid });
        let pageViewNewsIndex =tempPageNews.findIndex(news=>{return news.objectID === objectid });
        if(newsIndex!== null && pageViewNewsIndex !== null){
        if(action === "vote"){
            tempNews[newsIndex].relevancy_score = isNaN(tempNews[newsIndex].relevancy_score)?1:tempNews[newsIndex].relevancy_score+ 1 ;
            tempPageNews[pageViewNewsIndex].relevancy_score = isNaN(tempPageNews[pageViewNewsIndex].relevancy_score)? 1:tempPageNews[pageViewNewsIndex].relevancy_score +1 ;
       }else if (action === "hide"){
          tempNews.splice(newsIndex,1);
          tempPageNews.splice(pageViewNewsIndex,1)

        }
        dispatch(actioncreators.updateNews(tempNews,tempPageNews))

        }
       }
    return (
        <>
       {newsFeed.pageViewNews.length>0 && <div className="news-container">
            <div className="border-class">
            <TableComponent 
            tableContent= {newsFeed.pageViewNews} 
            handlenews={handlenews}
            />
            <div className="news-bottom">
            <div className="news-pagination">
           {params.pageNo!== undefined && params.pageNo!== "1" && <span className="pointer" onClick={()=>handlePagination("prev")}>Previous</span>}
           <span>|</span>
            <span className="pointer" onClick={()=>handlePagination("next")}>Next</span>
            </div>
            <div className="chart-container">
            <ResponsiveContainer width='100%' height={200}>
            <LineChart data={newsFeed.pageViewNews} fill="#ccc">
            <XAxis dataKey="objectID" label={{ value: "ID", position: "insideBottomCenter", dy: 10, fill: 'black'}} />
            <YAxis label={{ value: "Votes", position: "insideLeft", angle: -90,   dy: -10, fill: 'black'}} />
            <CartesianGrid stroke="#000" vertical={false}   />
            <Line type="monotone" dataKey="relevancy_score" stroke="#8884d8" dot={{fill: 'blue'}} />
            </LineChart>
            </ResponsiveContainer>
            </div>
  </div>
            </div>
        </div>}
        </>
    )
}

export default NewsComponent;
