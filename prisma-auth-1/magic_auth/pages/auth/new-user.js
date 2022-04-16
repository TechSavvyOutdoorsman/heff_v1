import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { render } from 'react-dom'
import superjson from 'superjson'
import {
    Box,
    Flex,
    Button,
    Heading,
    Input,
    useToast,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    FormControl,
    FormLabel,
    FormHelperText,
} from '@chakra-ui/react'
import Layout from '../../components/layout'
import { getSession, useSession } from 'next-auth/react'
import { PrismaClient } from '@prisma/client'
import { responseSymbol } from 'next/dist/server/web/spec-compliant/fetch-event'
const prisma = new PrismaClient()


const NewUser = ({ newData }) => {

    const [disabled, setDisabled] = useState(false)
    const router = useRouter()
    const toast = useToast()

    const [formData, setFormData] = useState({})

    const [user, setUser] = useState(newData)
    // const [fName, setFName] = useState('')
    // const [lName, setLName] = useState('')
    // const [phoneNumber, setPhoneNumber] = useState(0)

    const submitUserModelData = async e => {
        e.preventDefault()
        
        // let user know that response was sent & is now loading
       toast({
            title: 'Loading...',
            status: 'info',
            duration: 2500,
            isClosable: true,
        })
        
        // temporarily disable form
        setDisabled(true)

        const superString = superjson.serialize(formData)
        const gayString = JSON.stringify(formData)
        console.log(superString)

        try {
            // Submit Data to User Model in Prisma DB 
            fetch(`/api/user/update/${user.json.id}`, {
                method: 'PUT',
                body: JSON.stringify(formData)
            })
            .then((res) => res.json())
            .then(() => {
                router.push('/')
                toast({
                    title: 'Success!',
                    description: "We've finished your profile!",
                    status: 'success',
                    duration: 2500,
                    isClosable: true,
                })
            })

        } catch (error) {
            // show users there was an error
            console.log(error)
            toast({
                title: 'Error',
                description: "We're sorry. There's appears to be an error.",
                status: 'error',
                duration: 2500,
                isClosable: true,
            })
        }
    }

     
    return (
        <Layout>
            <Flex
                align='center'
                justify='center'
                gap={6}
                p={8}
                flexDir='column'
            >
                <form onSubmit={submitUserModelData}>
                    <FormControl>
                        <Flex
                            gap={4}
                            flexDir='column'
                        >
                            <Heading as='h1' fontSize='x-large'>Almost done {user.email}!</Heading>
                            <Flex flexDir='column'>
                                <FormLabel htmlFor='text'>User Name</FormLabel>
                                <Input 
                                    id="user-name"
                                    type="text"
                                    required
                                    onChange={e => setFormData({...formData, userName: e.target.value})}
                                    placeholder="southAfricanPhilanthropistBillionaire"
                                    disabled={disabled}
                                />
                            </Flex>
                            <Flex flexDir='column'>
                                <FormLabel htmlFor='email'>First Name</FormLabel>
                                <Input 
                                    id="first-name"
                                    type="text"
                                    required
                                    onChange={e => setFormData({...formData, firstName: e.target.value})}
                                    placeholder="Elon"
                                    disabled={disabled}
                                />
                            </Flex>
                            <Flex flexDir='column'>
                                <FormLabel htmlFor='email'>Last Name</FormLabel>
                                <Input 
                                    id="last-name"
                                    type="text"
                                    required
                                    onChange={e => setFormData({...formData, lastName: e.target.value})}
                                    placeholder="Musk"
                                    disabled={disabled}
                                />
                            </Flex>
                            <Flex flexDir='column'>
                                <FormLabel htmlFor='email'>Phone Number</FormLabel>
                                <Input 
                                    id="phone-number"
                                    type="tel"
                                    onChange={e => setFormData({...formData, phoneNumber: e.target.value})}
                                    placeholder="(406)555-5555"
                                    disabled={disabled}
                                />
                            </Flex>
                            {/* <FormHelperText>We'll never share your email.</FormHelperText> */}
                            <Button as='button' type='submit' disabled={disabled}>{disabled ? 'Loading...' : 'Submit'}</Button>
                        </Flex>
                    </FormControl>
                </form>
            </Flex>
        </Layout>
    )
}


export default NewUser


export async function getServerSideProps(ctx) {
    const session = await getSession({ ctx })

    const userEmail = session.user.email

    const data = await prisma.user.findFirst({
        where: {
            email: userEmail,
        }
    })

    const newData = superjson.serialize(data)

    return {
        props: {
            newData
        }
    }
}