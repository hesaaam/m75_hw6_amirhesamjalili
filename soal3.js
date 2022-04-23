var matrixReshape = function (mat) {
    const matR = mat.length;
    const matC = mat[0].length;
    

    if (matR === matC) return mat;
    else if (matR > matC) {
        for (const item of mat) {
            for (let i = 0; i < matR-matC; i++) {
                item.push(0)
                
            }
        }

    } else {
        for (let i = 0; i < matC-matR; i++) {
            let x = []
            for(let j=0;j<matC;j++){
                x.push(0)
            }
            mat.push(x)
            // mat.push(Array(matC).fill(0))
            
        }
    }

    return mat

};


console.log(matrixReshape([[1,6]
                          ,[3,3],
                          [7,6]]
                          ))
// console.log(matrixReshape([[1,6,6,8]
//                           ,[3,3,5,6]]
//                           ))



