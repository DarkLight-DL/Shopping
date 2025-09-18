// import React, { useState, useEffect } from 'react';
// import { Box, Typography, Button, TextField, Stack, Skeleton, Grid, Card, CardMedia, CardContent, MenuItem, Select, FormControl, InputLabel } from '@mui/material';
// import FilterListIcon from '@mui/icons-material/FilterList';
// import Data from './Data';
// import FilterSidebar from './FilterSidebar';

// import axios from 'axios';
// import pic from '../Asset/HeroPic.webp';
// const API_URL = process.env.PUBLIC_URL || '';

// const Home = () => {
//   const [filters, setFilters] = useState({});
//   const [searchQuery, setSearchQuery] = useState('');
//   const [openFilter, setOpenFilter] = useState(false);
//   const [dresses, setDresses] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [sortOption, setSortOption] = useState('');

//   useEffect(() => {
//     const fetchDresses = async () => {
//       try {
//         const res = await axios.get(`${API_URL}/shopping.json`);
//         setDresses(res.data.list);
//       } catch (err) {
//         console.error("Failed to fetch dresses", err);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchDresses();
//   }, []);

//   if (loading) {
//     return (
//       <Box sx={{ p: 3 }}>

//           <Skeleton variant="rectangular" width={'100%'} height={200} />
//           <Skeleton variant="text" width={120} height={50} sx={{mx:'auto'}} />
//         <Stack direction={{ xs: 'row', sm: 'row' }} spacing={2} sx={{ mb: 3 }}>
//           <Skeleton variant="text" width={120} height={50} />
//           <Skeleton variant="text" width="100%" height={50} sx={{ flexGrow: 1, minWidth: 200 }} />
//         </Stack>

//         <Grid container spacing={2}>
//           {[...Array(16)].map((_, idx) => (
//             <Grid size={{ xs: 6, sm: 6, md: 4, lg: 3 }} key={idx}>
//               <Card>
//                 <Skeleton variant="rectangular" height={200} />
//                 <CardContent>
//                   <Skeleton variant="text" height={30} width="80%" sx={{ mb: 1 }} />
//                   <Skeleton variant="text" height={20} width="40%" />
//                   <Box sx={{ display: 'flex', gap: 2 ,mt:1}}>
//                     <Skeleton variant="circular" height={20} width={20} />
//                     <Skeleton variant="circular" height={20} width={20} />
//                     <Skeleton variant="circular" height={20} width={20} />
//                   </Box>

//                 </CardContent>
//                 <CardMedia>
//                   <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 2 }}>

//                     <Skeleton variant="text" height={40} width="40%" />
//                     <Skeleton variant="text" height={40} width="40%" />
//                   </Box>

//                 </CardMedia>
//               </Card>
//             </Grid>
//           ))}
//         </Grid>
//       </Box>
//     );
//   }

//   return (
//     <>
//       <Box
//         sx={{
//           // px: 3,
//           // py: 2,
//           backgroundImage: `url(${pic})`,
          
//           backgroundSize: 'cover',
//           backgroundPosition: 'center',
//           display: 'flex',
//           flexDirection: { xs: 'column', sm: 'row' },
//           alignItems: 'center',
//           flexWrap: 'wrap',
//           aspectRatio: '16 / 5',
//         }}
//       >
//       </Box>

        

// <Box
//   sx={{
//     p:1,
//     bgcolor: 'rgba(199, 211, 214, 1)',
//     flexDirection: { xs: 'column', sm: 'row' },
//     alignItems: 'center',
//     gap: 2,
//     justifyContent: 'space-between',
//     flexWrap: 'wrap',
//     position: 'sticky',
//     top: { xs: '0px', sm: '15px', md: '15px' },
//     zIndex: 10,
//   }}
// >
//   <Typography
//     variant="h4"
//     fontWeight="bold"
//     sx={{ mb: 1, textAlign: 'center', width: '100%', color: 'balck' }}
//   >
//     Shopping
//   </Typography>

//   <Stack
//     spacing={1}
//     display={'flex'}
//     sx={{ width: '100%'}}
//     flexGrow={1}
//   >
//     <Box sx={{ mr: 1, display: 'flex', gap: 1 }}>
//       <Button
//         variant="outlined"
//         onClick={() => setOpenFilter(true)}
//           size="small"

//         sx={{
//           minWidth: {xs:60,sm:100},
//           borderColor: 'black',
//           color: 'black',
//           fontSize: {xs:'0.55rem',sm:'1rem'},
//           '&:hover': {
//             borderColor: 'gray',
//             backgroundColor: 'gray',
            
