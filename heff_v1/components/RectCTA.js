import {
    Flex,
    Box,
    Heading,
    Button,
    useColorModeValue,

} from '@chakra-ui/react'
import Image from 'next/image'

const Rectangle = () => {

    const svg = '/end-graphic2.svg'

    return (
        <Box
            // gap={{ base: '.5rem', md: '1rem'}}
            zIndex={0} 
            position='relative' 
            textAlign='center' 
            align='center' 
            justify='center' 
            borderRadius='lg' 
            bg='blue.500' 
            height='100%' 
            width='100%' 
            maxW='container.md' 
            pt={{ base: '1rem', md: '3rem' }} 
            pb={{ base: '1rem', md: '3rem' }} 
            pr={{ base: '2.5rem', md: '5rem' }} 
            pl={{ base: '2.5rem', md: '5rem' }}
            sx={{
                boxShadow: '0 8px 30px rgba(0, 0, 0, 0.1)',
            }}
        >
            <Box zIndex={0}>
                <Image layout='fill' objectFit='cover' src={svg} alt='Background Graphic Image' />
            </Box>
            <Flex
                align='center'
                justify='center'
                flexDir='column'
                gap={{ base: '.5rem', md: '1rem' }}
                >
                    <Heading zIndex={2} as='h2' color='white.100' fontSize={{ base: 'xl', md: 'x-large' }}>Let Us Make Your Day Easier</Heading>
                    <Button h='100%' pt={1} pb={1} w='100%' maxW='100px'  borderRadius='30px' bg='green.500' color='white.100' _hover={{ bg: 'green.400', color: 'black.800'}}>Contact</Button>
                </Flex>
        </Box>
    )
}

export default Rectangle