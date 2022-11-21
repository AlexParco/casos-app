import { Button, Flex, Box, Heading, HStack, Stack, Link } from '@chakra-ui/react'
import { Link as ReachLink } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../context/authContext'

const Navbar = () => {
  const { logout, isLogged, user } = useAuth()
  const navegate = useNavigate()

  const handleLogout = () => {
    logout()
    navegate("/login")
  }

  return (
    <Flex
      p={3}
      w="100%"
      margin='0'
      align='center'
      justify='center'
    >
      <HStack
        align='center'
        justify='space-between'
        w="100%"
        maxW='960px'
      >
        <Heading size='lg' >
          {
            user.rol == 'alumno' ? 'Consultas al docente' : 'Casos de estudiantes '
          }

        </Heading>
        {
          isLogged ? <Button onClick={() => handleLogout()} size='sm'>logout</Button>
            : <Stack direction='row'>
              <Link as={ReachLink} to='/register' size='sm'>Registrarse</Link>
              <Link as={ReachLink} to='/login' size='sm'>Iniciar Sesíon</Link>
            </Stack>
        }
      </HStack>

    </Flex >
  )
}

export default Navbar