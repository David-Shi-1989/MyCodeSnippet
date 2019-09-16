(function ($) {
  var compiled = {}
  $.fn.mdjs = function () {
    return (Mdjs.md2html(this.text()))
  }
})(jQuery)