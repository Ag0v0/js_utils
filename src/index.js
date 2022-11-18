/*
 * @Description: 数据处理
 * @Autor: Ag
 * @Date: 2022-07-15 15:20:21
 * @LastEditors: Ag
 * @LastEditTime: 2022-11-18 15:44:27
 */

/**
 * 处理支持的文件格式
 * 
 * @param {string} 文件类型
 * @returns 文件格式
 */
export function acceptFile(e) {
  const allowHook = {
    video: '.mp4, .ogv, .ogg, .webm',
    audio: '.wav, .mp3, .ogg, .acc, .webm, .amr',
    file: 'doc,.docx,.xlsx,.xls,.pdf',
    excel: 'xlsx,.xls',
    image: '.jpg, .jpeg, .png, .gif',
    pdf: '.pdf'
  }
  if (e) {
    return allowHook[e];
  }
  let srt = null
  for (const k in allowHook) {
    srt += allowHook[k]
  }
  return srt
}

/*
 * @Description: 一维数组转换为二维数组
 * @Autor: Ag
 * @Date: 2022-11-18 14:46:02
 * @LastEditors: Ag
 * @LastEditTime: 2022-11-18 15:31:06
 */
export default arrayTrans = (num, arr) => {
  const iconsArr = [];
  arr.forEach((item, index) => {
    const page = Math.floor(index / num);
    if (!iconsArr[page]) {
      iconsArr[page] = [];
    }
    iconsArr[page].push(item);
  });
  return iconsArr;
}

/**
 * 计算字节数
 * 
 * @param {string} input value
 * @returns {number} output value
 */
export function byteLength(str) {
  let s = str.length
  for (var i = str.length - 1; i >= 0; i--) {
    const code = str.charCodeAt(i)
    if (code > 0x7f && code <= 0x7ff) s++
    else if (code > 0x7ff && code <= 0xffff) s += 2
    if (code >= 0xDC00 && code <= 0xDFFF) i--
  }
  return s
}

/**
 * 下划转驼峰
 * @param {*} str 
 * @returns 
 */
export function camelCase(str) {
  return str.replace(/-[a-z]/g, str1 => str1.substr(-1).toUpperCase())
}

/**
 * 防抖
 * @param {*} func 
 * @param {*} wait 
 * @param {*} immediate 
 */
export function debounce(func, delay = 200) {
  let timer = null;
  return function () {
    let _this = this;
    let args = [].slice.apply(arguments);
    if (timer) clearTimeout(timer);
    let callNow = !timer; //类型转换
    timer = setTimeout(function () { //增加一个定时器
      timer = null; //清空当前定时器句柄
    }, delay);
    if (callNow) func.apply(_this, args); //第一次执行
  }
}

/**
 * 重写localStorage.setItem事件
 * 当使用setItem的时候，触发 window.dispatchEvent 派发事件
 */
export function dispatchEventStroage() {
  const signSetItem = localStorage.setItem
  localStorage.setItem = function (key, val) {
    let setEvent = new Event('setItemEvent')
    setEvent.key = key
    setEvent.newValue = val
    window.dispatchEvent(setEvent)
    signSetItem.apply(this, arguments)
  }
}

/**
 * 下载二进制流文件
 * 
 * 注意：设置请求头 responseType: 'arraybuffer'
 * 
 * @param {*} blob 二进制流
 * @param {*} mime mime类型
 */
export function downloadBlob(blob, mime) {
  const link = document.createElement("a");
  link.download = "";
  link.href =
    "data:" + mime + "; base64, " +
    window.btoa(
      new Uint8Array(blob).reduce(
        (data, byte) => data + String.fromCharCode(byte),
        ""
      )
    );
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

/**
 * 模糊查询
 * @param {*} list 数据列表
 * @param {*} val 查询值
 * @returns 
 */
export function fuzzyQuery(list, val) {
  return list.filter(el => Object.values(el).some(e => new RegExp(val + '').test(e))
  )
}

/**
 * 获取路由参数
 * 
 * @param {string} url
 * @returns {Object}
 */
export function getQueryParams(url) {
  url = url == null ? window.location.href : url
  const search = url.substring(url.lastIndexOf('?') + 1)
  const obj = {}
  const reg = /([^?&=]+)=([^?&=]*)/g
  search.replace(reg, (rs, $1, $2) => {
    const name = decodeURIComponent($1)
    let val = decodeURIComponent($2)
    val = String(val)
    obj[name] = val
    return rs
  })
  return obj
}

/**
 * 格式化千位符
 * 
 * @param {*} number 要格式化的数字
 * @param {*} decimals decimals：保留几位小数
 * @param {*} decPoint 小数点符号
 * @param {*} thousandsSep 千分位符号
 * @param {*} roundtag 舍入参数，默认 'ceil' 向上取,'floor'向下取,'round' 四舍五入
 * @returns 
 */
export function bigNumberFormat(number, decimals, decPoint = '.', thousandsSep = ',', roundtag = 'ceil') {
  number = (number + '').replace(/[^0-9+-Ee.]/g, '')

  var n = !isFinite(+number) ? 0 : +number
  var prec = !isFinite(+decimals) ? 0 : Math.abs(decimals)
  var s = ''
  var toFixedFix = function (n, prec) {
    var k = Math.pow(10, prec)
    return '' + parseFloat(Math[roundtag](parseFloat((n * k).toFixed(prec * 2))).toFixed(prec * 2)) / k
  }
  s = (prec ? toFixedFix(n, prec) : '' + Math.round(n)).split('.')
  var re = /(-?\d+)(\d{3})/
  while (re.test(s[0])) {
    s[0] = s[0].replace(re, '$1' + thousandsSep + '$2')
  }

  if ((s[1] || '').length < prec) {
    s[1] = s[1] || ''
    s[1] += new Array(prec - s[1].length + 1).join('0')
  }
  return s.join(decPoint)
}

/**
 * 对象转 FormData
 * @param {*} obj 
 * @returns 
 */
export function toFormData(obj) {
  const formData = new FormData();
  Object.keys(obj).map((key) => {
    formData.append(key, (obj[key]));
  });
  return formData;
}

/**
 * 解析url链接
 * 
 * @param {*} href 链接
 * @returns 
 */
export function parseURL(href) {
  return href ? new URL(href) : {}
}

/**
 * JSON解析 替换 \r \n 转义
 * @param {*} str 
 * @returns 
 */
export function replaceRN(str) {
  return str ? str.replace(/[\r]/g, "\\r").replace(/[\n]/g, "\\n") : str
}

/**
 * 节流
 * @param {*} fn 
 * @param {*} wait 
 * @param {*} options 
 */
export function throttle(func, wait = 1000) {
  let timer = null;
  return function () {
    let _this = this;
    let args = [].slice.apply(arguments);
    if (!timer) {
      timer = setTimeout(function () {
        func.apply(_this, args);
        timer = null;  //清空定时器
      }, wait);
    }
  }
}

/**
 * 数组去重
 * @param {Array} arr
 * @returns {Array}
 */
export function uniqueArray(arr) {
  return Array.from(new Set(arr))
}

/**
 * 异或解密
 * 
 * @param {*} str 加密字符串
 * @param {*} XOR_KEY 密钥
 * @returns 解密结果
 */
export function xorDecryp(str, XOR_KEY) {
  const arr = new Array();
  for (let i = 0; i < str.length; i++) {
    const encCharCode = str.charCodeAt(i);
    const decCharCode = encCharCode ^ XOR_KEY;
    arr[i] = String.fromCharCode(decCharCode);
  }
  return arr.join("");
};
