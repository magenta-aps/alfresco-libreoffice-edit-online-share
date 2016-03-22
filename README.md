Alfresco Share module to add "Edit in LibreOffice" button
=========================================================

This module adds an "Edit in LibreOffice" button to documents in Alfresco Share to allow users to edit Alfresco documents in LibreOffice.

The button depends on the "vnd.libreoffice.cmis://" protocol being handled by the browser/OS to launch LibreOffice.
This means that some configuration of the OS is necessary for this to work.

On Windows, this works in Internet Explorer and Firefox when the following registry file is installed (for LibreOffice 5):
`libreoffice5.reg`.

Note that if LibreOffice 4 is used or LibreOffice is installed to a different location, simply change the path in the .reg file.

Configuration has not been provided/tested for Mac OS X/Linux, but it should be possible to get it to work there.

TODO:
 * It currently adds the button for all mime-types.
 * The action title is not translatable.
 * Detect whether browser supports protocol (using https://github.com/ismailhabib/custom-protocol-detection ?)

Installation
------------

Build an AMP file using `mvn package` and copy it from the `target` directory to your Alfresco installation's `amps_share` directory and run `/opt/alfresco/bin/apply_amps.sh`.
