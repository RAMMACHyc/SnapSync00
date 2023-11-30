import Typography from '@mui/material/Typography';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { Button, Avatar } from '@mui/material';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { jwtDecode } from "jwt-decode";
// import { googleLogout } from '@react-oauth/google';


export default function HeaderComponent() {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
  const location = useLocation();
  const history = useHistory();

  const logout = () => {
    localStorage.clear();
    history.push('/auth');
    setUser(null);
  };

  useEffect(() => {
    try {
      const storedProfile = localStorage.getItem('profile');
  
      if (storedProfile) {
        const parsedProfile = JSON.parse(storedProfile);
        setUser((prevUser) => {
        
          return JSON.stringify(prevUser) !== JSON.stringify(parsedProfile)
            ? parsedProfile
            : prevUser;
        });
       
      }
    } catch (error) {
      console.error('Error parsing profile:', error);
    }
    console.log(user);
    
    const UserToken = user?.token;
    if (UserToken) {
      const decodedToken = jwtDecode(UserToken);
      if (decodedToken.exp * 1000 < new Date().getTime()) {
        logout();
      }
    }
  }, [location, user]);  
  
  
  

  return (
    <AppBar style={{ borderRadius: 15, margin: '30px 0', display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: "12px 54px" }} position="static" color="inherit">
      <div>
        <Typography style={{ color: 'rgba(0,183,255, 1)', textDecoration: 'none' }} component={Link} to="/" variant="h2" align="center">SnapSync</Typography>
      </div>
      <Toolbar style={{ display: 'flex', justifyContent: 'flex-end', width: '400px' }} >
        {user? (
          <div style={{display:"flex",gap:"26px"}}>
            <Avatar alt={user?.firstName} style={{backgroundColor:"#6f1ccd"}}>{user?.firstName.charAt(0)}</Avatar>
            <Typography style={{ display: 'flex', alignItems: 'center' }} variant="h6">{user?.firstName}<span style={{marginLeft:"8px"}}>{user?.lastName}</span></Typography>
            <Button variant="contained" style={{background:"#f55757"}} onClick={logout}>Logout</Button>
          </div>
        ) : (
          <Button component={Link} to="/auth" variant="contained" color="primary">Sign In</Button>
        )}
      </Toolbar>
    </AppBar>
  );
}
