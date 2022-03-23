import { 
    Flex,
    Heading,
    Text,
    useColorModeValue,
    Button,

} from '@chakra-ui/react'



const LandingCard = () => {

    return (
        <>
             <Flex padding={12} flexDir='column' gap='20px' textAlign='left' sx={{
                        background: 'rgba(252, 252, 252, 1)',
                        borderRadius: '60px',
                        borderTopEndRadius: '5px',
                        borderBottomStartRadius: '5px',
                        boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
                        backdropFilter: 'blur(7.6px)',
                        WebkitBackdropFilter: 'blur(7.6px)',
                    }}>
                        <Heading lineHeight={{ base: '2.25rem', md: '3.3rem'}} fontSize={{ base: '33px', md: '40px', lg: '56px' }}>Home Installations & Tech Support</Heading>
                        <Text lineHeight={{ base: '1.25rem', md: '1.65rem'}} fontSize={{ base: '18px', md: '24px',}} color={useColorModeValue('black.900', 'white.100')}>Ames ac turpis egestas sed. Semper viverra nam libero justo laoreet sit amet cursus. Vitae tempus quam pellentesque nec nam. Lectus magna fringilla urna porttitor rhoncus dolor purus non.</Text>
                        <Button h='100%' pt={2} pb={2} maxH='30px' maxW='90px' borderRadius='30px' bg='green.500' color={useColorModeValue('white.100', 'black.900')} _hover={{ bg: useColorModeValue('green.600', 'green.400'), color: useColorModeValue('white.200', 'black.800')}}>Contact</Button>
                    </Flex>
        </>
    )
}

export default LandingCard