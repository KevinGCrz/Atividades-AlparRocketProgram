function slice(array, indexStart, indexEnd = -1)
{
    const newArray = []

    indexEnd = indexEnd < 0 ? array.length : indexEnd;

    for(let i = indexStart; i <= indexEnd; i++)
    {
        newArray[newArray.length] = array[i]
    }

    return newArray;
}

console.log(slice(arr, 2, 5))

