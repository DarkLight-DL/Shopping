import React from 'react';
import {
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Box,
  Button,
  IconButton,
  CardActions,
  Rating,
  Chip,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { useCart } from './CartContext';
import { useWishlist } from './WishlistContext';

const Data = ({ filters = {}, searchQuery = '', dresses = [], sortOption = '' }) => {
  const { cartItems, addToCart, removeFromCart } = useCart();
  const { wishlistItems, addToWishlist, removeFromWishlist } = useWishlist();

  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  if (!dresses.length) return <Typography>Loading...</Typography>;

const filtered = dresses
  .filter((item) => {
    const inCategory = filters.category ? item.category === filters.category : true;
    const inMinPrice = filters.priceMin ? item.price >= +filters.priceMin : true;
    const inMaxPrice = filters.priceMax ? item.price <= +filters.priceMax : true;
    const inStar = filters.starRating?.length
      ? filters.starRating.some((r) => item.starRating >= r)
      : true;
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesSize =
      filters.sizes?.length ? filters.sizes.every((sz) => item.size.includes(sz)) : true;

    return inCategory && inMinPrice && inMaxPrice && inStar && matchesSearch && matchesSize;
  })
  .sort((a, b) => {
    switch (sortOption) {
      case 'az':
        return a.name.localeCompare(b.name);
      case 'za':
        return b.name.localeCompare(a.name);
      case 'priceLowHigh':
        return a.price - b.price;
      case 'priceHighLow':
        return b.price - a.price;
      case 'rangeLowHigh':
        return (a.range || 0) - (b.range || 0); // Fallback to 0 if undefined
      case 'rangeHighLow':
        return (b.range || 0) - (a.range || 0);
      default:
        return 0;
    }
  });


  return (
    <Box sx={{ padding: { xs: 0, sm: 3, md: 4 } }}>
      <Grid container spacing={1}>
        {filtered.map((item) => {
          const isInCart = cartItems.some((i) => i.id === item.id);
          const isInWishlist = wishlistItems.some((i) => i.id === item.id);

          return (
            <Grid size={{ xs: 6, sm: 6, md: 4, lg: 3 }} key={item.id}>
              <Card
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  borderRadius: 4,
                  boxShadow: 6,
                  backdropFilter: 'blur(6px)',
                  bgcolor: 'rgba(255,255,255,0.9)',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-5px)',
                    boxShadow: 10,
                  },
                  position: 'relative',
                }}
              >
                <Box sx={{ position: 'relative' }}>
                  <CardMedia
                    component="img"
                    image={`${process.env.PUBLIC_URL}/${item.img}`}
                    alt={item.name}
                    sx={{
                      height: 240,
                      objectFit: 'contain',
                      borderTopLeftRadius: 16,
                      borderTopRightRadius: 16,
                      backgroundColor: '#ffffffff',
                    }}
                  />
                  <IconButton
                    onClick={() =>
                      isInWishlist ? removeFromWishlist(item.id) : addToWishlist(item)
                    }
                    sx={{
                      position: 'absolute',
                      top: 12,
                      right: 12,
                      bgcolor: 'white',
                      boxShadow: 2,
                      '&:hover': { bgcolor: '#ffeef0' },
                    }}
                  >
                    {isInWishlist ? <FavoriteIcon color="error" /> : <FavoriteBorderIcon />}
                  </IconButton>
                </Box>

                <CardContent sx={{ flexGrow: 1, pl: 1, py: 0, pr: 0 }}>
                  <Typography variant="subtitle1" fontWeight={600} noWrap>
                    {item.name}
                  </Typography>

                  <Box sx={{ display: 'flex', alignItems: 'center', mt: 1 }}>
                    <Rating value={item.starRating} precision={0.1} readOnly size="small" />
                    <Typography variant="caption" sx={{ ml: 0.5 }}>
                      ({item.starRating})
                    </Typography>
                  </Box>

                  <Box sx={{ mt: 1, display: 'flex', gap: 1, alignItems: 'center', flexWrap: 'wrap' }}>
                    <Typography variant="body2" color="white" sx={{ px: 0.9, textAlign: 'center', bgcolor: 'rgb(57, 91, 178)', borderRadius: '15px' }}> {item.category} Whereis</Typography>
                    <Typography variant="body2" color="white" sx={{ px: 0.9, textAlign: 'center', bgcolor: 'rgb(57, 91, 178)', borderRadius: '15px' }}> {item.type}</Typography>

                  </Box>

                  <Box mt={2}>
                    <Box sx={{ display: 'flex', gap: 0.5, alignItems: 'center', flexWrap: 'wrap' }}>

                      <Typography>Sizes:</Typography>

                      {item.size?.map((size) => (
                        <Chip
                          label={size}
                          key={size}
                          size="small"
                          sx={{
                            fontSize: '10px',
                            fontWeight: 'bold',
                            bgcolor: '#e3f2fd',
                            color: '#1976d2',
                          }}
                        />
                      ))}
                    </Box>
                  </Box>


                  <Box sx={{ mt: 1, display: 'flex', alignItems: 'center', gap: 0.5 }}>

                    <Typography>Price: </Typography>

                    <Typography variant="h6" color="primary">
                      ${item.price.toFixed(2)}
                    </Typography>
                  </Box>
                </CardContent>

                <CardActions
                  sx={{
                    pb: 1,
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent:'center',
                    alignItems:'center',
                  }}
                >
                  <Button
                    variant={isInWishlist ? 'outlined' : 'contained'}
                    color={isInWishlist ? 'error' : 'primary'}
                    startIcon={isInWishlist ? <DeleteForeverIcon sx={{ fontSize: isSmallScreen ? '10px' : '12px' }} /> : <FavoriteIcon sx={{ fontSize: isSmallScreen ? '1px' : '12px' }} />}
                    onClick={() =>
                      isInWishlist ? removeFromWishlist(item.id) : addToWishlist(item)
                    }
                    sx={{

                      borderRadius: 2,
                      fontSize: isSmallScreen ? '10px' : '12px',
                    }}
                  >
                    {isInWishlist ? 'Remove' : 'Wishlist'}
                  </Button>

                  <Button
                    variant={isInCart ? 'outlined' : 'contained'}
                    color={isInCart ? 'error' : 'success'}
                    startIcon={isInCart ? <DeleteIcon sx={{ fontSize: isSmallScreen ? '10px' : '12px' }} /> : <AddIcon sx={{ fontSize: isSmallScreen ? '10px' : '12px' }} />}
                    onClick={() =>
                      isInCart ? removeFromCart(item.id) : addToCart(item)
                    }
                    sx={{
                      borderRadius: 2,
                      fontSize: isSmallScreen ? '10px' : '12px',

                    }}
                  >
                    {isInCart ? 'Remove' : 'AddCart'}
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};

export default Data;
