import Navbar from "../components/Navbar";
import Post from "../components/Post";
import Feed from "../components/Feed";
import SideMenu from "../components/SideMenu";
import "../styles/App.scss";

const Home = () => {
  return (
    <div className="main">
      <section className="Nav">
        <Navbar />
      </section>
      <section className="Post">
        <Post />
        <Feed />
      </section>
      <section className="Left">
        <SideMenu />
      </section>
      <section className="right">right</section>
    </div>
  );
};

export default Home;
