
/**
 * DATA SET WITH LS
 * @param {*} key 
 * @param {*} data 
 */
function dataset(key, data) {
    let localData = JSON.stringify(data);
    localStorage.setItem(key, localData);
}

/**
 * DATA GET WITH LS
 * @param {*} key 
 * @returns 
 */
function dataget(key) {
    let localDataGet = localStorage.getItem(key)
    return JSON.parse(localDataGet)
}

