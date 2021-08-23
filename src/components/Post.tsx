import PhotoLibraryIcon from "@material-ui/icons/PhotoLibrary";
import PublishIcon from '@material-ui/icons/Publish';
import "../styles/post.scss";

const Post = () => {
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <textarea placeholder="What's on your mind!" />

      <label>
        <PhotoLibraryIcon style={{ color:"#B9345A", marginTop: "40px" }} />
        <input type="file" placeholder="add file" className="file" />
      </label>
      <button style={{ background: "none", border: "none" }} ><PublishIcon/></button>
    </form>
  );
};

export default Post;
