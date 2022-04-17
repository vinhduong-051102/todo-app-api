function checkContainAll(item, arr) {
    return arr.every(i => i === item)
}

function checkContainAJob(item, arr) {
    return arr.some(i => i === item)
}

export { checkContainAll, checkContainAJob }