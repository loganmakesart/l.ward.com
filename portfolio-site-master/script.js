(function(){
    var words = [
        ' a cartoonist',
        ' a designer',
        ' an innovator',
        
        ], i = 0;
    setInterval(function(){
        $('#changingword').fadeOut(function(){
            $(this).html(words[i=(i+1)%words.length]).fadeIn();
        });
    }, 3000);
      
})();

