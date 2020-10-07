import * as emojiLib from "./emoji.js";

const textArea = document.querySelector("#exampleFormControlTextarea1");

const tweets = [];

const feed = document.querySelector("#mainfeed");

const btn = document.querySelector("#tweet");

function tweetNew() {
  const text = textArea.value;

  const newTweet = {
    text,
    avatar: "https://avatars1.githubusercontent.com/u/59589615?v=4",
    name: "JINAL",
    username: "@jinalp",
  };

  //adding up the tweets to display use .push

  //for seeing the most recent post
  tweets.unshift(newTweet);

  //the textarea cleans up
  textArea.value = "";

  render();
}

function render() {
  feed.innerHTML = tweets
    .map(
      (tweet) =>
        `<aside>
          <div>
            <img
              class="avatar"
              src="${tweet.avatar}"
            />
          </div>
          <div class="formatted-tweet">
            <h6>
              <a href="https://twitter.com/avcoder">${tweet.name}</a>
              <span class="username">${tweet.username}</span>
            </h6>
            <p>${tweet.text}</p>
            <div class="imgGifPoll"></div>
            <div>
              <section>
                <div id="reactions" class="btn-group mr-2">
                  <button
                    type="button"
                    class="btn btn-secondary mdi mdi-message-outline"
                    aria-label="reply"
                  ></button>
                  <button
                    type="button"
                    class="btn btn-secondary mdi mdi-twitter-retweet"
                    aria-label="retweet"
                  ></button>
                  <button
                    type="button"
                    class="btn btn-secondary mdi mdi-heart-outline"
                    aria-label="like"
                    style=""
                  ></button>
                  <button
                    type="button"
                    class="btn btn-secondary mdi mdi-upload"
                    aria-label="share"
                  ></button>
                </div>
              </section>
            </div>
          </div>
        </aside>`
    )
    .join("");
}

btn.addEventListener("click", tweetNew);
