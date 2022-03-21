import { 
    Flex,
    Heading,
    Button,
    useColorModeValue,
} from '@chakra-ui/react'
import HeroCard from './HeroCard'



const HeroText = ({ highlight, header }) => {

    return (
        <Flex maxW='400px' p={16} flexDir='column' >
            <Heading as='h4' color='blue.500' fontSize={{ base: '14px', md: '20px' }}>{highlight}</Heading>
            <Heading as='h2' color='black.900'  textStyle='landing'>{header}</Heading>
            <Button h='100%' mt={4} pt={2} pb={2} maxH='30px' maxW='90px' borderRadius='30px' bg='green.500' color={useColorModeValue('white.100', 'black.900')} _hover={{ bg: useColorModeValue('green.600', 'green.400'), color: useColorModeValue('white.200', 'black.800')}}>Contact</Button>

        </Flex>
    )
}



const Hero = ({ author, jobTitle, quote, pic }) => {

const yellowBlob = '/yellow_blob.svg'


    return (
        <Flex  
        bgImg={yellowBlob}
        bgPosition={{ base: 'bottom', md: 'right'}}
        bgSize='contain'
        bgRepeat='no-repeat' 
        justify='space-between' 
        p={8} 
        flexDir={{ base: 'column', md: 'row' }} 
        gap={{ base: '1.5rem', md: '5rem'}} 
        >
            <HeroText highlight={'SERVICE'} header={'Nothing Beats Our Customer Service'} />
            <HeroCard author={author} jobTitle={jobTitle} quote={quote} pic={pic} />
        </Flex>
    )
}

export default Hero 


