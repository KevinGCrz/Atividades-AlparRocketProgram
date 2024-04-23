function map(array, callback)
{
    const newArray = []

    for(let i = 0; i < array.length; i++)
    {
        newArray[i] = callback(array[i], i, array)
    }
    return newArray
}

console.log(map(arr, (item)=> { 
    return item.toUpperCase()
}))

console.log(arr)