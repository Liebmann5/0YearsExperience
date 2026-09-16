const MY_PROJECTS: {
  name: string
  description: string
  previewImage: string
  repoUrl: string
  liveLink: string
  lastUpdate: string
  slug: string
}[] = [
  {
    name: 'AutoApply (Web_Scraper)',
    description: 'AutoApply is a software that automates 99% of the job hunt. A user fills out 1 job application then provides any work requirements or criteria and AutoApply fills out job applications until you get hired!',
    liveLink: 'https://nicholasliebmann.com',
    previewImage: '/cropped-aa-web_scraper.png',
    repoUrl: 'https://github.com/Liebmann5/Web_Scraper',
    lastUpdate: '2025-03-03',
    slug: 'autoapply-web-scraper',
  },
  {
    name: 'AutoApply (Software)',
    description: 'Part 1/3 | The software is responsible for all user interaction and applying to jobs.',
    liveLink: 'https://github.com/Liebmann5/AA',
    previewImage: '/cropped-aa-software.png',
    repoUrl: 'https://github.com/Liebmann5/Web_Scraper/tree/main/AutoApply',
    lastUpdate: '2025-03-05',
    slug: 'autoapply-software',
  },
  {
    name: 'AutoApply (PiServer)',
    description: 'Part 2/3 | The PiServer is responsible for managing itself, the API, the Database, sending out software updates, collecting data, & running statistical analyzes.',
    liveLink: 'https://picluster.ricsanfre.com/',
    previewImage: '/cropped-aa-piserver.png',
    repoUrl: 'https://github.com/Liebmann5/Web_Scraper/tree/main/PiServer',
    lastUpdate: '2025-03-05',
    slug: 'autoapply-piserver',
  },
  {
    name: 'AutoApply (Website)',
    description: 'Part 3/3 | The website is responsible for being the best resource when it comes to helping users with AutoApply & displaying useful job market data.', // &&   https://mldangelo.com/
    liveLink: 'https://nicholasliebmann.com',
    previewImage: '/project4.png',
    repoUrl: 'https://github.com/Liebmann5/Web_Scraper/tree/main/ProjectWebpage',
    lastUpdate: '2025-03-05',
    slug: 'autoapply-website',
  },
  {
  name: 'AutoApply (Research Telemetry)',
  description: 'An opt-in, zero-PII data collection pipeline to study the hiring market.',
  liveLink: 'https://github.com/Liebmann5/AA/tree/main/packages/auto_apply/src/auto_apply/domain/services/signal_detectors',
  previewImage: '/cropped-aa-research.png',
  repoUrl: 'https://github.com/Liebmann5/AA',
  lastUpdate: '2026-06-01',
  slug: 'autoapply-research-platform', // must match the .md filename exactly — do not change
},
  {
    name: 'Todo List App',
    description: 'The classic programmer rite of passage: learning React by building a To-Do list directly from the official documentation.The classic programmer rite of passage: learning React by building a To-Do list directly from the official documentation.',
    liveLink: 'http://localhost:3000',
    previewImage: '/cropped-todo-app.png',
    repoUrl: 'https://github.com/Liebmann5/TodoList_App',
    lastUpdate: '2023-02-23',
    slug: 'todolist-app',
  },
  {
    name: 'Global Land Temp Heat Map',
    description: 'A data visualization project mapping historical global land surface temperatures.',
    liveLink: 'https://codepen.io/Liebmann5/pen/rNrzxNJ',
    previewImage: '/cropped-global-heat-map.png',
    repoUrl: 'https://github.com/Liebmann5/Monthly_Global_Land-Surface_Temperature',
    lastUpdate: '2025-03-05',
    slug: 'global-land-temp-heat-map',
  },
/*
  {
    name: 'Project 4',
    description: 'Lorem ipsum dolor sit amet',
    liveLink: 'https://google.com',
    previewImage: '/project4.png',
    repoUrl: 'https://github.com
    lastUpdate: '2025-03-03',
    slug: 'autoapply-web-scraper',',
  },
*/
]

export default MY_PROJECTS
