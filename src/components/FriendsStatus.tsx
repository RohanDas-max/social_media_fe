import { Typography } from "@material-ui/core";
import "../styles/FriendsStatus.scss";

const user = [
  {
    name: "rohan",
    status: "active",
  },

  {
    name: "ram",
    status: "active",
  },
  {
    name: "sham",
    status: "active",
  },
  {
    name: "jodu",
    status: "inactive",
  },
  {
    name: "modhu",
    status: "inactive",
  },
  {
    name: "kodu",
    status: "active",
  },
  {
    name: "podu",
    status: "inactive",
  },
  {
    name: "andu",
    status: "active",
  },
  {
    name: "pandu",
    status: "active",
  },
  {
    name: "mandu",
    status: "inactive",
  },
];

const FriendsStatus = () => {
  return (
    <section className="section">
      <header>
        <Typography>Contacts</Typography>
      </header>
      <div className="list">
        {user.map((user) => (
          <ul key={user.name}>
            {user.status === "active" ? (
              <li>{user.name}</li>
            ) : (
              <li style={{ color: "red" }}>
                {user.name}
                </li>
            )}
          </ul>
        ))}
      </div>
    </section>
  );
};

export default FriendsStatus;
