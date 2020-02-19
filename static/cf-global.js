const ebcfSiteUrl = 'empoweredby.communityfunded.com';

function cfLoadResource(e, t, c) {
    'use strict';
  
    var r = document.createElement(e);
    switch (e) {
      case 'link':
        r.setAttribute('rel', 'stylesheet');
        r.setAttribute('type', 'text/css');
        r.setAttribute('href', t);
        document.getElementsByTagName('head')[0].appendChild(r);
        break;
  
      case 'script':
        r.setAttribute('src', t);
        r.setAttribute('id', c);
        r.setAttribute('type', 'text/javascript');
        document.getElementsByTagName('body')[0].appendChild(r);
        break;
    }
}
  
function ebcfAppendLoaderJs(){
    cfLoadResource('script', 'https://' + ebcfSiteUrl + '/js/cfLoad.js?t=' + Math.floor(Math.random() * 10000000000001), 'cfLoader');
}