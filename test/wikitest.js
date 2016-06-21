var expect = require('chai').expect;
var supertest = require('supertest');

var chai = require("chai");

var spies = require('chai-spies');
var models = require('../models')
var Page = models.Page
chai.use(spies);

chai.should();

api = supertest('http://localhost:3001')


describe('Page model', function () {
  var page, modelA, modelB
  beforeEach(function() {
    page = Page.build();

    // console.log(page.dataValues)
  })
    



  describe('Page has title properties', function(){
    it('returns title properties', function(){
      console.log('---------------')
      //page.title = "hello";
      //expect(page.title).to.equal('hello');
    })
  });


  describe('Virtuals', function () {
    describe('route', function () {
      it('returns the url_name prepended by "/wiki/"', function() {
        page.urlTitle = "my_web_page";
        page.content = "This is the content of my page.";
        expect(page.route).to.equal('/wiki/my_web_page');
      });
    });
    describe('renderedContent', function () {
      it('converts the markdown-formatted content into HTML', function() {
        api.get(page.route)
 //         .set('Accept', 'application/json')
         .expect(200)
   
      })
    });
      
        
      // expect(/<[a-z][\s\S]*>/i.test(res.render(page.content))).to.be.equal(true);
    
  });

  describe('Class methods', function () {
    describe('findByTag', function () {
      it('gets pages with the search tag');
      it('does not get pages without the search tag');
    });
  });

  describe('Instance methods', function () {
    describe('findSimilar', function () {
      it('never gets itself');
      it('gets other pages with any common tags');
      it('does not get other pages without any common tags');
    });
  });

  describe('Validations', function () {
    it('errors without title');
    it('errors without content');
    it('errors given an invalid status');
  });

  describe('Hooks', function () {
    it('it sets urlTitle based on title before validating');
  });

});