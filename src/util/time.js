// gatsby-jikuu <https://github.com/msikma/gatsby-jikuu>
// © MIT license

/** References to Intl formatter objects. */
const formatters = {
  isSet: false,
  locale: 'ja-JP',
  relative: null,
  regular: null,
  archive: null
}

/** Ensures all formatters are initialized. */
const setTimeLocale = (locale) => {
  if (formatters.isSet) {
    return
  }
  if (locale) {
    formatters.locale = locale
  }
  formatters.isSet = true
  formatters.month = new Intl.DateTimeFormat(formatters.locale, {year: 'numeric', month: 'long'})
  formatters.relative = new Intl.RelativeTimeFormat(formatters.locale, {style: 'long', numeric: 'auto'})
  formatters.regular = new Intl.DateTimeFormat(formatters.locale, {weekday: undefined, year: 'numeric', month: 'long', day: 'numeric'})
  formatters.archive = new Intl.DateTimeFormat(formatters.locale, {weekday: undefined, year: 'numeric', month: 'numeric', day: 'numeric', hour: 'numeric', minute: 'numeric'})
}

/** Returns the initialized formatters. */
const getFormatters = (locale) => {
  setTimeLocale(locale)
  return formatters
}

const getAbsoluteTime = (date, type) => {
  const formatters = getFormatters()

  if (type === 'archive') {
    return formatters.archive.format(date)
  }
  return formatters.regular.format(date)
}

const getRelativeTime = (dateA, dateB = new Date()) => {
  const formatters = getFormatters()

  const units = [
    ['year', 60 * 60 * 24 * 365],
    ['month', 60 * 60 * 24 * 30.4167],
    ['week', 60 * 60 * 24 * 7],
    ['day', 60 * 60 * 24],
    ['hour', 60 * 60],
    ['minute', 60],
    ['second', 1]
  ]

  const sA = Math.floor(dateA.getTime() / 1000)
  const sB = Math.floor(dateB.getTime() / 1000)

  const diff = sA - sB
  const diffAbs = Math.abs(diff)
  const unit = units.find(unit => {
    if (diffAbs > unit[1]) {
      return true
    }
  })
  let formatted = formatters.relative.format(Math.floor(diff / unit[1]), unit[0])
  if (formatters.locale.startsWith('ja')) {
    formatted = formatted.replace(/ /g, '')
  }
  return formatted
}

const formatYearMonth = (date) => {
  const formatters = getFormatters()
  return formatters.month.format(date)
}

const formatDatetimeParts = (type = 'std', dateA, dateB = new Date()) => {
  const formatters = getFormatters()
  const [abs, rel] = [getAbsoluteTime(dateA, type), getRelativeTime(dateA, dateB, type)]
  if (type === 'std') {
    if (formatters.locale === 'ja-JP') {
      return [abs, '（', rel, '）']
    }
    return [abs, '(', rel, ')']
  }
  if (type === 'archive') {
    const iso = dateA.toISOString()
    const parts = iso.split('T')
    const date = parts[0]
    //const time = parts[1].split('.')[0]
    //return [date, ' ', time.split(':').slice(0, 2).join(':'), ' UTC']
    return [date]
  }
}

const getTimeLocale = () => {
  return formatters.locale
}

export {
  getRelativeTime,
  getAbsoluteTime,
  getFormatters,
  setTimeLocale,
  formatDatetimeParts,
  formatYearMonth,
  getTimeLocale
}
