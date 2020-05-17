const assert = require('assert')

const members = require('./members')
const relations = require('./relations')

const areAllConnected = (members, relations) => {
  const membersToCheck = members.reduce((acc, { id }) => {
    acc[id] = false
    return acc
  }, {})

  relations.forEach(({ src, dest }) => {
    assert(
      membersToCheck.hasOwnProperty(src),
      `${src} has a relation but no member`
    )
    membersToCheck[src] = true
    assert(
      membersToCheck.hasOwnProperty(dest),
      `${dest} has a relation but no member`
    )
    membersToCheck[dest] = true
  })

  Object.keys(membersToCheck).forEach(member => {
    assert(
      membersToCheck[member],
      `${member} should be present in at least one relation but is not`
    )
  })
}

// Make assertions

const assertions = [areAllConnected]

assertions.forEach(assertion => assertion(members, relations))
