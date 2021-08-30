import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import CakeIcon from '@material-ui/icons/Cake';
import AllInclusiveIcon from '@material-ui/icons/AllInclusive';
import GitHubIcon from '@material-ui/icons/GitHub';
import InstagramIcon from '@material-ui/icons/Instagram';
import CallIcon from '@material-ui/icons/Call';
import "../styles/sideMenu.scss";
import { Button } from '@material-ui/core';



const SideMenu = () => {
    return (
        <div className="div">
           <Button><ArrowBackIcon/></Button>
           <Button ><CalendarTodayIcon/></Button>
           <Button ><CakeIcon/></Button>
           <Button ><AllInclusiveIcon/></Button>
           <Button ><GitHubIcon/></Button>
           <Button ><InstagramIcon/></Button>
           <Button ><CallIcon/></Button>
        </div>
    )
}

export default SideMenu
