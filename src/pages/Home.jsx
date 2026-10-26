import { useState } from 'react';
import { Grid, Card, CardMedia, CardContent, Typography, CardActions, Button, Container, TextField, Box, Chip } from '@mui/material';
import { Link } from 'react-router-dom';
import { useCartStore } from '../store/useCartStore';
import { localProducts } from '../store/productsData';

function Home() {
  const addToCart = useCartStore((state) => state.addToCart);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('todos');

  const categories = ['todos', ...new Set(localProducts.map(p => p.category))];

  const filteredProducts = localProducts.filter((product) => {
    const matchesSearch = product.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'todos' || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <Container sx={{ py: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom align="center" sx={{ mb: 4, fontWeight: 'bold' }}>
        Nuestro Catálogo 
      </Typography>

      <Box sx={{ mb: 4, display: 'flex', justifyContent: 'center' }}>
        <TextField
          label="Buscar productos..."
          variant="outlined"
          fullWidth
          sx={{ maxWidth: 500 }}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </Box>

      <Box sx={{ mb: 4, display: 'flex', justifyContent: 'center', gap: 1, flexWrap: 'wrap' }}>
        {categories.map((category) => (
          <Chip
            key={category}
            label={category.toUpperCase()}
            clickable
            color={selectedCategory === category ? "primary" : "default"}
            onClick={() => setSelectedCategory(category)}
            sx={{ fontWeight: 'bold' }}
          />
        ))}
      </Box>
      
      <Grid container spacing={4}>
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
              <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <CardMedia
                  component="img"
                  image={product.image}
                  alt={product.title}
                  sx={{ height: 200, objectFit: 'contain', p: 2 }}
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant="subtitle1" component="h2" sx={{ height: '3em', overflow: 'hidden', fontWeight: 'bold' }}>
                    {product.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ textTransform: 'uppercase', mb: 1 }}>
                    {product.category}
                  </Typography>
                  
                  {/* CORRECCIÓN: Sin barras invertidas y formateado directo */}
                  <Typography variant="h6" color="primary" sx={{ fontWeight: 'bold' }}>
                    ${product.price.toLocaleString('es-AR')}
                  </Typography>
                </CardContent>
                <CardActions sx={{ justifyContent: 'space-between', p: 2, pt: 0 }}>
                  <Button size="small" variant="outlined" component={Link} to={`/product/${product.id}`}>
                    Ver Detalles
                  </Button>
                  <Button size="small" variant="contained" color="success" onClick={() => addToCart(product)}>
                    Añadir
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))
        ) : (
          <Grid item xs={12}>
            <Typography variant="h6" align="center" color="text.secondary" sx={{ mt: 4 }}>
              No se encontraron productos que coincidan con tu búsqueda. 🔍
            </Typography>
          </Grid>
        )}
      </Grid>
    </Container>
  );
}

export default Home;
