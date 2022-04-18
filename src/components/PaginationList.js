import React from 'react';
import {Pagination} from "@mui/material";
import Stack from '@mui/material/Stack';

export function PaginationList ({pageChangeHandler}) {
  return (
    <Stack spacing={2}>
      <Pagination count={500} variant='outlined' shape='rounded' onChange={pageChangeHandler} />
    </Stack>
  );
}
