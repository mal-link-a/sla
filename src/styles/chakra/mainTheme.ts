import { background, extendTheme } from '@chakra-ui/react';

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
          h:"40px",
          w:"100%",
          borderRadius:0,      
          bg:"#274487",
          color:"#FFFFFF"  ,        
          _hover: { 
            background: "#1E90FF"           
          },
          _disabled: {           
          },
          _active: {
            background: "#191970",  
          }
        },
        work: { 
          fontSize:"16px",
          fontWeight: "400",
          textDecoration: "none",
          textTransform: "uppercase", 
          border: "0 solid",
          boxShadow: "inset 0 0 20px rgba(255, 0, 255, 0)",
          outline: "1px solid",
          outlineColor: "rgba(0, 0, 0, .5)",
          outlineOffset: "0px",
          textShadow: "none",
          transition: "all 1250ms cubic-bezier(0.19, 1, 0.22, 1)",
          background: "transprent",       
          _hover: {  
            boxShadow: "inset 0 0 20px rgba(255, 255, 255, .5), 0 0 20px rgba(255, 255, 255, .2)",
            outlineColor: "rgba(255, 255, 255, 0)",
            outlineOffset: "15px",
            textShadow: "1px 1px 2px #427388", 
            color: "#000080",       
          },
          _focus: {  
            boxShadow: "inset 0 0 20px rgba(255, 255, 255, .5), 0 0 20px rgba(255, 255, 255, .2)",
            textShadow: "1px 2px 3px #427388",   
            color: "#000080",           
          },
          _disabled: {            
          },
          _active: {
            background: "#1E90FF",  
          }
        },        
      },
    }, 
    Tabs: {
        baseStyle: {
          tab: { 
            background:"white",
            height:"48px",   
            borderBottom: "0px solid",        
            _focus: {         
              color: '#4682B4',
              border: "none",
              textShadow: "#4682B4 1px 0 16px",      
            },
            _selected: {
              
              color: '#000080',
              borderBottom: "3px solid",
              textShadow: "#4682B4 1px 0 16px",
              _hover: {
                color: '#4682B4',
              },
            },
            _hover: {              
              color: '#4682B4', 
              textShadow: "#4682B4 1px 0 16px",  
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

