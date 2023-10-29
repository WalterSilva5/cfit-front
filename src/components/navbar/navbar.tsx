import React from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import generateNavbar from './navbar.config.js';
import Avatar from '@mui/material/Avatar';
import { defaultThemeColors } from '../../styles/theme.colors';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';

import styled from 'styled-components';

const StyledToolbar = styled(Toolbar)`
  height: 35px !important;
  min-height: 35px !important;
  align-items: center;
  padding: 0;
`;

const StyledLink = styled(Link)`
  padding: 10px;
  display: inline-block;
  cursor: pointer;
  color: ${defaultThemeColors.neutralLight};
  text-decoration: none;
  font-size: 0.8rem;
  margin-right: 5px;
  margin-left: 5px;
  background-color: ${defaultThemeColors.accentDarkest2};
  &:hover {
    color: ${defaultThemeColors.neutralLight};
    text-decoration: none;
    background-color: ${defaultThemeColors.accentDarkest};
  }
`;

export const Navbar = (props: {
  useMenu: boolean;
  setUseMenu: React.Dispatch<React.SetStateAction<boolean>>;
  username: string;
}) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [selectedItemName, setSelectedItemName] = React.useState<string | null>(null);
  const navbarConfig = generateNavbar();

  const handleClick = (event: React.MouseEvent<HTMLElement>, name: string) => {
    setAnchorEl(event.currentTarget);
    setSelectedItemName(name);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setSelectedItemName(null);
  };
  return (
    <AppBar
      position="static"
      sx={{
        display: props.useMenu ? 'none' : 'block',
        height: '35px',
        padding: '0px',
        maxHeight: '35px',
        boxShadow: '1px 1px 1px 1px rgba(0,0,0,0.4)',
        backgroundColor: defaultThemeColors.accentDarkest2
      }}
    >
      <StyledToolbar
        sx={{
          height: '35px',
          minHeight: '35px',
          alignItems: 'center',
          padding: '0px'
        }}
      >
        {/* Logo ou Placeholder */}
        <Avatar
          sx={{
            height: '28px',
            width: '28px',
            marginRight: 2,
            fontSize: '0.7rem',
            cursor: 'pointer',
          }}
          onClick={() => {
            window.location.href = '/';
          }}
        >
          Logo
        </Avatar>

        <div
          style={{
            flex: 1,
            display: 'flex',
            justifyContent: 'center'
          }}
        >
          {navbarConfig.items.map((item: any) => (
            <React.Fragment key={item.name}>
              {item.subItems ? (
                <>
                  <Typography
                    variant="caption"
                    component={Link}
                    to={item.path}
                    sx={{
                      padding: '10px',
                      display: 'inline-block',
                      cursor: 'pointer',
                      color: defaultThemeColors.neutralLight,
                      textDecoration: 'none',
                      fontSize: '0.8rem',
                      marginRight: '5px',
                      marginLeft: '5px'
                    }}
                    onMouseEnter={(event) => handleClick(event, item.name)}
                  >
                    {item.name} <span style={{ marginLeft: '5px' }}>▼</span>
                  </Typography>
                  <Menu
                    id={item.name}
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean(anchorEl) && selectedItemName === item.name}
                    onClose={handleClose}
                    style={{
                      padding: '0px',
                      margin: '0px'
                    }}
                  >
                    {item.subItems.map((subItem: any) => (
                      <MenuItem key={`${subItem.name}${subItem.path}`} onClick={handleClose}
                      sx={{
                        backgroundColor: defaultThemeColors.accentDarkest2,
                        color: defaultThemeColors.neutralLight,
                        textDecoration: 'none',
                        '&:hover': {
                          backgroundColor: defaultThemeColors.accentDarkest,
                        },
                      }}
                      >
                        <StyledLink to={subItem.path}>{subItem.name}</StyledLink>
                      </MenuItem>
                    ))}
                  </Menu>
                </>
              ) : (
                <IconButton
                  color="inherit"
                  component={Link}
                  to={item.path}
                  sx={{ padding: '5px', minHeight: 0 }}
                >
                  {item.icon}
                  <Typography variant="caption" sx={{ fontSize: '0.8rem', minHeight: 0 }}>
                    {item.name}
                  </Typography>
                </IconButton>
              )}
            </React.Fragment>
          ))}
        </div>

        {/* Nome do usuário */}
        <Typography
          variant="caption"
          component="div"
          sx={{
            lineHeight: '34px',
            paddingRight: 2,
            fontSize: '0.8rem',
            minHeight: 0
          }}
        >
          {props.username || 'SAMPLE NAME'}
        </Typography>
      </StyledToolbar>
    </AppBar>
  );
};

export default Navbar;
