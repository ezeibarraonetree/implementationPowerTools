function closeTab() {
  document.body.classList.add("EXT-004");
  const img =
    '<div id="EXT-004-IMG"><svg xmlns="http://www.w3.org/2000/svg" viewBox="-2 -2 25 25" width="20" height="20"><path d="M20.7 5.2a1.024 1.024 0 0 1 0 1.448l-2.626 2.628-3.35-3.35L17.35 3.3a1.024 1.024 0 0 1 1.448 0zm-4.166 5.614-3.35-3.35-8.509 8.511L3 21l5.025-1.675z"></path></svg></div>';
  document.querySelector("#conditionView").insertAdjacentHTML("afterend", img);
  const editButton = document.querySelector("#EXT-004-IMG");
  editButton.addEventListener("click", function () {
    console.log("holaaa");
    sessionStorage.setItem("EDIT", "true");
    //window.close();
  });
}

function conditionalExt004() {
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
    var test = document.querySelector(".EXT-004");
    //ref: elemento que solo existe en la pagina donde queremos que se ejecute
    var ref = document.querySelector(
      "form-designer > div > div.fd-header > div.fd-header-center"
    );

    if (correctUrl && ref && !test) {
      closeTab();
    }
  } catch (error) {
    clearInterval(testInterval);
    console.error("error /* EXT-004  **/", error);
  }
}
try {
  var testInterval = setInterval(function () {
    conditionalExt004();
  }, 300);
} catch (error) {
  clearInterval(testInterval);
  console.error("error /* EXT-004  **/", error);
}

// document.querySelectorAll("td.rgSorted")[14].innerText;

// document.querySelectorAll("td.rgSorted")[14].children[0].id;

// id = "ctl00_ContentBody_DG1_ctl00_ctl36_lnkFormDetail";

// value = "ctl_36";

// href =
//   "javascript:__doPostBack('ctl00$ContentBody$DG1$ctl00${value}$lnkChangeState','')";
