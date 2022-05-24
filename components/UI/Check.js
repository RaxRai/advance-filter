import React from 'react';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';

export default function Check(props) {
  const { name, slug } = props;
  return (
    <div>
      <FormControlLabel
        label={name}
        control={
          <Checkbox
            onChange={(e) => {
              console.log(e.target.checked);
            }}
          />
        }
      />
    </div>
  );
}
