YAHOO.Bubbling.fire("registerAction", {
  actionName : "onActionEditOnlineLibreOffice",
  fn : function (node) {
    var encode = function (str) {
      if (YAHOO.env.ua.ie > 0) {
        // Double encode for Internet Explorer
        return encodeURIComponent(encodeURIComponent(str));
      } else {
        // Other browsers: single encode
        return encodeURIComponent(str);
      }
    };

    var user = Alfresco.constants.USERNAME;
    var repositoryId = "-default-"; // TODO: Fetch somehow?
    var CMIS_ENDPOINT = "/alfresco/api/" + repositoryId + "/public/cmis/versions/1.1/atom";

    // Build the path from the WebDAV path: It already has any items with spaces or other characters url encoded
    var path = node.webdavUrl.replace("/webdav", "");
    if (YAHOO.env.ua.ie > 0) {
      // IE needs to double encode it.
      path = path.split("/").map(encodeURIComponent).join("/");
    }
    var url = "vnd.libreoffice.cmis://" + encode(user) + "@" + location.protocol;
    url += encode("//") + encode(location.host);
    url += encode(CMIS_ENDPOINT) + encode("#") + repositoryId + path;
    console.log(url);
    window.location.href = url;
  }
});