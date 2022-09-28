/** Obtiene el valor de una variable del local storage
 *
 * @param {string} varName Nombre de la variable
 * @param {function} callback Función cuyo parámetro es el valor de la variable
 */
function getStorageValue(varName, callback) {
  chrome.storage.local.get([varName], (result) => {
    callback(result[varName]);
  });
}
