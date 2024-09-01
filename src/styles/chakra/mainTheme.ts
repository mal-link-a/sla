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
        paddingY: '16px',
        paddingX: '40px',
        borderRadius: '16px',
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
          bg: '#727fc0',
          color: 'white',
          _hover: {
            bg: '#649EB5',
          },
          _disabled: {
            bg: '#DCDBDB',
            color: '#BABABA',
            pointerEvents: 'none',
          },
        },
        ghost: {
          color: '#827F7F',
          _hover: {
            bg: 'transparent',
          },
          _focus: {
            bg: 'transparent',
          },
          _disabled: {
            color: '#BABABA',
            pointerEvents: 'none',
          },
        },
        secondary: {
          bg: 'white',
          color: 'black',
          _hover: {
            bg: '#403B36',
            color: 'white',
          },
          _disabled: {
            bg: '#DCDBDB',
            color: '#BABABA',
            pointerEvents: 'none',
          },
        },
        secondaryOutline: {
          bg: '#F0ECEC',
          color: '#727FC0',
          border: '1px solid',
          _hover: {
            bg: '#FFFFFF',
            color: '#649EB5',
          },
          _active: {
            bg: '#649EB5',
            color: '#FFFFFF',
          },
          _disabled: {
            bg: '#DCDBDB',
            color: '#FFFFFF',
            pointerEvents: 'none',
          },
        },
        secondaryBeige: {
          bg: '#F0ECEC',
          color: '#403B36',
          _hover: {
            bg: '#B1BCF3',
            color: '#403B36',
          },
        },
      },
    },
    Stepper: {
      baseStyle: {
        indicator: {
          '--stepper-accent-color': '#727fc0',
          width: '32px',
          height: '32px',
          border: 'none',
          position: 'relative',
        },
        title: {
          fontSize: 'sm',
          textWrap: 'nowrap',
        },
      },
    },
    Tabs: {
      baseStyle: {
        tab: {
          _focus: {
            bg: 'transparent',
          },
          _selected: {
            color: '#727FC0',
            _hover: {
              color: '#727FC0',
            },
          },
          _hover: {
            color: 'black',
          },
        },
      },
    },
    Checkbox: {
      baseStyle: {
        control: {
          _checked: {
            bg: '#727fc0',
            borderColor: '#727fc0',
            _hover: {
              bg: '#727fc0',
              borderColor: '#',
            },
          },
        },
      },
    },
    Input: {
      baseStyle: {
        field: {
          borderColor: '#727fc0',
        },
        search: {
          backgroundColor: 'white',
          borderColor: 'none',
          borderRadius: '16px',
        },
      },
    },
    Link: {
      baseStyle: {
        _hover: {
          opacity: 0.5,
        },
      },
    },
    Modal: {
      baseStyle: {
        dialogContainer: {
          alignItems: 'center',
        },
        dialog: {
          borderRadius: 32,
          padding: '24px 32px',
          marginTop: 0,
          marginBottom: 0,
        },
        header: {
          padding: 0,
          marginBottom: 7,
          fontSize: 18,
          lineHeight: '24px',
        },
        closeButton: {
          _hover: {
            '--close-button-bg': 'transition',
          },
        },
        body: {
          padding: 0,
        },
        footer: {
          padding: 0,
          marginTop: 7,
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

