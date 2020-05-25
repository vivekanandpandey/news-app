import React from 'react';
import { Table } from 'reactstrap';
import moment from 'moment';

function TableComponents(props) {

    const findUrl =(url)=>{
        if(url !== null && url !== undefined){
       return url.replace('https://','').split(/[/?#]/)[0];
        }
    }
    return (
        <div>
             <Table striped>
      <thead>
        <tr className="tableheader">
          <th>Comments</th>
          <th>Vote Count</th>
          <th>UpVote</th>
          <th>News Details</th>
        </tr>
      </thead>
      <tbody>
      {props.tableContent.map((content,index) =>{
          return (
              <tr key={index}>
                  <td>{content.num_comments}</td>
                  <td>{content.relevancy_score}</td>
                  <td><i  className ="vote-icon" onClick={()=>props.handlenews(content.objectID, "vote")}>&#9650;</i></td>
          <td>{content.title} <span className="news-url">{`(${findUrl(content.url)}) by`}</span> {content.author}
          <span className="news-url">{` ${moment(content.created_at_i).startOf('hour').fromNow()} `}</span> 
          <span className="news-url">[</span><span className="vote-icon" onClick={()=>{props.handlenews(content.objectID,"hide")}}>hide</span> <span className="news-url">]</span>
          </td>
              </tr>
          )
      })} 
        <tr></tr>
        </tbody>
        </Table>
        </div>
    )
}

export default TableComponents
