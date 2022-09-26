if (sessionStorage.getItem("FormDesignerAlertExit") == null) {
  sessionStorage.setItem("FormDesignerAlertExit", "true");
}

if (sessionStorage.getItem("AddFormPublicLink") == null) {
  sessionStorage.setItem("AddFormPublicLink", "true");
}

if (sessionStorage.getItem("ChangeDropDownTo500") == null) {
  sessionStorage.setItem("ChangeDropDownTo500", "true");
}

document.querySelectorAll("input.enable-script").forEach((checkbox) => {
  checkbox.checked = sessionStorage.getItem(checkbox.id) === "true";

  checkbox.onchange = (ev) => {
    sessionStorage.setItem(checkbox.id, checkbox.checked.toString());
    console.log(checkbox.id, checkbox.checked.toString());
  };
});
