import {
    Flex,
    Box,
    Heading,

} from '@chakra-ui/react'
import Image from 'next/image'

const darkBlueBottom = '/landing3-btm.svg'


const LandingThree = () => {

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
                mt={20}
                mb={20}
                p={20}
                align='center' 
                justify='center'
            >
                <Flex>
                    
                    <Heading as='h1' fontSize='xl'>Landing Three</Heading>


                </Flex>
            </Flex>
            <Bottom />
        </Box>

    )
}

export default LandingThree