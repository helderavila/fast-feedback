import { Button, Code, Heading, Text } from '@chakra-ui/react'
import Head from 'next/head'
import { useAuth } from '@/lib/auth' 

export default function Home() {
  const auth = useAuth()

  return (
    <div>
      <Head>
        <title>Fast Feedback</title>
      </Head>

      <main>
        <Heading>
         Fast feedback
        </Heading>

        <Button onClick={() => auth.signinWithGitHub()}>
          Sign In
        </Button>

        {auth?.user && (
          <Button onClick={() => auth.signout()}>
            Sign Out
          </Button>
        )}

        <Text>
          Current user: <Code>{auth?.user?.email}</Code>
        </Text>
      </main>
    </div>
  )
}
