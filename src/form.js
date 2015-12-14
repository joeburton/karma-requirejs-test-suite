define(function() {

    var Form = function(el) {
        this.el = el;
    };

    Form.prototype.renderForm = function() {
        this.el.html('I could be a form');
    };

    return Form;

});
