import {
Box,
Flex,
Heading, 
Text, 
    Button,
    useColorModeValue, 
} from '@chakra-ui/react'
import Image from 'next/image'
import LandingCard from './LandingCard'


const bgSvg = '/landing_bg_5.svg'

const LandingImg = () => {
    return (
        <Box zIndex={0} >
            <Image objectFit='contain' layout='fill' src={bgSvg} alt='SVG background Image' priority/>
        </Box>
    )
}


const Landing = () => {


    return (
        <Flex
        minH='100vh'
        minW='100vw'
        align='center'
        justify='center'
        position='relative'
        overflow='visible'
        >
        <LandingImg />
            <Flex zIndex={3} w='100%' p='20px' maxW='container.lg' sx={{
                flexDirection: 'column',
                justifyContent: 'end',
                '@media(min-width: 768px)': {
                    flexDirection: 'row',
                    paddingLeft: '40px'
                }
            }}>
                <Flex align='center' justify='center' w='100%'>
                    <LandingCard />
                </Flex>
                <Box w='50%'></Box>
            </Flex>
        </Flex>
    )
}


export default Landing