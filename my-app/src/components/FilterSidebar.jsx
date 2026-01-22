// import React, { useState, useEffect } from 'react';
// import {
//   Drawer,
//   Box,
//   Typography,
//   IconButton,
//   TextField,
//   MenuItem,
//   RadioGroup,
//   FormControlLabel,
//   Radio,
//   Checkbox,
//   Button,
// } from '@mui/material';
// import CloseIcon from '@mui/icons-material/Close';

// const FilterSidebar = ({ open, onClose, filters, setFilters, dresses }) => {
//   const categories = Array.from(new Set(dresses.map(d => d.category)));
//   const sizes = Array.from(new Set(dresses.flatMap(d => d.size)));

//   const [local, setLocal] = useState({
//     priceMin: filters.priceMin || '',
//     priceMax: filters.priceMax || '',
//     starRating: filters.starRating?.[0]?.toString() || '',
//     sort: filters.sort || '',
//     category: filters.category || '',
//     sizes: filters.sizes || [],
//   });

//   useEffect(() => {
//     setLocal({
//       priceMin: filters.priceMin || '',
//       priceMax: filters.priceMax || '',
//       starRating: filters.starRating?.[0]?.toString() || '',
//       sort: filters.sort || '',
//       category: filters.category || '',
//       sizes: filters.sizes || [],
//     })
//   }, [filters, open]);

//   const apply = () => {
//     const updated = {
//       priceMin: local.priceMin,
//       priceMax: local.priceMax,
//       starRating: local.starRating ? [parseInt(local.starRating)] : [],
//       sort: local.sort,
//       category: local.category,
//       sizes: local.sizes,
//     };
//     setFilters(updated);
//     onClose();
//   };

//   const clearAll = () => {
//     setLocal({ priceMin: '', priceMax: '', starRating: '', sort: '', category: '', sizes: [] });
//     setFilters({});
//     onClose();
//   };

//   const toggleSize = sz => {
//     setLocal(l => ({
//       ...l,
//       sizes: l.sizes.includes(sz) ? l.sizes.filter(x => x !== sz) : [...l.sizes, sz],
//     }));
//   };

//   return (
//     <Drawer anchor="left" open={open} onClose={onClose}>
//       <Box sx={{ width: 250, p: 2 }}>
//         <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
//           <Typography variant="h6">Filters</Typography>
//           <IconButton onClick={onClose}><CloseIcon /></IconButton>
//         </Box>
//         <Box mt={1}>
//           <Typography>Price Range</Typography>
//           <Box sx={{ display: 'flex', gap: 1, mt: 1 }}>
//             <TextField label="Min" type="number" value={local.priceMin}
//               onChange={e => setLocal(l => ({ ...l, priceMin: e.target.value }))} size="small" fullWidth />
//             <TextField label="Max" type="number" value={local.priceMax}
//               onChange={e => setLocal(l => ({ ...l, priceMax: e.target.value }))} size="small" fullWidth />
//           </Box>
//         </Box>

//         <TextField
//           select
//           fullWidth
//           label="Category"
//           value={local.category}
//           onChange={(e) => setLocal((prev) => ({ ...prev, category: e.target.value }))}
//           sx={{ mt: 2,minHeight:'10px' }}
//         >
//           <MenuItem value="">All</MenuItem>
//           {categories.map((Category) => (
//             <MenuItem key={Category} value={Category}>
//               {Category}
//             </MenuItem>
//           ))}
//         </TextField>

//         <Box mt={1}>
//           <Typography>Sizes</Typography>
//           {sizes.map(sz => (
//             <FormControlLabel
//               key={sz}
//               control={<Checkbox checked={local.sizes.includes(sz)} onChange={() => toggleSize(sz)} />}
//               label={sz}
//             />
//           ))}
//         </Box>

//         <Box mt={1}>
//           <Typography>Star Rating</Typography>
//           <RadioGroup value={local.starRating} onChange={e => setLocal(prev => ({ ...prev, starRating: e.target.value }))}>
//             {['⭐⭐⭐⭐⭐', '⭐⭐⭐⭐', '⭐⭐⭐', '⭐⭐', '⭐'].map(v => (
//               <FormControlLabel key={v} value={v.toString()} control={<Radio />} label={`${v} & up`} />
//             ))}
//           </RadioGroup>
//         </Box>

//         <Box sx={{ position: 'fixed', bottom: 10, left: 200, display: 'flex', flexDirection: 'column', gap: 1, mt: 4 }}>
//           <Button variant="outlined" onClick={clearAll}>Clear</Button>
//           <Button variant="contained" onClick={apply}>Apply</Button>
//         </Box>
//       </Box>
//     </Drawer>
//   );
// };

