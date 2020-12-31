export const urlShortening = (arg) => {
    if(arg)
    {
        const host = arg.replace(/^https?:\/\//, '').replace(/\/.*$/, '')
        const parts = host.split('.').slice(-3)
        if (parts[0] == "www") parts.shift()
        return parts.join('.')
    }
}

// problems (apply.workable.com)
// problems (workable.com)  

export const timeCalculations = (arg) => {
    const time = new Date().getTime()
    const timeInSeconds = (time / 1000) - arg
    if(timeInSeconds < 60) {
        if(Math.round(timeInSeconds) <= 1) {
            return Math.round(timeInSeconds) + " second"
        } else {
            return Math.round(timeInSeconds) + " seconds"
        }
    }
    else if (timeInSeconds < 3600) {
        if(Math.round(timeInSeconds / 60) <= 1) {
            return Math.round(timeInSeconds / 60) + " minute"
        } else {
            return Math.round(timeInSeconds / 60) + " minutes"
        }
    }
    else if (timeInSeconds < 86400) {
        if(Math.round(timeInSeconds / 3600) <= 1) {
            return Math.round(timeInSeconds / 3600) + " hour"
        } else {
            return Math.round(timeInSeconds / 3600) + " hours"
        }
    }
    else if (timeInSeconds > 86400) {
        if(Math.round(timeInSeconds / 86400) <= 1) {
            return Math.round(timeInSeconds / 86400) + " day"
        } else {
            return Math.round(timeInSeconds / 86400) + " days"
        }
    }
}
