// Krugozore AI — OpenRouter connect return page.
// OpenRouter only redirects to https addresses, the app only listens on
// krugozore://. This page is the hop between the two and nothing more:
// it forwards the query string it was given, unchanged, and keeps nothing.
// The one-time code in that query is useless without the PKCE verifier,
// which never leaves the phone.
(function () {
  var query = window.location.search || "";
  var target = "krugozore://openrouter/callback" + query;
  var back = document.getElementById("back");
  if (back) { back.setAttribute("href", target); }
  if (/[?&]code=/.test(query)) {
    window.location.replace(target);
  } else {
    var title = document.getElementById("title");
    var body = document.getElementById("body");
    if (title) { title.textContent = "Nothing to do here"; }
    if (body) { body.textContent = "This page is only used while connecting Krugozore AI to OpenRouter. Open the app and tap Connect with OpenRouter."; }
    if (back) { back.parentNode.removeChild(back); }
  }
})();
