import React, {useContext} from 'react';
import {Pagination} from "@mui/material";
import Stack from '@mui/material/Stack';
import Context from "../context/context";


export function PaginationList () {
  const {dispatchChangedPage, totalPages = 1} = useContext(Context);
  const pageChangeHandler = (event, page = 1) => {
    dispatchChangedPage(page);
  };
  return (
    <Stack spacing={2}>
      <Pagination count={totalPages} variant='outlined' shape='rounded' onChange={pageChangeHandler} />
    </Stack>
  );
}
