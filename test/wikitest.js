var expect = require('chai').expect;
var supertest = require('supertest');
var Sequelize = require('sequelize');
var chai = require("chai");
var Express = require('express');
var Swig = require('swig');
var spies = require('chai-spies');
var models = require('../models')
var Page = models.Page
chai.use(spies);

chai.should();

api = supertest('http://localhost:3001')


describe('Page model', function () {
  var page, modelA, modelB, db;
  beforeEach(function() {
    db = new Sequelize('postgres://localhost:5432/wikistack')
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
        page.content = "This is the content of my page.";
        expect(res.render(page.content)).to.equal('<div class="page-body">This is the content of my page.</div>')
   
      })
    });
      
        
      // expect(/<[a-z][\s\S]*>/i.test(res.render(page.content))).to.be.equal(true);
    
  });

  describe('Class methods', function () {
    beforeEach(function (done) {
      Page.create({
        title: 'foo',
        content: 'bar',
        tags: ['foo', 'bar']
      })
      .then(function (pages) {
        done();
      })
      .catch(done);
    });
    afterEach(function() {
      Page.sync({force: true});
    })
    describe('findByTag', function () {
      it('gets pages with the search tag', function() {
          Page.findByTag('bar')
            .then(function (pages) {
              expect(pages).to.have.lengthOf(1);
              done();
          })
            .catch(done);
      });
      it('does not get pages without the search tag', function() {
          Page.findByTag('falafel')
            .then(function (pages) {
              expect(pages).to.have.lengthOf(0);
              done();
            })
            .catch(done);
          });
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