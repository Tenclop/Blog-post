import React from "react";
import { createRoot } from "react-dom/client";
import profile1 from "./images/person-1.jpg";
import profile2 from "./images/person-2.jpg";
import profile3 from "./images/person-3.jpg";
import SingleComment from "./SingleComment";
import UserCard from "./UserCard";
import UserCarad from "./UserCard";

const rootElement = document.querySelector("#root");
const root = createRoot(rootElement);

const App = () => {
  return (
    <div className="ui comments">
      <UserCard>
        <SingleComment
          name="Tsuda"
          date="Today at 5:00PM"
          text="It is amazing"
          picture={profile1}
        />
      </UserCard>

      <UserCard>
        <SingleComment
          name="Elise"
          date="Today at 5:30PM"
          text="Great job"
          picture={profile2}
        />
      </UserCard>

      <UserCard>
        <SingleComment
          name="Jack"
          date="Today at 7:00PM"
          text="Thanks.."
          picture={profile3}
        />
      </UserCard>
    </div>
  );
};

root.render(<App />);

//react-nestings
//jsx
//react props
