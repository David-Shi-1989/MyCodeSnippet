(function ($) {
  var compiled = {}
  $.fn.mdjs = function (mdText) {
    return this.html(Mdjs.md2html(mdText))
  }
})(jQuery)