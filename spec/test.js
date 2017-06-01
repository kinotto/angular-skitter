(function(){
  describe('test service', function(){
    var skitterService;
    beforeEach(module('skitter'));
    beforeEach(function(){
      inject(function(_SkitterService_){
        skitterService = _SkitterService_;
      })
    })

    it('should have empty options at the beginning', function(){
      expect({}).toEqual(skitterService.getOptions());
      //expect(2).toEqual(2);
    })


  })

  describe('test directive', function(){
    beforeEach(module('skitter'));
    var $compile, $rootScope, $timeout;

    beforeEach(function(){
      inject(function(_$compile_, _$rootScope_, _$timeout_){
        $compile = _$compile_;
        $rootScope = _$rootScope_;
        $timeout = _$timeout_;
      })
    })

    it('should replace element with the appropriate content', function(){

      $rootScope.items = [
        {
            src: 'https://skitterp-4b51.kxcdn.com/images/mountains/3-sand-mountain-clouds.jpg'
        },
        {
            src: 'https://skitterp-4b51.kxcdn.com/images/mountains/4-landscape-with-tree-hills-and-lake.jpg'
        }
      ]
      var element = $compile('<ng-skitter items="items"></ng-skitter>')($rootScope);

      $rootScope.$digest();


      $timeout(function(){
        console.log('element: ' + element.html());
        expect(element.html()).toContain('<div class="label_text">');
      }, 200)

      $timeout.flush();
    })

  })


})()
