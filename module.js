const dash = /[_-]+/
const empty = ''
const set = (method, pattern) => Object.defineProperty(method, 'pattern', { value: pattern })

export const language = tag => tag.split(dash).slice(0, 1).find(sub => language.pattern.test(sub)) || empty
export const extlang = tag => tag.split(dash).slice(1, 2).find(sub => extlang.pattern.test(sub)) || empty
export const region = tag => tag.split(dash).slice(1).reverse().find(sub => region.pattern.test(sub)) || empty
export const script = tag => tag.split(dash).slice(1).reverse().find(sub => script.pattern.test(sub)) || empty

set(language, /^[a-zA-Z]{2,3}$/)
set(extlang, /^[a-zA-Z]{3}$/)
set(region, /^[a-zA-Z]{2}$|^[0-9]{3}$/)
set(script, /^[a-zA-Z]{4}$/)
