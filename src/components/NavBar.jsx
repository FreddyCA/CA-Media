import { Stack } from "@mui/material";
import { Link } from "react-router-dom";
import { logo } from "../utils/constans";
import SearchBar from "./SearchBar";

const NavBar = () => {
  return (
    <Stack
      direction="row"
      alignItems="center"
      p={2}
      sx={{
        position: "sticky",
        background: "#000",
        top: 0,
        justifyContent: "space-between",
        zIndex: 10,
        borderBottom: '4px solid #3e3e3e'
      }}
    >
      <Link to="/" style={{ display: "flex", alignItems: "center" }}>
        <img src={logo} alt="logo" height={45} />
      </Link>
      <SearchBar></SearchBar>
    </Stack>
  );
};

export default NavBar;
