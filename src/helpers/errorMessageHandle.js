export const displayErrorFor = (errorFunction, ms) => setTimeout(() => errorFunction(null), ms)

export const errorHandle = (errorCheck, propsGetError) => errorCheck && propsGetError(errorCheck) && displayErrorFor(propsGetError, 5000)
