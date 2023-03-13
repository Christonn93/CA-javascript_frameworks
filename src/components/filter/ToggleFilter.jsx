import React, { useState } from "react";

import { Button, Grid, Paper } from "@mui/material";

// Importing fetch function
import ApiHook from "../../hooks/ApiHooks";

const ToggleFilter = () => {
 const { data } = ApiHook("https://api.noroff.dev/api/v1/online-shop");
 const [setOpen] = useState(false);
 const tag = data.flatMap((obj) => obj.tags);
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

export default ToggleFilter;
