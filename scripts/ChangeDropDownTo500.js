function dropdownTo500() {
  document.body.classList.add("ChangeDropDownTo500");
  //Muestra los 500 rows en vez de 15
  var theForm = document.forms["aspnetForm"];
  function __doPostBack2(eventTarget, eventArgument) {
    if (!theForm.onsubmit || theForm.onsubmit() != false) {
      theForm.__EVENTTARGET.value = eventTarget;
      theForm.__EVENTARGUMENT.value = eventArgument;
      theForm.submit();
    }
  }

  const mainEventTarget = "ctl00$ContentBody$DG1";
  const mainEventArgument = `FireCommand:${mainEventTarget}$ctl00;PageSize;500`;
  const dashboardEventTarget =
    "ctl00$ContentBody$ctrlPanelHolder$ctl0$RadGrid1";
  const dashboardEventArgument = `FireCommand:${dashboardEventTarget}$ctl00;PageSize;500`;

  if (document.querySelector("#ctl00_ContentBody_DG1") != null) {
    __doPostBack2(mainEventTarget, mainEventArgument);
  } else if (
    document.querySelector(
      "#ctl00_ContentBody_ctrlPanelHolder_ctl0_RadGrid1"
    ) != null
  ) {
    __doPostBack2(dashboardEventTarget, dashboardEventArgument);
  }
}

function conditionalDropdownTo500() {
  try {
    /*
    Añadir los cambios necesarios para el test*/
    var url = document.location.href;
    //correctUrl: porcion de codigo de la url que se repite donde queremos ejecutar el test
    //var correctUrl = url.indexOf("https://vv5demo.visualvault.com/app") > -1;
    var regex = new RegExp(/https:\/\/(.*).visualvault.com\/app/);
    var correctUrl = regex.test(url);
    //test: es un elemento que nosotrso agregamos al ejecutar la funcion
    var test = document.querySelector(".ChangeDropDownTo500");
    //ref: elemento que solo existe en la pagina donde queremos que se ejecute
    var ref =
      document.querySelector('input[id*="PageSizeComboBox_Input"]') != null &&
      document.querySelector('input[id*="PageSizeComboBox_Input"]').value !=
        "500";

    var home = url.indexOf("UserPortal") > -1;

    getStorageValue("ChangeDropDownTo500", (result) => {
      if (correctUrl && ref && !test && result) {
        dropdownTo500();
      }
    });
  } catch (error) {
    clearInterval(testInterval);
    console.error("error /* ChangeDropDownTo500  **/", error);
  }
}
try {
  var testInterval = setInterval(function () {
    conditionalDropdownTo500();
  }, 300);
} catch (error) {
  clearInterval(testInterval);
  console.error("error /* ChangeDropDownTo500  **/", error);
}
