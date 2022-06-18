/**
 * ⚠ These are used just to render the Sidebar!
 * You can include any link here, local or external.
 *
 * If you're looking to actual Router routes, go to
 * `routes/index.js`
 */
const routes = [
  {
    path: '/dashboard', // the url
    icon: 'HomeIcon', // the component being exported from icons/index.js
    name: 'Dashboard', // name that appear in Sidebar
  },
  {
    path: '/collect', // the url
    icon: 'EditIcon', // the component being exported from icons/index.js
    name: 'Collect', // name that appear in Sidebar
  },
  {
    path: '/organize', // the url
    icon: 'ImageIcon', // the component being exported from icons/index.js
    name: 'Organize', // name that appear in Sidebar
  },
  {
    path: '/request', // the url
    icon: 'SearchIcon', // the component being exported from icons/index.js
    name: 'Request', // name that appear in Sidebar
  },
  {
    path: '/describe', // the url
    icon: 'SearchIcon', // the component being exported from icons/index.js
    name: 'Describe', // name that appear in Sidebar
  },
  {
    icon: 'PagesIcon',
    name: 'Pages',
    routes: [
      // submenu
      {
        path: '/login',
        name: 'Login',
      },
      {
        path: '/create-account',
        name: 'Create account',
      },
      {
        path: '/forgot-password',
        name: 'Forgot password',
      },
      {
        path: '/app/404',
        name: '404',
      },
      {
        path: '/app/blank',
        name: 'Blank',
      },
    ],
  },
]

export default routes
