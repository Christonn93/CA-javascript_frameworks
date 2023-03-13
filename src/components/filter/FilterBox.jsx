import { Stack } from '@mui/material'
import React from 'react'
import ApiHook from '../../hooks/ApiHooks';


const FilterBox = () => {
    const { data } = ApiHook("https://api.noroff.dev/api/v1/online-shop");
    const { tags: categories } = data
    console.log(categories)

  return (
    <Stack>

    </Stack>
  )
}

export default FilterBox