import { msgError } from 'util'

const _toString = Object.prototype.toString

export function hasObject(value) {
  return _toString.call(value) === '[object Object]'
}

export function hasFunction(value) {
  return _toString.call(value) === '[object Function]'
}

export function hasArray(value) {
  return _toString.call(value) === '[object Array]'
}

export function hasString(value) {
  return _toString.call(value) === '[object String]'
}

export function hasNumber(value) {
  return _toString.call(value) === '[object Number]'
}

export function hasBoolean(value) {
  return _toString.call(value) === '[object Boolean]'
}

/**
 * 定时器
 *
 * @export
 * @param {*} item
 * @param {*} cb
 * @param {number} [time=200]
 */
export function resetTimer(item, cb, time = 200) {
  if (!item) msgError('resetTimer：无数据')
  if (!cb) msgError('resetTimer：无函数')
  if (!hasFunction(cb)) msgError('resetTimer：cb函数不符合')
  setTimeout(() => cb(item), time)
}

/**
 * 服务地址
 *
 * @export
 * @param {*} vue
 * @returns
 */
export function serviceAddress(vue) {
  const { href } = location
  const { path } = vue.$route
  return href.substring(0, href.indexOf(path))
}

/**
 * 转int类型
 *
 * @export
 * @param {*} value
 * @returns
 */
export function toInt(value) {
  return new Number(value)
}

/**
 * 转换为百分比
 *
 * @export
 * @param {*} total
 * @param {*} value
 * @param {number} [length=2]
 * @param {boolean} [hasFixed=false] 是否四舍五入
 * @returns
 */
export function toPercent(total, value, length = 2, hasFixed = false) {
  if (total == null) throw new TypeError('toPercent total：值为空')
  if (value == null) throw new TypeError('toPercent value：值为空')
  if (!hasNumber(total)) throw new TypeError('toPercent total：不是int类型')
  if (!hasNumber(value)) throw new TypeError('toPercent value：不是int类型')
  const percent = total <= 0 ? 0 : ((value / total) * 10000) / 100
  const flag = decimalPointLength(percent) > length
  return flag ? decimalPlaces(percent, length, hasFixed) : percent
}

/**
 * 小数点位数
 *
 * @export
 * @param {*} value
 * @returns
 */
export function decimalPointLength(value) {
  const val = value.toString().split('.')
  return val.length === 2 ? val[1].length : 0
}

/**
 * 保留小数点
 *
 * @export
 * @param {*} value
 * @param {number} [length=2] 小数点长度
 * @param {boolean} [hasFixed=false] 是否四舍五入
 * @returns
 */
export function decimalPlaces(value, length = 2, hasFixed = false) {
  if (hasFixed) value.toFixed(length)
  else {
    const percentReg = new RegExp(`^\\d+(?:\\.\\d{0,${length}})?`)
    return toInt(value.toString().match(percentReg))
  }
}
