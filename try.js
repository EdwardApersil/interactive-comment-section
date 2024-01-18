window.addEventListener("DOMContentLoaded", () => {
    const plus = document.querySelector(".plus");
    const minus = document.querySelector(".minus");
    const counter = document.querySelector(".counter");
    const btn = document.querySelector(".button");
    const commentsContainer = document.getElementById("commentsContainer");
    const replyContainer = document.getElementById("replyContainer");
    const reply = document.querySelector(".addReply");
    const repBtn = document.querySelector(".rep-btn");
    const rep = document.querySelector(".buttReply");
  
    console.log(repBtn);
  
    let counterValue = 0;
    counter.textContent = counterValue;
  
    plus.addEventListener("click", () => {
      counter.textContent = ++counterValue;
    });
  
    minus.addEventListener("click", () => {
      counter.textContent = --counterValue < 0 ? 0 : counterValue;
    });
  
    const names = [
      "amyrobson",
      "maxblagun",
      "ramsesmiron",
      "juliusomo",
      "jessicachan",
      "jonathanglenn",
      "kaitlynguan",
      "kieronhyde",
      "luisvelazquez",
      "michellefryer",
      "nathanfoster",
      "sarahconnor",
      "timjohnson",
      "tomcruise",
      "tomhanks",
      "tomholland",
      "tommyshelby",
      "williamturner",
      "zacharyefron",
      "zaynmalik",
    ];
  
    btn.addEventListener("click", () => {
      const inputElement = document.querySelector(".input");
      const input = inputElement.value;
      const randomName = names[Math.floor(Math.random() * names.length)];
      const user = {
        username: randomName,
        image: { png: "/images/avatars/image-amyrobson.webp" }, // Use createAvatar() directly
      };
  
      const currentDate = new Date();
  
      // Extract individual components
      const year = currentDate.getFullYear();
      const month = currentDate.getMonth() + 1; // Months are zero-based, so add 1
      const day = currentDate.getDate();
      const hours = currentDate.getHours();
      const minutes = currentDate.getMinutes();
      const seconds = currentDate.getSeconds();
  
      // Format the date and time
      const formattedDate = `${year}-${month < 10 ? "0" + month : month}-${
        day < 10 ? "0" + day : day
      }`;
      const formattedTime = `${hours < 10 ? "0" + hours : hours}:${
        minutes < 10 ? "0" + minutes : minutes
      }:${seconds < 10 ? "0" + seconds : seconds}`;
  
      const newComment = {
        user, // Use the already generated user object
        content: input,
        createdAt: formattedDate,
        createTm: formattedTime,
        counter: counterValue
      };
  
      const commentHTML = createCommentHTML(newComment);
      commentsContainer.innerHTML += commentHTML;
      inputElement.value = "";
    });
  
    rep.addEventListener("click", () => {
      const inputElement = document.querySelector(".inputRep");
      const inputRep = inputElement.value;
      const randomName = names[Math.floor(Math.random() * names.length)];
      const user = {
        username: randomName,
        image: { png: "/images/avatars/image-amyrobson.webp" }, // Use createAvatar() directly
      };
  
      const currentDate = new Date();
  
      const year = currentDate.getFullYear();
      const month = currentDate.getMonth() + 1; // Months are zero-based, so add 1
      const day = currentDate.getDate();
      const hours = currentDate.getHours();
      const minutes = currentDate.getMinutes();
      const seconds = currentDate.getSeconds();
  
      // Format the date and time
      const formattedDate = `${year}-${month < 10 ? "0" + month : month}-${
        day < 10 ? "0" + day : day
      }`;
      const formattedTime = `${hours < 10 ? "0" + hours : hours}:${
        minutes < 10 ? "0" + minutes : minutes
      }:${seconds < 10 ? "0" + seconds : seconds}`;
  
      const newReply = {
        user, // Use the already generated user object
        content: inputRep,
        createdAt: formattedDate,
        createTm: formattedTime,
        counter: counterValue,
      };
  
      const replyHTML = createReplyHTML(newReply);
      replyContainer.innerHTML += replyHTML;
      inputElement.value = "";
    });
  
    repBtn.addEventListener("click", () => {
      reply.classList.add("addShow");
      reply.classList.remove("Show");
    });
  });
  
  function createCommentHTML(comment) {
    return `
          <div class="comments">
              <div class="count">
                  <div class="plus"><img src="/images/icon-plus.svg" alt=""></div>
                  <div class="counter">${comment.user.counter}</div>
                  <div class="minus"><img src="/images/icon-minus.svg" alt=""></div>
              </div>
              <div class="text">
                  <div class="head">
                      <div class="profile">
                          <div class="sub">
                              <div class="image mx-3"><img src="/images/avatars/image-amyrobson.png" height="30" alt=""></div>
                              <div class="name mx-3">${
                                comment.user.username
                              }</div>
                          </div>
                      <div class="reply">
                          <div class="rep-btn"><img src="/images/icon-reply.svg" alt=""></div>
                          <div class="rep-text">Reply</div>
                      </div>
                  </div>
                  <p class="content">${comment.content}</p>
                  <div class="date mx-3"> <p>${comment.createdAt}</p>
                      <p class="time">${comment.createTm}</p></div>
                  </div>
              </div>
          </div>
      `;
  }
  
  function createReplyHTML(reply) {
    return `
          <div class="replySection">
              <div class="count">
                  <div class="plus"><img src="/images/icon-plus.svg" alt=""></div>
                  <div class="counter">${reply.counterValue}</div>
                  <div class="minus"><img src="/images/icon-minus.svg" alt=""></div>
              </div>
              <div class="text">
                  <div class="head">
                      <div class="profile">
                          <div class="sub">
                              <div class="image mx-3"><img src="/images/avatars/image-amyrobson.png" height="30" alt=""></div>
                              <div class="name mx-3">${reply.user.username}</div>
                          </div>
                      <div class="reply">
                          <div class="rep-btn"><img src="/images/icon-delete.svg" alt=""></div>
                          <div class="delete-text">Delete</div>
                      </div>
                  </div>
                  <p class="content">${reply.content}</p>
                  <div class="date mx-3"> <p>${reply.createdAt}</p>
                      <p class="time">${reply.createTm}</p></div>
                  </div>
              </div>
          </div>
      `;
  }