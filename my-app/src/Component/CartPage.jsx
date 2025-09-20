import React from 'react';
import {
  Box,
  Typography,
  Card,
  CardContent,
  CardMedia,
  IconButton,
  Grid,
  Button,

} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import DeleteIcon from '@mui/icons-material/Delete';
import { useCart } from './CartContext';
import { Link } from 'react-router-dom';

const CartPage = () => {
  const {
    cartItems,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
    getTotalAmount,
  } = useCart();

  if (cartItems.length === 0) {
    return (

      <Box sx={{height:'100vh',display:'flex',flexDirection:'column',alignItems:'center'}}>

      <Typography variant="h6" sx={{ textAlign: 'center', mt: 5 }}>
        Your cart is empty.
      </Typography>
      <Button 
            component={Link}
            to='/'
            sx={{mt:2,color:'white',bgcolor:'rgba(172, 2, 2, 1)',boxShadow:'0px 5px 10px black','&:hover':{bgcolor:'rgba(40, 39, 39, 0.1)'}}}
      >Go to Shopping</Button>
      </Box>
    );
  }

  return (
    <Box sx={{ p: 3, pb: 10 }}>
      <Typography variant="h4" gutterBottom sx={{ textDecoration: 'underline',fontWeight:'bold' ,mb:2}}>
        Your Cart
      </Typography>

      <Grid container spacing={2}>
        {cartItems.map((item) => (
          <Grid size={{ xs: 6, sm: 6, md: 4, lg: 3 }}  key={item.id}>
              <Card sx={{boxShadow:'0px 0px 10px '}}>
              <CardMedia
                component="img"       
                height="150"
                // image={item.img || 'https://via.placeholder.com/150'}
                image={`${process.env.PUBLIC_URL}/${item.img}`}

                alt={item.name}
                sx={{ objectFit: 'contain' }}
              />
              <CardContent>
                <Typography variant="h6">{item.name}</Typography>
                <Typography>Price: ${item.price.toFixed(2)}</Typography>
                <Typography>Quantity: {item.quantity}</Typography>

                <Box sx={{ display: 'flex', gap: 1, mt: 1 }}>
                  <IconButton onClick={() => decreaseQuantity(item.id)}>
                    <RemoveIcon />
                  </IconButton>
                  <IconButton onClick={() => increaseQuantity(item.id)}>
                    <AddIcon />
                  </IconButton>
                  <IconButton onClick={() => removeFromCart(item.id)} color="error">
                    <DeleteIcon />
                  </IconButton>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>


      <Box
        sx={{
          mt:5,
          bottom: 100,
          left: 0,
          bgcolor: 'background.paper',
          border: '1px solid #ddd',
          py: 2,
          width:'95%',
          display: 'flex',
          gap:2,
          justifyContent: 'center',
          alignItems: 'center',
          zIndex: 1000,
          // bgcolor:'red'
        }}
      >
        <Typography variant="h6">
          Total: ${getTotalAmount().toFixed(2)}
        </Typography>
        
        {/* <Button variant="contained" color="primary">
          Proceed to Checkout
        </Button> */}
      </Box>
    </Box>
  );
};

export default CartPage;
