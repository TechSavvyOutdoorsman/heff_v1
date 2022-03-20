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

const blueTop = '/blue_sec_top.svg'
const blueBottom = '/blue-bottom.svg'

const Top = () => {
    return (
        <Box zIndex={0} pos='relative' display='block'>
            <Image objectFit='cover' layout='responsive' width={1440} height={359} src={blueTop} alt='Top of Blue Background' />
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
                    // bgImg={blueTop}
                    // backgroundRepeat='no-repeat'
                    // bgPosition='top'

                    minH='100vh'
                    minW='100vw'
                    // bg='white.100'
                    bg='#497E9A'
                    align='center'
                    justify='center'
                    >
                        <Flex gap='20px' justify='space-evenly'>
                            <Heading>heading</Heading>
                        </Flex>
                    </Flex>
                </Flex>
            <Bottom /> 
        </Box>
    )
}


export default LandingTwo