import {
    Flex,
    Box,
    Heading,

} from '@chakra-ui/react'
import Image from 'next/image'

const darkBlueBottom = '/dark-blue-bottom.svg'


const LandingThree = () => {

    const Bottom = () => {
        return (
            <Box zIndex={0} pos='relative' display='block'>
                <Image objectFit='cover' layout='responsive' width={1440} height={358} src={darkBlueBottom} alt='Picture of Dark Blue Swoosh' />
            </Box>
        )
    }

    return (
        <Box>
            <Flex 
                minW='100vw'
                minH='100vh'
            >

            </Flex>
            <Bottom />
        </Box>

    )
}

export default LandingThree