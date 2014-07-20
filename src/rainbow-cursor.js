/*
 * Rainbow Cursor
 *
 *
 * Copyright (c) 2014 Takao Naito
 * Licensed under the MIT license.
 */

(function ($) {
  var rainbowTemplate = null;

  var generateRainbowTemplate = function () {
    var globalWrapper = $('<div />');

    var rainbowWrapper = $('<div />').addClass('rainbow-wrapper');
    for (var i = 0; i < 180; i++) {
      var rainbowDiv = $('<div />').addClass('rainbow-color');
      rainbowWrapper.append(rainbowDiv);
    }
    globalWrapper.append(rainbowWrapper);

    var rainbowDarkWrapper = $('<div />').addClass('rainbow-dark-wrapper');
    for (var i = 0; i < 5; i++) {
      var rainbowDarkDiv = $('<div />').addClass('rainbow-dark');
      rainbowDarkWrapper.append(rainbowDarkDiv);
    }
    globalWrapper.append(rainbowDarkWrapper);
    var highLightDiv = $('<div />').addClass('rainbow-high-light');
    globalWrapper.append(highLightDiv);
    var embossDiv = $('<div />').addClass('rainbow-emboss');
    globalWrapper.append(embossDiv);

    return globalWrapper;
  }

  var getRainbowTemplate = function () {
    if (rainbowTemplate == null) {
      rainbowTemplate = generateRainbowTemplate();
    }
    return rainbowTemplate;
  }

  $.fn.rainbow = function () {
    console.log(this.length);
    return this.each(function () {
      var $template = getRainbowTemplate();
      var attrs = $(this).prop("attributes");
      $(this).replaceWith($template);
      $.each(attrs, function() {
        $template.attr(this.name, this.value);
      });
    });
  };

}(jQuery));
