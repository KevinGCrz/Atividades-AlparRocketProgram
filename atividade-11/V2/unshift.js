function unshift(array, ...items) {

    for(let i = array.length - 1; i >= 0; i--)
    {
        array[i + items.length] = array[i] 
    }
    for(let i = 0; i < items.length; i++)
    {
        array[i] = items[i]
    }

    return array.length
}

console.log(unshift(arr, ''))
console.log(arr)