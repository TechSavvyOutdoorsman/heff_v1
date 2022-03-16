import {
    Box,
    Flex,
    Heading,
    Button,
    useColorModeValue,
} from '@chakra-ui/react'




const Nav = props => {
    // const { path } = props 

    return (
        <Flex
        bg={useColorModeValue('white.100', 'black.900')}
        minW='100%'
        justify='space-between'
        align='center'
        zIndex='100'
        position='fixed'
        h='45px'
        >
            <Heading ml='20px' as='h1' fontSize='lg' fontWeight='600'>Heffernan Technologies</Heading>
            <Box>
                <Flex mr='20px' align='center' gap='20px'>
                    <Heading as='h3' fontSize='md' fontWeight='medium'>Services</Heading>
                    <Heading as='h3' fontSize='md' fontWeight='medium'>About</Heading>
                    <Button h='100%' pt={.5} pb={.5} w='100%' maxW='90px' maxH='20px' borderRadius='30px' bg='green.500' color={useColorModeValue('white.100', 'black.900')} _hover={{ bg: useColorModeValue('green.600', 'green.400'), color: useColorModeValue('white.200', 'black.800')}}>Contact</Button>
                </Flex>
            </Box>
        </Flex>
    )
}


export default Nav