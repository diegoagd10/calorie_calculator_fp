// Element operations
const elemGetValue = name => elem => elem(name).value

const elemGetValueWithParser = name => elem => parser => parser(elemGetValue(name)(elem))

const elemSetValue = (name, value) => elem => set => set(elem(name), value)

const elemClearValue = name => elem => set => set(elem(name), '')

const addEvent = (name, event, func) => elem => elem(name).addEventListener(event, func)

const removeEvent = (name, event, func) => elem => elem(name).removeEventListener(event, func)

const addClass = (name, className) => elem => elem(name).classList.add(className)

const removeClass = (name, className) => elem => elem(name).classList.remove(className)

const elemAppendChild = (name, child) => elem => elem(name).appendChild(child)

// Element operations using elementById
const elemGetValueById = name => elemGetValue(name)(elementById)

const elemGetValueWithParserById = name => parser => parser(elemGetValueById(name))

const elemSetValueById = (name, value) => elemSetValue(name, value)(elementById)

const elemClearValueById = name => elemClearValue(name)(elementById)

const addEventById = (name, event, func) => addEvent(name, event, func)(elementById)

const removeEventById = (name, event, func) => removeEvent(name, event, func)(elementById)

const addClassById = (name, className) => addClass(name, className)(elementById)

const removeClassById = (name, className) => removeClass(name, className)(elementById)

const elemClearTextById = name => elemClearValueById(name)(setText)

const elemClearInputValueById = name => elemClearValueById(name)(setValue)

const elemSetValueTextById = (name, value) => elemSetValueById(name, value)(setText)

const elemGetValueByIdAsInt = name => elemGetValueWithParserById(name)(parseInt)

// Element operations using elementByTagName
const elemGetValueByTagName = name => elemGetValue(name)(elementByTagName)

const elemGetValueWithParserByTagName = name => parser => parser(elemGetValueByTagName(name))

const elemSetValueByTagName = (name, value) => elemSetValue(name, value)(elementByTagName)

const elemClearValueByTagName = name => elemClearValue(name)(elementByTagName)

const addEventByTagName = (name, event, func) => addEvent(name, event, func)(elementByTagName)

const removeEventByTagName = (name, event, func) => removeEvent(name, event, func)(elementByTagName)

const addClassByTagName = (name, className) => addClass(name, className)(elementByTagName)

const removeClassByTagName = (name, className) => removeClass(name, className)(elementByTagName)

const elemAppendChildByTagName = (name, child) => elemAppendChild(name, child)(elementByTagName)

// Selectors
const elementById = id => document.getElementById(id)

const elementByTagName = tagName => document.querySelector(tagName)

// Setters
const setText = (elem, text) => elem.innerText = text

const setValue = (elem, value) => elem.value = value

const setHTML = (elem, html) => elem.innerHTML = html