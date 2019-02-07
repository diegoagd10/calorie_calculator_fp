const attrsToString = (obj = {}) => Object
    .keys(obj)
    .map(attr => `${attr}="${obj[attr]}"`)
    .join(' ')

const tagAttrs = obj => (content = "") =>
    `<${obj.tag}${obj.attrs ? ' ' : ''}${attrsToString(obj.attrs)}>${content}</${obj.tag}>`

const tag = t =>
    typeof t === 'string' ? tagAttrs({ tag: t }) : tagAttrs(t)

const tableRowTag = tag('tr')

const tableCell = tag('td')

const tableCells = elements =>
    elements.map(tableCell).join('')

const tableRow = elements =>
    compose(tableRowTag, tableCells)(elements)

const trashIcon = tag({
    tag: 'i',
    attrs: {
        class: 'fas fa-trash-alt'
    }
})()