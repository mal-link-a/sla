import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
  fonts: {
    heading: `"Manrope", sans-serif`,
  },
  global: {
    'html, body': {
      fontFamily: 'Manrope, sans-serif',
    },
  },
  components: {
    Button: {
      baseStyle: { 
        border: "1px solid",
        borderRadius: '0px',
      },
      sizes: {
        l: {
          h: '56px',
        },
        m: {
          h: '48px',
        },
      },
      variants: {
        solid: {          
          _hover: {            
          },
          _disabled: {           
          },
        },
        ghost: {        
          _hover: {           
          },
          _focus: {           
          },
          _disabled: {            
          },
        },        
      },
    }, 
    Tabs: {
        baseStyle: {
          tab: {            
            _focus: {              
              color: 'white',
            },
            _selected: {
              color: 'white',
              bg: '#274487',
              _hover: {
                color: 'white',
              },
            },
            _hover: {
                
            },
          },
        },
      },    
  },
  colors: {
    main: {
      500: '#b3bcee',
      900: '#727fc0',
    },
  },
});

