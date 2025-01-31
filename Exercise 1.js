function findDuplicates(arr) {
    const counts = {};
    const duplicates = [];
    for (const element of arr) {
        if (counts[element]) {
            counts[element]++;
            if (counts[element] === 2) {
                duplicates.push(element);
            }
        } else {
            counts[element] = 1;
        }
    }
    return duplicates;
}