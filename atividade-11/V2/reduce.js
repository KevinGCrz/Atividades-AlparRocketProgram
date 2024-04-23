function reduce(array, callback, initalValue)
{
    let accumulator = initalValue

    for(let i = 0; i < array.length; i++)
    {
        accumulator = callback(accumulator, array[i])
    }

    return accumulator
}

const soma = reduce(arr, (accumulator, item)=>{
    return accumulator + item
}, 0)

console.log(soma)