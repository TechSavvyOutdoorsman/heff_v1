import {
    Flex,
    Box,
    Heading,

} from '@chakra-ui/react'
import Image from 'next/image'
import Header from './Header'

const darkBlueBottom = '/grey-bottom.svg'

const LandingFour = () => {

    const Bottom = () => {
        return (
            <Box zIndex={0} pos='relative' display='block'>
                <Image objectFit='cover' layout='responsive' width={1440} height={590} src={darkBlueBottom} alt='Picture of Dark Blue Swoosh' />
            </Box>
        )
    }

    return (
        <Box>
        <Flex 
            pt='3rem'
            pb='3rem'
            bg='white.300'
            align='center' 
            justify='center'
        >
        <Header landing={'What Some Cool People Had To Say'} highlight={'REVIEWS'} highlightColor='blue.500' landingColor='black.900' />
        </Flex>
        <Bottom />
    </Box>
    )
}

export default LandingFour