//           },
          
//         }}
//       >
//         <FilterListIcon sx={{fontSize: {xs:'1rem',sm:'1.5rem'}}}/>
//         Filter
//       </Button>

//       <FormControl
//         size="small"
//         sx={{
//           minWidth: {xs:70,sm:100},
//           '& .MuiInputLabel-root': { color: 'black' },
//           '& .MuiOutlinedInput-root': {
//             color: 'black',
//             fontSize: {xs:'0.75rem',sm:'1rem'},
//             '& fieldset': {borderColor: 'black',},
//             '&:hover fieldset': {borderColor: 'gray',},
//             '&.Mui-focused fieldset': {borderColor: 'black',},
//           },
//         }}
//       >
//         <InputLabel sx={{fontSize: {xs:'0.60rem',sm:'1rem'}}}>Sort By</InputLabel>
//         <Select
//           value={sortOption}
//           onChange={(e) => setSortOption(e.target.value)}
//           label="Sort By"
//         >
//           <MenuItem value="" sx={{fontSize: {xs:'0.60rem',sm:'1rem'}}}>None</MenuItem>
//           <MenuItem value="az" sx={{fontSize: {xs:'0.60rem',sm:'1rem'}}}>A → Z</MenuItem>
//           <MenuItem value="za" sx={{fontSize: {xs:'0.60rem',sm:'1rem'}}}>Z → A</MenuItem>
//           <MenuItem value="priceLowHigh" sx={{fontSize: {xs:'0.60rem',sm:'1rem'}}}>Price: Low to High</MenuItem>
//           <MenuItem value="priceHighLow" sx={{fontSize: {xs:'0.60rem',sm:'1rem'}}}>Price: High to Low</MenuItem>
//           <MenuItem value="rangeLowHigh" sx={{fontSize: {xs:'0.60rem',sm:'1rem'}}}>Range: Low to High</MenuItem>
//           <MenuItem value="rangeHighLow" sx={{fontSize: {xs:'0.60rem',sm:'1rem'}}}>Range: High to Low</MenuItem>
//         </Select>
//       </FormControl>

//     <TextField
//       label="Search..."
//       variant="outlined"
//       size="small"
//       fullWidth
//       value={searchQuery}
//       onChange={(e) => setSearchQuery(e.target.value)}
//       sx={{
//         width:'100%',
//          minWidth:{xs :100,sm:200},
//         '& .MuiInputLabel-root': { color: 'black',fontSize: {xs:'0.75rem',sm :'1rem'}},
//         '& .MuiOutlinedInput-root': {
//           color: 'black',
//           fontSize: {xs:'0.75rem',sm :'1rem'},
//           '& fieldset': {borderColor: 'black',},
//           '&:hover fieldset': {borderColor: 'gray',},
//           '&.Mui-focused fieldset': {borderColor: 'black',},
//         },
//       }}
//     />
//         </Box>

//   </Stack>
// </Box>




//       <FilterSidebar open={openFilter} onClose={() => setOpenFilter(false)} filters={filters} setFilters={setFilters} dresses={dresses} />

//       <Data
//         filters={filters}
//         searchQuery={searchQuery}
//         dresses={dresses}
//         sortOption={sortOption}
//       />
//     </>
//   );
// };

// export default Home;






































// import React, { useState, useEffect } from 'react';
// import {
//   Box,
//   Typography,
//   Button,
//   TextField,
//   Stack,
//   Skeleton,
//   Grid,
//   Card,
//   CardMedia,
//   CardContent,
//   MenuItem,
//   Select,
//   FormControl,
//   InputLabel,
// } from '@mui/material';
// import FilterListIcon from '@mui/icons-material/FilterList';
// import Data from './Data';
// import FilterSidebar from './FilterSidebar';

// import axios from 'axios';
// import pic from '../Asset/HeroPic.webp';

// const API_URL = process.env.PUBLIC_URL || '';

// const Home = () => {
//   const [filters, setFilters] = useState({});
//   const [searchQuery, setSearchQuery] = useState('');
//   const [openFilter, setOpenFilter] = useState(false);
//   const [dresses, setDresses] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [sortOption, setSortOption] = useState('');

//   useEffect(() => {
//     const fetchDresses = async () => {
//       try {
//         const res = await axios.get(`${API_URL}/shopping.json`);
//         setDresses(res.data.list);
//       } catch (err) {
//         console.error("Failed to fetch dresses", err);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchDresses();
//   }, []);

