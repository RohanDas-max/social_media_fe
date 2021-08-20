import "../styles/post.scss";

const Post = () => {
  return (
    <div className="post">
      <form onSubmit={(e)=>e.preventDefault()} >
        <textarea placeholder="What's on your mind!"  />
        <input type="file" placeholder="add file" className="button" />
        <button>submit</button>
      </form>
    </div>
  );
};

export default Post;
