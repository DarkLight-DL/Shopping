import React from 'react';
import {
  Box,
  Typography,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Button,
  Grid,
} from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import AddIcon from '@mui/icons-material/Add';
import RemoveShoppingCartIcon from '@mui/icons-material/RemoveShoppingCart';

import { useWishlist } from './WishlistContext';
import { useCart } from './CartContext';
import { Link } from 'react-router-dom';

const WishlistPage = () => {
  const { wishlistItems, removeFromWishlist } = useWishlist();
  const { cartItems, addToCart, removeFromCart } = useCart();

  if (wishlistItems.length === 0) {
    return (
      <Box sx={{height:'100vh',display:'flex',flexDirection:'column',alignItems:'center'}}>

      <Typography variant="h6" sx={{ textAlign: 'center', mt: 5 }}>
        Your wishlist is empty.
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
    <Box sx={{ p: 3 , pb: 10 }}>
      <Typography variant="h4" gutterBottom>
        Your Wishlist
      </Typography>
      <Grid container spacing={2}>
        {wishlistItems.map((item) => {
          const isInCart = cartItems.some((i) => i.id === item.id);

          return (
            <Grid size={{ xs: 6, sm: 6, md: 4, lg: 3 }}  key={item.id}>
              <Card>
                <CardMedia
                  component="img"
                  height="150"
                  // image={item.img}
                  image={`${process.env.PUBLIC_URL}/${item.img}`}

                  alt={item.name}
                  sx={{ objectFit: 'contain' }}
                />
                <CardContent>
                  <Typography variant="h6">{item.name}</Typography>
                  <Typography>Price: ${item.price.toFixed(2)}</Typography>
                </CardContent>

                <CardActions sx={{ justifyContent: 'space-between', px: 2 }}>

                  {/* <IconButton onClick={() => removeFromWishlist(item.id)} color="error">
                    <FavoriteIcon />
                  </IconButton> */}

                  <Button
                      variant="outlined"
                      color="error"
                      startIcon={<FavoriteIcon />}
                      size="small"
                      onClick={() => removeFromWishlist(item.id)}
                      sx={{ fontSize:'12px' }}
                    >
                      Remove
                    </Button>

                  {isInCart ? (
                    <Button
                      variant="outlined"
                      color="error"
                      startIcon={<RemoveShoppingCartIcon />}
                      size="small"
                      onClick={() => removeFromCart(item.id)}
                      sx={{ fontSize:'10px' }}
                    >
                      Cart
                    </Button>
                  ) : (
                    <Button
                      variant="contained"
                      color="primary"
                      startIcon={<AddIcon />}
                      size="small"
                      onClick={() => addToCart(item)}
                      sx={{ fontSize:'10px' }}
                    >
                      AddCrt
                    </Button>
                  )}
                </CardActions>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};

export default WishlistPage;
