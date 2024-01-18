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
      image: { png: "/images/avatars/image-amyrobson.webp" },
    };

    const currentDate = new Date();

    const formattedDate = formatDate(currentDate);
    const formattedTime = formatTime(currentDate);

    const newComment = {
      user,
      content: input,
      createdAt: formattedDate,
      createTm: formattedTime,
      counter: counterValue,
    };

    const commentHTML = createCommentHTML(newComment);
    commentsContainer.innerHTML += commentHTML;
    inputElement.value = "";
  });

  rep.addEventListener("click", () => {
    // alert("Click")
    const inputElement = document.querySelector(".inputRep");
    const inputRep = inputElement.value;
    const randomName = names[Math.floor(Math.random() * names.length)];
    const user = {
      username: randomName,
      image: { png: "/images/avatars/image-amyrobson.webp" },
    };

    const currentDate = new Date();

    const formattedDate = formatDate(currentDate);
    const formattedTime = formatTime(currentDate);

    const newReply = {
      user,
      content: inputRep,
      createdAt: formattedDate,
      createTm: formattedTime,
    };

    const replyHTML = createReplyHTML(newReply);
    replyContainer.innerHTML += replyHTML;
    inputElement.value = "";
  });

  repBtn.addEventListener("click", () => {
    // alert("Please enter")
    reply.classList.toggle("addShow");
  });
});

function formatDate(date) {
  const year = date.getFullYear();
  const month = padZero(date.getMonth() + 1); // Months are zero-based, so add 1
  const day = padZero(date.getDate());
  return `${year}-${month}-${day}`;
}

function formatTime(date) {
  const hours = padZero(date.getHours());
  const minutes = padZero(date.getMinutes());
  const seconds = padZero(date.getSeconds());
  return `${hours}:${minutes}:${seconds}`;
}

function padZero(num) {
  return num < 10 ? "0" + num : num;
}

const count = 0;

function createCommentHTML(comment) {
  return `

    <div class="comments">
        <div class="count">
            <div class="plus" onclick="incrementCounter(this)"><img src="/images/icon-plus.svg" alt=""></div>
            <div class="counter">${comment.counter}</div>
            <div class="minus" onclick="decrementCounter(this)"><img src="/images/icon-minus.svg" alt=""></div>
        </div>
        <div class="text">
            <div class="head">
                <div class="profile">
                    <div class="sub">
                        <div class="image mx-3"><img src="/images/avatars/image-amyrobson.png" height="30" alt=""></div>
                        <div class="name mx-3">${comment.user.username}</div>
                    </div>
                <div class="reply" onclick="toggleReply(this)">
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

function toggleReply() {
    const reply = document.querySelector(".addReply");
    reply.classList.toggle("addShow");
}

function createReplyHTML(reply) {
  return `
    <div class="replySection" data-reply-id="${reply.id}">
        <div class="text">
            <div class="head">
                <div class="profile">
                    <div class="sub">
                        <div class="image mx-3"><img src="/images/avatars/image-amyrobson.png" height="30" alt=""></div>
                        <div class="name mx-3">${reply.user.username}</div>
                    </div>
                <div class="reply" onclick="deleteReply(${reply.id})">
                    <div ><img src="/images/icon-delete.svg" alt=""></div>
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

function deleteReply(replyId) {
    const replySection = document.querySelector(`.replySection[data-reply-id="${replyId}"]`);
    if(replySection){
        replySection.remove();
    }
}

function incrementCounter(element) {
    const counterElement = element.parentElement.querySelector('.counter');
    counterElement.textContent = parseInt(counterElement.textContent) + 1;
  }
  
  function decrementCounter(element) {
    const counterElement = element.parentElement.querySelector('.counter');
    const currentCounter = parseInt(counterElement.textContent);
    counterElement.textContent = currentCounter > 0 ? currentCounter - 1 : 0;
  }


  