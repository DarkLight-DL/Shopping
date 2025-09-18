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


  return (
    <AppBar sx={{ position: 'sticky', top: 0, mb: 2, bgcolor: 'rgb(64, 143, 165)' }}>
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between',gap:1 }}>
        <Typography
          variant="h6"
          component="div"
          onClick={() => navigate('/')}
          sx={{ cursor: 'pointer', fontWeight: '500',textShadow:'0px 5px 10px black','&:hover':{fontWeight:'900',textShadow:'0px 10px 10px black'} }}
        >
          Shopping
        </Typography>

        <Box sx={{p:0,display:'flex',justifyContent:'center',alignItems:'center',gap:1}}>

          <Button
            color="inherit"
            component={Link}
            to='/'
            sx={{minWidth: '10px',bgcolor:'rgba(77, 73, 73, 0.59)',boxShadow:'0px 5px 10px black','&:hover':{bgcolor:'rgba(40, 39, 39, 0.1)'}}}
          >
            <HomeIcon sx={{p:0,mb:'3px',mr:"5px" ,pl:'5px'}} />
            <Typography sx={{ p:0,display: { xs: 'none',sm:'none', lg: 'block' } }}>
              Home
            </Typography>
          </Button>

          <Button
            color="inherit"
            component={Link}
            to='/wishlist'
            sx={{ minWidth: '10px',bgcolor:'rgba(77, 73, 73, 0.59)',boxShadow:'0px 5px 10px black','&:hover':{bgcolor:'rgba(40, 39, 39, 0.1)'}}}
            startIcon={(
              <Badge badgeContent={wishlistItems.length} color="error">
                <FavoriteIcon  sx={{pl:'10px'}}/>
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
            sx={{ minWidth: '10px' ,bgcolor:'rgba(77, 73, 73, 0.59)',boxShadow:'0px 5px 10px black','&:hover':{bgcolor:'rgba(40, 39, 39, 0.1)'}}}

            startIcon={(
              <Badge badgeContent={cartCount} color="secondary">
                <ShoppingCartIcon sx={{pl:'10px'}} />
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
