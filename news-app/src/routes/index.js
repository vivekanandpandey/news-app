
import NewsComponent from '../Components/NewsComponent'
export default [
  {
   
    routes: [
      {
        path: '/',
        exact: true,
        component:NewsComponent
      },
      {
        path: '/articles/:id',
        component:NewsComponent
      },
     
    ]
  }
];
