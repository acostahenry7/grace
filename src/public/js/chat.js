const socket = io();

var userData = {};
$("#chatForm_btn").on("click", () => {
  $("#chatForm_btn").css("opacity", "0");
  console.log("hi");
  $("#chatModalForm").modal("show");
});

$("#chat_btn").on("click", async () => {
  $("#chatModalForm").modal("hide");
  $("#chat_box").css("display", "block");
  $("#chat_box").css("opacity", "1");

  $("#chat_box").css("z-index", "999");

  userData.username = $("#username").val();
  userData.email = $("#email").val();
  userData.room = $("#room option:selected").val();

  await broadcastMessages();
});

$("#chat_box_typing").on("keyup", (e) => {
  if (e.keyCode == 13) {
    msgToServer();
    $("#chat_box_typing").val("");
  }
});

function broadcastMessages() {
  console.log(userData);
  socket.emit("joinRoom", userData);
}

socket.on("message", (msg) => {
  console.log(msg);
  outputMessage(msg);
});

//Chat Box Animation
$("#chat_close_btn").on("click", () => {
  $("#chat_box").css("opacity", "0");
  $("#chat_box").css("z-index", "4");
  $("#chat_box").css("display", "none");
  $("#chatForm_btn").css("opacity", "1");
  $("#chatForm_btn").css("z-index", "5");
});

//Gets and sends message to Server
function msgToServer() {
  socket.emit("chatMessage", $("#chat_box_typing").val());
}

function scrollToBottom() {
  const messages = document.getElementById("chat_box_blog");

  messages.scrollTop = messages.scrollHeight;
}

function outputMessage(msg) {
  if (msg.username == "ChatBot") {
    msg.text = msg.text.bold();
  }
  let className = "";
  console.log(msg.id, socket.id);
  if (msg.id == socket.id) {
    console.log("hi");
    className = "self_messages";
  }

  $("#chat_box_blog").append(
    $(`
            <div class="chat_box_msg ${className}">
              <span style="margin-top: 5px" >${msg.userIcon}</span>
              <div class="chat_box_msg_text">
                ${msg.text}
                <span class="chat_box_msg_time">${msg.time}</span>
              </div>
            </div>`)
  );

  scrollToBottom();
}
