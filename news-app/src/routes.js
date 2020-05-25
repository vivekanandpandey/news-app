import NewsComponent from './Components/NewsComponent'

const Routes = [
  {
    path: '/',
    exact: true,
    component: NewsComponent
  },
  {
    path: '/news/:pageNo',
    component: NewsComponent,
  }
];

export default Routes;