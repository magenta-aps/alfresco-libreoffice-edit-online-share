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

    var tmpHostname = window.location.href;
    var regExp = /[\/\/\da-z\.-]+\.[a-z\.]{2,6}/;
    var hostname = regExp.exec(tmpHostname);

    // Build the path from the WebDAV path: It already has any items with spaces or other characters url encoded
    var path = node.webdavUrl.replace("/webdav", hostname + "@SSL\/DavWWWRoot\/alfresco\/aos");
    if (YAHOO.env.ua.ie > 0) {
      // IE needs to double encode it.
      path = path.split("/").map(encodeURIComponent).join("/");
    }
    window.location.href = "libreoffice:" + path;
  }
});