function getDecimalPlaces(num) {
    const arr = num.split("")
    const index = num.split("").indexOf(".")
    if (index !== -1){
        const array = arr.splice(index+1)
        return array.length
    } else return 0

}

function clearFog(str) {
    if ([...str].includes("f"||"o"||"g")) {
        return str.replace(/f|o|g/ig, "")
    }
    return "It's a clear day!"
}
console.log(clearFog("sky"))
console.log(clearFog("fogfogfffoooofftreesggfoogfog"))

// console.log(getDecimalPlaces("43.20"))