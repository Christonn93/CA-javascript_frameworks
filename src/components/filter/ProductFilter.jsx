import React, { useState } from "react";

import { Button, Grid, Paper } from "@mui/material";
import FilterAltIcon from "@mui/icons-material/FilterAlt";

const ProductFilter = ({ setFilter, filterOption }) => {
 const [open, setOpen] = useState(false);
 const tag = filterOption.flatMap((obj) => obj.tags);
 const filterArray = [...new Set(tag)];

 const option = filterArray.sort().map((e) => <Button>{e}</Button>);

 return setOpen(
    <Paper variant="elevation" elevation={2}>
     <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
      {option.map((e, _) => (
       <Grid item xs={2} sm={4} md={4} key={_}>
        {e}
       </Grid>
      ))}
     </Grid>
    </Paper>
   );
};

export default ProductFilter;
