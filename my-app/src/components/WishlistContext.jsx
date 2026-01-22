import React, { createContext, useContext, useState, useEffect, useMemo, useCallback } from 'react';

/* eslint-disable react-refresh/only-export-components */
export const WishlistContext = createContext();

export const useWishlist = () => useContext(WishlistContext);

export const WishlistProvider = ({ children }) => {
    const [wishlistItems, setWishlistItems] = useState(() => {
        const stored = localStorage.getItem('wishlist');
        return stored ? JSON.parse(stored) : [];
    });

    useEffect(() => {
        localStorage.setItem('wishlist', JSON.stringify(wishlistItems));
    }, [wishlistItems]);

    const addToWishlist = useCallback((item) => {
        setWishlistItems((prev) => {
            const exists = prev.find((i) => i.id === item.id);
            if (exists) return prev;
            return [...prev, item];
        });
    }, []);

    const removeFromWishlist = useCallback((id) => {
        setWishlistItems((prev) => prev.filter((item) => item.id !== id));
    }, []);

    const value = useMemo(() => ({
        wishlistItems,
        addToWishlist,
        removeFromWishlist,
    }), [wishlistItems, addToWishlist, removeFromWishlist]);

    return (
        <WishlistContext.Provider value={value}>
            {children}
        </WishlistContext.Provider>
    );
};
