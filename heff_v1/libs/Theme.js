import { extendTheme } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'



const styles = {
    global: props => ({
        body: {
            bg: mode('#F1F1F1', '#191919')(props),
        }
    })
}

const textStyles = {
    landing: {
        fontSize: 'clamp(2rem, 2.25rem, 4rem)',
        fontWeight: 'medium',
        letterSpacing: '-1%'
    },
    landingDesc: {
        fontSize: 'clamp(.8rem, 1.1rem, 2.25rem)',
        fontWeight: 'medium',
        letterSpacing: '-1%'
    },
    smallTitle: {
        fontSize: 'clamp(.45rem, .4rem, 1.5rem)',
        fontWeight: 'medium',
        letterSpacing: '-1%',
    }
}

const fonts = {
    heading: "'Fredoka'",
    body: "'Fredoka'"
}

const colors = {
    green: {
        400: '#BCF9E0',
        500: '#81E1BA',
        600: '#0F7B4F'
    },
    blue: {
       400: '#497E9A', 
       500: '#204F68' 
    },
    heffBlue: {
        400: '#497E9A',
        500: '#205F68'
    },
    white: {
        100: '#FCFCFC',
        200: '#F1F1F1',
        300: '#E2E2E2'
    },
    black: {
        800: '#5E5E5E',
        900: '#191919'
    },

}

// const components = {
//     Button: {
//         baseStyle: {
//             _focus: {
//                 ringColor: 'blue.500',
//                 ring: 3,
//                 borderRadius: '30px',
//             },
//         },
//         variants: {
//             'primary': {
//                 bg: 'green.500',
//                 color: 'mono.100',
//                 _hover: {
//                     bg: 'green.100',
                    
//                 }
//             }
//         }
//     }
// }

const config = {
    initialColorMode: 'light',
    useSystemColorMode: false,
}



const Theme = extendTheme({
    config,
    fonts,
    colors,
    styles,
    textStyles,

})


export default Theme 