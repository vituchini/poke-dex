import React from "react";

export const updateObjectInArray = (items, itemId, objIdName, newObjProps) => {
    return items.map(u => {
        if (u[objIdName] === itemId) {
            return {...u, ...newObjProps}
        }
        return u
    })
}
export const objectToJsx = (obj) => {
    if (obj) return Object.keys(obj).map((x, y) => {
        if (typeof obj[x] === "string") {
            return (
                <div key={y}>{x} : {obj[x]} </div>
            )
        } else if (typeof obj[x] === "object") {
            return (
                <div key={y}>{objectToJsx(obj[x])}</div>
            )
        }
        return ''
    })
}

export const isEmptyObject = (obj) => {
    for (let i in obj) {
        if (obj.hasOwnProperty(i)) {
            return false;
        }
    }
    return true;
}
export const toZeroedNumber = (number, countOfDigits) => {
    let num = number.toString()
    if (num.length === countOfDigits) {
        return num
    } else if (num.length < countOfDigits) {
        return '0'.repeat(countOfDigits - num.length) + num
    } else {
        return '0'.repeat(countOfDigits)
    }

}
export const UcFirst = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1)
}