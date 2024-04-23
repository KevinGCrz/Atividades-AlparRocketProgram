function forEach(array, callback)
{
    for(let i = 0; i < array.length; i++)
    {
        callback(array[i], i, array)
    }
}

const arr = [ 'maça', 'banana', 'pera', 'uva', 'manga', 'abacate', 'côco']
forEach(arr, (item, index) => {
    console.log(index, item.toUpperCase())
})