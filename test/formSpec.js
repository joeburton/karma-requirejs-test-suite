define(['form', 'jquery', 'underscore'], function(Form, $, _) {

    describe('#Form', function() {

        var el;
        var form;

        beforeEach(function () {
            el = $('<div></div>');

            form = new Form(el);
            form.renderForm();
        });

        it('should render the form', function() {
            expect(el.text()).toEqual('I could be a form');
        });

    });

});
