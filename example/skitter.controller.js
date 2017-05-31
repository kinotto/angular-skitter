(function(){
    "use strict";

    angular
        .module('skitter')
        .controller('skitterCtrl', skitterCtrl);

    skitterCtrl.$inject = ['$scope'];
    function skitterCtrl ($scope) {
        $scope.photos = [
            {
                src: 'https://skitterp-4b51.kxcdn.com/images/mountains/3-sand-mountain-clouds.jpg',
                title: 'Donec sollicitudin molestie',
                description: 'Vivamus suscipit tortor eget felis porttitor volutpat. Donec sollicitudin molestie malesuada.',
                url: 'http://www.google.com'
            },
            {
                src: 'https://skitterp-4b51.kxcdn.com/images/mountains/4-landscape-with-tree-hills-and-lake.jpg',
                title: 'Vivamus suscipit tortor',
                description: 'Vivamus suscipit tortor eget felis porttitor volutpat. Donec sollicitudin molestie malesuada.',
                url: 'http://www.facebook.com'
            },
            {
                src: 'https://skitterp-4b51.kxcdn.com/images/mountains/2-utah-mountain-sky-nature-golden-hour-sunset.jpg',
                title: 'Ttortor eget felis porttitor',
                description: 'Vivamus suscipit tortor eget felis porttitor volutpat. Donec sollicitudin molestie malesuada.',
                url: 'http://www.linkedin.com'
            }
        ];

        $scope.skitterOption = {
            auto_play: false,
            theme: "clean",
            navigation: true,
            animation: "cubeShow",
            dots: true
        }
    };
})();