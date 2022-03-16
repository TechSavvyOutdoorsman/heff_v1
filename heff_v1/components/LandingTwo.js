import {
    Box,
    Flex,
    Heading, 
    Text, 
    Button,
    useColorModeValue, 
} from '@chakra-ui/react'
import Image from 'next/image'

const blueTop = '/blue_sec_top.svg'

const Top = () => {
    return (
        <Box minW='100vw'  >
            <Image layout='fill' src={blueTop} alt='Top of Blue Background'/>
        </Box>
    )
}

const LandingTwo = () => {

    const blueBottom = '/blue_sec_bottom.svg'

    return (
        <>
        <Top />
        <Flex pos='relative'>
            <Flex
            minH='100vh'
            minW='100vw'
            bg='#497E9A'
            >
            
            </Flex>
            <Image mt='328px' layout='fill' src={blueBottom} alt='Top of Blue Background' />
        </Flex>
        </>
    )
}


export default LandingTwo