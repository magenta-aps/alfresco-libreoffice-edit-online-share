ECHO OFF
SET S=%1
SET S=###%S%###
SET S=%S:"###=%
SET S=%S:###"=%
SET S=%S:###=%
SET S=%S:libreoffice:=%
Start "LibreOffice" "C:\Program Files (x86)\LibreOffice 5\program\soffice.exe" %S%