import {
    Flex,
    Box,
    Heading,

} from '@chakra-ui/react'
import Image from 'next/image'
import Hero from './Hero'

const darkBlueBottom = '/landing3-btm.svg'

// grab bg svg
const yellowBlob = '/yellow_blob.svg'

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
               
                pt='3rem'
                pb='3rem'
                align='center' 
                justify='center'
            >
                <Hero author={'Saul Silverman'} jobTitle={'Drug Dealer'} quote={'Very fast and efficient service. I called and less than an hour later they’re at my door!'} />
            </Flex>
            <Bottom />
        </Box>

    )
}

export default LandingThree