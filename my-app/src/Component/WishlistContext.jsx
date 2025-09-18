// import React, { createContext, useContext, useEffect, useState } from 'react';

// const WishlistContext = createContext();

// export const useWishlist = () => useContext(WishlistContext);

// export const WishlistProvider = ({ children }) => {
//   const [wishlistItems, setWishlistItems] = useState([]);

//   // ✅ Load wishlist from localStorage
//   useEffect(() => {
//     const stored = localStorage.getItem('wishlist');
//     if (stored) {
//       setWishlistItems(JSON.parse(stored));
//     }
//   }, []);

//   // ✅ Save wishlist to localStorage
//   useEffect(() => {
//     localStorage.setItem('wishlist', JSON.stringify(wishlistItems));
//   }, [wishlistItems]);

//   const addToWishlist = (item) => {
//     if (!wishlistItems.find((i) => i.id === item.id)) {
//       setWishlistItems([...wishlistItems, item]);
//     }
//   };

//   const removeFromWishlist = (id) => {
//     setWishlistItems(wishlistItems.filter((item) => item.id !== id));
//   };

//   return (
//     <WishlistContext.Provider
//       value={{
//         wishlistItems,
//         addToWishlist,
//         removeFromWishlist,
//       }}
//     >
//       {children}
//     </WishlistContext.Provider>
//   );
// };






import React, { createContext, useContext, useState, useEffect } from 'react';

const WishlistContext = createContext();

export const useWishlist = () => useContext(WishlistContext);

export const WishlistProvider = ({ children }) => {
  const [wishlistItems, setWishlistItems] = useState(() => {
    const stored = localStorage.getItem('wishlist');
    return stored ? JSON.parse(stored) : [];
  });

  useEffect(() => {
    localStorage.setItem('wishlist', JSON.stringify(wishlistItems));
  }, [wishlistItems]);

  const addToWishlist = (item) => {
    setWishlistItems((prev) => {
      const exists = prev.find((i) => i.id === item.id);
      if (exists) return prev;
      return [...prev, item];
    });
  };

  const removeFromWishlist = (id) => {
    setWishlistItems((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <WishlistContext.Provider
      value={{
        wishlistItems,
        addToWishlist,
        removeFromWishlist,
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
};
