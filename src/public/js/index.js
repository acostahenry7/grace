// Scroll Animation
var mybutton = document.getElementById("scrolltop_btn");
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 1000 ||
    document.documentElement.scrollTop > 1000
  ) {
    mybutton.style.opacity = "1";
    mybutton.style.transition = ".5s";
  } else {
    mybutton.style.opacity = "0";
  }
}

$("#chatModalForm").on("hidden.bs.modal", function () {
  $("#chatForm_btn").css("opacity", "1");
  $("#chatForm_btn").css("z-index", "5");
});

$("#chat_box_send").on("click", () => {
  msgToServer();
  $("#chat_box_typing").val("");
});

//Gets and sends message to Server
function msgToServer() {
  socket.emit("chatMessage", $("#chat_box_typing").val());
}

function scrollToBottom() {
  const messages = document.getElementById("chat_box_blog");

  messages.scrollTop = messages.scrollHeight;
}

/*function outputMessage(msg){
    if (msg.username == "ChatBot") {
      msg.text = msg.text.bold()
    }
    $('#chat_box_blog')
        .append($(`
            <div class="chat_box_msg_self">
              <span style="margin-top: 5px" >${msg.userIcon}</span>
              <div class="chat_box_msg_text">
                ${msg.text}
                <span class="chat_box_msg_time">${msg.time}</span>
              </div>
            </div>`))



        scrollToBottom();

}*/

console.log($("#home_link")[0]);
console.log(location.href);
switch (location.href) {
  case "http://localhost:3000/":
    underLine($("#home_link"));
    break;
  case "http://localhost:3000/services/servers":
  case "http://localhost:3000/services/sound":
    underLine("#services_link");
    break;
  default:
}

function underLine(element) {
  $(element).css("border-bottom", "2px solid #0088cc");
  $(element).css("padding-bottom", "2px");
}

$("#applicationForm").submit((e) => {
  e.preventDefault();
  $.ajax({
    url: $("#applicationForm").attr("action"),
    type: "POST",
    data: $("#applicationForm").serialize(),
    success: (res) => {
      console.log(res);
      $("#applicationForm")[0].reset();
    },
  });
});