//   if (loading) {
//     return (
//       <Box sx={{ p: 3 }}>
//         <Skeleton variant="rectangular" width={'100%'} height={200} />
//         <Skeleton variant="text" width={120} height={50} sx={{ mx: 'auto' }} />
//         <Stack direction="row" spacing={2} sx={{ mb: 3 }}>
//           <Skeleton variant="text" width={120} height={50} />
//           <Skeleton variant="text" width="100%" height={50} sx={{ flexGrow: 1, minWidth: 200 }} />
//         </Stack>
//         <Grid container spacing={2}>
//           {[...Array(16)].map((_, idx) => (
//             <Grid size={{ xs: 6, sm: 6, md: 4, lg: 3 }} key={idx}>
//               <Card>
//                 <Skeleton variant="rectangular" height={200} />
//                 <CardContent>
//                   <Skeleton variant="text" height={30} width="80%" sx={{ mb: 1 }} />
//                   <Skeleton variant="text" height={20} width="40%" />
//                   <Box sx={{ display: 'flex', gap: 2, mt: 1 }}>
//                     <Skeleton variant="circular" height={20} width={20} />
//                     <Skeleton variant="circular" height={20} width={20} />
//                     <Skeleton variant="circular" height={20} width={20} />
//                   </Box>
//                 </CardContent>
//                 <CardMedia>
//                   <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 2 }}>
//                     <Skeleton variant="text" height={40} width="40%" />
//                     <Skeleton variant="text" height={40} width="40%" />
//                   </Box>
//                 </CardMedia>
//               </Card>
//             </Grid>
//           ))}
//         </Grid>
//       </Box>
//     );
//   }

//   return (
//     <>
//       <Box
//         sx={{
//           backgroundImage: `url(${pic})`,
//           backgroundSize: 'cover',
//           backgroundPosition: 'center',
//           display: 'flex',
//           flexDirection: { xs: 'column', sm: 'row' },
//           alignItems: 'center',
//           flexWrap: 'wrap',
//           aspectRatio: '16 / 5',
//         }}
//       />

//       <Box
//         sx={{
//           p: 1,
//           bgcolor: 'rgba(199, 211, 214, 1)',
//           flexDirection: { xs: 'column', sm: 'row' },
//           alignItems: 'center',
//           gap: 2,
//           justifyContent: 'space-between',
//           flexWrap: 'wrap',
//           position: 'sticky',
//           top: { xs: '0px', sm: '15px', md: '15px' },
//           zIndex: 10,
//         }}
//       >
//         <Typography
//           variant="h4"
//           fontWeight="bold"
//           sx={{ mb: 1, textAlign: 'center', width: '100%', color: 'black' }}
//         >
//           Shopping
//         </Typography>

//         <Stack spacing={1} display="flex" sx={{ width: '100%' }} flexGrow={1}>
//           <Box sx={{ mr: 1, display: 'flex', gap: 1 }}>
//             <Button
//               variant="outlined"
//               onClick={() => setOpenFilter(true)}
//               size="small"
//               sx={{
//                 minWidth: { xs: 60, sm: 100 },
//                 borderColor: 'black',
//                 color: 'black',
//                 fontSize: { xs: '0.55rem', sm: '1rem' },
//                 '&:hover': {
//                   borderColor: 'gray',
//                   backgroundColor: 'gray',
//                 },
//               }}
//             >
//               <FilterListIcon sx={{ fontSize: { xs: '1rem', sm: '1.5rem' } }} />
//               Filter
//             </Button>

//             <FormControl
//               size="small"
//               sx={{
//                 minWidth: { xs: 70, sm: 100 },
//                 '& .MuiInputLabel-root': {
//                   color: 'black',
//                   fontSize: { xs: '0.60rem', sm: '1rem' },
//                 },
//                 '& .MuiOutlinedInput-root': {
//                   color: 'black',
//                   fontSize: { xs: '0.75rem', sm: '1rem' },
//                   '& fieldset': { borderColor: 'black' },
//                   '&:hover fieldset': { borderColor: 'gray' },
//                   '&.Mui-focused fieldset': { borderColor: 'black' },
//                 },
//               }}
//             >
//               <InputLabel>Sort By</InputLabel>
//               <Select
//                 value={sortOption}
//                 onChange={(e) => setSortOption(e.target.value)}
//                 label="Sort By"
//               >
//                 <MenuItem value="" sx={{ fontSize: { xs: '0.6rem', sm: '1rem' } }}>None</MenuItem>
//                 <MenuItem value="az" sx={{ fontSize: { xs: '0.6rem', sm: '1rem' } }}>A → Z</MenuItem>
//                 <MenuItem value="za" sx={{ fontSize: { xs: '0.6rem', sm: '1rem' } }}>Z → A</MenuItem>
//                 <MenuItem value="priceLowHigh" sx={{ fontSize: { xs: '0.6rem', sm: '1rem' } }}>Price: Low to High</MenuItem>
//                 <MenuItem value="priceHighLow" sx={{ fontSize: { xs: '0.6rem', sm: '1rem' } }}>Price: High to Low</MenuItem>
//                 <MenuItem value="rangeLowHigh" sx={{ fontSize: { xs: '0.6rem', sm: '1rem' } }}>Range: Low to High</MenuItem>
//                 <MenuItem value="rangeHighLow" sx={{ fontSize: { xs: '0.6rem', sm: '1rem' } }}>Range: High to Low</MenuItem>
//               </Select>
//             </FormControl>

