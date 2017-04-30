!function() {
  var api = require('./')

  function test(object) {
    if (api.language(object.tag) !== object.language) throw new Error('Fail: language for ' + object.tag)
    if (api.extlang(object.tag) !== object.extlang) throw new Error('Fail: extlang for ' + object.tag)
    if (api.region(object.tag) !== object.region) throw new Error('Fail: region for ' + object.tag)
    if (api.script(object.tag) !== object.script) throw new Error('Fail: script for ' + object.tag)
    console.log('Pass: ', object.tag)
  }

  var tests = [
    {
      tag: '',
      language: '',
      extlang: '',
      region: '',
      script: ''
    },
    {
      tag: 'ast',
      language: 'ast',
      extlang: '',
      region: '',
      script: ''
    },
    {
      tag: 'en',
      language: 'en',
      extlang: '',
      region: '',
      script: ''
    },
    {
      tag: 'en-US',
      language: 'en',
      extlang: '',
      region: 'US',
      script: ''
    },
    {
      tag: 'kam_KE',
      language: 'kam',
      extlang: '',
      region: 'KE',
      script: ''
    },
    {
      tag: 'gsw_LI',
      language: 'gsw',
      extlang: '',
      region: 'LI',
      script: ''
    },
    {
      tag: 'es-005',
      language: 'es',
      extlang: '',
      region: '005',
      script: ''
    },
    {
      tag: 'zh-yue',
      language: 'zh',
      extlang: 'yue',
      region: '',
      script: ''
    },
    {
      tag: 'zh-Hans',
      language: 'zh',
      extlang: '',
      region: '',
      script: 'Hans'
    },
    {
      tag: 'zh-Hant-HK',
      language: 'zh',
      extlang: '',
      region: 'HK',
      script: 'Hant'
    },
    {
      tag: 'pa_Guru_IN',
      language: 'pa',
      extlang: '',
      region: 'IN',
      script: 'Guru'
    }
  ]

  tests.forEach(test)
  tests.map(function(o) {
    o = Object.assign({}, o)
    o.tag = o.tag.replace('-', '_')
    return o
  }).forEach(test)

  console.log('All tests passed :)')
}();
