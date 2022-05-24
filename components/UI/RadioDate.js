import React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import FormControlLabel from '@mui/material/FormControlLabel';
import ListItemText from '@mui/material/ListItemText';
import Select from '@mui/material/Select';

import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';

const years = ['1997', '1998', '1999', '2000'];
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

export default function RadioDate(props) {
  console.log({ props });
  const [dates, setDates] = React.useState({ from: 'from', to: 'to' });

  const [anchorEl, setAnchorEl] = React.useState(null);

  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleChange = (event) => {
    const {
      target: { value, name },
    } = event;
    setDates({ ...dates, [name]: value });
  };
  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        Dashboard
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          defaultValue="female"
          name="radio-buttons-group"
          onChange={(e) => {
            console.log(e.target.value);
            setDates({ from: 'from', to: 'to' });
          }}
        >
          {props.options?.map((option) => {
            return (
              <FormControlLabel
                key={option.value}
                value={option.value}
                control={<Radio />}
                label={option.name}
              />
            );
          })}
        </RadioGroup>
        <Select
          labelId="demo-multiple-checkbox-label"
          id="demo-multiple-checkbox"
          value={dates.from}
          onChange={handleChange}
          MenuProps={MenuProps}
          sx={{ width: '200px' }}
          name={'from'}
        >
          <MenuItem value={'from'} disabled>
            <ListItemText primary={'From'} />{' '}
          </MenuItem>

          {years.map((year) => (
            <MenuItem key={year} value={year}>
              <ListItemText primary={year} />
            </MenuItem>
          ))}
        </Select>

        <Select
          labelId="demo-multiple-checkbox-label"
          id="demo-multiple-checkbox"
          value={dates.to}
          onChange={handleChange}
          MenuProps={MenuProps}
          sx={{ width: '200px' }}
          name={'to'}
        >
          <MenuItem value={'to'} disabled>
            <ListItemText primary={'To'} />
          </MenuItem>
          {years.map((year) => (
            <MenuItem key={year} value={year}>
              <ListItemText primary={year} />
            </MenuItem>
          ))}
        </Select>
      </Menu>
    </div>
  );
}
