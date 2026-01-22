import React from 'react'
import { AppBar, Toolbar, Button, Box, Badge, Typography, } from '@mui/material'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import FavoriteIcon from '@mui/icons-material/Favorite'
import HomeIcon from '@mui/icons-material/Home'; import { Link, useNavigate } from 'react-router-dom'
import { useCart } from './CartContext'
import { useWishlist } from './WishlistContext'

const Navbar = () => {
  const { cartItems } = useCart()
  const { wishlistItems } = useWishlist()
  const navigate = useNavigate()

  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0)

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <AppBar sx={{ position: 'sticky', top: 0, mb: 2, bgcolor: 'rgb(64, 143, 165)' }}>
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', gap: 1 }}>
        <Button
          onClick={() => {
            scrollToTop();
            navigate('/');
          }}
        >
          <Typography
            variant="h6"
            component="div"
            sx={{
              color: 'white',
              cursor: 'pointer',
              fontWeight: '500',
              textShadow: '0px 5px 10px black',
              '&:hover': {
                fontWeight: '900',
                textShadow: '0px 10px 10px black',
              },
            }}
          >
            Shopping
          </Typography>
        </Button>


        <Box sx={{ p: 0, display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 1 }}>

          <Button
            color="inherit"
            component={Link}
            to='/'
            onClick={scrollToTop}
            sx={{ p: 0.1, py: 0.5, minWidth: '10px', pr: { xs: 0, sm: 0, md: 0, lg: 1 }, bgcolor: 'rgba(77, 73, 73, 0.59)', boxShadow: '0px 5px 10px black', '&:hover': { bgcolor: 'rgba(40, 39, 39, 0.1)' } }}
          >
            <HomeIcon sx={{ p: 0, mr: "5px", pl: '5px' }} />
            <Typography sx={{ p: 0, display: { xs: 'none', sm: 'none', lg: 'block' } }}>
              Home
            </Typography>
          </Button>

          <Button
            color="inherit"
            component={Link}
            to='/wishlist'
            onClick={scrollToTop}
            sx={{ p: 0.1, py: 0.5, minWidth: '10px', pr: { xs: 0, sm: 0, md: 0, lg: 1 }, bgcolor: 'rgba(77, 73, 73, 0.59)', boxShadow: '0px 5px 10px black', '&:hover': { bgcolor: 'rgba(40, 39, 39, 0.1)' } }}
            startIcon={(
              <Badge badgeContent={wishlistItems.length} color="error">
                <FavoriteIcon sx={{ pl: '10px' }} />
              </Badge>
            )}
          >
            <Typography sx={{ display: { xs: 'none', lg: 'block' } }}>
              Wishlist
            </Typography>
          </Button>


          <Button
            color="inherit"
            component={Link}
            to='/cart'
            onClick={scrollToTop}
            sx={{ p: 0.1, py: 0.5, minWidth: '10px', pr: { xs: 0, sm: 0, md: 0, lg: 1 }, bgcolor: 'rgba(77, 73, 73, 0.59)', boxShadow: '0px 5px 10px black', '&:hover': { bgcolor: 'rgba(40, 39, 39, 0.1)' } }}

            startIcon={(
              <Badge badgeContent={cartCount} color="secondary">
                <ShoppingCartIcon sx={{ pl: '10px' }} />
              </Badge>
            )}
          >
            <Typography sx={{ display: { xs: 'none', lg: 'block' } }}>
              cart
            </Typography>
          </Button>

        </Box>
      </Toolbar>
    </AppBar>
  )
}

export default Navbar
