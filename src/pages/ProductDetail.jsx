import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Container, Grid, Typography, Button, Box, MenuItem, TextField } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useCartStore } from '../store/useCartStore';
import { localProducts } from '../store/productsData';

function ProductDetail() {
  const { id } = useParams(); 
  const product = localProducts.find(item => item.id === parseInt(id));
  const addToCart = useCartStore((state) => state.addToCart);

  // Estados locales para los selectores
  const [size, setSize] = useState('');
  const [color, setColor] = useState('');
  const [errorText, setErrorText] = useState('');

  if (!product) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '80vh' }}>
        <Typography variant="h6" color="error">
          Producto no encontrado.
        </Typography>
      </Box>
    );
  }

  
  const hasOptions = product.sizes && product.sizes.length > 0;

  const handleAddClick = () => {
    if (hasOptions && (!size || !color)) {
      setErrorText('Por favor, selecciona talle y color antes de añadir al carrito.');
      return;
    }
    setErrorText('');
    
    
    addToCart({
      ...product,
      selectedSize: size || 'Único',
      selectedColor: color || 'Único'
    });
    
    alert('¡Producto añadido al carrito!');
  };

  return (
    <Container sx={{ py: 6 }}>
      <Button startIcon={<ArrowBackIcon />} component={Link} to="/" sx={{ mb: 4, color: '#1a1a1a', fontWeight: 'bold' }}>
        Volver al Catálogo
      </Button>

      <Grid container spacing={6}>
        <Grid item xs={12} md={6}>
          <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', bgcolor: 'white', p: 4, borderRadius: 2, boxShadow: 1, width: '100%', minHeight: '350px' }}>
            <img 
              src={product.image} 
              alt={product.title} 
              style={{ width: '100%', maxWidth: '350px', height: 'auto', maxHeight: '400px', objectFit: 'contain' }} 
            />
          </Box>
        </Grid>

        <Grid item xs={12} md={6}>
          <Typography variant="h4" component="h1" gutterBottom sx={{ fontWeight: 'bold' }}>
            {product.title}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" gutterBottom sx={{ textTransform: 'uppercase', fontWeight: 'medium' }}>
            Categoría: {product.category}
          </Typography>
          <Typography variant="h4" color="primary" sx={{ my: 3, fontWeight: 'bold' }}>
            ${product.price.toLocaleString('es-AR')}
          </Typography>
          <Typography variant="body1" paragraph sx={{ lineHeight: 1.7, color: 'text.primary', mb: 3 }}>
            {product.description}
          </Typography>
          
          {/* SECCIÓN DE TALLES Y COLORES */}
          {hasOptions && (
            <Box sx={{ display: 'flex', gap: 2, mb: 3, flexDirection: { xs: 'column', sm: 'row' } }}>
              <TextField
                select
                label="Seleccionar Talle"
                value={size}
                onChange={(e) => setSize(e.target.value)}
                fullWidth
              >
                {product.sizes.map((s) => (
                  <MenuItem key={s} value={s}>{s}</MenuItem>
                ))}
              </TextField>

              <TextField
                select
                label="Seleccionar Color"
                value={color}
                onChange={(e) => setColor(e.target.value)}
                fullWidth
              >
                {product.colors.map((c) => (
                  <MenuItem key={c} value={c}>{c}</MenuItem>
                ))}
              </TextField>
            </Box>
          )}

          {errorText && (
            <Typography variant="body2" color="error" sx={{ mb: 2, fontWeight: 'bold' }}>
              {errorText}
            </Typography>
          )}
          
          <Button 
            variant="contained" 
            color="success" 
            size="large" 
            fullWidth 
            onClick={handleAddClick}
            sx={{ py: 1.5, fontWeight: 'bold' }}
          >
            Añadir al Carrito
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
}

export default ProductDetail;
