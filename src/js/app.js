// JS Goes here - ES6 supported

import jQuery from 'jquery'
global.jQuery = jQuery

function _adjustTypeformSize() {
  let w = $(window).height(),
      m = $('.masthead').outerHeight(),
      iframe = $('.typeform-widget').css('height', `${w-m}px`)
}

$(document)
  .ready(function () { 
    console.log('hallo')
    _adjustTypeformSize()
    $(window).on('resize', _adjustTypeformSize)})
