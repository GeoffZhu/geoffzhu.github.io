window.onerror = function(msg, url, line, col, error) {
  // 直接将错误打印到控制台
  console.log(arguments)
  console.log(window.event)
  // 方便在未打开控制台的时候，记录错误对象
  window.demoError = arguments
  window.demoErrorIE = window.event
  // 打印参数 和 浏览器 agaent到body
  document.body.innerHTML = JSON.stringify(arguments) + '<br/>' + window.navigator.userAgent
}

function makeError () {
  var name = "geoff"
  var msg = "Hi, " + Name
  console.log(msg)
}

makeError()
