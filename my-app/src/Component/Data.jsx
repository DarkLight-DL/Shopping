// import React from 'react';
// import {
//   Grid,
//   Card,
//   CardMedia,
//   CardContent,
//   Typography,
//   Box,
//   Button,
//   IconButton,
//   CardActions,
//   Rating,
//   Chip,
// } from '@mui/material';
// import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
// import FavoriteIcon from '@mui/icons-material/Favorite';
// import AddIcon from '@mui/icons-material/Add';
// import DeleteIcon from '@mui/icons-material/Delete';
// import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
// import { useCart } from './CartContext';
// import { useWishlist } from './WishlistContext';

// const Data = ({ filters = {}, searchQuery = '', dresses = [] }) => {
//   const { cartItems, addToCart, removeFromCart } = useCart();
//   const { wishlistItems, addToWishlist, removeFromWishlist } = useWishlist();

//   if (!dresses.length) return <Typography>Loading...</Typography>;

//   // Apply all filters
//   const filtered = dresses
//     .filter((item) => {
//       const inCategory = filters.category ? item.category === filters.category : true;
//       const inMinPrice = filters.priceMin ? item.price >= +filters.priceMin : true;
//       const inMaxPrice = filters.priceMax ? item.price <= +filters.priceMax : true;
//       const inStar = filters.starRating?.length
//         ? filters.starRating.some((r) => item.starRating >= r)
//         : true;
//       const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase());
//       const matchesSize =
//         filters.sizes?.length ? filters.sizes.every((sz) => item.size.includes(sz)) : true;

//       return inCategory && inMinPrice && inMaxPrice && inStar && matchesSearch && matchesSize;
//     })
//     .sort((a, b) => {
//       if (filters.sort === 'asc') return a.name.localeCompare(b.name);
//       if (filters.sort === 'desc') return b.name.localeCompare(a.name);
//       return 0;
//     });

//   return (
//     <Box sx={{ padding: 2 }}>
//       <Grid container spacing={2}>
//         {filtered.map((item) => {
//           const isInCart = cartItems.some((i) => i.id === item.id);
//           const isInWishlist = wishlistItems.some((i) => i.id === item.id);

//           return (
//             <Grid size={{ xs:6, sm:6, md:4, lg:3}} key={item.id}>
//               <Card sx={{ position: 'relative' }}>
//                 <CardMedia
//                   component="img"
//                   height="200"
//                   image={item.img || 'https://via.placeholder.com/200'}
//                   alt={item.name}
//                 />

//                 <IconButton
//                   onClick={() =>
//                     isInWishlist ? removeFromWishlist(item.id) : addToWishlist(item)
//                   }
//                   sx={{ position: 'absolute', top: 10, right: 10 }}
//                 >
//                   {isInWishlist ? <FavoriteIcon color="error" /> : <FavoriteBorderIcon />}
//                 </IconButton>

//                 <CardContent>
//                   <Typography variant="h6">{item.name}</Typography>
//                   <Rating value={item.starRating} precision={0.1} readOnly size="small" /><span> {item.starRating}</span>

//                     <Typography>Price: ${item.price}</Typography>
//                   <Box mt={1}>
//                   <Typography>Size: {item.size?.map((size) => (
//                        <Chip label={size} key={size} size="small" sx={{ mr: 0.5 }} />
//                       ))}
//                       </Typography> 
//                   </Box>
//                 </CardContent>

//                 <CardActions>
//                   <Box sx={{ display: 'flex', gap: 1, width: '100%' }}>
//                     <Button
//                       variant={isInWishlist ? 'outlined' : 'contained'}
//                       color={isInWishlist ? 'error' : 'primary'}
//                       startIcon={isInWishlist ? <DeleteForeverIcon /> : <FavoriteIcon />}
//                       onClick={() =>
//                         isInWishlist ? removeFromWishlist(item.id) : addToWishlist(item)
//                       }
//                       fullWidth
//                     >
//                       Wishlist
//                     </Button>

//                     <Button
//                       variant={isInCart ? 'outlined' : 'contained'}
//                       color={isInCart ? 'error' : 'primary'}
//                       startIcon={isInCart ? <DeleteIcon /> : <AddIcon />}
//                       onClick={() =>
//                         isInCart ? removeFromCart(item.id) : addToCart(item)
//                       }
//                       fullWidth
//                     >
//                       {isInCart ? 'Remove' : 'Add Cart'}
//                     </Button>
//                   </Box>
//                 </CardActions>
//               </Card>
//             </Grid>
//           );
//         })}
//       </Grid>
//     </Box>
//   );
// };

// export default Data;

















