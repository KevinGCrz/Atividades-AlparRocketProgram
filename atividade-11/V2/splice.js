function splice(array, indexStart, deletCount, ...items)
{
    const newArray = []
    const arrayToDelete = []

    for(let i = indexStart; i < array.length; i++)
    {
        if(i >= indexStart && i < indexStart + deletCount)
        {
            arrayToDelete[arrayToDelete.length] = array[i]

        } else {

            newArray[newArray.length] = array[i]
        }
    }

    for(let i = 0; i < newArray.length; i++)
    {
        array[i] = newArray[i]
    }

    array.length = newArray.length

    for(let i = array.length - 1; i >= indexStart; i--)
    {
        array[i + 1 + items.length] = array[i]
    }
    for(let i = 0; i < items.length; i++)
    {
        array[indexStart + i] = items[i]
    }

    return arrayToDelete
}

const pedaco = splice(arr, 2, 2, '')

console.log(arr)
console.log(pedaco)