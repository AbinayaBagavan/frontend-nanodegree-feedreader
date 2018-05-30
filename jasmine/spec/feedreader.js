/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    
    describe('RSS Feeds', function() {
        /*This is the first test - it tests to make sure that the
         allFeeds variable has been defined and that it is not
          empty*/
        it('all the feeds are defined', function() {
            expect(allFeeds).toBeDefined();             //check the feed array is defined
            expect(allFeeds.length).not.toBe(0);        //check all the feed properties are not empty
        });


         it('all the URLs are defined should not be empty',function(){
            allFeeds.forEach(function(item)
            {
                expect(item.url).toBeDefined();                 //checking all the URL properties are defined and not empty
                expect(item.url.length).not.toBe(0);

            });
         });


         it('all the Names are defined should not be empty',function() {
                allFeeds.forEach(function(item){

                    expect(item.name).toBeDefined();            //checking all the name properties are defined and not empty
                    expect(item.name.length).not.toBe(0);
                });
         });
    });


    /* This is the second test suite. 
    It makes sure that the menu changes its visibility on clicks and 
    checks its default visibility */
    describe('The menu',function(){

        var body=document.querySelector('body'),
             menu=document.querySelector('.menu-icon-link');
        it('the menu should be hidden by default',function(){
            expect(body.classList.contains('menu-hidden')).toBe(true);          //checking the menu is hidden by default
        });

        it('the visibility of menu should be changed when clicked',function(){
            menu.click();
            expect(body.classList.contains('menu-hidden')).toBe(false);         //checking the menu is opened when clicked


            menu.click();
            expect(body.classList.contains('menu-hidden')).toBe(true);          //checking the menu is closed when clicked again
        });
    });

        
    /* This is the third test suite it make sure that 
    the feed list is initially not empty */
    describe('Initial Entries',function(){

        beforeEach(function(done){
             loadFeed(0,done);     
        });
       

        it('there should atleast one entry in the feed .container',function(done){
            var feed=document.querySelector('.feed');

            expect(feed.childElementCount).not.toBe(0);         //checking the feed list contain atleast one item initially
            done();
        });
    });


    /* This is the fourth test suite it checks whether the
    feed list's content changes on selection*/
    describe('New Feed Selection',function(){
            var feed=document.querySelector('.feed'),
                content;                 //storing the initial container of feed list
            beforeEach(function(done){
                loadFeed(0,function(){
                    content=feed.innerHTML;
                    loadFeed(1,function(){
                            done();
                    });
                });                       //changing the feed list
            });

            it('loadFeed should change the content when it is called',function(){

                expect(feed.innerHTML).not.toBe(content);                          //checking the container of feed list after changing  
            });

    });

        
}());
