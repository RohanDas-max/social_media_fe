import {
  Card,
  CardContent,
  CardActionArea,
  Typography,
  Button,
  CardActions,
  CardMedia,
  Avatar,
} from "@material-ui/core";
import "../styles/Feed.scss";

const post = [
  {
    id:"1",
    creator: "Random",
    captions: "Its a wonderfull world lorem Its a wonderfull world loremIts a wonderfull world loremIts a wonderfull world loremIts a wonderfull world loremIts a wonderfull world lorem",
    image: "https://picsum.photos/200",
  },

  {
    id:"2",
    creator: "Random",
    captions: "Its a wonderfull world",
    image: "https://picsum.photos/200",
  },
  {
    id:"3",
    creator: "Random",
    captions: "Its a wonderfull world",
    image: "https://picsum.photos/200",
  },
  {
    id:"4",
    captions: "Its a wonderfull world",
    image: "https://picsum.photos/200",
  },
  {
    id:"5",
    creator: "Random",
    captions: "Its a wonderfull world",
    image: "https://picsum.photos/200",
  },
  {
    id:"6",
    creator: "Random",
    captions: "Its a wonderfull world",
    image: "https://picsum.photos/200",
  },
  {
    id:"7",
    creator: "Random",
    captions: "Its a wonderfull world",
    image: "https://picsum.photos/200",
  },
  {
    id:"8",
    creator: "Random",
    captions: "Its a wonderfull world",
    image: "https://picsum.photos/200",
  },
  {
    id:"9",
    creator: "Random",
    captions: "Its a wonderfull world",
    image: "https://picsum.photos/200",
  },
];

const Feed = () => {
  return (
    <>
      {post.map((posts) => (
        <Card className="root" key={posts.id}>
          <CardActionArea>
            <CardMedia
              component="img"
              alt="Contemplative Reptile"
              height="140"
              image={posts.image}
              title="Contemplative Reptile"
            />
            <CardContent  style={{ display: "flex", flexDirection: "column", alignItems: "start", width:"80%" }}>
              
              <Typography  variant="h5" component="h2">
              <img src={posts.image} height="20px" width="20px" className="profilePic" />
                {posts.creator}</Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                {posts.captions}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions  style={{display: "flex", flexDirection: "row"}} >
            <Typography color="error">
              10 Likes
            </Typography>
            <Typography color="error">
              30 Comments
            </Typography>
          </CardActions>
          <CardActions style={{ display: "flex", flexDirection: "row", justifyContent: "flex-start" }}>
            <Button size="small" color="primary">
              Like
            </Button>
            <Button size="small" color="primary">
              Comment
            </Button>
          </CardActions>
        </Card>
      ))}
    </>
  );
};

export default Feed;
