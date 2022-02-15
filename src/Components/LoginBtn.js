import * as React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

export default function LoginBtn() {
  return (
    <Stack direction="row" >
        <Button variant="contained" href="#contained-buttons">
        Увійти
      </Button>
    </Stack>
  );
}