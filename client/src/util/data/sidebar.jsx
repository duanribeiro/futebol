export const sidebarData = [
  {
    name: 'sidebar.intro',
    routepath: '/Intro',
    iconClass: 'fas fa-chalkboard'
  },
 ];

// Comments:::::::

//  If you want one level child then look below example

/*
  {
    name: 'sidebar.forms',
    iconClass: 'fab fa-wpforms',
    child: [
      {
        listname: 'sidebar.regularforms',
        routepath: '/regularform',
        shortname: 'RF'
      }
    ]
  }
*/

//  If you want Second level child then look below example

/*
   {
      name: 'sidebar.pages',
      iconClass: 'fas fa-print',
      child: [
        {
          listname: 'sidebar.authentication',
          iconClass: 'fas fa-user',
          child: [
            {
              listname: 'sidebar.login',
              routepath: '/login',
              shortname: 'L'
            },
          ]
        }
      ]
    }
*/
