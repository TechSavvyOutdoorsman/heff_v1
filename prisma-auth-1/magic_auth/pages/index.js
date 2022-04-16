import {
  Box,
  Flex,
  Heading,
  Text,
  Button,
  Stack,
  Input,

} from '@chakra-ui/react'
import { useSession, signIn, signOut } from 'next-auth/react'
import Layout from '../components/layout'

const AuthComponent = () => {
  const { data: session, status } = useSession()

  if (status === 'authenticated') {
    return (
      <Flex
        align='center'
        justify='center'
        flexDir='column'
        gap={6} 
        p={8}
      >
        <Heading as='h1' fontSize='x-large'>Signed in as {session.user.email}</Heading>
        <Button onClick={() => signOut()}>Sign Out</Button>
      </Flex>
    )
  }
  if (status === 'loading') {
    return (
      <Flex
      align='center'
      justify='center'
      flexDir='column'
      gap={6} 
      p={8}
    >
      <Heading as='h1' fontSize='x-large'>Loading...</Heading>
    </Flex>
    )
  }
  return (
    <Flex
    align='center'
    justify='center'
    flexDir='column'
    gap={6} 
    p={8}
  >
    <Heading as='h1' fontSize='x-large'>Ummm, you're not signed in...</Heading>
    <Button onClick={() => signIn()}>Sign In</Button>
  </Flex>
  )
}



export default function Home() {
  return (
    <Layout>
      <AuthComponent />
    </Layout>
  )
}
