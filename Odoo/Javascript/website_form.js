odoo.define('module.name', function (require) {
    "use strict";

    // Extending the website form
    const WebsiteForm = require('website_form.animation'),  // Require this to ensure correct load order
          snippet_animation = require('web_editor.snippets.animation');

    // 1 - Adding a spinner on submit and removing when errors occur
    {
    snippet_animation.registry.form_builder_send.include({

        /**
         * Extend base function to add a spinner to the website form submit button
         * @param {Event} e
         * @returns {*} Super
         */
        send(e) {
            e.preventDefault();

            // Create spinner
            this.$spinner = $('<i class="fa fa-cog fa-spin" style="margin-left: 8px"/>');

            // Add to send button
            this.$target.find('.o_website_form_send').append(this.$spinner)

            return this._super.apply(this, arguments);
        },

        /**
         * Removes spinner from button if an error occurred
         * @param {string} status The status of the form submit
         * @returns {*} Super
         */
        update_status(status) {
            if (status !== 'success' && this.$spinner) {
                this.$spinner.remove();
            }

            return this._super.apply(this, arguments);
        },
    })
    }
});