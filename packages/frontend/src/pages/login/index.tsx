import React from 'react';

// Next
import { NextPage } from 'next';
import Image from 'next/image';
import logo from '../../../public/logo_cs_negro.svg';

// Chakra
import { Box, Button, Center, Text } from '@chakra-ui/react';
// Icons
import { FiLogIn } from 'react-icons/fi';

// Components
import { MainLayout } from 'src/components/layouts';
import { ButtonGoogle, InputEmail, InputPassword } from 'src/components/atoms';

const LoginPage: NextPage = () => {
  return (
    <MainLayout>
      <Center
        bgGradient="linear(
                          to-br,
                          clan.300,
                          clan.400,
                          clan.500,
                          clan.600,
                          clan.700
                          )
                        "
        width="100%"
        h="100vh"
        p={0}
        m={0}
      >
        <Box
          backgroundColor="white"
          borderRadius="2xl"
          boxShadow="2xl"
          display="flex"
          p="40px"
          flexDir="column"
          width="26rem"
        >
          <Box maxWidth="150px" mx="auto">
            <Image src={logo} alt="Logo Clan Sports" />
          </Box>

          <ButtonGoogle marginTop="20px" />

          <Box marginTop="70px">
            <InputEmail />
            <InputPassword marginTop="10px" />

            <Text
              fontWeight={600}
              fontSize="sm"
              color="clan.600"
              marginTop="10px"
              textAlign="right"
            >
              Recovery Password?
            </Text>
            <Button
              rightIcon={<FiLogIn />}
              variant="solid"
              colorScheme="clan"
              marginTop="15px"
            >
              Login
            </Button>
          </Box>
        </Box>
      </Center>
    </MainLayout>
  );
};

export default LoginPage;
