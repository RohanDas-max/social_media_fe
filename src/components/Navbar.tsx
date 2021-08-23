import { Button } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import PersonIcon from "@material-ui/icons/Person";
import EmailIcon from "@material-ui/icons/Email";
import "../styles/navbar.scss";

const Navbar = () => {
  return (
    <div className="nav">
      <div className="leftside">
        <input value="socials" type="submit" />
        <Button>
          <MenuIcon />
        </Button>
      </div>

      <form className="search" onSubmit={(e)=>e.preventDefault()} >
        <input type="search" placeholder="Search..." />
        
      </form>

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
