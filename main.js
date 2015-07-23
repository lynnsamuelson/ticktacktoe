$('.one, .two, .three').click(function() {                             
    this.className = {
       three : 'one', one: 'two', two: 'three'
    }[this.className];
});