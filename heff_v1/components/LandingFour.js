import {
    Flex,
    Box,
    Heading,

} from '@chakra-ui/react'
import Image from 'next/image'

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
            p={20}
            bg='white.300'
            align='center' 
            justify='center'
        >
            <Flex>
                
                <Heading as='h1' fontSize='xl'>Landing Four</Heading>

            </Flex>
        </Flex>
        <Bottom />
    </Box>
    )
}

export default LandingFour
