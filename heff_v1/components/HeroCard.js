import { 
    Heading, 
    Text, 
    Box, 
    Flex
} from '@chakra-ui/react'
import Image from 'next/image'

const AuthorImg = ({ pic }) => {

    return (
        <Box 
            bg={'rgba(252, 252, 252, 1)'} zIndex={0} 
            pos='absolute' 
            bottom='-5' 
            right='-5' 
            overflow='hidden' 
            maxW='110px' 
            borderRadius='full' 
            maxH='110px' 
            display={{ base: 'none', md: 'block' }}
            sx={{
                boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
                backdropFilter: 'blur(7.6px)',
                WebkitBackdropFilter: 'blur(7.6px)', 
            }}
        >
            <Image width={125} height={125} src={pic} alt='Picture of Dark Blue Swoosh' />
        </Box>
    )
}

const HeroCard = ({ quote, author, jobTitle, pic }) => {

    return (
        <Flex 
        flexDir='column' 
        p={12} 
        gap={8} 
        maxW='370px'
        sx={{
            background: 'rgba(252, 252, 252, 1)',
            borderRadius: '60px',
            borderTopEndRadius: '5px',
            borderBottomStartRadius: '5px',
            boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
            backdropFilter: 'blur(7.6px)',
            WebkitBackdropFilter: 'blur(7.6px)',

        }}
        >
            <Text fontSize={{ base: '1.1rem', md: '1.35rem'}} as='p' >{quote}</Text>
            <Flex flexDir='column'>
                <Heading fontSize={{ base: '1.3rem', md: '1.5rem'}} as='h4' color='black.900'>{author}</Heading>
                <Text lineHeight={{ base: '1.2rem', md: '1.7rem' }} fontSize={{ base: '1.1rem', md: '1.35rem'}} as='p' color='black.900'>{jobTitle}</Text>
            </Flex>
                <AuthorImg pic={pic} alt='Picture of Quote Author' />
        </Flex>

    )
}

export default HeroCard