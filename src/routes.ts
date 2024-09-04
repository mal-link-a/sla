export const ROUTE = {
    APP: '/',
    LESSON: {
        PATH: '/lesson/*',
        PATTERN: 'lesson/',
        SINGLE: {
            PATTERN: 'single',
            PATH: '/lesson/single',      
        },
        GROUPS:{
            PATTERN: 'groups',
            PATH: '/lesson/groups',      
        }    
    },
    WORK: {
        PATH: '/work',
        PATTERN: 'work/*',                 
    },
    INFLUENCE: {
        PATH: '/influence',
        PATTERN: 'influence/*',
    },
    ABOUT: {
        PATH: '/about',
        PATTERN: 'about/*',
    }
  } as const;
  