//             <TextField
//               label="Search..."
//               variant="outlined"
//               size="small"
//               fullWidth
//               value={searchQuery}
//               onChange={(e) => setSearchQuery(e.target.value)}
//               sx={{
//                 width: '100%',
//                 minWidth: { xs: 100, sm: 200 },
//                 '& .MuiInputLabel-root': {
//                   color: 'black',
//                   fontSize: { xs: '0.75rem', sm: '1rem' },
//                 },
//                 '& .MuiOutlinedInput-root': {
//                   color: 'black',
//                   fontSize: { xs: '0.75rem', sm: '1rem' },
//                   '& fieldset': { borderColor: 'black' },
//                   '&:hover fieldset': { borderColor: 'gray' },
//                   '&.Mui-focused fieldset': { borderColor: 'black' },
//                 },
//               }}
//             />
//           </Box>
//         </Stack>
//       </Box>

//       <FilterSidebar
//         open={openFilter}
//         onClose={() => setOpenFilter(false)}
//         filters={filters}
//         setFilters={setFilters}
//         dresses={dresses}
//       />

//       <Data
//         filters={filters}
//         searchQuery={searchQuery}
//         dresses={dresses}
//         sortOption={sortOption}
//       />
//     </>
//   );
// };

// export default Home;




















import React, { useState, useEffect } from 'react';
import {
  Box,
  Typography,
  Button,
  TextField,
  Stack,
  Skeleton,
  Grid,
  Card,
  CardMedia,
  CardContent,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
} from '@mui/material';
import FilterListIcon from '@mui/icons-material/FilterList';
import Data from './Data';
import FilterSidebar from './FilterSidebar';
import axios from 'axios';
import pic from '../Asset/HeroPic.webp';

const API_URL = process.env.PUBLIC_URL || '';

