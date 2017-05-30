(function () {
    'use strict';

    angular.module('skitter', [])
    .directive('ngSkitter', SkitterDirective);

    function SkitterDirective() {
        return {
            restrict: 'EA',
            replace: true,
            template: '<div class="skitter skitter-large" ><ul><li ng-repeat="item in items"> '
            +'<a href="#cut"><img src="{{item.url}}" class="cut" /></a><div class="label_text">'
            +'<p>{{item.text}}</p></div></li></ul></div>',
            scope: {
                items: '=',
                options: '='
            },
            link: function(scope, elem, attrs){

              angular.element(document).ready(function () {
                  elem.skitter(scope.options || {});
                  scope.$on("$destroy", function () {
                      elem.skitter("destroy");
                  });
              });
            }
        }
    }







})();
