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
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
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


    /* TODO: Write a new test suite named "The menu" */
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

        
    /* TODO: Write a new test suite named "Initial Entries" */
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

        /* TODO: Write a test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * Remember, loadFeed() is asynchronous so this test will require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */

    /* TODO: Write a new test suite named "New Feed Selection" */
    describe('New Feed Selection',function(){
            var feed=document.querySelector('.feed'),
                content=feed.innerHTML;                 //storing the initial container of feed list
            beforeEach(function(done){
                loadFeed(1,done);                       //changing the feed list
            });

            it('loadFeed should change the content when it is called',function(done){
                expect(feed.innerHTML).not.toBe(content);                          //checking the container of feed list after changing  
                loadFeed(0,function(){});
                done();
            });

    });

        /* TODO: Write a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */
}());
