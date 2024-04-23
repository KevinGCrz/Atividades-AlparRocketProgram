const meuArrayEl = document.getElementById("arrayDisplay");
let array = [];

// PUSH

function push(array, ...items) {
    for (let i = 0; i < items.length; i++) {
        array[array.length] = items[i];
    }
    return array.length;
}

function IncluiPush() {
    let meuValor = document.getElementById("meuInput").value;

    push(array, meuValor.trim());

    if (meuValor) {
        if (!meuArrayEl.innerText) {
            meuArrayEl.innerText = array.join(" ");
        } else {
            meuArrayEl.innerText = array.join(", ");
        }
        document.getElementById("meuInput").value = "";
    }
}

// POP

function pop(array) {
    const value = array[array.length - 1];
    array.length -= 1;
    return value;
}

const arr = [''];

function execPop() {
    let removedItem = pop(array);

    if (meuArrayEl.innerText) {
        meuArrayEl.innerText = array;
        alert("Item removido: " + removedItem);
    } else {
        alert("O array está vazio!");
    }
}

// SHIFT

function shift(array) {
    const value = array[0];

    for (let i = 0; i < array.length - 1; i++) {
        array[i] = array[i + 1];
    }
    
    array.length -= 1;

    return value;
}

function execShift() {
    let removedItem = shift(array);

    if (meuArrayEl.innerText) {
        meuArrayEl.innerText = array;
        alert("Item removido: " + removedItem);
    } else {
        alert("O array está vazio!");
    }
}

// UNSHIFT

function unshift(array, ...items) {
    for (let i = array.length - 1; i >= 0; i--) {
        array[i + items.length] = array[i];
    }
    for (let i = 0; i < items.length; i++) {
        array[i] = items[i];
    }
    return array.length;
}

function execUnShift() {
    if (meuArrayEl.innerText) {
        let inputValue = document.getElementById("inputUnshift").value;
        unshift(array, inputValue.trim());
        meuArrayEl.innerText = array;
        document.getElementById("inputUnshift").value = "";
    } else {
        alert("O array está vazio!");
        document.getElementById("inputUnshift").value = "";
    }
}

// SLICE

function slice(array, indexStart, indexEnd = -1) {
    const newArray = [];

    indexEnd = indexEnd < 0 ? array.length : indexEnd;

    for (let i = indexStart; i <= indexEnd; i++) {
        newArray[newArray.length] = array[i];
    }

    return newArray;
}

function execSlice() {
    let startValue = parseInt(document.getElementById("initSlice").value);
    let endValue = parseInt(document.getElementById("endSlice").value);

    let subarray = slice(array, startValue, endValue);
    document.getElementById("subarrayDisplay").innerText = subarray;
}

// SPLICE

function splice(array, indexStart, deleteCount, ...items) {

    const newArray = [];
    const arrayToDelete = [];

    for (let i = indexStart; i < array.length; i++) {
        if (i >= indexStart && i < indexStart + deleteCount) {
            arrayToDelete.push(array[i]);
        } else {
            newArray.push(array[i]);
        }
    }

    for (let i = 0; i < newArray.length; i++) {
        array[i] = newArray[i];
    }

    array.length = newArray.length;

    for (let i = array.length - 1; i >= indexStart; i--) {
        array[i + 1 + items.length] = array[i];
    }

    for (let i = 0; i < items.length; i++) {
        array[indexStart + i] = items[i];
    }

    return arrayToDelete;
}

function execSplice() {
    if (meuArrayEl.innerText) {

        let inicioSplice = parseInt(document.getElementById("initSplice").value);
        let quantidadeSplice = parseInt(document.getElementById("qntSplice").value);
        let novosItens = document.getElementById("newSplice").value.split(",");
        
        let newArray = splice(array, inicioSplice, quantidadeSplice, ...novosItens);
        document.getElementById("subarrayDisplay2").innerText = newArray;
    
    } else {

        alert("O array está vazio!");
        document.getElementById("inputUnshift").value = "";
    }
}

// FOREACH

function forEach(array, callback, value) {
    for (let i = 0; i < array.length; i++) {
        
        if (value !== undefined) {
            callback(array[i], i, array, value);
        } else {
            callback(array[i], i, array);
        }
    }
}

function addValueToElement(element, index, array, value) {
    
    if (value !== undefined) {
        array[index] = element + value;
    } else {
        array[index] = element;
    }
}

function forEachArray() {

    let novoElementoEl = document.getElementById("novoElemento");
    let inputUnshiftEl = document.getElementById("inputUnshift");

    if (meuArrayEl.innerText) {

        let value = novoElementoEl.value;
        forEach(array, addValueToElement, value);
        
        document.getElementById("arrayForEach").innerText = array;
        novoElementoEl.value = "";

    } else {

        alert("O array está vazio!");
        inputUnshiftEl.value = "";
    }
}

// MAP

function map(array, callback) {
    const newArray = [];
    for (let i = 0; i < array.length; i++) {
        newArray[i] = callback(array[i], i, array);
    }
    return newArray;
}

function addValueToElement(element, value) {
    return element + value;
}

function execMap() {
    
    let mapInputEl = document.getElementById("mapInput");
    let inputUnshiftEl = document.getElementById("inputUnshift");

    if (meuArrayEl.innerText) {
        
        let value = mapInputEl.value;
        let newArray = map(array, (element) => addValueToElement(element, parseInt(value)));
        
        document.getElementById("arrayMap").innerText = newArray;
        mapInputEl.value = "";

    } else {
        alert("O array está vazio!");
        inputUnshiftEl.value = "";
    }
}

// FILTER

function filter(array, callback) {
    const newArray = [];
    for (let i = 0; i < array.length; i++) {
        if (callback(array[i], i, array)) {
            newArray.push(array[i]);
        }
    }
    return newArray;
}

function filterElement(element, value) {
    return element > parseInt(value);
}

function execFilter() {
    
    let filterInputEl = document.getElementById("filterInput");
    let inputUnshiftEl = document.getElementById("inputUnshift");

    if (meuArrayEl.innerText) {
        
        let value = filterInputEl.value;
        let filteredArray = filter(array, (element) => filterElement(element, value));
        
        document.getElementById("arrayFilter").innerText = filteredArray;

    } else {
        alert("O array está vazio!");
        inputUnshiftEl.value = "";
    }
}

// REDUCE

function reduce(array, callback, initialValue) {
    let accumulator = initialValue;
    for (let i = 0; i < array.length; i++) {
        accumulator = callback(accumulator, array[i]);
    }
    return accumulator;
}

function sumValues(accumulator, currentValue) {
    return accumulator + currentValue;
}

function execReduce() {

    let reduceInputEl = document.getElementById("reduceInput");
    let inputUnshiftEl = document.getElementById("inputUnshift");

    if (meuArrayEl.innerText) {

        let value = reduceInputEl.value;
        let initialValue = parseInt(value) || 0;
        let reducedValue = reduce(array.map(Number), sumValues, initialValue);
        document.getElementById("arrayReduce").innerText = reducedValue;

    } else {

        alert("O array está vazio!");
        inputUnshiftEl.value = "";
    }
}

