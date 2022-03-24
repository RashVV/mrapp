import React, {useContext} from 'react';
import {Pagination} from "@mui/material";
import Stack from '@mui/material/Stack';
import Context from "../context/context";


export function PaginationList () {
  const {dispatchChangedPage} = useContext(Context);
  const pageChangeHandler = (event, page ) => {
    dispatchChangedPage(page);
  };
  return (
    <Stack spacing={2}>
      <Pagination count={500} variant='outlined' shape='rounded' onChange={pageChangeHandler} />
    </Stack>
  );
}
