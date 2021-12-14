import React from "react";
import "./TweetBox.css";
import { Avatar, Button } from "@material-ui/core";


function TweetBox() {
  
  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox__input">
          <Avatar src="https://upload.wikimedia.org/wikipedia/commons/8/87/Avatar_poe84it.png" />
          <input
            placeholder="What's happening?"
            type="text"
          />
        </div>
        <input
          className="tweetBox__imageInput"
          placeholder="Optional: Enter image URL"
          type="text"
        />

        <Button
          className="tweetBox__tweetButton"          
        >
          Tweet
        </Button>
      </form>
    </div>
  );
}

export default TweetBox;