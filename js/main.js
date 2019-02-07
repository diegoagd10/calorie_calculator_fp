const KEYDOWN = 'keydown'
const IS_INVALID = 'is-invalid'

let list = []
const inputs = ['description', 'calories', 'carbs', 'protein']

const isValid = elem => elemGetValueById(elem)

const areValid = inputs => inputs.every(isValid)

const removeClassIsInvalid = ev => removeClassById(ev.target.id, IS_INVALID)

const sum = (a, b) => a + b

const select = (items, name) => items.map(item => item[name])

const sumAll = (items, name) => select(items, name).reduce(sum, 0)

const clearInputs = () => inputs.forEach(elemClearTextById)

const addInvalidClassIfEmpty = inputs => inputs.forEach(name => {
  isValid(name) ? '' : addClassById(name, IS_INVALID)
})

const removeInvalidClassOnKeyDown = inputs => inputs.forEach(name => {
  addEventById(name, KEYDOWN, removeClassIsInvalid)
})

const validateInputs = () => {
  addInvalidClassIfEmpty(inputs)

  if (areValid(inputs)) {
    add()
    updateTotals()
    clearInputs()
    renderItems()
  }
}

const add = () => {
  const description = elemGetValueById('description')
  const calories = elemGetValueByIdAsInt('calories')
  const carbs = elemGetValueByIdAsInt('carbs')
  const protein = elemGetValueByIdAsInt('protein')

  const newItem = { description, calories, carbs, protein }
  list.push(newItem)
}

const updateTotals = () => {
  const calories = sumAll(list, 'calories')
  const carbs = sumAll(list, 'carbs')
  const protein = sumAll(list, 'protein')

  elemSetValueTextById('totalCalories', calories)
  elemSetValueTextById('totalCarbs', carbs)
  elemSetValueTextById('totalProtein', protein)
}

const renderItems = () => {
  elemClearValueByTagName('tbody')(setHTML)

  list.map(item => {
    const row = document.createElement('tr')

    row.innerHTML = tableRow([
      item.description,
      item.calories,
      item.carbs,
      item.protein
    ])

    elemAppendChildByTagName('tbody', row)
  })
}

removeInvalidClassOnKeyDown(inputs)