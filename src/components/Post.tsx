import { Button } from "@material-ui/core";

import "../styles/post.scss";

const Post = () => {
  return (
    <>
      <form className="post">
        <textarea className="textarea" placeholder="What's on Your Mind!..." />
        <label style={{color:"white", textAlign:"center" }}>
          ADD FILE
          <input type="file" className="file"/>
        </label>
        <Button style={{color:"white"}} >Add Post</Button>
      </form>
    </>
  );
};

export default Post;