// import React from 'react';
// import {
//   Grid,
//   Card,
//   CardMedia,
//   CardContent,
//   Typography,
//   Box,
//   Button,
//   IconButton,
//   CardActions,
//   Rating,
//   Chip,
// } from '@mui/material';
// import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
// import FavoriteIcon from '@mui/icons-material/Favorite';
// import AddIcon from '@mui/icons-material/Add';
// import DeleteIcon from '@mui/icons-material/Delete';
// import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
// import { useCart } from './CartContext';
// import { useWishlist } from './WishlistContext';

// const Data = ({ filters = {}, searchQuery = '', dresses = [] }) => {
//   const { cartItems, addToCart, removeFromCart } = useCart();
//   const { wishlistItems, addToWishlist, removeFromWishlist } = useWishlist();

//   if (!dresses.length) return <Typography>Loading...</Typography>;

//   const filtered = dresses
//     .filter((item) => {
//       const inCategory = filters.category ? item.category === filters.category : true;
//       const inMinPrice = filters.priceMin ? item.price >= +filters.priceMin : true;
//       const inMaxPrice = filters.priceMax ? item.price <= +filters.priceMax : true;
//       const inStar = filters.starRating?.length
//         ? filters.starRating.some((r) => item.starRating >= r)
//         : true;
//       const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase());
//       const matchesSize =
//         filters.sizes?.length ? filters.sizes.every((sz) => item.size.includes(sz)) : true;

//       return inCategory && inMinPrice && inMaxPrice && inStar && matchesSearch && matchesSize;
//     })
//     .sort((a, b) => {
//       if (filters.sort === 'asc') return a.name.localeCompare(b.name);
//       if (filters.sort === 'desc') return b.name.localeCompare(a.name);
//       return 0;
//     });

//   return (
//     <Box sx={{ padding: 2 }}>
//       <Grid container spacing={3}>
//         {filtered.map((item) => {
//           const isInCart = cartItems.some((i) => i.id === item.id);
//           const isInWishlist = wishlistItems.some((i) => i.id === item.id);

//           return (
//             <Grid item xs={12} sm={6} md={4} lg={3} key={item.id}>
//               <Card
//                 sx={{
//                   height: '100%',
//                   display: 'flex',
//                   flexDirection: 'column',
//                   borderRadius: 3,
//                   boxShadow: 3,
//                   transition: 'all 0.3s ease-in-out',
//                   '&:hover': {
//                     boxShadow: 6,
//                     transform: 'scale(1.015)',
//                   },
//                   position: 'relative',
//                 }}
//               >
//                 <Box sx={{ position: 'relative' }}>
//                   <CardMedia
//                     component="img"
//                     image={item.img || 'https://via.placeholder.com/300'}
//                     alt={item.name}
//                     sx={{
//                       height: 240,
//                       objectFit: 'cover',
//                       backgroundColor: '#f5f5f5',
//                       borderTopLeftRadius: 12,
//                       borderTopRightRadius: 12,
//                     }}
//                   />
//                   <IconButton
//                     onClick={() =>
//                       isInWishlist ? removeFromWishlist(item.id) : addToWishlist(item)
//                     }
//                     sx={{
//                       position: 'absolute',
//                       top: 10,
//                       right: 10,
//                       bgcolor: 'white',
//                       '&:hover': { bgcolor: '#ffeef0' },
//                     }}
//                   >
//                     {isInWishlist ? <FavoriteIcon color="error" /> : <FavoriteBorderIcon />}
//                   </IconButton>
//                 </Box>

//                 <CardContent sx={{ flexGrow: 1, p: 2 }}>
//                   <Typography variant="h6" fontWeight={600} gutterBottom noWrap>
//                     {item.name}
//                   </Typography>

//                   <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
//                     <Rating value={item.starRating} precision={0.1} readOnly size="small" />
//                     <Typography sx={{ ml: 0.5, fontSize: '0.875rem', color: 'text.secondary' }}>
//                       ({item.starRating})
//                     </Typography>
//                   </Box>

//                   <Typography variant="h6" color="primary">
//                     ${item.price.toFixed(2)}
//                   </Typography>

//                   <Box mt={1}>
//                     <Typography variant="body2" fontWeight={500} color="text.secondary">
//                       Available Sizes:
//                     </Typography>
//                     <Box sx={{ mt: 0.5, display: 'flex', gap: 1, flexWrap: 'wrap' }}>
//                       {item.size?.map((size) => (
//                         <Chip
//                           label={size}
//                           key={size}
//                           size="small"
//                           sx={{
//                             fontWeight: 500,
//                             bgcolor: '#e0f7fa',
//                           }}
//                         />
//                       ))}
//                     </Box>
//                   </Box>
//                 </CardContent>

