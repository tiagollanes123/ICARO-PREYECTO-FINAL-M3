import { AppBar, Toolbar, Typography, Button, Badge, IconButton } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from 'react-router-dom';
import { useCartStore } from '../store/useCartStore';

function Navbar() {
  const cart = useCartStore((state) => state.cart);
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <AppBar position="static" color="primary">
      <Toolbar>
        <Typography 
  variant="h4" 
  component="div" 
  sx={{ 
    flexGrow: 1, 
    fontWeight: 700,           
    letterSpacing: '0.10em',   
    fontSize: { xs: '1.5rem', md: '2rem' } 
  }}
 >
  Mi Tienda 
</Typography>

        <Button color="inherit" component={Link} to="/">
          Catálogo
        </Button>
        <IconButton color="inherit" component={Link} to="/cart">
          <Badge badgeContent={totalItems} color="error">
            <ShoppingCartIcon />
          </Badge>
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}
export default Navbar;
 