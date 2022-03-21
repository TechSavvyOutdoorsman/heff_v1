import { 
    Heading,
    Text, 
    Box,
    Flex,
} from '@chakra-ui/react'
import { 
    CheckIcon
} from '@chakra-ui/icons'
import Image from 'next/image'
import styled from '@emotion/styled'

const CheckMark = ({ children }) => {
    
    return (
     <Flex align={{ base: 'start', md: 'start'}}  justify='start' gap={2}>
            <CheckIcon mt='.4rem' color='green.500' /> 
            <Text lineHeight={{ base: '1.2rem', md: '1.5rem'}} fontSize={{ base: '1.1rem', md: '1.35rem'}} as='p' color='white.100'>{children}</Text>
        </Flex>
    )
}

const CardDesc = ({ children }) => {

    return (
        <Flex align='center'>
            <Text lineHeight={{ base: '1.2rem', md: '1.7rem' }} fontSize={{ base: '1.1rem', md: '1.35rem'}} as='p' color='white.100'>{children}</Text>
        </Flex>
    )
}


const WholeCard = ({ children, svg, heading, svgAlt, svgW, svgH, listHeading }) => {
    
            
            return (
                <Flex pl={4} pr={4} pt={2} w='100%' flexDir={{ base: 'row', md: 'column'}} gap={{ base: '1rem'}}>
                    <Flex maxW={{ base: '150px', md: '250px'}} w={{ base: '100%', md: '250px'}} h={{ base: '100%', md: '250px'}} bg='blue.500' borderRadius='25px'  p={{ base: '1.5rem', md: '2rem'}} align='center' justify='center' flexDir='column' >
                        <Box p={{ base: '.5rem', md: '2rem'}} w='100%' h='100%' pos='relative' display='block'>
                            <Image objectFit='cover' layout='responsive' width={svgW} height={svgH} src={svg} alt={svgAlt} />
                        </Box>
                        <Heading display={{ base: 'none', md: 'contents'}} as='h3' fontSize={{ base: '24px', md: '32px' }} color='white.100'>{heading}</Heading>
                    </Flex>
                    <Flex w={{ base: '100%', md: '240px'}} pr={3} pl={3} gap={{ base: '.5rem', md: '1rem'}} mt={2} flexDir='column'>
                        <Heading display={{ base: 'contents', md: 'none'}} fontSize={{ base: '1.3rem', md: '1.5rem'}} as='h4' color='white.100'>{listHeading}</Heading>
                        {children}
                    </Flex>
                </Flex>
    )
}


const InfoCards = () => {
    
    const firstCardSvg = '/wrenches.svg'
    const secondCardSvg = '/gear.svg'
    const thirdCardSvg = '/cloud.svg'
    
    return (
        <Flex mt={4} mb={4} flexDir={{ base: 'column', md: 'row' }}  gap={{ base: '1.5rem', md: '5rem'}}>
            <WholeCard svg={firstCardSvg} svgW={132} svgH={126} svgAlt={'Animated Graphic of Wrenches'} heading={'Repair'} listHeading={'Repair'}>
                <CheckMark>iPhones & Androids</CheckMark>
                <CheckMark>Huawei & other Spyware</CheckMark>
            </WholeCard>
            <WholeCard svg={secondCardSvg} svgW={125} svgH={125} svgAlt={'Animaged Graphic of Gears'} heading={'Install'} listHeading={'Install'}>
            <CheckMark>Smart Home Tech</CheckMark>
            <CheckMark>Wifi & Internet</CheckMark>
            </WholeCard>
            <WholeCard svg={thirdCardSvg} svgW={125} svgH={125} svgAlt={'Animaged Graphic of Triangles'} heading={'Support'} listHeading={'Support'}>
            <CardDesc>Sleep safe at night knowing that we have your back, 24/7.</CardDesc>
            </WholeCard>
        </Flex>
    )
}

export default InfoCards 