//                 <CardActions sx={{ p: 2, pt: 0 }}>
//                   <Button
//                     variant={isInWishlist ? 'outlined' : 'contained'}
//                     color={isInWishlist ? 'error' : 'primary'}
//                     startIcon={isInWishlist ? <DeleteForeverIcon /> : <FavoriteIcon />}
//                     onClick={() =>
//                       isInWishlist ? removeFromWishlist(item.id) : addToWishlist(item)
//                     }
//                     sx={{ flex: 1, borderRadius: 2 }}
//                   >
//                     Wishlist
//                   </Button>

//                   <Button
//                     variant={isInCart ? 'outlined' : 'contained'}
//                     color={isInCart ? 'error' : 'success'}
//                     startIcon={isInCart ? <DeleteIcon /> : <AddIcon />}
//                     onClick={() =>
//                       isInCart ? removeFromCart(item.id) : addToCart(item)
//                     }
//                     sx={{ flex: 1, borderRadius: 2 }}
//                   >
//                     {isInCart ? 'Remove' : 'Add Cart'}
//                   </Button>
//                 </CardActions>
//               </Card>
//             </Grid>
//           );
//         })}
//       </Grid>
//     </Box>
//   );
// };

// export default Data;




// import React from 'react';
// import {
//   Grid,
//   Card,
//   CardMedia,
//   CardContent,
//   Typography,
//   Box,
//   Button,
//   IconButton,
//   CardActions,
//   Rating,
//   Chip,
//   useMediaQuery,
//   useTheme,
// } from '@mui/material';
// import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
// import FavoriteIcon from '@mui/icons-material/Favorite';
// import AddIcon from '@mui/icons-material/Add';
// import DeleteIcon from '@mui/icons-material/Delete';
// import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
// import { useCart } from './CartContext';
// import { useWishlist } from './WishlistContext';

// const Data = ({ filters = {}, searchQuery = '', dresses = [] }) => {
//   const { cartItems, addToCart, removeFromCart } = useCart();
//   const { wishlistItems, addToWishlist, removeFromWishlist } = useWishlist();

//   const theme = useTheme();
//   const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

//   if (!dresses.length) return <Typography>Loading...</Typography>;

//   const filtered = dresses
//     .filter((item) => {
//       const inCategory = filters.category ? item.category === filters.category : true;
//       const inMinPrice = filters.priceMin ? item.price >= +filters.priceMin : true;
//       const inMaxPrice = filters.priceMax ? item.price <= +filters.priceMax : true;
//       const inStar = filters.starRating?.length
//         ? filters.starRating.some((r) => item.starRating >= r)
//         : true;
//       const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase());
//       const matchesSize =
//         filters.sizes?.length ? filters.sizes.every((sz) => item.size.includes(sz)) : true;

//       return inCategory && inMinPrice && inMaxPrice && inStar && matchesSearch && matchesSize;
//     })
//     .sort((a, b) => {
//       if (filters.sort === 'asc') return a.name.localeCompare(b.name);
//       if (filters.sort === 'desc') return b.name.localeCompare(a.name);
//       return 0;
//     });

//   return (
//     <Box sx={{ padding: { xs: 2, sm: 3, md: 4 } }}>
//       <Grid container spacing={3}>
//         {filtered.map((item) => {
//           const isInCart = cartItems.some((i) => i.id === item.id);
//           const isInWishlist = wishlistItems.some((i) => i.id === item.id);

//           return (
//             <Grid size={{ xs: 6, sm: 6, md: 4, lg: 3 }} key={item.id}>
//               <Card
//                 sx={{
//                   height: '100%',
//                   display: 'flex',
//                   flexDirection: 'column',
//                   borderRadius: 4,
//                   boxShadow: 6,
//                   backdropFilter: 'blur(6px)',
//                   bgcolor: 'rgba(255,255,255,0.9)',
//                   transition: 'transform 0.3s ease, box-shadow 0.3s ease',
//                   '&:hover': {
//                     transform: 'translateY(-5px)',
//                     boxShadow: 10,
//                   },
//                   position: 'relative',
//                 }}
//               >
//                 <Box sx={{ position: 'relative' }}>
//                   <CardMedia
//                     component="img"
//                     image={item.img || 'https://via.placeholder.com/300'}
//                     alt={item.name}
//                     sx={{
//                       height: 240,
//                       objectFit: 'contain',
//                       borderTopLeftRadius: 16,
//                       borderTopRightRadius: 16,
//                       backgroundColor: '#f5f5f5',
//                     }}
//                   />
//                   <IconButton
//                     onClick={() =>
//                       isInWishlist ? removeFromWishlist(item.id) : addToWishlist(item)
//                     }
//                     sx={{
//                       position: 'absolute',
//                       top: 12,
//                       right: 12,
//                       bgcolor: 'white',
//                       boxShadow: 2,
//                       '&:hover': { bgcolor: '#ffeef0' },
//                     }}
//                   >
//                     {isInWishlist ? <FavoriteIcon color="error" /> : <FavoriteBorderIcon />}
//                   </IconButton>
//                 </Box>

