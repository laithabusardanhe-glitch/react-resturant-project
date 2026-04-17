import {
  AppBar,
  Box,
  MenuItem,
  MenuList,
  Toolbar,
  Typography,
} from "@mui/material";

function Navbar() {
  return (
    <>
      <AppBar position="stikcy">
        <Toolbar
         sx={{
            display:"flex",
    flexDirection:"row",
    gap:5,
    justifyContent:"space-between",
    flexWrap:"warp",
    p:4,
    alignItems:"center",

         }}
        >
          <Typography variant="h4">Resturant</Typography>
          <Box>
            <MenuList sx={{
                 display:"flex",
    flexDirection:"row",
    justifyContent:"space-between",
    flexWrap:"warp",
    alignItems:"center",

            }}>
              <MenuItem>Home</MenuItem>
              <MenuItem>Conttant</MenuItem>
              <MenuItem> About Us</MenuItem>
              <MenuItem>Menu</MenuItem>
              <MenuItem>Login</MenuItem>
              <MenuItem>Register</MenuItem>
            </MenuList>
          </Box>
          <Box>
            <img
            src="../../../src/assets/hero.png"
            alt={"logo"}
            loading="lazy"
            width={80}
            height={80}
            />
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
}

export default Navbar;
