"use client"
import { Typography, Box } from '@mui/material'
import React from 'react'

type Props = {}

export default function ProductsPage({}: Props) {
  return (
    <>
        <Box>
            <Typography variant="h3" fontWeight="700" mb={1}>
                Products
            </Typography>
        </Box>
    </>
  )
}