function pop(array)
{
    const value = array[array.length - 1]
    array.length -= 1
    return value
}

const arr = ['']
console.log(pop(arr))
console.log(arr)