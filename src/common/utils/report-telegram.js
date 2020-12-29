// 发送消息的api
const telegramApi = 'https://api.telegram.org/bot1475964208:AAFi_WqoLDoiZe7W-kzOTh4S8AzYuihacMY/sendMessage'
// 项目名
const projectName = 'USDT'

// event为sentry捕获的错误事件对象
const telegram = event => {
  if (event.exception) {
    const { values } = event.exception
    const { level, request } = event
    if (values.length) {
      const { type, value, stacktrace } = values[0]
      let traceDetail = ''
      // 从错误堆栈中获取最后一条信息
      if (stacktrace.frames.length) {
        traceDetail = JSON.stringify(stacktrace.frames[stacktrace.frames.length - 1])
      }

      const xhr = new XMLHttpRequest()
      xhr.open('POST', telegramApi, true)
      xhr.setRequestHeader('Content-Type', 'application/json')
      xhr.send(
        JSON.stringify({
          parse_mode: 'HTML',
          chat_id: '1359267342',
          text: `
            \n\n<b><u>-- ${projectName} --</u></b>
            \n<strong><code>${type}</code></strong>
            \n<b>错误信息: </b><pre>${value}</pre>
            \n<b>错误等级: </b><pre>${level}</pre>
            \n<b>url: </b><pre>${request.url}</pre>
            \n<b>User-Agent: </b><pre>${request.headers['User-Agent']}</pre>
            \n<b>错误栈详情: </b><pre>${traceDetail}</pre>
            \n<b>发生时间: </b><pre>${new Date().toLocaleString()}</pre>
          `,
        }),
      )
    }
  }
}

export default telegram
