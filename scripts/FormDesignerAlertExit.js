function alertBeforeClosing() {
  document.body.classList.add("FormDesignerAlertExit");
  window.addEventListener("beforeunload", function (e) {
    e.preventDefault();
    e.returnValue = "";
  });
}

function conditionalExt001() {
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
    var test = document.querySelector(".FormDesignerAlertExit");
    //ref: elemento que solo existe en la pagina donde queremos que se ejecute
    var ref = document.querySelector(
      "form-designer > div > div.fd-header > div.fd-header-center"
    );

    chrome.storage.local.get(["FormDesignerAlertExit"], (result) => {
      if (correctUrl && ref && !test && result.FormDesignerAlertExit) {
        alertBeforeClosing();
      }
    });
  } catch (error) {
    clearInterval(testInterval);
    console.error("error /* FormDesignerAlertExit  **/", error);
  }
}
try {
  var testInterval = setInterval(function () {
    conditionalExt001();
  }, 300);
} catch (error) {
  clearInterval(testInterval);
  console.error("error /* FormDesignerAlertExit  **/", error);
}