//                 <CardContent sx={{ flexGrow: 1, pl: 1, py: 0, pr: 0 }}>
//                   <Typography variant="subtitle1" fontWeight={600} noWrap>
//                     {item.name}
//                   </Typography>

//                   <Box sx={{ display: 'flex', alignItems: 'center', mt: 1 }}>
//                     <Rating value={item.starRating} precision={0.1} readOnly size="small" />
//                     <Typography variant="caption" sx={{ ml: 0.5 }}>
//                       ({item.starRating})
//                     </Typography>
//                   </Box>

//                   <Box sx={{ mt: 1, display: 'flex', gap: 1, alignItems: 'center', flexWrap: 'wrap' }}>
//                     <Typography variant="body2" color="white" sx={{ px: 0.9, textAlign: 'center', bgcolor: 'rgb(57, 91, 178)', borderRadius: '15px' }}> {item.category} Whereis</Typography>
//                     <Typography variant="body2" color="white" sx={{ px: 0.9, textAlign: 'center', bgcolor: 'rgb(57, 91, 178)', borderRadius: '15px' }}> {item.type}</Typography>

//                   </Box>

//                   <Box mt={2}>
//                     <Box sx={{ display: 'flex', gap: 0.5, alignItems: 'center', flexWrap: 'wrap' }}>

//                       <Typography>Sizes:</Typography>

//                       {item.size?.map((size) => (
//                         <Chip
//                           label={size}
//                           key={size}
//                           size="small"
//                           sx={{
//                             fontSize: '10px',
//                             fontWeight: 'bold',
//                             bgcolor: '#e3f2fd',
//                             color: '#1976d2',
//                           }}
//                         />
//                       ))}
//                     </Box>
//                   </Box>


//                   <Box sx={{ mt: 1, display: 'flex', alignItems: 'center', gap: 0.5 }}>

//                     <Typography>Price: </Typography>

//                     <Typography variant="h6" color="primary">
//                       ${item.price.toFixed(2)}
//                     </Typography>
//                   </Box>
//                 </CardContent>

//                 <CardActions
//                   sx={{
//                     pb: 1,
//                     display: 'flex',
//                     flexDirection: 'row',
//                     gap: 0.5,
//                   }}
//                 >
//                   <Button
//                     variant={isInWishlist ? 'outlined' : 'contained'}
//                     color={isInWishlist ? 'error' : 'primary'}
//                     startIcon={isInWishlist ? <DeleteForeverIcon sx={{ fontSize: isSmallScreen ? '10px' : '12px' }} /> : <FavoriteIcon sx={{ fontSize: isSmallScreen ? '1px' : '12px' }} />}
//                     onClick={() =>
//                       isInWishlist ? removeFromWishlist(item.id) : addToWishlist(item)
//                     }
//                     sx={{
//                       borderRadius: 2,
//                       fontSize: isSmallScreen ? '10px' : '12px',
//                     }}
//                   >
//                     {isInWishlist ? 'Remove' : 'Wishlist'}
//                   </Button>

//                   <Button
//                     variant={isInCart ? 'outlined' : 'contained'}
//                     color={isInCart ? 'error' : 'success'}
//                     startIcon={isInCart ? <DeleteIcon sx={{ fontSize: isSmallScreen ? '10px' : '12px' }} /> : <AddIcon sx={{ fontSize: isSmallScreen ? '10px' : '12px' }} />}
//                     onClick={() =>
//                       isInCart ? removeFromCart(item.id) : addToCart(item)
//                     }
//                     sx={{
//                       borderRadius: 2,
//                       fontSize: isSmallScreen ? '10px' : '12px',

//                     }}
//                   >
//                     {isInCart ? 'Remove' : 'AddCart'}
//                   </Button>
//                 </CardActions>
//               </Card>
//             </Grid>
//           );
//         })}
//       </Grid>
//     </Box>
//   );
// };

// export default Data;















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
    <Box sx={{ padding: { xs: 2, sm: 3, md: 4 } }}>
      <Grid container spacing={3}>
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
                    image={item.img || 'https://via.placeholder.com/300'}
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
                    gap: 0.5,
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
