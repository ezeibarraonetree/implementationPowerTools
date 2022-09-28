function addFormTemplateNameTitle() {
  document.body.classList.add("AddFormTemplateNameTitle");
  chrome.storage.local.get(["name"], (result) => {
    console.log("ssss", result.name);
    document.title += ` - Form Template Name: ${result.name}`;
  });
}

function conditionalAddFormTemplateNameTitle() {
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
    var test = document.querySelector(".AddFormTemplateNameTitle");
    //ref: elemento que solo existe en la pagina donde queremos que se ejecute
    var ref = document.querySelector(
      "form-designer > div > div.fd-header > div.fd-header-center"
    );

    if (correctUrl && ref && !test) {
      addFormTemplateNameTitle();
    }
  } catch (error) {
    clearInterval(testInterval);
    console.error("error /* addFormTemplateNameTitle  **/", error);
  }
}
try {
  var testInterval = setInterval(function () {
    conditionalAddFormTemplateNameTitle();
  }, 300);
} catch (error) {
  clearInterval(testInterval);
  console.error("error /* addFormTemplateNameTitle  **/", error);
}
