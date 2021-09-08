function createBoxes(rows, cols) {
    // Function that creates box objects
    const items = rows * cols;
    const itemArray = [];
    for (let i = 0; i < items; i++) {
        itemArray.push({ id: i, text: i + 1, image: '', data: '' });
    };
    return itemArray;
}

function changeMatrix(rows, cols, boxes) {
    // Id of the last box in the collage / grid
    const lastId = boxes.length - 1;
    // Number of boxes in the collage / grid
    const numberOfItems = rows * cols;
    if (numberOfItems > boxes.length) {
        // If (rows * columns) > boxes array length
        // Add new box objects
        const newItems = [];
        for (let i = lastId + 1; i < numberOfItems; i++) {
            newItems.push({ id: i, text: i + 1, image: '', data: '' });
        };
        const modifiedData = [...boxes, ...newItems];
        return modifiedData;
    };
    if (numberOfItems < boxes.length) {
        // If (rows * columns) < boxes array length
        // Remove extra box objects
        return boxes.slice(0, numberOfItems);
    }
};

function shuffle(array) {
    // Function that is used to shuffle the collage
    const shuffledArr = [].concat(array)
    for (let i = shuffledArr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const x = shuffledArr[i];
        shuffledArr[i] = shuffledArr[j]
        shuffledArr[j] = x
    }
    return shuffledArr;
};


function replaceSpaces(string) {
    // Function that replaces spaces in search queries with "+"
    // Can't have space characters in API queries
    return string.split(' ').join('+')
}

function fillMissingData(array, numberOfItems) {
    // Function that is used to fill up empty boxes with duplicate data
    // It loops while there are still empty boxes
    while (array.length < numberOfItems && array.length > 0) {
        const difference = numberOfItems - array.length;
        // If the difference is higher than 20
        // Duplicate the whole array
        if (difference > 20) {
            array.push(...array);
            // Just add the difference if difference < 20
        } else {
            array.push(...array.slice(0, difference));
        };
    };
    console.log('end looping');
    return array;
};

export {createBoxes, changeMatrix, shuffle, replaceSpaces, fillMissingData};