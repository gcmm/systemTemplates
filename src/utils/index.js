import request from './request'
import api from './api'
/* * 时间格式化工具
 * 把Long类型的1527672756454日期还原yyyy-MM-dd格式日期
 */

function datetimeFormat(longTypeDate) {
  var dateTypeDate = '';
  var date = new Date();
  date.setTime(longTypeDate);
  dateTypeDate += date.getFullYear(); //年
  dateTypeDate += '-' + getMonth(date); //月
  dateTypeDate += '-' + getDay(date); //日
  return dateTypeDate;
}

//返回 01-12 的月份值
function getMonth(date) {
  var month = '';
  month = date.getMonth() + 1; //getMonth()得到的月份是0-11
  if (month < 10) {
    month = '0' + month;
  }
  return month;
}

//返回01-30的日期
function getDay(date) {
  var day = '';
  day = date.getDate();
  if (day < 10) {
    day = '0' + day;
  }
  return day;
}

// 毫秒数转换为天数
function getDuration(my_time) {
  var days = my_time / 1000 / 60 / 60 / 24;
  var daysRound = Math.floor(days);
  return daysRound;
}

// 定义系统用户名和密码
const systemInfo = {
  username: 'Troy',
  password: '111111'
};

export { datetimeFormat, getDuration, systemInfo, request, api };
