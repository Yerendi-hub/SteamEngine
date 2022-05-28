const getLoweredAndTrimmedName = (string) => {
    return string
        .trim()
        .toLowerCase()
}

const getAsNumber = (string) => {
    if(Number(string))
    {
        return Number(string)
    }
    else
    {
        return undefined;
    }
}

module.exports = {
    getLoweredAndTrimmedName,
    getAsNumber,
}