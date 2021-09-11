(function ($, Drupal) {

  var methods = {
    init: function() {
      this.data("cardjs", new CardJs(this));
      return this;
    },
    cardNumber: function() {
      return this.data("cardjs").getCardNumber();
    },
    cardType: function() {
      return this.data("cardjs").getCardType();
    },
    name: function() {
      return this.data("cardjs").getName();
    },
    expiryMonth: function() {
      return this.data("cardjs").getExpiryMonth();
    },
    expiryYear: function() {
      return this.data("cardjs").getExpiryYear();
    },
    cvc: function() {
      return this.data("cardjs").getCvc();
    }
  };


  /**
   * jQuery function.
   *
   * @param methodOrOptions
   * @returns {*}
   */
  $.fn.CardJs = function(methodOrOptions) {
    if(methods[methodOrOptions]) {
      return methods[methodOrOptions].apply(this, Array.prototype.slice.call(arguments, 1));
    } else if(typeof methodOrOptions === "object" || !methodOrOptions) {
      return methods.init.apply( this, arguments );
    } else {
      $.error("Method " +  methodOrOptions + " does not exist on jQuery.CardJs");
    }
  };


  Drupal.behaviors.cardJs = {
    attach: function (context, settings) {
      $(".card-js").each(function (i, obj) {
        $(obj).CardJs();
      });
    }
  };


})(jQuery, Drupal);


//
// Initialise for all elements with card-js class.
//
//jQuery(function () {
//  jQuery(".card-js").each(function (i, obj) {
//    jQuery(obj).CardJs();
//  });
//});
