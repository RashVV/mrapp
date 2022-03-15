import * as React from 'react';
import Button from '@mui/material/Button';
import './Header.css'

export default function FormDialog() {
  return (
    <div className='button'>
      <Button variant='outlined' href='/login'  >
        Enter or Register
      </Button>
    </div>
  );
}
