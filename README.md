# angular-skitter

[![Build Status](https://travis-ci.org/kinotto/angular-skitter.svg?branch=master)](https://travis-ci.org/kinotto/angular-skitter) [![Coverage Status](https://coveralls.io/repos/github/kinotto/angular-skitter/badge.svg)](https://coveralls.io/github/kinotto/angular-skitter)


<img src="http://res.cloudinary.com/ddbdqb6js/image/upload/v1496330642/skitter_01.png" />

Angular skitter is a library build on top the great jQuery library <a href="https://skitter-slider.net/">skitter.js</a> . angular skitter is no more than a wrapper , expose all the functionality of skitter.js inside an angular component.

A simple directive along with a configuration object and you're ready to go 

## Bower Install

`bower install angular-skitter --save`

### Dependencies

`angular-skitter` depends on jQuery and jQuery.easing

## Usage

Use angular skitter is pretty straight forward.

just decorate your html with the directive passing an option object that represents
the configuration applied to the gallery.


  
```html
<ng-skitter items="photos" options="skitterOption"></ng-skitter>
```

Below is a valid options, only src is required for each slide, the others are optional

```javascript
$scope.photos = [
    {
        src: 'https://skitterp-4b51.kxcdn.com/images/mountains/3-sand-mountain-clouds.jpg',
        title: 'Title 1',
        description: 'Description 1',
        url: 'http://www.google.com'
    },
    {
        src: 'https://skitterp-4b51.kxcdn.com/images/mountains/4-landscape-with-tree-hills-and-lake.jpg',
        title: 'Title 2',
        description: 'Description 2',
        url: 'http://www.facebook.com'
    }
]
```


```javascript
$scope.skitterOption = {
    auto_play: false,
    theme: "clean",
    navigation: true,
    animation: "cubeShow",
    dots: true
}
```

The list of available configurations are here: [official skitter documentation](https://skitter-slider.net/options.html)

## Transclude
Angular skitter let the user decide how to customize the gallery, by defining a custom html to add a title, description and if necessary a custom css 

the content can be added inside the directive and will be transcluded at runtime. available in the scope of the content will be the {{item} the {{$index}}.


```html
<ng-skitter items="photos" options="skitterOption">
    <!-- this spot is free to be customized as you want-->
    <p><strong>{{item.title}}</strong></p> 
    <p>{{item.description}}</p>
    <p> {{$index}}
</ng-skitter>
```

## Service
if necessary is available a `SkitterService` that allow to set a default configuration valid for each instance of the `ng-skitter directive` inside the application.


```javascript
.controller('MyCtrl', function(SkitterService){
  SkitterService.setOptions({animation: "cubeShow"}); 
})
```

In this scenario:
```html
<ng-skitter items="photos" options="skitterOption"></ng-skitter>
```
skitterOption will extend the base options


## Available animations

**Skitter has 38 different animations:** ['cube', 'cubeRandom', 'block', 'cubeStop', 'cubeStopRandom', 'cubeHide', 'cubeSize', 'horizontal', 'showBars', 'showBarsRandom', 'tube', 'fade', 'fadeFour', 'paralell', 'blind', 'blindHeight', 'blindWidth', 'directionTop', 'directionBottom', 'directionRight', 'directionLeft', 'cubeSpread', 'glassCube', 'glassBlock', 'circles', 'circlesInside', 'circlesRotate', 'cubeShow', 'upBars', 'downBars', 'hideBars', 'swapBars', 'swapBarsBack', 'swapBlocks', 'cut']


## Credit

credit to @Thiago for <a href="https://github.com/thiagosf/skitter">skitter.js</a>
