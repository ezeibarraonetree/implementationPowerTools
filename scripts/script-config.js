chrome.storage.local.get(
  ["FormDesignerAlertExit", "AddFormPublicLink", "ChangeDropDownTo500"],
  (result) => {
    if (result.FormDesignerAlertExit == null) {
      chrome.storage.local.set({ FormDesignerAlertExit: true });
    }

    if (result.AddFormPublicLink == null) {
      chrome.storage.local.set({ AddFormPublicLink: true });
    }

    if (result.ChangeDropDownTo500 == null) {
      chrome.storage.local.set({ ChangeDropDownTo500: true });
    }
  }
);

document.querySelectorAll("input.enable-script").forEach((checkbox) => {
  chrome.storage.local.get([checkbox.id], (result) => {
    checkbox.checked = result[checkbox.id];
  });

  checkbox.onchange = () => {
    chrome.storage.local.set({ [checkbox.id]: checkbox.checked });
  };
});
