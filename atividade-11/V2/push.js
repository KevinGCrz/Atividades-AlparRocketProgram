const arr = [ 'maça', 'banana', 'pera', 'uva']

function push(array, ...items) {
    
    for(let i = 0; i < items.length; i++)
    {
        array[array.length] = items[i]
    }

    return array.length
}

push(arr, 'exemplo')

console.log(arr)