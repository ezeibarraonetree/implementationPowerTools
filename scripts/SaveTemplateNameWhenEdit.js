function saveTemplateNameWhenEditing() {
  document.body.classList.add("SaveTemplateNameWhenEdit");
  var selectorFila = document.querySelector(
    "#ctl00_ContentBody_DG1_ctl00 > tbody"
  ).children;
  for (let index = 0; index < selectorFila.length; index++) {
    var templateName = document.querySelectorAll("td.rgSorted");
    var formDesign = selectorFila[index].children[3];
    if (formDesign.innerText == "Edit") {
      // formDesign.addEventListener("click", () => {
      //   chrome.storage.local.set({ name: templateName[index].innerText });
      // });
      new useEvent(
        "When you click on the form design the template name is saved",
        formDesign,
        "click",
        () => {
          chrome.storage.local.set({ name: templateName[index].innerText });
        }
      ).inject();
    }
  }
}

function conditionalSaveTemplateNameWhenEditing() {
  try {
    /*
    Añadir los cambios necesarios para el test*/
    var url = document.location.href;
    //correctUrl: porcion de codigo de la url que se repite donde queremos ejecutar el test
    var correctUrl = url.indexOf("FormTemplateAdmin") > -1;
    //test: es un elemento que nosotrso agregamos al ejecutar la funcion
    var test = document.querySelector(".SaveTemplateNameWhenEdit");
    //ref: elemento que solo existe en la pagina donde queremos que se ejecute
    var ref = document.querySelector(
      "#ctl00_layoutBody > div.divPageGrid > h1"
    );
    if (correctUrl && ref && !test) {
      saveTemplateNameWhenEditing();
    }
  } catch (error) {
    clearInterval(testInterval);
    console.error("error /* saveTemplateNameWhenEditing  **/", error);
  }
}
try {
  var testInterval = setInterval(function () {
    conditionalSaveTemplateNameWhenEditing();
  }, 300);
} catch (error) {
  clearInterval(testInterval);
  console.error("error /* saveTemplateNameWhenEditing  **/", error);
}
