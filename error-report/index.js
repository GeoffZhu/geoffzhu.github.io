window.onerror = function(msg, url, line, col, error) {
  // 直接将错误打印到控制台
  console.log(arguments)

  // 方便在未打开控制台的时候，记录错误对象
  window.demoError = arguments

}

function makeError () {
  var name = "geoff"
  var msg = "Hi, " + Name
  console.log(msg)
}

makeError()