@echo off
:start
pause
echo Starting Build...
goto build

:build
gitbook build ./ ../docs

goto end

:end
pause
exit