const empty = ''
const set = (method, pattern) => Object.defineProperty(method, 'pattern', { value: pattern })
const pattern = /^([a-zA-Z]{2,3})(?:[_-]+([a-zA-Z]{3})(?=$|[_-]+))?(?:[_-]+([a-zA-Z]{4})(?=$|[_-]+))?(?:[_-]+([a-zA-Z]{2}|[0-9]{3})(?=$|[_-]+))?/
const match = tag => tag.match(pattern) || []

export const parse = function(tag) {
  tag = match(tag)
  return {
    language: tag[1] || empty,
    extlang: tag[2] || empty,
    script: tag[3] || empty,
    region: tag[4] || empty
  }
}

export const language = tag => match(tag)[1] || empty
export const extlang = tag => match(tag)[2] || empty
export const script = tag => match(tag)[3] || empty
export const region = tag => match(tag)[4] || empty

set(language, /^[a-zA-Z]{2,3}$/);
set(extlang, /^[a-zA-Z]{3}$/);
set(region, /^[a-zA-Z]{2}$|^[0-9]{3}$/);
set(script, /^[a-zA-Z]{4}$/);
