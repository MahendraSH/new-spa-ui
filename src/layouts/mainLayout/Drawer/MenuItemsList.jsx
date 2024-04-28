/* eslint-disable react/jsx-key */
import Logo from "@/components/logo";
import { Box, Typography } from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import {
  DashboardOutlined,
  ManageAccountsOutlined,
  PersonOutlined,
  QuestionMarkOutlined,
  SettingsOutlined,
} from "@mui/icons-material";
import { Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import { useTheme } from "@emotion/react";
const icons = [
  <DashboardOutlined />,
  <ManageAccountsOutlined />,
  <SettingsOutlined />,
  <SettingsOutlined />,
  <PersonOutlined />,
  <QuestionMarkOutlined />,
  <ManageAccountsOutlined />,
  <QuestionMarkOutlined />,
];

const data = `
[
  {
    "id": "dashboard",
    "title": "Dashboard",
    "type": "item",
    "icon": "DashboardOutlined",
    "url": "/dash"
  },
  {
    "id": "mangment",
    "title": "Mangment",
    "type": "submenu",
    "icon": "ManageAccountsOutlined",
    "children": [
      {
        "id": "users",
        "title": "Users",
        "type": "item",
        "url": "/users"
      },
      {
        "id": "roles",
        "title": "Roles",
        "type": "item",
        "url": "/role"
      },
      {
        "id": "prevlages",
        "title": "Previalages",
        "type": "item",
        "url": "/previalges"
      }
    ]
  },
  {
    "id": "sample-page",
    "title": "Sample Page",
    "type": "item",
    "url": "/sample-page"
  },
  {
    "id": "settings",
    "title": "Settings",
    "type": "item",
    "icon": "SettingsOutlined",
    "url": "/settings"
  },
  {
    "id": "profile",
    "title": "Profile",
    "type": "item",
    "icon": "PersonOutlined",
    "url": "/profile"
  },
  {
    "id": "help",
    "title": "Help",
    "type": "item",
    "icon": "QuestionMarkOutlined",
    "url": "/help"
  }
]

`;
const MenuItemsList = () => {
  const theme = useTheme();

  const location = useLocation();

  const menuItems = JSON.parse(data);

  const isActive = (item) => {
    if (item.type === "item") {
      return location.pathname.includes(item.url);
    } else {
      return item.children.some((it) => location.pathname.includes(it?.url));
    }
  };
  return (
    <Menu>
      <Box sx={{ py: 1 }}>
        <MenuItem icon={<Logo />}>
          <Typography variant="h4"> DOMS</Typography>
        </MenuItem>
      </Box>
      {menuItems.map((menuItem, index) => {
        if (menuItem.type === "item") {
          return (
            <MenuItem
              key={menuItem.id}
              icon={menuItem?.icon ? icons[index] : null}
              component={<Link to={menuItem.url} />}
              style={{
                border: 0,
                background: menuItem.isActive && theme.palette.primary.lighter,
                borderRightWidth: menuItem.isActive && "0.24rem",
                borderRightColor:
                  menuItem.isActive && theme.palette.primary.dark,
                borderStyle: menuItem.isActive && "solid",

                color: isActive(menuItem)
                  ? theme.palette.primary.darker
                  : theme.palette.grey[900],
              }}
            >
              {menuItem.title}
            </MenuItem>
          );
        } else if (menuItem.type === "submenu") {
          return (
            <SubMenu
              key={menuItem.id}
              label={menuItem.title}
              icon={icons[index]}
              style={{
                border: 0,
                background: isActive(menuItem) && theme.palette.primary.lighter,
                borderRightWidth: isActive(menuItem) && "0.24rem",
                borderRightColor:
                  isActive(menuItem) && theme.palette.primary.dark,
                borderStyle: isActive(menuItem) && "solid",

                color: isActive(menuItem)
                  ? theme.palette.primary.darker
                  : theme.palette.grey[900],
              }}
            >
              {menuItem.children.map((subMenuItem) => (
                <MenuItem
                  key={subMenuItem.id}
                  icon={subMenuItem.icon ? <subMenuItem.icon /> : null}
                  component={<Link to={subMenuItem.url} />}
                  style={{
                    background:
                      subMenuItem.isActive && theme.palette.primary.lighter,

                    color: isActive(subMenuItem)
                      ? theme.palette.primary.darker
                      : theme.palette.grey[900],
                  }}
                >
                  {subMenuItem.title}
                </MenuItem>
              ))}
            </SubMenu>
          );
        } else {
          return null;
        }
      })}
    </Menu>
  );
};

export default MenuItemsList;
