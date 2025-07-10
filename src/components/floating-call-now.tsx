'use client';

import * as React from 'react';
import Fab from '@mui/material/Fab';
import CallIcon from '@mui/icons-material/Call';
import Box from '@mui/material/Box';

export default function FloatingCallNow() {
  return (
    <Box
      sx={{
        position: 'fixed',
        bottom: 20,
        right: 20,
        zIndex: 1300,
      }}
    >
      <a href="tel:+917989050069">
        {/* Mobile version - icon only */}
        <Fab
          size="medium"
          aria-label="Call"
          sx={{ boxShadow: 'none', minHeight: 56, minWidth: 56 }}
          className="!bg-red-800 !text-white hover:!bg-white hover:!text-black transition-colors duration-300"
        >
          <CallIcon />
        </Fab>

        {/* Desktop version - extended with text */}
        <Fab
          variant="extended"
          aria-label="Enquire Now"
          sx={{ boxShadow: 'none', paddingX: 4 }}
          className="!hidden !md:inline-flex !bg-red-800 !text-white hover:!bg-white hover:!text-black font-semibold transition-colors duration-300"
        >
          <CallIcon className="mr-2" />
          Enquire Now
        </Fab>
      </a>
    </Box>
  );
}
