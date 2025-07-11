'use client';

import Image from 'next/image';
import { menuItems } from '@/features/home/data/home-data';
import { AppBar, Box, Container, Toolbar } from '@mui/material';
import Navigation from './Navigation';

export default function Header() {
  return (
    <AppBar
      position="fixed"
      elevation={3}
      sx={{
        backgroundColor: 'white',
        zIndex: (theme) => theme.zIndex.drawer + 1,
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ justifyContent: 'space-between', px: { xs: 2, md: 4 } }}>
          {/* Logo */}
          <Box sx={{ display: 'flex', alignItems: 'center', width: { xs: '120px', md: '180px' }, flexShrink: 0 }}>
            <Image
              src="/images/logo.png"
              alt="Impact Academy Logo"
              width={200}
              height={64}
              priority
              unoptimized
              style={{ width: '100%', height: 'auto' }}
            />
          </Box>

          {/* Navigation */}
          <Navigation menuItems={menuItems} />
        </Toolbar>
      </Container>
    </AppBar>
  );
}