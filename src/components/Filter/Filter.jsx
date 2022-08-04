import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getFilter } from 'redux/contactSelectors';
import { changeFilter } from 'redux/contactSlice';
import { Box, FormControl, FormLabel, TextField } from '@mui/material';

const Filter = () => {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  return (
    <Box
      sx={{
        paddingBottom: 4,
        paddingTop: 3,
      }}
    >
      <FormControl>
        <FormLabel>Find contact by name</FormLabel>
        <TextField
          type="text"
          name="filter"
          size="small"
          value={filter}
          onChange={evt => dispatch(changeFilter(evt.target.value))}
        />
      </FormControl>
    </Box>
  );
};

export default Filter;