// export default FilterSidebar;










import React, { useState, useEffect } from 'react';
import {
  Drawer,
  Box,
  Typography,
  IconButton,
  TextField,
  MenuItem,
  RadioGroup,
  FormControlLabel,
  Radio,
  Checkbox,
  Button,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const FilterSidebar = ({ open, onClose, filters, setFilters, dresses }) => {
  const categories = Array.from(new Set(dresses.map(d => d.category)));
  const sizes = Array.from(new Set(dresses.flatMap(d => d.size)));

  const [local, setLocal] = useState({
    priceMin: filters.priceMin || '',
    priceMax: filters.priceMax || '',
    starRating: filters.starRating?.[0]?.toString() || '',
    sort: filters.sort || '',
    category: filters.category || '',
    sizes: filters.sizes || [],
  });

  useEffect(() => {
    setLocal({
      priceMin: filters.priceMin || '',
      priceMax: filters.priceMax || '',
      starRating: filters.starRating?.[0]?.toString() || '',
      sort: filters.sort || '',
      category: filters.category || '',
      sizes: filters.sizes || [],
    });
  }, [filters, open]);

  const apply = () => {
    const updated = {
      priceMin: local.priceMin,
      priceMax: local.priceMax,
      starRating: local.starRating ? [parseInt(local.starRating, 10)] : [],
      sort: local.sort,
      category: local.category,
      sizes: local.sizes,
    };
    setFilters(updated);
    onClose();
  };

  const clearAll = () => {
    setLocal({ priceMin: '', priceMax: '', starRating: '', sort: '', category: '', sizes: [] });
    setFilters({});
    onClose();
  };

  const toggleSize = sz => {
    setLocal(l => ({
      ...l,
      sizes: l.sizes.includes(sz) ? l.sizes.filter(x => x !== sz) : [...l.sizes, sz],
    }));
  };

  // Define star options with numeric values and star labels
  const starOptions = [
    { label: '⭐⭐⭐⭐⭐', value: '5' },
    { label: '⭐⭐⭐⭐', value: '4' },
    { label: '⭐⭐⭐', value: '3' },
    { label: '⭐⭐', value: '2' },
    { label: '⭐', value: '1' },
  ];

  return (
    <Drawer anchor="left" open={open} onClose={onClose}>
      <Box sx={{ width: 250, p: 2 }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Typography variant="h6">Filters</Typography>
          <IconButton onClick={onClose}><CloseIcon /></IconButton>
        </Box>

        <Box mt={1}>
          <Typography>Price Range</Typography>
          <Box sx={{ display: 'flex', gap: 1, mt: 1 }}>
            <TextField
              label="Min"
              type="number"
              value={local.priceMin}
              onChange={e => setLocal(l => ({ ...l, priceMin: e.target.value }))}
              size="small"
              fullWidth
            />
            <TextField
              label="Max"
              type="number"
              value={local.priceMax}
              onChange={e => setLocal(l => ({ ...l, priceMax: e.target.value }))}
              size="small"
              fullWidth
            />
          </Box>
        </Box>

        <TextField
          select
          fullWidth
          label="Category"
          value={local.category}
          onChange={e => setLocal(prev => ({ ...prev, category: e.target.value }))}
          sx={{ mt: 2, minHeight: '10px' }}
        >
          <MenuItem value="">All</MenuItem>
          {categories.map(Category => (
            <MenuItem key={Category} value={Category}>
              {Category}
            </MenuItem>
          ))}
        </TextField>

        <Box mt={1}>
          <Typography>Sizes</Typography>
          {sizes.map(sz => (
            <FormControlLabel
              key={sz}
              control={<Checkbox checked={local.sizes.includes(sz)} onChange={() => toggleSize(sz)} />}
              label={sz}
            />
          ))}
        </Box>

        <Box mt={1}>
          <Typography>Star Rating</Typography>
          <RadioGroup
            value={local.starRating}
            onChange={e => setLocal(prev => ({ ...prev, starRating: e.target.value }))}
          >
            {starOptions.map(({ label, value }) => (
              <FormControlLabel
                key={value}
                value={value}
                control={<Radio />}
                label={`${label} & up`}
              />
            ))}
          </RadioGroup>
        </Box>

        <Box
          sx={{
            position: 'fixed',
            bottom: 10,
            left: 200,
            display: 'flex',
            flexDirection: 'column',
            gap: 1,
            mt: 4,
          }}
        >
          <Button variant="outlined" onClick={clearAll}>
            Clear
          </Button>
          <Button variant="contained" onClick={apply}>
            Apply
          </Button>
        </Box>
      </Box>
    </Drawer>
  );
};

export default FilterSidebar;
