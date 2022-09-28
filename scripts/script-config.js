initStorage({
  FormDesignerAlertExit: true,
  AddFormPublicLink: true,
  ChangeDropDownTo500: true,
  ExpandGroupAndConditions: true,
  AddFormTemplateNameTitle: true,
});

document.querySelectorAll("input.enable-script").forEach((checkbox) => {
  chrome.storage.local.get([checkbox.id], (result) => {
    checkbox.checked = result[checkbox.id];
  });

  checkbox.onchange = () => {
    chrome.storage.local.set({ [checkbox.id]: checkbox.checked });
  };
});

/** Helper para inicializar las variables del local storage
 *
 * @param {{}} initState Es un objeto que contiene todos los valores
 */
function initStorage(initState) {
  const keys = Object.keys(initState);

  chrome.storage.local.get(keys, (result) => {
    keys.forEach((key) => {
      const value = initState[key];

      if (result[key] == null) {
        chrome.storage.local.set({ [key]: value });
      }
    });
  });
}
