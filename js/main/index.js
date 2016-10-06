document.addEventListener("DOMContentLoaded", function(event) {

    var Navigation = function($container) {
        this.$container = $container;
        this.$liElements = $container.querySelectorAll('li');
    };

    Navigation.prototype.bindClickEvent = function() {
        this.$container.addEventListener('click', this.handleClick.bind(this));
    };

    Navigation.prototype.handleClick = function(event) {
        var targetClass = event.target.dataset.target;

        if (targetClass) {
            this.clearActive();
            document.querySelector('.' + targetClass).classList.add('active');
        }
    };

    Navigation.prototype.clearActive = function(event) {
        for (var i = 0; i < this.$liElements.length; i++) {
            document.querySelector('.' + this.$liElements[i].dataset.target).classList.remove('active');
        }
    }

    Navigation.prototype.init = function() {
        this.bindClickEvent();
    };

    var nav = new Navigation(document.querySelector('nav'));
    nav.init();
});

/*navigation*/
