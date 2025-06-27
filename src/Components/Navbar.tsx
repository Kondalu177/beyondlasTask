import { useEffect, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import Logo from "../assets/Logo.svg";
import Wallet from "../assets/Wallet.svg";
import ShoppingBag from "../assets/ShoppingBag.svg";
import User from "../assets/User.svg";
import Setting from "../assets/Settings.svg";
import { useLocation, useNavigate } from "react-router-dom";
import { Drawer, List, ListItem, ListItemText } from "@mui/material";

// Define the pages for the navbar
const pages = [
  "Market Place",
  "My websites",
  "My orders",
  "My projects",
  "Received orders",
];
// Define the routes for each page
const PageRoutes = {
  "/marketplace": "Market Place",
  "/websites": "My websites",
  "/add_websites": "My websites",
  "/orders": "My orders",
  "/projects": "My projects",
  "/received_orders": "Received orders",
};

function Navbar() {
  // Using useLocation to get the current path
  const location = useLocation();
  const Navigate = useNavigate();
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

  const [activePage, setActivePage] = useState("");
  const [drawerOpen, setDrawerOpen] = useState(false);

  // Drawer menu
  const toggleDrawer = (open: boolean) => () => {
    setDrawerOpen(open);
  };
  // Initialize activePage based on the current path
  useEffect(() => {
    const normalizedPath = location.pathname.replace(/\/$/, ""); // remove trailing slash
    const current = PageRoutes[normalizedPath];
    if (current) {
      setActivePage(current);
    }
  }, [location.pathname]);

  // Navigation menu dropdown
  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  // User menu dropdown
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  // Navigation menu dropdown close handler
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  //   const handleCloseUserMenu
  const handlePageClick = (page: string) => {
    const path = Object.entries(PageRoutes).find(
      ([, label]) => label === page // Find entry where the label matches the clicked tab
    )?.[0]; // Get the first item of that entry

    if (path) {
      Navigate(path);
    }

    setActivePage(page);
    handleCloseNavMenu();
  };

  return (
    <>
      <AppBar
        className="bg-white shadow-none border-b-2 h-[63px]"
        position="static"
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Box className="hidden md:flex items-center">
              <img src={Logo} alt="Kraken Logo" className="h-8" />
            </Box>

            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                className="text-[#613fdd]"
                size="large"
                aria-label="open navigation"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={toggleDrawer(true)}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              {/* <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{ display: { xs: "block", md: "none" } }}
              >
                {pages.map((page) => (
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Typography sx={{ textAlign: "center" }}>{page}</Typography>
                  </MenuItem>
                ))}
              </Menu> */}
              <Drawer
                anchor="left"
                open={drawerOpen}
                onClose={toggleDrawer(false)}
                sx={{ display: { xs: "block", md: "none" } }}
              >
                <Box className="flex md:hidden items-center m-5">
                  <img src={Logo} alt="Kraken Logo" className="h-8" />
                </Box>
                <Box
                  sx={{ width: 250 }}
                  role="presentation"
                  onClick={toggleDrawer(false)}
                  onKeyDown={toggleDrawer(false)}
                >
                  <List>
                    {pages.map((page) => (
                      <ListItem
                        component="button"
                        key={page}
                        onClick={() => handlePageClick(page)}
                        sx={{ textAlign: "left" }}
                      >
                        <ListItemText primary={page} />
                      </ListItem>
                    ))}
                  </List>
                </Box>
              </Drawer>
            </Box>

            <Box className="flex md:hidden items-center">
              <img src={Logo} alt="Kraken Logo" className="h-8" />
            </Box>

            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "none", md: "flex" },
                justifyContent: "center",
              }}
            >
              {pages.map((page) => (
                <Box
                  key={page}
                  sx={{
                    display: "block",
                    color: activePage === page ? "white" : "black",
                    backgroundColor:
                      activePage === page ? "#613FDD12" : "transparent",
                    borderBottom:
                      activePage === page ? "#613FDD 2px solid" : "transparent",
                    "&:hover": {
                      backgroundColor:
                        activePage === page ? "#613FDD12" : "grey.100",
                    },
                  }}
                >
                  <Button
                    key={page}
                    onClick={() => handlePageClick(page)}
                    sx={{
                      my: 2,
                      color: "black",
                      display: "block",
                      fontWeight: 500,
                      fontSize: "16px",
                      textTransform: "none",
                      margin: "10px 0 10px 0",
                      "&:hover": {
                        backgroundColor:
                          activePage === page ? "transparent" : "transparent",
                      },
                    }}
                  >
                    {page}
                  </Button>
                </Box>
              ))}
            </Box>

            <Box sx={{ flexGrow: 0 }} className="flex items-center gap-4 mr-3">
              <img
                src={Wallet}
                alt="Wallet icon"
                className="w-5 h-5 sm:w-6 sm:h-6"
              />
              <img
                src={ShoppingBag}
                alt="ShoppingBag icon"
                className="w-5 h-5 sm:w-6 sm:h-6"
              />
              <img
                src={User}
                alt="User icon"
                className="w-5 h-5 sm:w-6 sm:h-6"
              />
              <img
                src={Setting}
                alt="Setting icon"
                className="w-5 h-5 sm:w-6 sm:h-6"
              />
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
}

export default Navbar;
