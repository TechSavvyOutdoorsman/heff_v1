import { extendTheme } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'



const styles = {
    global: props => ({
        body: {
            bg: mode('#F1F1F1', '#191919')(props),
        }
    })
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
       500: '#204F68' 
    },
    white: {
        100: '#FCFCFC',
        200: '#F1F1F1',
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

})


export default Theme 