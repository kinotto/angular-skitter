/**
 * Angular Skitter Slider
 * @name skitter.js
 * @description Slideshow
 * @author Karim Abdelcadir - Stefano Vollono
 * @version 1.0.0
 * @license MIT
 * @example https://kinotto.github.io/angular-skitter/examples/demo-01.html
 */
(function (angular, $) {
    'use strict';

    angular
    .module('skitter', [])
    .directive('ngSkitter', SkitterDirective)
    .service('SkitterService', SkitterService);

    SkitterDirective.$inject = ['SkitterService', '$compile', '$timeout'];
    SkitterService.$inject = [];

    function SkitterDirective(SkitterService, $compile, $timeout) {

        var template = '<div class="skitter">' +
                         '<ul>' +
                            '<li ng-repeat="item in items">' +
                                '<a href="{{item.url}}"><img src="{{item.src}}" /></a>' +
                                '<div class="label_text">' +
                                '</div>' +
                            '</li>' +
                        '</ul>' +
                    '</div>';
        var ddo = {
            restrict: 'E',
            scope: {
                items: '=',
                options: '='
            },
            compile: function(tElement, tAttributes, transclude){
              var transclude = tElement.html();
              var tpl = angular.element(template);
              tpl.find('.label_text').append(transclude);

              return function(scope, elem, attrs) {

                var sharedOptions = SkitterService.getOptions();
                var options = $.extend(sharedOptions, scope.options || {});
                var compiledContent = $compile(tpl)(scope);
                elem.replaceWith(compiledContent);

                $timeout(function () {
                  compiledContent.skitter(options);
                    scope.$on("$destroy", function () {
                        elem.skitter("destroy");
                    });
                });

               }

            }

        }

        return ddo;
    }

    /**
    * Service that let the user injects options that will be used as base options
    * from all the instances of ngSkitter directive
    */
    function SkitterService(){
      var sharedOptions = {};

      this.setOptions = function(opt){
          sharedOptions = opt || {};
      }

      this.getOptions = function(){
        return angular.copy(sharedOptions);
      }

    }

})(window.angular, window.$);
