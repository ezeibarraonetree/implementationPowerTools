function expandGroupsAndConditions() {
  document.body.classList.add("ExpandGroupAndConditions");
  document
    .querySelector(
      "form-designer > div > div.fd-body > div.fd-main-panel > div.fd-grouppanel-top > div.fd-grouppanel-main > div.fd-grouppanel-left > div.fd-grouplist-holder > div > ul > li > div > span.k-icon.k-i-expand"
    )
    .click();
}

function conditionalExpandGroupAndConditions() {
  try {
    /*
    Añadir los cambios necesarios para el test*/
    var url = document.location.href;
    //correctUrl: porcion de codigo de la url que se repite donde queremos ejecutar el test
    var correctUrl =
      url.indexOf(
        "https://vv5demo.visualvault.com/FormDesigner/index.html#!/formdesigner?xcid"
      ) > -1;
    //test: es un elemento que nosotrso agregamos al ejecutar la funcion
    var test = document.querySelector(".ExpandGroupAndConditions");
    //ref: elemento que solo existe en la pagina donde queremos que se ejecute
    var ref = document.querySelector("div[data-role='treeview'");

    if (correctUrl && ref && !test) {
      expandGroupsAndConditions();
    }
  } catch (error) {
    clearInterval(testInterval);
    console.error("error /* ExpandGroupAndConditions  **/", error);
  }
}
try {
  var testInterval = setInterval(function () {
    conditionalExpandGroupAndConditions();
  }, 300);
} catch (error) {
  clearInterval(testInterval);
  console.error("error /* ExpandGroupAndConditions  **/", error);
}
