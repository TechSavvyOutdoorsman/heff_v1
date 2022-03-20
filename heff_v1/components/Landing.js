import {
    Box,
    Flex,
    Heading, 
    Text, 
    Button,
    useColorModeValue, 
} from '@chakra-ui/react'
import Image from 'next/image'
import styled from '@emotion/styled'


const bgSvg = '/landing_bg_5.svg'

const LandingImg = () => {
    return (
        <Box zIndex={0} >
            <Image objectFit='contain' layout='fill' src={bgSvg} alt='SVG background Image' priority/>
        </Box>
    )
}

const EyeCatch = styled.h1`
    font-size: 13vw;
    line-height: 100%;

    @media(min-width: 768px){
        font-size: 6vw;
    }
    @media(min-width: 1400px){
        font-size: 3.5vw;
    }

`

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
                    <Flex flexDir='column' gap='20px'  textAlign='left' >
                        <EyeCatch>Home Installations & Tech Support</EyeCatch>
                        <Text as='p' color={useColorModeValue('black.900', 'white.100')}>Ames ac turpis egestas sed. Semper viverra nam libero justo laoreet sit amet cursus. Vitae tempus quam pellentesque nec nam. Lectus magna fringilla urna porttitor rhoncus dolor purus non.</Text>
                        <Button h='100%' pt={.5} pb={.5} maxH='30px' maxW='90px' borderRadius='30px' bg='green.500' color={useColorModeValue('white.100', 'black.900')} _hover={{ bg: useColorModeValue('green.600', 'green.400'), color: useColorModeValue('white.200', 'black.800')}}>Contact</Button>
                    </Flex>
                </Flex>
                <Box w='50%'></Box>
            </Flex>
        </Flex>
    )
}


export default Landing