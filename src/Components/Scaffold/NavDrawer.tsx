import {
  AppBar,
  Drawer,
  ListItem,
  Toolbar,
  Typography,
  List,
} from "@mui/material";

import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import ContactForm from "../Form/ContactForm";
import ContactCardGrid from "../Grid/ContactCardGrid";
import ContactDataGrid from "../DataGrid/ContactDataGrid";
import ContactTable from "../Table/ContactTable";

const drawerWidth = 240;

const simpleStyles = {
  drawer: {
    width: drawerWidth,
    "& .MuiBackdrop-root": {
      display: "none",
    },
  },

  drawerPaper: {
    width: drawerWidth,
    backgroundColor: "rgba(120,120,120,0.2",
  },

  content: {
    marginLeft: drawerWidth,
    padding: 3,
  },
};

export default function NavDrawer() {
  return (
    <BrowserRouter>
      <AppBar position="fixed" sx={{ zIndex: 9999 }}>
        <Toolbar>
          <Typography variant="h6" noWrap>
            Advanced Material UI Styling
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="temporary"
        open={true}
        sx={simpleStyles.drawer}
        PaperProps={{
          sx: simpleStyles.drawerPaper,
          elevation: 9,
        }}
      >
        <Toolbar></Toolbar>
        <List>
          {[
            { text: "input Form", route: "/form" },
            { text: "Contact Card Grid", route: "/grid" },
            { text: "Contact Table", route: "/table" },
            { text: "Contact Data Grid", route: "/datagrid" },
          ].map((nav, index) => (
            <ListItem key={nav.text}>
              <Link to={nav.route}>{nav.text}</Link>
            </ListItem>
          ))}
        </List>
      </Drawer>
      <main style={simpleStyles.content}>
        <Toolbar></Toolbar>
        <Routes>
          <Route path={"/"} element={<ContactForm />} />
          <Route path={"/form"} element={<ContactForm />} />
          <Route path={"/grid"} element={<ContactCardGrid />} />
          <Route path={"/table"} element={<ContactTable />} />
          <Route path={"/datagrid"} element={<ContactDataGrid />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}
