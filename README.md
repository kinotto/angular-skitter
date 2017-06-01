# angular-skitter

## Bower Install

`bower install angular-skitter --save`

## Dependencies

`angular-skitter` depends on: jQuery, jQuery.easing .

## Usage

Use angular skitter is easy as it seems :=)

just decorate your html with the directive passing an option object that represents
the configuration applied to the gallery and you're ready to go.

 `<ng-skitter items="photos" options="skitterOption">`

Below is a valid options, only src is required for each slide, the others are optional

<pre>$scope.photos = [
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
    }
]
                </pre>


The list of available configurations are here: [documentazione ufficiale di skitter](https://skitter-slider.net/options.html)


<pre>$scope.skitterOption = {
    auto_play: false,
    theme: "clean",
    navigation: true,
    animation: "cubeShow",
    dots: true
}
                </pre>

Puoi personalizzare l'html contenuto nel `label_skitter` per customizzare titolo e descrizione di ogni immagine. basta inserire l'html all'interno del tag `<ng-skitter`. Ti proponiamo noi un esempio completo:

<pre ng-non-bindable=""><ng-skitter items="photos" options="skitterOption">
    <p><strong>{{item.title}}</strong></p>
    <p>{{item.description}}</p>
</ng-skitter>
                </pre>

## Available animations

**Skitter has 38 different animations:** ['cube', 'cubeRandom', 'block', 'cubeStop', 'cubeStopRandom', 'cubeHide', 'cubeSize', 'horizontal', 'showBars', 'showBarsRandom', 'tube', 'fade', 'fadeFour', 'paralell', 'blind', 'blindHeight', 'blindWidth', 'directionTop', 'directionBottom', 'directionRight', 'directionLeft', 'cubeSpread', 'glassCube', 'glassBlock', 'circles', 'circlesInside', 'circlesRotate', 'cubeShow', 'upBars', 'downBars', 'hideBars', 'swapBars', 'swapBarsBack', 'swapBlocks', 'cut']
