/* TravelTrackerCompanion - Language Switcher Script */

function initLangSwitcher() {
  var selector = document.getElementById('langSelect');
  if (!selector) return;

  selector.addEventListener('change', function () {
    var targetLang = this.value;
    var currentPath = window.location.pathname;

    // Matches path pattern: /<lang>/<doc-id>/
    // Replaces <lang> segment with targetLang
    var pathSegments = currentPath.split('/').filter(Boolean);

    if (pathSegments.length >= 1) {
      // If first segment is a known 2-3 char language code
      var knownLocales = ['en','ar','de','es','fr','hi','id','it','ja','ko','pl','pt','ru','th','tr','ur','vi','zh'];
      if (knownLocales.indexOf(pathSegments[0]) !== -1) {
        pathSegments[0] = targetLang;
        window.location.href = '/' + pathSegments.join('/') + '/';
        return;
      }
    }

    // Fallback: redirect to root lang directory
    window.location.href = '/' + targetLang + '/';
  });
}

document.addEventListener('DOMContentLoaded', initLangSwitcher);
