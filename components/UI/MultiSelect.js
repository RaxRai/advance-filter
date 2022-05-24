import React from 'react';
import Checkbox from '@mui/material/Checkbox';
import OutlinedInput from '@mui/material/OutlinedInput';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import FormControlLabel from '@mui/material/FormControlLabel';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import ListItemText from '@mui/material/ListItemText';
import Select from '@mui/material/Select';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

export default function MultiSelect(props) {
  const [selectData, setSelectData] = React.useState([
    props?.options[0]?.value,
  ]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setSelectData(typeof value === 'string' ? value.split(',') : value);
  };

  return (
    <Select
      labelId="demo-multiple-checkbox-label"
      id="demo-multiple-checkbox"
      multiple
      value={selectData}
      onChange={handleChange}
      input={<OutlinedInput label="Tag" />}
      renderValue={(selected) => selected.join(', ')}
      MenuProps={MenuProps}
      defaultOpen={true}
      sx={{ width: '200px' }}
    >
      {props.options.map((option) => (
        <MenuItem key={option.value} value={option.value}>
          <Checkbox checked={selectData.indexOf(option.value) > -1} />
          <ListItemText primary={option.name} />
        </MenuItem>
      ))}
      <button>hello</button>
    </Select>
  );
}
