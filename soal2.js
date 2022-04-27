function calculateAverage(array) {
    let total = 0;
    let count = 0;
    let avg;
    // for (let i = 0; i < array.length; i++) {
    //     total = total += array[i]
    //     count = count += array[i] * (i + 1)
    //     avg = count / total
    // }

    // for (let i in array){
    //     total = total += array[i]
    //     count = count += array[i] * (i + 1)
    //     avg = count / total
    // }

    array.forEach((element,i) => {
        total = total += element
        count = count += element * (i + 1)
        avg = count / total
    });



    return `"[${avg.toFixed(2)}] ${"*".repeat(Math.round(avg))}"`;

}

console.log(calculateAverage([16, 17, 23, 40, 45]))



