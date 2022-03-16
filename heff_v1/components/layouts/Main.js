import Head from 'next/head'
import {
    Box,
    Heading,
} from '@chakra-ui/react'
import Nav from '../Nav'


const Layout = ({ children }) => {


    return (
        <Box as='main' >
            <Head>
                <title>Heffernan Technologies - Bozeman, MT</title>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
                <meta name="description" content="Tech Support and Home Installations in Bozeman, MT"></meta>
                <meta name="keywords" content="Bozeman, Support, Installations"></meta>
                <meta name='robots' content='index, follow' />
                <link rel='icon' type='image/x-icon' href='/three_colors.svg'></link>
            </Head>
            <Box overflow='hidden'>
                <Nav />
                {children}
            </Box>
        </Box>
    )
}


export default Layout 