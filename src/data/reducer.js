import project1 from '../assets/projects/mysql-project.png'
import project2 from '../assets/projects/typescript-project.png'
import project3 from '../assets/projects/nodejs-project.jpeg'
import { 

    nodejs,
    typeScript,
    mysql,
    mongodb,
    react,
    tailwind,
    stripe,
    figma,
} from '../components/export'

const initialState = {
     data : [
        {
          id : 1,
          title : 'MySql CLI Tool',
          description : 'A CLI tool to manage mysql databases and tables, just from your terminal.',
          image : project1,
          stack : [
             nodejs,mysql
          ],
          hasdemo : false,
          demo : '',
          github : '',
          full_desc : 'A CLI tool to manage mysql databases and tables, just from your terminal. It is built with NodeJS and MySQL. It is a very useful tool for developers who work with MySQL databases. It is very easy to use and has a very simple user interface. It is a very useful tool for developers who work with MySQL databases. It is very easy to use and has a very simple user interface. It is a very useful tool for developers who work with MySQL databases. It is very easy to use and has a very simple user interface. It is a very useful tool for developers who work with MySQL databases. It is very easy to use and has a very simple user interface. It is a very useful tool for developers who work with MySQL databases. It is very easy to use and has a very simple user interface. It is a very useful tool for developers who work with MySQL databases. It is very easy to use and has a very simple user interface.'
        },
        {
          id : 2,
          title : 'frazProp - Aquarium Landing Page',
          description : 'Discover your dream home with FrazProp – where every listing is a masterpiece, and your journey to extraordinary living begins!',
          image : project2,
          stack : [
            react, tailwind, typeScript,mongodb, stripe, figma
          ],
          hasdemo : true,
          demo : 'https://frazprop.com/',
          github : 'https://github.com/redaezziani/aquarium-landing-page',
          full_desc : '🏡 Welcome to FrazProp – Your Premier Hub for Real Estate Excellence! Explore the pinnacle of property discovery as we present FrazProp, your ultimate destination for buying, selling, and renting exquisite apartments and houses. '
        },
        {
          id : 3,
          title : 'AnimeScraper - REST API',
          description : 'A REST API to get anime details, episodes, and download links. Built with NodeJS, ExpressJS, and CheerioJS.',
          image : project3,
          stack : [
            nodejs, mongodb, typeScript
          ],
          hasdemo : false,
          demo : '',
          github : '',

          full_desc : 'A REST API to get anime details, episodes, and download links. Built with NodeJS, ExpressJS, and CheerioJS. A REST API to get anime details, episodes, and download links. Built with NodeJS, ExpressJS, and CheerioJS. A REST API to get anime details, episodes, and download links. Built with NodeJS, ExpressJS, and CheerioJS. A REST API to get anime details, episodes, and download links. Built with NodeJS, ExpressJS, and CheerioJS. A REST API to get anime details, episodes, and download links. Built with NodeJS, ExpressJS, and CheerioJS. A REST API to get anime details, episodes, and download links. Built with NodeJS, ExpressJS, and CheerioJS. A REST API to get anime details, episodes, and download links. Built with NodeJS, ExpressJS, and CheerioJS.'
        },
      ],
      project1 : {
        id : 1,
        title : 'MySql CLI Tool',
        description : 'A CLI tool to manage mysql databases and tables, just from your terminal.',
        image : project1,
        stack : [
           nodejs,mysql
        ],
        hasdemo : false,
        demo : '',
        github : '',
        full_desc : 'A CLI tool to manage mysql databases and tables, just from your terminal. It is built with NodeJS and MySQL. It is a very useful tool for developers who work with MySQL databases. It is very easy to use and has a very simple user interface. It is a very useful tool for developers who work with MySQL databases. It is very easy to use and has a very simple user interface. It is a very useful tool for developers who work with MySQL databases. It is very easy to use and has a very simple user interface. It is a very useful tool for developers who work with MySQL databases. It is very easy to use and has a very simple user interface. It is a very useful tool for developers who work with MySQL databases. It is very easy to use and has a very simple user interface. It is a very useful tool for developers who work with MySQL databases. It is very easy to use and has a very simple user interface.'
      },
};

const reducer = (state = initialState, action) => {
  return state;
};


export default reducer;