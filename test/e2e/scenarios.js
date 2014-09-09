'use strict';

/* http://docs.angularjs.org/guide/dev_guide.e2e-testing */

describe('PhoneCat App', function() {

    describe('Phone list view', function() {

      beforeEach(function() {
        browser.get('app/index.html');
      });

      var phoneList = element.all(by.repeater('phone in phones'));
      var query = element(by.model('query'));

      it('should filter the phone list as user types into the search box', function() {
        expect(phoneList.count()).toBe(3);

        query.sendKeys('nexus');
        expect(phoneList.count()).toBe(1);

        query.clear();
        query.sendKeys('motorola');
        expect(phoneList.count()).toBe(2);
      });

      it('should display the current filter value in the title bar', function() {
        query.clear();
        expect(browser.getTitle()).toMatch(/Google Phone Gallery:\s*$/);

        query.sendKeys('nexus');
        expect(browser.getTitle()).toMatch(/Google Phone Gallery: nexus$/);
      });
      
      it('should be possible to control phone order via the drop down select box', function() {

      var phoneNameColumn = element.all(by.repeater('phone in phones').column('{{phone.name}}'));
      var query = element(by.model('query'));

      function getNames() {
        return phoneNameColumn.map(function(elm) {
          return elm.getText();
        });
      }

      query.sendKeys('tablet'); //let's narrow the dataset to make the test assertions shorter

      expect(getNames()).toEqual([
        "Motorola XOOM\u2122 with Wi-Fi",
        "MOTOROLA XOOM\u2122"
      ]);

      element(by.model('orderProp')).element(by.css('option[value="name"]')).click();

      expect(getNames()).toEqual([
        "MOTOROLA XOOM\u2122",
        "Motorola XOOM\u2122 with Wi-Fi"
      ]);
    });
    
     it('should set the default value of orderProp model', function() {
      expect(scope.orderProp).toBe('age');
    });
    
    it('should create "phones" model with 2 phones fetched from xhr', function() {
      expect(scope.phones).toBeUndefined();
      $httpBackend.flush();

      expect(scope.phones).toEqual([{name: 'Nexus S'},
                                   {name: 'Motorola DROID'}]);
    });

	it('should render phone specific links', function() {
      var query = element(by.model('query'));
      query.sendKeys('nexus');
      element(by.css('.phones li a')).click();
      browser.getLocationAbsUrl().then(function(url) {
        expect(url.split('#')[1]).toBe('/phones/nexus-s');
      });
    });
    });
  });