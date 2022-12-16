// Helpers

/** Change the focus to the passed selector
 *
 * @param ev The event to prevent the default action after the key is pressed.
 * @param fieldSelector the field selector string to get from document.querySelector()
 */
function focusOnField(ev, fieldSelector) {
  const selector = document.querySelector(fieldSelector);
  if (selector === null) return;
  selector.focus();

  ev.preventDefault();
}

function FormDesignerHotkeys() {
  document.body.classList.add("FormDesignerHotkeys");

  /** Create keyboard shortcuts for the Form Designer
   *
   *  @param e The keyboard input event
   *
   *  ## Shortcuts (Alphabetically sorted) list on README
   *
   */
  document.onkeydown = (e) => {
    const elementType = e.path[0].nodeName.toLowerCase();

    // Skip function if current element is a text input
    if (elementType === "input" || elementType === "textarea") return;

    switch (e.key.toLowerCase()) {
      case "i":
        // Open DropDown Item List
        const itemListButton = document.querySelector(
          "#propertyPanelTabStrip-1 > div.fdprop-body > ddl-property > div > div:nth-child(3) > div.fdprop-row > div.fd-col-120.fd-rtalign > button"
        );
        const itemListModal = document.querySelector(
          '[uib-modal-window="modal-window"]'
        );
        if (itemListButton !== null && itemListModal === null) {
          itemListButton.click();
        }
        break;

      case "n":
        // Focus in name field input
        focusOnField(e, '[data-fd-field="name"]');
        break;

      case "s":
        // Focus in Font size field input
        focusOnField(e, '[data-bind="intValue: fontSize"]');
        break;

      case "t":
        // Focus in text field input
        focusOnField(e, '[data-bind="value: text"]');
        break;

      case "delete":
        // Delete selected item from Item List if one is selected
        if (
          document.querySelector(
            "body > div.modal.modal-window-container.fade.ng-scope.ng-isolate-scope.in > div > div > drop-down-list-items > div > div > div:nth-child(2) > div.fdpopup-col-80pct.fd-popup-pad-rt-8 > div > div.fd-formfieldlist-item.ng-scope.k-state-selected"
          ) !== null
        ) {
          isItemListOpen = true;
          document
            .querySelector(
              "body > div.modal.modal-window-container.fade.ng-scope.ng-isolate-scope.in > div > div > drop-down-list-items > div > div > div:nth-child(2) > div.fdpopup-col-20pct.ddoptions-layout-rows > button:nth-child(2)"
            )
            .click();
        }
        break;
      default:
        console.log(`Detected key "${e.key}" not handled in function`);
    }
  };
}

function conditionalFormDesignerHotkeys() {
  try {
    /*
      Añadir los cambios necesarios para el test*/
    var url = document.location.href;
    var regex = new RegExp(
      /https:\/\/(.*)\.visualvault\.com\/FormDesigner\/index\.html#!\/formdesigner\?xcid/
    );
    var correctUrl = regex.test(url);
    //test: es un elemento que nosotrso agregamos al ejecutar la funcion
    var test = document.querySelector(".FormDesignerHotkeys");
    //ref: elemento que solo existe en la pagina donde queremos que se ejecute
    var ref = document.querySelector(
      "form-designer > div > div.fd-header > div.fd-header-center"
    );

    getStorageValue("FormDesignerHotkeys", (result) => {
      if (correctUrl && ref && !test && result) {
        FormDesignerHotkeys();
      }
    });
  } catch (error) {
    clearInterval(testInterval);
    console.error("error /* FormDesignerHotkeys  **/", error);
  }
}
try {
  var testInterval = setInterval(function () {
    conditionalFormDesignerHotkeys();
  }, 300);
} catch (error) {
  clearInterval(testInterval);
  console.error("error /* FormDesignerHotkeys  **/", error);
}
