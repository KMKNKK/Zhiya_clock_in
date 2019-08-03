//menses.js
const util = require('../../utils/util.js')

Page({
  data: {
    isMensesNow: false,
    checked: false,
    calendarConfig: {
      multi: false,
      defaultDay: '2019-8-7'
    },
    userTapDate: '2019年 8月 7日'
  },
  onLoad: function () {
    // TODO 向后端请求数据
  },
  onChange(event) {
    // 需要手动对 checked 状态进行更新
    this.setData({ checked: event.detail });
  },
  /**
   * 选择日期后执行的事件
   * currentSelect 当前点击的日期
   * allSelectedDays 选择的所有日期（当mulit为true时，allSelectedDays有值）
   */
  afterTapDay(e) {
    console.log('afterTapDay', e.detail); // => { currentSelect: {}, allSelectedDays: [] }
    this.setTodoLabels();
    this.setData({
      userTapDate: '' + e.detail.year + '年 ' + e.detail.month + '月 ' + e.detail.day + '日'
    })
  },
  /**
   * 当改变月份时触发
   * current 当前年月
   * next 切换后的年月
   */
  whenChangeMonth(e) {
    console.log('whenChangeMonth', e.detail); // => { current: { month: 3, ... }, next: { month: 4, ... }}
  },
  /**
   * 日期点击事件（此事件会完全接管点击事件），需自定义配置 takeoverTap 值为真才能生效
   * currentSelect 当前点击的日期
   */
  onTapDay(e) {
    console.log('onTapDay', e.detail); // => { year: 2019, month: 12, day: 3, ...}
  },
  /**
   * 日历初次渲染完成后触发事件，如设置事件标记
   */
  afterCalendarRender(e) {
    console.log('afterCalendarRender', e);
  },
  setTodoLabels() {
    this.calendar.setTodoLabels({
      // 待办点标记设置
      pos: 'top', // 待办点标记位置 ['top', 'bottom']
      dotColor: '#FFF', // 待办点标记颜色
      // 待办圆圈标记设置（如圆圈标记已签到日期），该设置与点标记设置互斥
      circle: true, // 待办
      days: [{
        year: 2018,
        month: 5,
        day: 15,
        todoText: '待办'
      }],
     });
  }
})
