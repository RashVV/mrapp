import * as React from 'react';
import Button from '@mui/material/Button';
import './Header.css';
import { useLocation, useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import { isAuth } from "../../redux/actions";

export default function FormDialog() {
  const {
    accountResponse,
    isAuthorized
  } = useSelector((state) => state.accountInformation);
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    isAuth(dispatch);
  }, [dispatch]);

  return (
    <>
      {isAuthorized &&
        <p>{accountResponse.username}</p>
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
