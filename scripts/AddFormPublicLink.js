const PublicFormURL = {
  // The link href property value
  href: "",
  // Regular Expression pattern to search the public form address URL content
  urlRegex: new RegExp(/(.*) (.*)\n(.*)/),
  /** Inserts a new link next to the original email link
   * @param url string The public form address URL
   * @returns HTMLAnchorElement The node element
   */
  createLink: function (url) {
    const link = document.createElement("a");
    link.innerText = "🌐";
    link.setAttribute("target", "_blank");
    link.setAttribute("alt", "Open Form Public Address");
    link.setAttribute("href", url);
    return link;
  },
  /** Get the URL string
   *
   * @returns string The public form address URL
   */
  getURL: function () {
    const uriContent = decodeURIComponent(this.href);
    const regex = this.urlRegex;
    const matches = regex.exec(uriContent);
    return matches[2];
  },
  /** Returns whether the public form address is present
   *
   * @returns boolean
   */
  hasPublicFormURL: function () {
    return this.urlRegex.test(this.href);
  },
};
function publicLink() {
  document.body.classList.add("AddFormPublicLink");

  // Si la URL activa es el Form Template Admin
  document.querySelectorAll('a[id*="hlnkEmail"]').forEach((link) => {
    const pfu = PublicFormURL;
    pfu.href = link;
    if (pfu.hasPublicFormURL()) return;
    const url = pfu.getURL();
    const newLink = pfu.createLink(url);
    link.insertAdjacentElement("afterend", newLink);
  });
}

function conditionalExt002() {
  try {
    /*
    Añadir los cambios necesarios para el test*/
    const correctUrl = new RegExp(/^https:\/\/(.*)\/FormDataAdmin$/);
    //test: es un elemento que nosotrso agregamos al ejecutar la funcion
    var test = document.querySelector(".AddFormPublicLink");
    if (correctUrl.test(document.URL) && !test) {
      publicLink();
    }
  } catch (error) {
    clearInterval(testInterval);
    console.error("error /* AddFormPublicLink  **/", error);
  }
}
try {
  var testInterval = setInterval(function () {
    conditionalExt002();
  }, 300);
} catch (error) {
  clearInterval(testInterval);
  console.error("error /* AddFormPublicLink  **/", error);
}
