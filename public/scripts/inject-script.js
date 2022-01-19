const FOREGROUND_ENTRY_POINT = document.createElement('div');
let reactJS_script = document.createElement('script');

FOREGROUND_ENTRY_POINT.id = 'foreground';
FOREGROUND_ENTRY_POINT.appendChild(reactJS_script);

document.querySelector('body').appendChild(FOREGROUND_ENTRY_POINT);
