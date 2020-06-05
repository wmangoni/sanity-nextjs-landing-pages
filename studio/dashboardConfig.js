export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5edaa6893a487ce9aa1d891d',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-7ve9ethy',
                  apiId: '2e00b491-78db-456f-aff7-a29836ddb9e4'
                },
                {
                  buildHookId: '5edaa68af5a8b0c9f5ce7ed3',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-d7f5hrfe',
                  apiId: '9ed91793-1880-4dbe-b964-bb4f1b6e99f6'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/wmangoni/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-d7f5hrfe.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
