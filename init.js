let aSplitedSearch = window.location.search.replace('?', '').split('&');
let oParams = {};

aSplitedSearch.forEach((sParam) => {
  let aSplitedParam = sParam.split('=');
  oParams[aSplitedParam[0]] = aSplitedParam[1] ?? true;
});


window.oParams = oParams;
loadContent(oParams['pg'] ?? 'main');


function loadContent(sPage) {
  $('#content').load(`pages/${sPage}.html?${Math.random()*10000}`, function( response, status, xhr ) {
    if ( status == "error" ) {
      $('#content').load(`pages/error-not-found.html`, function( response, status, xhr ) {
        if ( status == "error" ) {
          let sMsg = "Desculpe, houve um erro: ";
          $( "#content" ).html( sMsg + xhr.status + " " + sMsg.statusText );
        }
      });
    }
  });
}