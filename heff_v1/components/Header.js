import {
    Heading, 
    Box,
    Flex,
} from '@chakra-ui/react'


const Header = ({ highlight, landing, highlightColor, landingColor }) => {

    return (
        <Box p={4}>
            <Flex flexDir='column' align='center' justify='center' textAlign='center'>
                <Heading as='h4' color={highlightColor} fontSize={{ base: '14px', md: '20px' }}>{highlight}</Heading>
                <Heading as='h2' color={landingColor}  textStyle='landing'>{landing}</Heading>
            </Flex>
        </Box>
    )
}


export default Header 