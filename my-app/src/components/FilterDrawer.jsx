import {
  Box,
  Drawer,
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  TextField,
  FormGroup,
  FormControlLabel,
  Button,
  Radio,
} from '@mui/material'

const FilterDrawer = ({ open, onClose, filters, setFilters }) => {
  const handleChange = (e) => {
    const { name, value } = e.target
    setFilters({ ...filters, [name]: value })
  }

  const handleStarChange = (star) => {
    setFilters((prev) => {
      const checked = prev.starRating.includes(star)
      const updated = checked
        ? prev.starRating.filter((s) => s !== star)
        : [...prev.starRating, star]
      return { ...prev, starRating: updated }
    })
  }

  return (
    <Drawer anchor="right" open={open} onClose={onClose}>
      <Box sx={{ width: 300, p: 3 }}>
        <Typography variant="h6" gutterBottom>
          Filters
        </Typography>

        <TextField
          label="Min Price"
          name="priceMin"
          type="number"
          fullWidth
          value={filters.priceMin}
          onChange={handleChange}
          sx={{ mb: 2 }}
        />
        
        <TextField
          label="Max Price"
          name="priceMax"
          type="number"
          fullWidth
          value={filters.priceMax}
          onChange={handleChange}
          sx={{ mb: 2 }}
        />

        <FormControl fullWidth sx={{ mb: 2 }}>
          <InputLabel>Category</InputLabel>
          <TextField
            select
            label="Category"
            name="category"
            value={filters.category}
            onChange={handleChange}
          >
            <MenuItem value="">All</MenuItem>
            <MenuItem value="Dress">Dress</MenuItem>
            <MenuItem value="Shirt">Shirt</MenuItem>
            <MenuItem value="Jeans">Jeans</MenuItem>
          </TextField>
        </FormControl>

        <Typography variant="subtitle1">Star Rating</Typography>
        <FormGroup>
          {[1, 2, 3, 4, 5].map((s) => (
            <FormControlLabel
              key={s}
              control={
                <Radio
                  checked={filters.starRating.includes(s)}
                  onChange={() => handleStarChange(s)}
                />
              }
              label={`${s} & up`}
            />
          ))}
        </FormGroup>

        <Button
          variant="contained"
          color="primary"
          fullWidth
          sx={{ mt: 2 }}
          onClick={onClose}
        >
          Apply Filters
        </Button>
      </Box>
    </Drawer>
  )
}

export default FilterDrawer

