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
        PATH: '/work/*',
        PATTERN: 'work/*',
        PARTTIME: {
            PATTERN: 'part-time',
            PATH: '/work/part-time',      
        },          
    },
    INFLUENCE: {
        PATH: '/influence/*',
        PATTERN: 'influence/*',
    }
  } as const;
  