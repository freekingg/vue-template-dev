import * as Sentry from '@sentry/vue'
import Telegram from './report-telegram'

class Report {
  static dsn = 'http://e0f6c072b1a1461a99ae02fdd9b052ff@localhost:9000/2'

  constructor(Vue) {
    Sentry.init({
      Vue,
      dsn: Report.dsn,
      beforeSend(event) {
        console.log(event)
        // 向小飞机上报异常
        Telegram(event)
        // return event 则会上报sentry后端服务平台，否则只会上报上方自定义平台
        // return event
      },
    })
  }

  /**
   * 单例模式
   */
  static getInstance(Vue, options) {
    if (!this.instance && options.enable) {
      this.instance = new Report(Vue, options)
    }
    return this.instance
  }

  /**
   * 手动上报
   * type: 'info','warning','error'
   */
  log(data = null, type = 'error', options = {}) {
    Sentry.captureException(new Error(data), {
      level: type,
      logger: 'manual exception',
      tags: { options },
    })
  }
}
export default Report
