export const longestPalendrome = (string: string): number => {
    
    const letterObj: {[key: string]: number} = {};
    for (let i = 0; i < string.length; i++) {
        const letter = string[i];
        if (letterObj[letter]) {
            letterObj[letter] = letterObj[letter] + 1;
        } else {
            letterObj[letter] = 1;
        }
        
    }
    console.log(letterObj)

    //each letter pair can be part of a palendrome
    // if one solo letter, than it can be part of a palendrom
    // if two solo letter, then can't be palandrom
    // if 3 solo letter, then can't be plandrom
    // if 4 solo cant
    let result: number = 0;
    let numSolos: number = 0;
    for (const letter in letterObj) {
        console.log(letterObj[letter])
        if (letterObj[letter] % 2 === 1) {
            if (numSolos > 1) {
                numSolos = numSolos;
                result = result;
            } else {
                numSolos++
                result = result + 1
            }
        }
        if (letterObj[letter]%2 === 0) {
            result = result + letterObj[letter]
        }
    }
    
    return result


}