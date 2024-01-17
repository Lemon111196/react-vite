import { IconButton, InputBase, Paper } from "@mui/material";
import { NavbarContainer } from "./style";
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
// import { BreakfastDiningOutlined } from "@mui/icons-material";
export default function Navbar() {
  const {pathname} = useLocation()
  const [navTitle, setNavTitle] = useState('Dashboard')

  useEffect(() =>{
    getNavName()
  }, [pathname]);
  const getNavName = () => {
    switch(pathname) {
      case "/todo/todo/list":
        setNavTitle("Todo")
        break;
  
    }
  }
  return (
    <NavbarContainer>
      <h2>{navTitle}</h2>
      <div className="part2">
        <Paper className="input-search"
          component="form"
          sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 350 }}>
          <InputBase
            sx={{ ml: 1, flex: 1 }}
            placeholder="Search"
            inputProps={{ 'aria-label': 'search' }} />
          <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
            <SearchIcon />
          </IconButton>
        </Paper>
        <AccountCircle className="avatar" />
      </div>
    </NavbarContainer>
  )
}