const Home = () => {
  const [filters, setFilters] = useState({});
  const [searchQuery, setSearchQuery] = useState('');
  const [openFilter, setOpenFilter] = useState(false);
  const [dresses, setDresses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [sortOption, setSortOption] = useState('');

  useEffect(() => {
    const fetchDresses = async () => {
      try {
        const res = await axios.get(`${API_URL}/shopping.json`);
        setDresses(res.data.list);
      } catch (err) {
        console.error("Failed to fetch dresses", err);
      } finally {
        setLoading(false);
      }
    };

    fetchDresses();
  }, []);

  if (loading) {
    return (
      <Box sx={{ p: 3 }}>
        <Skeleton variant="rectangular" width="100%" height={200} />
        <Skeleton variant="text" width={120} height={50} sx={{ mx: 'auto' }} />
        <Stack direction="row" spacing={2} sx={{ mb: 3 }}>
          <Skeleton variant="text" width={120} height={50} />
          <Skeleton variant="text" width="100%" height={50} sx={{ flexGrow: 1, minWidth: 200 }} />
        </Stack>
        <Grid container spacing={2}>
          {[...Array(16)].map((_, idx) => (
            <Grid item xs={6} sm={6} md={4} lg={3} key={idx}>
              <Card>
                <Skeleton variant="rectangular" height={200} width="100%" />
                <CardContent>
                  <Skeleton variant="text" height={30} width="80%" sx={{ mb: 1 }} />
                  <Skeleton variant="text" height={20} width="40%" />
                  <Box sx={{ display: 'flex', gap: 2, mt: 1 }}>
                    <Skeleton variant="circular" height={20} width={20} />
                    <Skeleton variant="circular" height={20} width={20} />
                    <Skeleton variant="circular" height={20} width={20} />
                  </Box>
                </CardContent>
                <CardMedia>
                  <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 2 }}>
                    <Skeleton variant="text" height={40} width="40%" />
                    <Skeleton variant="text" height={40} width="40%" />
                  </Box>
                </CardMedia>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    );
  }

  return (
    <>
      {/* Hero Image + Reflection */}
      <Box>
        {/* Main Image */}
        <Box
          sx={{
            backgroundImage: `url(${pic})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            aspectRatio: '16 / 5',
          }}
        />

        {/* Reflection */}
        <Box
          sx={{
            backgroundImage: `url(${pic})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            aspectRatio: '16 / 5',
            transform: 'scaleY(-1)',
            opacity: 0.25,
            filter: 'blur(2px)',
            maskImage: 'linear-gradient(to bottom, rgba(0,0,0,0.3), transparent)',
            WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,0.3), transparent)',
            marginTop: '-1px',
          }}
        />
      </Box>

      {/* Sticky Controls Section */}
      <Box
        sx={{
          p: 1,
          bgcolor: 'rgba(255, 255, 255, 0.9)',
          backdropFilter: 'blur(4px)',
          borderTop: '1px solid #ccc',
          position: 'sticky',
          top: 0,
          zIndex: 10,
          flexDirection: { xs: 'column', sm: 'row' },
          alignItems: 'center',
          gap: 2,
          justifyContent: 'space-between',
          flexWrap: 'wrap',
        }}
      >
        <Typography
          variant="h4"
          fontWeight="bold"
          sx={{ mb: 1, textAlign: 'center', width: '100%', color: 'black' }}
        >
          Shopping
        </Typography>

        <Stack spacing={1} display="flex" sx={{ width: '100%' }} flexGrow={1}>
          <Box sx={{ mr: 1, display: 'flex', gap: 1 }}>
            <Button
              variant="outlined"
              onClick={() => setOpenFilter(true)}
              size="small"
              sx={{
                minWidth: { xs: 60, sm: 100 },
                borderColor: 'black',
                color: 'black',
                fontSize: { xs: '0.55rem', sm: '1rem' },
                '&:hover': {
                  borderColor: 'gray',
                  backgroundColor: 'gray',
                },
              }}
            >
              <FilterListIcon sx={{ fontSize: { xs: '1rem', sm: '1.5rem' } }} />
              Filter
            </Button>

            <FormControl
              size="small"
              sx={{
                minWidth: { xs: 70, sm: 100 },
                '& .MuiInputLabel-root': {
                  color: 'black',
                  fontSize: { xs: '0.60rem', sm: '1rem' },
                },
                '& .MuiOutlinedInput-root': {
                  color: 'black',
                  fontSize: { xs: '0.75rem', sm: '1rem' },
                  '& fieldset': { borderColor: 'black' },
                  '&:hover fieldset': { borderColor: 'gray' },
                  '&.Mui-focused fieldset': { borderColor: 'black' },
                },
              }}
            >
              <InputLabel>Sort By</InputLabel>
              <Select
                value={sortOption}
                onChange={(e) => setSortOption(e.target.value)}
                label="Sort By"
              >
                <MenuItem value="">None</MenuItem>
                <MenuItem value="az">A → Z</MenuItem>
                <MenuItem value="za">Z → A</MenuItem>
                <MenuItem value="priceLowHigh">Price: Low to High</MenuItem>
                <MenuItem value="priceHighLow">Price: High to Low</MenuItem>
                <MenuItem value="rangeLowHigh">Range: Low to High</MenuItem>
                <MenuItem value="rangeHighLow">Range: High to Low</MenuItem>
              </Select>
            </FormControl>

            <TextField
              label="Search..."
              variant="outlined"
              size="small"
              fullWidth
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              sx={{
                width: '100%',
                minWidth: { xs: 100, sm: 200 },
                '& .MuiInputLabel-root': {
                  color: 'black',
                  fontSize: { xs: '0.75rem', sm: '1rem' },
                },
                '& .MuiOutlinedInput-root': {
                  color: 'black',
                  fontSize: { xs: '0.75rem', sm: '1rem' },
                  '& fieldset': { borderColor: 'black' },
                  '&:hover fieldset': { borderColor: 'gray' },
                  '&.Mui-focused fieldset': { borderColor: 'black' },
                },
              }}
            />
          </Box>
        </Stack>
      </Box>

      {/* Filter Sidebar */}
      <FilterSidebar
        open={openFilter}
        onClose={() => setOpenFilter(false)}
        filters={filters}
        setFilters={setFilters}
        dresses={dresses}
      />

      {/* Data Grid */}
      <Data
        filters={filters}
        searchQuery={searchQuery}
        dresses={dresses}
        sortOption={sortOption}
      />
    </>
  );
};

export default Home;
