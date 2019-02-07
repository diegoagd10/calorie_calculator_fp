const attrsToString = (obj = {}) => {
    const attrs = []
    const keys = Object.keys(obj)

    keys.forEach(attr => attrs.push(`${attr}="${obj[attr]}"`))

    return attrs.join('')
}

const tagAttrs = obj => (content = "") =>
    `<${obj.tag}${obj.attrs ? ' ' : ''}${attrsToString(obj.attrs)}>${content}</${obj.tag}>`

const tag = t =>
    typeof t === 'string' ? tagAttrs({ tag: t }) : tagAttrs(t)

const tableRow = tag('tr')

const tableCell = tag('td')

const tableCells = elements =>
    elements.map(tableCell).join('')

const tableRows = elements =>
    compose(tableRowTag, tableCells)(elements)