import { Chicken } from "./chicken"

console.log('hello')

const chicken = new Chicken()
chicken.cluck()

const longestPalendrom = (string: string) => {
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

}

longestPalendrom("wowee")