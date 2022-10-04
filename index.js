const clearBtn = document.getElementById("clear-btn");
const unreadNotification = document.querySelectorAll(".ntf-list-unread");
const notificationList = document.getElementsByClassName("ntf-list-unread");
const notificationCount = document.getElementById("ntf-count");

// starting count of the notification
notificationCount.innerHTML = unreadNotification.length;

//function which mark read all the unread messages

const clearFunction = () => {
  unreadNotification.forEach((i) => {
    console.log(i.classList.contains("ntf-list-unread"));
    if (i.classList.contains("ntf-list-unread")) {
      i.classList.remove("ntf-list-unread");
      console.log(i.childNodes);
      i.querySelector(".fa-circle").classList.add("display-none");
    }
    clearBtn.disabled = true;
  });
  console.log(notificationList.length);
  notificationCount.innerHTML = notificationList.length;
};

// clear button which is calling the function clear function

clearBtn.addEventListener("click", clearFunction);
