import { AccountCircle, Key } from '@mui/icons-material';
import { Button, Container, InputAdornment, TextField } from '@mui/material';
import { grey } from '@mui/material/colors';
import React from 'react';

function LoginContainer() {
  return (
    <Container
      className="flex h-screen content-center items-center justify-center"
      maxWidth="lg"
    >
      <div className="basis-full sm:basis-8/12">
        <div className="font-bol mb-4 text-center text-2xl">AMS</div>
        <div className="flex basis-full flex-col border-gray-300 sm:basis-5/12 sm:border sm:p-9">
          <TextField
            className="mb-6"
            id="input-with-icon-textfield"
            label="아이디"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <AccountCircle sx={{ color: grey[300] }} />
                </InputAdornment>
              ),
            }}
            variant="standard"
          />
          <TextField
            id="input-with-icon-textfield"
            label="비밀번호"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Key color="success" sx={{ color: grey[300] }} />
                </InputAdornment>
              ),
            }}
            variant="standard"
          />

          <Button
            fullWidth
            className="my-7 bg-yellow-300 py-4 text-lg text-black"
          >
            로그인
          </Button>

          <div className="flex justify-between">
            <div className="hover:cursor-pointer">로그인</div>
            <div className="">
              <span className="hover:cursor-pointer">아이디 찾기</span>
              <span className="mx-4 text-gray-300">|</span>
              <span className="hover:cursor-pointer">비밀번호찾기</span>
            </div>
          </div>
          <div className="mt-10 text-center text-sm text-gray-400">
            Copyright © Neulsang Corp. All rights reserved.
          </div>
        </div>
      </div>
    </Container>
  );
}

export default LoginContainer;
