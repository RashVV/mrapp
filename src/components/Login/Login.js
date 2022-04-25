import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {useState} from "react";
import {useLocation, useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {createSessionId, errorReset} from "../../redux/actions";
import FormHelperText from '@mui/material/FormHelperText';
import {FormControl} from "@mui/material";

const theme = createTheme();

export default function SignIn() {
  const [form, setForm] = useState({
    username: '', password: ''
  });
  const handleSubmit = (event) => {
    event.preventDefault();
    isError && dispatch(errorReset());
    setForm({...form, [event.target.name]: event.currentTarget.value});
  };
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const {
    isError,
    errorText
  } = useSelector((state) => state.accountInformation);
  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            marginBottom: 16,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
              Sign in
          </Typography>
          <FormControl error={isError} onSubmit={handleSubmit} sx={{ mt: 1, zIndex: 0, width:'100%'}}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="username"
              label="Username"
              name="username"
              autoComplete="username"
              autoFocus
              onChange={handleSubmit}
              error={isError}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={handleSubmit}
              error={isError}
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={(e)=> {
                dispatch(createSessionId(form.username, form.password, location, navigate));
              }}
            >
                Sign In
            </Button>
            <Grid container direction="column">
              <Grid item>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
            <Box>
              {isError && <FormHelperText> <strong> Sign in failed with message: </strong> {errorText} </FormHelperText>}
            </Box>
          </FormControl>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
