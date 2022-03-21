import {
    Box,
    Flex,
    Heading, 
    Divider,
    Text, 
    Button,
    useColorModeValue, 
} from '@chakra-ui/react'
import Image from 'next/image'
import Header from './Header'
import InfoCards from './InfoCards'

const blueTop = '/blue2-top.svg'
const blueBottom = '/blue-bottom.svg'

const Top = () => {
    return (
        <Box zIndex={0} pos='relative' overflow='hidden' >
            <Image objectFit='cover' layout='responsive' width={1439} height={360} src={blueTop} alt='Top of Blue Background' />
        </Box>
    )
}


const Bottom = () => {
    return (
        <Box zIndex={0} pos='relative'  display='block' >
            <Image objectFit='cover' layout='responsive' width={1440} height={479} src={blueBottom} alt='Bottom of Blue Background' />
        </Box>
    )
}

const LandingTwo = () => {


    return (
        <Box>
            <Top />
                <Flex zIndex={1} flexDir='column' >
                    <Flex
                    pt='3rem'
                    pb='3rem'
                    bg='blue.500'
                    align='center'
                    justify='center'
                    flexDir='column'
                    gap='2rem'
                    >
                        <Header highlightColor={'green.500'} landingColor={'white.100'}  highlight={'SERVICES'} landing={'Let Us Help  You Out'} />
                        <InfoCards />
                    </Flex>
                </Flex>
            <Bottom /> 
        </Box>
    )
}


export default LandingTwo