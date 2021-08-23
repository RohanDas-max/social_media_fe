import Navbar from "../components/Navbar";
import Post from "../components/Post";
import Feed from "../components/Feed";
import SideMenu from "../components/SideMenu";
import "../styles/home.scss";
import FriendsStatus from "../components/FriendsStatus";

const Home = () => {
  return (
    <div className="main">
      <section className="Nav">
        <Navbar />
      </section>
      <section className="Post">
        <div >
          <Post />
          <Feed />
        </div>
      </section>
      <section className="Left">
        <SideMenu />
      </section>
      <section className="right">
        <FriendsStatus />
      </section>
    </div>
  );
};

export default Home;
