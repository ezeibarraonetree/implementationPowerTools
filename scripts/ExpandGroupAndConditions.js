function expandGroupsAndConditions() {
  document.body.classList.add("ExpandGroupAndConditions");
  var listOfGroupAndConditions = document.querySelectorAll(
    "form-designer > div > div.fd-body > div.fd-main-panel > div.fd-grouppanel-top > div.fd-grouppanel-main > div.fd-grouppanel-left > div.fd-grouplist-holder > div > ul > li > div > span.k-icon.k-i-expand"
  );
  for (let index = 0; index < listOfGroupAndConditions.length; index++) {
    const element = listOfGroupAndConditions[index];
    element.click();
  }
}

function conditionalExpandGroupAndConditions() {
  try {
    /*
    Añadir los cambios necesarios para el test*/
    var url = document.location.href;
    //correctUrl: porcion de codigo de la url que se repite donde queremos ejecutar el test
    // var correctUrl =
    //   url.indexOf(
    //     "https://vv5demo.visualvault.com/FormDesigner/index.html#!/formdesigner?xcid"
    //   ) > -1;
    var regex = new RegExp(
      /https:\/\/(.*)\.visualvault\.com\/FormDesigner\/index\.html#!\/formdesigner\?xcid/
    );
    var correctUrl = regex.test(url);
    //test: es un elemento que nosotrso agregamos al ejecutar la funcion
    var test = document.querySelector(".ExpandGroupAndConditions");
    //ref: elemento que solo existe en la pagina donde queremos que se ejecute
    var ref = document.querySelector(
      "body > div.mainContainer-heightControl > div.outer-ui-view.ng-scope > main > div.main-body > div.main-content-container > div.main-ui-view.ng-scope > form-designer > div > div.fd-body > div.fd-main-panel > div.fd-grouppanel-top"
    );

    getStorageValue("ExpandGroupAndConditions", (result) => {
      if (correctUrl && ref && !test && result) {
        if (parseInt(ref.style.height.slice(0, 3)) > 0) {
          expandGroupsAndConditions();
        }
      }
    });
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
