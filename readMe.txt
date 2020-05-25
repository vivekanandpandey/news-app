software requirements:
1: node.js V12and above
2: npm 6 and above
3: react 16 and above

Please follow below instruction to Run this app:
1: clone app to local 
2: open project in command promt/terminal
3: Cd news-app
4: npm install
5: npm start

Components:

1: Loader Component: will mount with axois instance inside axios interceptor to show loader on service rrequest and hide on service response.
2: NewsComponent :  NewsComponent has pagination logic and chart based on news document rendring on UI. this component also has a logic to hide and upvote the news.
3: TableComponent: table component render the news based on pagination logic,

Actions:
1: GET_NEWS: fetch response from service 
2: SET_NEWS: update store based on service response
3: SET_PAGE_VIEW_NEWS: set the news fro current page view
4: UPDATE_NEWS: update vote and hide status for the nwews

NOte: to make resopone persited storing store information in localstorage in store.js
