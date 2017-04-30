# subtag
[Language tag](https://www.w3.org/International/articles/language-tags/) parser. Parse language tags into subtags.

## methods

- <b>`language(tag)`</b> get [primary language subtag](https://www.w3.org/International/articles/language-tags/#language)
- <b>`extlang(tag)`</b> get [extended language subtag](https://www.w3.org/International/articles/language-tags/#extlang)
- <b>`script(tag)`</b> get [script subtag](https://www.w3.org/International/articles/language-tags/#script)
- <b>`region(tag)`</b> get [region subtag](https://www.w3.org/International/articles/language-tags/#region)

### notes
- Methods return an empty string for unpresent subtags
- Methods support dashes (standard) and underscores (for convenience)

## setup
### install via npm or yarn
```
npm install subtag --save
```
```
yarn add subtag
```

## usage

### `import` usage

#### only import methods you need

```
import { language, region } from 'subtag'

language('en-US') // 'en'
region('en-US') // 'US'
```

### `require` usage

```
var subtag = require('subtag')

subtag.language('en') // 'en'
subtag.extlang('en') // ''
subtag.script('en') // ''
subtag.region('en') // ''

subtag.language('en-US') // 'en'
subtag.extlang('en-US') // ''
subtag.script('en-US') // ''
subtag.region('en-US') // 'US'

subtag.language('zh-yue') // 'zh'
subtag.extlang('zh-yue') // 'yue'
subtag.script('zh-yue') // ''
subtag.region('zh-yue') // ''

subtag.language('zh-Hans') // 'zh'
subtag.extlang('zh-Hans') // ''
subtag.script('zh-Hans') // 'Hans'
subtag.region('zh-Hans') // ''
```

## structure
[language<b>-</b>extlang<b>-</b>script<b>-</b>region<b>-</b>variant<b>-</b>extension<b>-</b>privateuse](https://www.w3.org/International/articles/language-tags/#rfc)

<table>
<tr>
  <th scope="col">type</th>
  <th scope="col">pattern</th>
  <th scope="col">convention</th>
</tr>
<tr>
  <td>language</td>
  <td>2-letter or 3-letter</td>
  <td>lowercase</td>
</tr>
<tr>
  <td>extlang</td>
  <td>3-letter</td>
  <td>lowercase</td>
</tr>
<tr>
  <td>script</td>
  <td>4-letter</td>
  <td>titlecase</td>
</tr>
<tr>
  <td>region</td>
  <td>2-letter or 3-number</td>
  <td>uppercase</td>
</tr>
</table>
