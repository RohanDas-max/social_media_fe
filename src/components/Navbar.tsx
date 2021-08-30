import { Button, Typography } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import PersonIcon from "@material-ui/icons/Person";
import EmailIcon from "@material-ui/icons/Email";
import "styles/navbar.scss";

const Navbar = () => {
  return (
    <div className="nav">
      <div className="logo">
        <Typography className="input">Social</Typography>
        <Button>
          <MenuIcon />
        </Button>
      </div>

      <input className="search" type="search" placeholder="Search..." />

      <ul>
        <li>
          <EmailIcon />
        </li>
        <li>
          <PersonIcon />
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
