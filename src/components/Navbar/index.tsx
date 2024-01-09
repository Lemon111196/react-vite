import { IconButton, InputBase, Paper } from "@mui/material";
import { NavbarContainer } from "./style";
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import { useLocation } from "react-router-dom";


export default function Navbar() {
  
  return (
    <NavbarContainer>
      <h2>Dashboard</h2>
      <div className="part2">
      <Paper className="input-search"
        component="form"
        sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 350 }}>
        <InputBase 
          sx={{ ml: 1, flex: 1 }}
          placeholder="Search"
          inputProps={{ 'aria-label': 'search' }}/>
        <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
        <SearchIcon />
      </IconButton>
      </Paper>
      <AccountCircle className="avatar" />
      </div>
    </NavbarContainer>
  )
}
