ECHO OFF
SET S=%1
SET S=###%S%###
SET S=%S:"###=%
SET S=%S:###"=%
SET S=%S:###=%
SET S=%S:libreoffice:=%
start "LibreOffice" "C:\Program Files\LibreOffice 5\program\soffice.exe" Z:%S%
