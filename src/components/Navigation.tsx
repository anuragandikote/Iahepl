'use client';

import React, { useState } from 'react';
import {
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Collapse,
  useMediaQuery,
  Menu,
  MenuItem,
} from '@mui/material';
import { Menu as MenuIcon, ExpandMore, ExpandLess } from '@mui/icons-material';
import { useTheme } from '@mui/material/styles';
import Link from 'next/link';
import CallIcon from '@mui/icons-material/Call';

type MenuItems = {
  [key: string]: string[];
};

type NavigationProps = {
  menuItems: MenuItems;
};

const getItemLink = (item: string, subItem?: string) => {
  const formatUrl = (text: string) => text?.toLowerCase()?.replace(/\s+/g, '-');

  switch (item) {
    case 'Home':
      return '/';
    case 'Written Exam Coaching':
      return `/written-exam-coaching/${formatUrl(subItem!)}`;
    case 'SSB Interviews':
      return `/ssb-interview/${formatUrl(subItem!)}`;
    case 'More':
      switch (subItem) {
        case 'About Us':
          return '/about-us';
        // case 'Gallery':
        //   return '/gallery';
        case 'Contact Us':
          return '/contact-us';
        case 'Blogs':
          return '/blog';
        default:
          return '/';
      }
    default:
      return '/';
  }
};

export default function Navigation({ menuItems }: NavigationProps) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const [drawerOpen, setDrawerOpen] = useState(false);
  const [expandedItems, setExpandedItems] = useState<{ [key: string]: boolean }>({});
  const [dropdownAnchor, setDropdownAnchor] = useState<null | HTMLElement>(null);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const toggleDrawer = (open: boolean) => () => {
    setDrawerOpen(open);
  };

  const toggleExpand = (item: string) => {
    setExpandedItems((prev) => ({ ...prev, [item]: !prev[item] }));
  };

  const shouldNotLink = (item: string) => item === 'Written Exam Coaching' || item === 'SSB Interviews';

  return (
    <>
      {isMobile ? (
        <>
          <IconButton onClick={toggleDrawer(true)} sx={{ color: '#a68272' }}>
            <MenuIcon className='font-bold' />
          </IconButton>

          <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
            <Box sx={{ width: 260, p: 2 }}>
              <List>
                {Object.entries(menuItems).map(([item, subItems]) => (
                  <Box key={item}>
                    <ListItem disablePadding>
                      <ListItemButton
                        onClick={() =>
                          subItems.length > 0
                            ? toggleExpand(item)
                            : setDrawerOpen(false)
                        }
                      >
                        <ListItemText>
                          {shouldNotLink(item) ? (
                            <span>{item}</span>
                          ) : (
                            <Link
                              href={getItemLink(item)}
                              style={{ textDecoration: 'none', color: 'inherit' }}
                            >
                              {item}
                            </Link>
                          )}
                        </ListItemText>
                        {subItems.length > 0 &&
                          (expandedItems[item] ? <ExpandLess /> : <ExpandMore />)}
                      </ListItemButton>
                    </ListItem>
                    {subItems.length > 0 && (
                      <Collapse in={expandedItems[item]} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                          {subItems.map((subItem) => (
                            <ListItem key={subItem} disablePadding>
                              <ListItemButton
                                sx={{ pl: 4 }}
                                onClick={() => setDrawerOpen(false)}
                              >
                                <ListItemText>
                                  <Link
                                    href={getItemLink(item, subItem)}
                                    style={{ textDecoration: 'none', color: 'inherit' }}
                                  >
                                    {subItem}
                                  </Link>
                                </ListItemText>
                              </ListItemButton>
                            </ListItem>
                          ))}
                        </List>
                      </Collapse>
                    )}
                  </Box>
                ))}
              </List>
            </Box>
          </Drawer>
        </>
      ) : (
        // ✅ Desktop
        <Box sx={{ display: 'flex', gap: 2 }}>
          {Object.entries(menuItems).map(([item, subItems]) => {
            const hasSubmenu = subItems.length > 0;

            return (
              <Box key={item} sx={{ position: 'relative' }}>
                <Box
                  onClick={(e) => {
                    if (hasSubmenu) {
                      setDropdownAnchor(e.currentTarget);
                      setActiveDropdown((prev) => (prev === item ? null : item));
                    }
                  }}
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 0.5,
                    px: 2,
                    py: 1,
                    cursor: 'pointer',
                    fontSize: 14,
                    fontWeight: 600,
                    color: '#000000',
                    '&:hover': {
                      backgroundColor: '#870d07',
                      color: '#fff',
                      borderRadius: 1,
                    },
                  }}
                >
                  {shouldNotLink(item) ? (
                    <span>{item}</span>
                  ) : (
                    <Link
                      href={getItemLink(item)}
                      style={{ textDecoration: 'none', color: 'inherit' }}
                    >
                      {item}
                    </Link>
                  )}

                  {hasSubmenu &&
                    (activeDropdown === item ? (
                      <ExpandLess fontSize="small" />
                    ) : (
                      <ExpandMore fontSize="small" />
                    ))}
                </Box>

                {hasSubmenu && activeDropdown === item && (
                  <Menu
                    anchorEl={dropdownAnchor}
                    open={activeDropdown === item}
                    onClose={() => setActiveDropdown(null)}
                    anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
                    transformOrigin={{ vertical: 'top', horizontal: 'left' }}
                  >
                    {subItems.map((subItem) => (
                      <MenuItem
                        key={subItem}
                        component={Link}
                        href={getItemLink(item, subItem)}
                        onClick={() => setActiveDropdown(null)}
                        sx={{ fontSize: '0.85rem' }}
                      >
                        {subItem}
                      </MenuItem>
                    ))}
                  </Menu>
                )}
              </Box>
            );
          })}
          <a href="tel:+917989050069">
            <button type="button" className="bg-black hover:bg-[#870d07] text-white px-4 py-2 rounded-md font-semibold shadow-lg tracking-wider border-b-4 border-[#870d07] duration-100 transition cursor-pointer flex items-center text-sm">
              <CallIcon className="mr-2 w-2 h-2"/>
              Call Now
            </button>
          </a>
        </Box>
      )}
    </>
  );
}