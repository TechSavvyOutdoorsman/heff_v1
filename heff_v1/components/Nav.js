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
        <Box
        bg={useColorModeValue('white.100', 'black.900')}
        minW='100%'
        zIndex='100'
        position='fixed' 
        align='center'
        h='45px'
        >
            <Flex mt='10px' maxW='container.xl' justify='space-between'>
                <Heading ml='20px' as='h1' fontSize='lg' fontWeight='600'>Heffernan Technologies</Heading>
                <Box>
                    <Flex mr='20px' align='center' gap='20px'>
                        <Heading as='h3' fontSize='md' fontWeight='medium'>Services</Heading>
                        <Heading as='h3' fontSize='md' fontWeight='medium'>About</Heading>
                        <Button h='100%' pt={.5} pb={.5} w='100%' maxW='90px' maxH='30px' borderRadius='30px' bg='green.500' color={useColorModeValue('white.100', 'black.900')} _hover={{ bg: useColorModeValue('green.600', 'green.400'), color: useColorModeValue('white.200', 'black.800')}}>Contact</Button>
                    </Flex>
                </Box>
            </Flex>
        </Box>
    )
}


export default Nav