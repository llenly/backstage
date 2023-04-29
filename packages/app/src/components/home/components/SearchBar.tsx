import { InputBase, IconButton, Paper } from '@material-ui/core';
import  React ,{ChangeEventHandler} from 'react';
import { Search as SearchIcon } from '@material-ui/icons';
interface SearchBarProps {
    value: string;
    onChange: ChangeEventHandler<HTMLInputElement>;
  }
  

const SearchBar = ({  onChange }:SearchBarProps) => {
    return (
      <Paper component="form">
        <InputBase 
          placeholder="What do you need?"
          
          onChange={onChange}
          inputProps={{ 'aria-label': 'search' }}
        />
        <IconButton type="submit" aria-label="search">
          <SearchIcon />
        </IconButton>
      </Paper>
    );
  };

  export default SearchBar