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
    IconButton,
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import DeleteIcon from '@mui/icons-material/Delete';
import { useCart } from './CartContext';
import { Link } from 'react-router-dom';

const CartPage = () => {
    const { cartItems, removeFromCart, increaseQuantity, decreaseQuantity, getTotalAmount } = useCart();

    if (cartItems.length === 0) {
        return (
            <Box sx={{ height: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Typography variant="h6" sx={{ textAlign: 'center', mt: 5 }}>
                    Your cart is empty.
                </Typography>
                <Button
                    component={Link}
                    to='/'
                    sx={{ mt: 2, color: 'white', bgcolor: 'rgba(172, 2, 2, 1)', boxShadow: '0px 5px 10px black', '&:hover': { bgcolor: 'rgba(40, 39, 39, 0.1)' } }}
                >Go to Shopping</Button>
            </Box>
        );
    }

    return (
        <Box sx={{ p: 3, pb: 10, minHeight: '100vh' }}>
            <Typography variant="h4" gutterBottom sx={{ textDecoration: 'underline', fontWeight: 'bold', mb: 2 }}>
                Your Shopping Cart
            </Typography>

            <Grid container spacing={2}>
                {cartItems.map((item) => (
                    <Grid size={{ xs: 12, sm: 6, md: 4 }} key={item.id}>
                        <Card sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                            <CardMedia
                                component="img"
                                height="150"
                                image={`${(import.meta.env.BASE_URL || '/').replace(/\/$/, '')}${item.img}`}
                                alt={item.name}
                                sx={{ objectFit: 'contain' }}
                            />
                            <CardContent sx={{ flexGrow: 1 }}>
                                <Typography variant="h6">{item.name}</Typography>
                                <Typography>Price: ${item.price.toFixed(2)}</Typography>
                                <Box sx={{ display: 'flex', alignItems: 'center', mt: 1 }}>
                                    <IconButton onClick={() => decreaseQuantity(item.id)} size="small">
                                        <RemoveIcon />
                                    </IconButton>
                                    <Typography sx={{ mx: 2 }}>{item.quantity}</Typography>
                                    <IconButton onClick={() => increaseQuantity(item.id)} size="small">
                                        <AddIcon />
                                    </IconButton>
                                </Box>
                            </CardContent>
                            <CardActions>
                                <Button
                                    variant="outlined"
                                    color="error"
                                    startIcon={<DeleteIcon />}
                                    onClick={() => removeFromCart(item.id)}
                                >
                                    Remove
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>
                ))}
            </Grid>

            <Box sx={{ mt: 4, py: 2, borderTop: '2px solid #ccc', borderBottom: '2px solid #ccc', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Typography variant="h5">Total: ${getTotalAmount().toFixed(2)}</Typography>
            </Box>
        </Box>
    );
};

export default CartPage;
