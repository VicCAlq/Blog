import n001_computing_basics from './001_computing_basics';
import n002_web_basics from './002_web_basics';
import n003_javascript_basics from './003_javascript_basics';
import n004_javascript_oop from './004_javascript_oop';

const index = {
  l1: {
    name: 'Introdução à computação e ao terminal',
    path: 'n001-computing-basics',
    lesson: n001_computing_basics,
  },
  l2: {
    name: 'Introdução à Web',
    path: 'n002-web-basics',
    lesson: n002_web_basics,
  },
  l3: { 
    name: 'Introdução ao JavaScript',
    path: 'n003-javascript-basics',
    lesson: n003_javascript_basics,
  },
  l4: {
    name: 'Introdução à Orientada a Objetos em JavaScript',
    path: 'n004-javascript-oop',
    lesson: n004_javascript_oop,
  },
};

export default index;
