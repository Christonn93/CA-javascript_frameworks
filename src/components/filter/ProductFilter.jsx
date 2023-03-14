import React, { useState } from "react";

import { Button, Grid, Paper } from "@mui/material";
import FilterAltIcon from "@mui/icons-material/FilterAlt";

const ProductFilter = ({ setFilter, filterOption }) => {
 const [open, setOpen] = useState(false);
 const tag = filterOption.flatMap((obj) => obj.tags);
 const filterArray = [...new Set(tag)];

 return setOpen(
    <Paper variant="elevation" elevation={2}>
 <Box mt={2}>
     <Stack direction="row" divider={<Divider orientation="vertical" flexItem />} spacing={2} justifyContent={"center"}>
      <Button>Sale</Button>
      <Button>Price low - high</Button>
     </Stack>
      <h3>Categories</h3>
     <Stack direction="row" divider={<Divider orientation="vertical" flexItem />} spacing={2} justifyContent={"center"}>
      {filterArray.sort().map((e) => <Button>{e}</Button>)}
     </Stack>
    </Box>
    </Paper>
   );
};

export default ProductFilter;
