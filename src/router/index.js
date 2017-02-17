// 路由服务
import Vue from 'vue';
import Router from 'vue-router';
import details from '../components/details/details';
import courseDetails from '../components/details/course_details';
import courseOutline from '../components/details/course_outline';
import courseIssue from '../components/details/course_issue';

Vue.use(Router);

const detailsRoutes = [
  {
    path: '/',
    redirect: 'courseDetails'
  },
  {
    path: 'courseDetails',
    component: courseDetails
  },
  {
    path: 'courseOutline',
    component: courseOutline
  },
  {
    path: 'courseIssue',
    component: courseIssue
  }
];

export default new Router({
  linkActiveClass: 'active',
  routes: [
    {
      path: '/',
      redirect: '/details'
    },
    {
      path: '/details',
      component: details,
      children: detailsRoutes
    }
  ]
});
