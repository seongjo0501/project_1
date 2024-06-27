@ECHO off
CLS

json-server --watch .\db.json --port 3001 --static .\public

pause