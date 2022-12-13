function saturdayFun(activity = 'roller-skate') {
    return `This Saturday, I want to ${activity}!`
}

saturdayFun()

function mondayWork(activity = 'go to the office') {
    return `This Monday, I will ${activity}.`
}

mondayWork('work from home.')

function wrapAdjective(flair = '*') {
    const innerFunction = function (adjective= 'special') {
        return `You are ${flair}${adjective}${flair}!`
    }
    return innerFunction
}

