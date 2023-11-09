import React from "react";
import TemporaryDrawer from "./Drawer";
import AppBar from "@mui/material/AppBar";
import { styled } from "@mui/system";

const HeaderAppBar = styled(AppBar)(({ theme }) => ({
  display: 'flex',
  backgroundColor: 'rgb(255, 81, 0)',
  padding: '25px',
  fontSize: '25px',
  fontWeight: 600,
  flexDirection: 'row',
}));

function Header({ title }) {
  return (
    <div>
      <HeaderAppBar>
        <TemporaryDrawer className="TemporaryDrawer" />
        {title}
      </HeaderAppBar>
      {/* Остальные элементы страницы */}
    </div>
  );
}

export default Header;