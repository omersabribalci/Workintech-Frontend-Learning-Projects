import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";

function Dropdown({ categories, selected, onChange }) {
  return (
 
    <FormControl fullWidth sx={{ marginBottom: 3 }}>
      <InputLabel>Kategori</InputLabel>
      <Select
        value={selected}
        label="Kategori"
        onChange={(e) => onChange(e.target.value)}
      >
        {categories && categories.map((cat, index) => (
          <MenuItem key={index} value={cat}>
            {cat.toUpperCase()}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}

export default Dropdown;