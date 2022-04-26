import * as React from 'react';
import Button from '@mui/material/Button';
import './Header.css';
import { useLocation, useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {UserAvatar} from "../userAccount/UserAvatar";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import {Collapse, List, ListItemButton, ListItemText} from "@mui/material";
import {ExpandLess, ExpandMore} from "@mui/icons-material";
import {userLogoutAction} from "../../redux/actions";
import {useCallback, useState} from "react";

export default function FormDialog() {
  const {
    accountResponse,
    isAuthorized
  } = useSelector((state) => state.accountInformation);
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(!open);
  };
  const onClickCallback = useCallback(() => {
    dispatch(userLogoutAction());
  },[dispatch]);
  return (
    <>
      {isAuthorized &&
          <Container sx={{display: 'flex', flexDirection: 'row', alignItems: 'center', }}>
            <Typography variant='subtitle' px='15px'>{accountResponse.username}</Typography>
            <Button onClick={handleClick}>
              <UserAvatar accountResponse={accountResponse} />
            </Button>
            {open ? <ExpandLess /> : <ExpandMore />}
            <Collapse in={open} timeout="auto" unmountOnExit>
              <List component="div" disablePadding sx={{display: 'flex'}}>
                <ListItemButton sx={{ pl: 4 }} onClick={onClickCallback}>
                  <ListItemText primary="Log out" />
                </ListItemButton>
              </List>
            </Collapse>
          </Container>
      }
      {!isAuthorized &&
        <div className='button'>
          <Button variant='outlined'
            onClick={() => {
              navigate('/login',
                {
                  replace: true,
                  state: {from: location}
                });
            }}
          >
                Sign in
          </Button>
        </div>
      }
    </>
  );
}
