@echo off
:start
pause
echo Starting Build...
goto build

:build
gitbook build ./ ./docs
@cmd /k
goto end

:end
pause
exit