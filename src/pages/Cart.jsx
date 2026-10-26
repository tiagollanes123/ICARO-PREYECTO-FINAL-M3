import { Container, Typography, List, ListItem, ListItemText, ListItemAvatar, Avatar, IconButton, Button, Box, Divider } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { Link } from 'react-router-dom';
import { useCartStore } from '../store/useCartStore';

function Cart() {
  const cart = useCartStore((state) => state.cart);
  const removeFromCart = useCartStore((state) => state.removeFromCart);
  const addToCart = useCartStore((state) => state.addToCart);
  const decreaseQuantity = useCartStore((state) => state.decreaseQuantity);
  const clearCart = useCartStore((state) => state.clearCart);

  const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleCheckout = () => {
    alert('¡Compra realizada con éxito! Gracias por tu preferencia.');
    clearCart();
  };

  if (cart.length === 0) {
    return (
      <Container sx={{ py: 8, textAlign: 'center' }}>
        <Typography variant="h5" color="text.secondary" gutterBottom>
          Tu carrito está vacío 🛒
        </Typography>
        <Button startIcon={<ArrowBackIcon />} component={Link} to="/" variant="contained" sx={{ mt: 3 }}>
          Volver a la Tienda
        </Button>
      </Container>
    );
  }

  return (
    <Container sx={{ py: 6, maxWidth: 'md' }}>
      <Typography variant="h4" component="h1" gutterBottom sx={{ fontWeight: 'bold', mb: 4 }}>
        Tu Carrito de Compras
      </Typography>

      <List sx={{ bgcolor: 'background.paper', borderRadius: 2, boxShadow: 1, p: 2 }}>
        {cart.map((item, index) => {
          const subTotal = item.price * item.quantity;
          
          return (
            <Box key={`${item.id}-${item.selectedSize}-${item.selectedColor}-${index}`}>
              <ListItem
                secondaryAction={
                  <Box display="flex" alignItems="center" gap={1}>
                    <IconButton size="small" onClick={() => decreaseQuantity(item.id, item.selectedSize, item.selectedColor)}>
                      <RemoveIcon fontSize="small" />
                    </IconButton>
                    
                    <Typography variant="body1" sx={{ mx: 1, fontWeight: 'bold' }}>
                      {item.quantity}
                    </Typography>

                    <IconButton size="small" onClick={() => addToCart(item)}>
                      <AddIcon fontSize="small" />
                    </IconButton>

                    <IconButton edge="end" aria-label="delete" color="error" onClick={() => removeFromCart(item.id, item.selectedSize, item.selectedColor)} sx={{ ml: 2 }}>
                      <DeleteIcon />
                    </IconButton>
                  </Box>
                }
              >
                <ListItemAvatar>
                  <Avatar 
                    variant="rounded" 
                    src={item.image} 
                    alt={item.title} 
                    sx={{ width: 60, height: 60, mr: 2, bgcolor: 'white', p: 0.5, '& img': { objectFit: 'contain' } }} 
                  />
                </ListItemAvatar>
                <ListItemText
                  primary={item.title}
                  secondary={
                    <>
                      <Typography variant="body2" color="text.secondary">
                        Talle: <strong>{item.selectedSize}</strong> | Color: <strong>{item.selectedColor}</strong>
                      </Typography>
                      <Typography variant="body2" color="text.secondary" sx={{ mt: 0.5 }}>
                        ${item.price.toLocaleString('es-AR')} c/u — Subtotal: \${subTotal.toLocaleString('es-AR')}

                      </Typography>
                    </>
                  }
                />
              </ListItem>
              <Divider variant="inset" component="li" />
            </Box>
          );
        })}
      </List>

      <Box sx={{ mt: 4, p: 3, bgcolor: 'background.paper', borderRadius: 2, boxShadow: 1, display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
        <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 2 }}>
          Total a Pagar: \${totalPrice.toLocaleString('es-AR')}
        </Typography>
        <Box display="flex" gap={2}>
          <Button variant="outlined" color="inherit" component={Link} to="/">
            Seguir Comprando
          </Button>
          <Button variant="contained" color="success" size="large" onClick={handleCheckout} sx={{ fontWeight: 'bold' }}>
            Finalizar Compra
          </Button>
        </Box>
      </Box>
    </Container>
  );
}

export default Cart;
