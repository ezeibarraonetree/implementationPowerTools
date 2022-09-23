function saveTemplateNameWhenEdit() {
  document.body.classList.add("EXT-005");
  var selectorFila = document.querySelector(
    "#ctl00_ContentBody_DG1_ctl00 > tbody"
  ).children;
  for (let index = 0; index < selectorFila.length; index++) {
    var templateName = document.querySelectorAll("td.rgSorted");
    var formDesign = selectorFila[index].children[3];
    if (formDesign.innerText == "Edit") {
      formDesign.addEventListener("click", () => {
        sessionStorage.setItem("TEMPLATE", templateName[index].innerText);
      });
    }
  }
}

function conditionalExt005() {
  try {
    /*
    Añadir los cambios necesarios para el test*/
    var url = document.location.href;
    //correctUrl: porcion de codigo de la url que se repite donde queremos ejecutar el test
    var correctUrl = url.indexOf("FormTemplateAdmin") > -1;
    //test: es un elemento que nosotrso agregamos al ejecutar la funcion
    var test = document.querySelector(".EXT-005");
    //ref: elemento que solo existe en la pagina donde queremos que se ejecute
    var ref =
      document.querySelector("#ctl00_layoutBody > div.divPageGrid > h1")
        .innerText === "Form Template Administration";

    if (correctUrl && ref && !test) {
      saveTemplateNameWhenEdit();
    }
  } catch (error) {
    clearInterval(testInterval);
    console.error("error /* EXT-005  **/", error);
  }
}
try {
  var testInterval = setInterval(function () {
    conditionalExt005();
  }, 300);
} catch (error) {
  clearInterval(testInterval);
  console.error("error /* EXT-005  **/", error);
}