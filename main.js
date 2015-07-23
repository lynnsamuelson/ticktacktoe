$('.one, .two, .three').click(function() {                             
    this.className = {
       three : 'click', one: 'two', two: 'three'
    }[this.className];
});