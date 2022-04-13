import { 
    Flex,
    
} from "@chakra-ui/react"


const Layout = ({ children }) => {

    return (
        <Flex
            align='center'
            justify='center'
            p={4}
            flexDir='column'
            minH='100vh'
            minW='100vw'
        >
        {children}
        </Flex>
    )
}


export default Layout