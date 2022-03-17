import React, {useContext} from 'react';
import {Pagination} from "@mui/material";
import Stack from '@mui/material/Stack';
import Context from "../context/context";


export function PaginationList () {
  const {dispatchPagination, totalPages} = useContext(Context);
  const pageChangeHandler = (event, page) => {
    dispatchPagination(page);
  };
  return (
    <Stack spacing={2}>
      <Pagination count={totalPages} variant='outlined' shape='rounded' onChange={pageChangeHandler} />
    </Stack>
  );
}
