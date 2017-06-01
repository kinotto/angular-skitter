# angular-skitter

[![Build Status](https://travis-ci.org/kinotto/angular-skitter.svg?branch=master)](https://travis-ci.org/kinotto/angular-skitter) [![Coverage Status](https://coveralls.io/repos/github/kinotto/angular-skitter/badge.svg)](https://coveralls.io/github/kinotto/angular-skitter)


<img src="http://res.cloudinary.com/ddbdqb6js/image/upload/v1496330642/skitter_01.png" />

Angular skitter is a library build on top the great jQuery library <a href="https://skitter-slider.net/">skitter.js</a> . angular skitter is no more than a wrapper , expose all the functionality of skitter.js inside an angular component.

A simple directive along with a configuration object and you're ready to go 

## Bower Install

`bower install angular-skitter --save`

## Dependencies

`angular-skitter` depends on: jQuery, jQuery.easing .

## Usage

Use angular skitter is easy as it seems

just decorate your html with the directive passing an option object that represents
the configuration applied to the gallery and you're ready to go.


  
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


The list of available configurations are here: [documentazione ufficiale di skitter](https://skitter-slider.net/options.html)

```javascript
$scope.skitterOption = {
    auto_play: false,
    theme: "clean",
    navigation: true,
    animation: "cubeShow",
    dots: true
}
```

## Transclude
Puoi personalizzare l'html contenuto nel `label_skitter` per customizzare titolo e descrizione di ogni immagine. basta inserire l'html all'interno del tag `<ng-skitter`. Ti proponiamo noi un esempio completo:

```html
<pre ng-non-bindable=""><ng-skitter items="photos" options="skitterOption">
    <p><strong>{{item.title}}</strong></p>
    <p>{{item.description}}</p>
</ng-skitter>
```

## Available animations

**Skitter has 38 different animations:** ['cube', 'cubeRandom', 'block', 'cubeStop', 'cubeStopRandom', 'cubeHide', 'cubeSize', 'horizontal', 'showBars', 'showBarsRandom', 'tube', 'fade', 'fadeFour', 'paralell', 'blind', 'blindHeight', 'blindWidth', 'directionTop', 'directionBottom', 'directionRight', 'directionLeft', 'cubeSpread', 'glassCube', 'glassBlock', 'circles', 'circlesInside', 'circlesRotate', 'cubeShow', 'upBars', 'downBars', 'hideBars', 'swapBars', 'swapBarsBack', 'swapBlocks', 'cut']
