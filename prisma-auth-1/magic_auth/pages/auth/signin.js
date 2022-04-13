import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { signIn, getSession } from 'next-auth/react'
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


const MagicLinkModal = ({ email = '', isOpen, onClose }) => {
    
    return (
        <Modal size='full' isOpen={isOpen} onClose={onClose} isCentered> 
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody>
          <Box
            align='center'
            justify='center'
            h='100vh'
            >
                <Flex h='100%' align='center' justify='center' >
                    <Heading as='h3' fontSize='large'>We sent the email to <Heading as='h3' fontSize='large' color='blue'>{email}</Heading>. Check your inbox and click the link in the email to login.</Heading>
                </Flex>
            </Box>
          </ModalBody>
        </ModalContent>
      </Modal>
    )
}

const SignIn = () => {
    const { isOpen, onOpen, onClose, onToggle } = useDisclosure()
    const router = useRouter()
    const toast = useToast()
    
    const [email, setEmail] = useState('')
    const [disabled, setDisabled] = useState(false)
    // const [showModal, setShowModal] = useState(false)
    
    useEffect(() => {
        let intervalId, redirecting
        
        if (isOpen) {
            setInterval(async () => {
                const session = await getSession()
                
                if (session && !redirecting) {
                    // user connected using the magic link -> redirect him/her
                    redirecting = true
                    router.push(router.query?.callbackUrl || '/')
                }
            }, 1000)
        }
        
        return () => {
            intervalId && clearInterval(intervalId)
        }
    }, [onToggle, router])
    
    const handleSignIn = async e => {
        e.preventDefault()

        try {
           toast({
                title: 'Loading...',
                // description: "We've created your account for you.",
                status: 'info',
                duration: 2500,
                isClosable: true,
            })
            // toastId = toast.loading('Loading...')
            setDisabled(true)
            // Perform sign in 
            const { error } = await signIn('email', {
                email,
                redirect: false,
                callbackUrl: '/', // `${window.location.origin}/auth/confirm-request`
            })
            // Something went wrong
            if (error) {
                throw new Error(error)
            }
            onToggle()
            // setShowModal(true)
            toast({
                title: 'Success!',
                description: "We've sent a link to your email",
                status: 'success',
                duration: 2500,
                isClosable: true,
            })
        } catch (error) {
            console.log(error)
            toast({
                title: 'Error',
                description: "We're sorry. There's appears to be an error.",
                status: 'error',
                duration: 2500,
                isClosable: true,
            })
        } finally {
            setDisabled(false)
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
                <form onSubmit={handleSignIn}>
                    <FormControl>
                        <Flex
                            gap={4}
                            flexDir='column'
                        >
                            <FormLabel htmlFor='email'>Email address</FormLabel>
                            <Input 
                                id="email"
                                type="email"
                                required
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                                placeholder="elon@spacex.com"
                                disabled={disabled}
                            />
                            <FormHelperText>We'll never share your email.</FormHelperText>
                            <Button onClick={handleSignIn} as='button' type='submit' disabled={disabled}>{disabled ? 'Loading...' : 'Sign in'}</Button>
                        </Flex>
                    </FormControl>
                </form>
            </Flex>
            <MagicLinkModal email={email} isOpen={isOpen} onClose={onClose} />

        </Layout>
    )
}

export default SignIn