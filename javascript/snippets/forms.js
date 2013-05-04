
;(function($) {
	"use strict";

	var checkboxInit = function(parentEl) {
		var $parentEl = $(parentEl || 'body'),
			checkBoxClicked = function() {

				var labelEl = $(this),
					inputEl = labelEl.prev('.checkbox, :checkbox, input[type=checkbox]');

				// toggle the checked class on the input element
				inputEl.toggleClass('checked');


				// make sure the label in in sync with the checked class
				if (inputEl.hasClass('checked')) {
					labelEl.addClass('checkbox-checked');
				} else {
					labelEl.removeClass('checkbox-checked');
				}
			}

			// add the checked class to any checked radio or tickboxes
		var checkedPsuedo = $parentEl.find(':checked'),
			checkedLabels = $parentEl.find('input[type=checkbox]:checked + label')

			checkedPsuedo.addClass('checked');
		checkedLabels.addClass('checkbox-checked');

		// add a click event to any checkboxes to make them toggle the checked class
		var something = $parentEl.find('.checkbox + label, :checkbox + label, input[type=checkbox] + label').off('click.checkboxes').on('click.checkboxes', checkBoxClicked);
	}

	var radiobtnInit = function(parentEl) {
		var $parentEl = $(parentEl || 'body'),
			radioBtnClicked = function() {

				var labelEl = $(this),
					inputEl = labelEl.prev('.radiobtn, :radio, input[type=radio]');

				// toggle the checked class on the input element
				inputEl.toggleClass('checked');


				// make sure the label in in sync with the checked class
				if (inputEl.hasClass('checked')) {
					labelEl.addClass('radiobtn-checked');
				} else {
					labelEl.removeClass('radiobtn-checked');
				}
			}

			// add the checked class to any checked radio or tickboxes
		var checkedPsuedo = $parentEl.find(':checked'),
			checkedLabels = $parentEl.find('input[type=radio]:checked + label')

			checkedPsuedo.addClass('checked');
		checkedLabels.addClass('radiobtn-checked');

		// add a click event to any checkboxes to make them toggle the checked class
		var something = $parentEl.find('.radiobtn + label, :radio + label, input[type=radio] + label').off('click.radiobtns').on('click.radiobtns', radioBtnClicked);
	}
	// checkbox & radiobtn polyfill
	// check for IE browser and add the checkbox / radiobtn checked classes
	if ($("html").hasClass("lt-ie9")) {
		//setup the checkbox functionality for IE
		if($("input:radio").length > 0) radiobtnInit();
		if($("input:checkbox").length > 0) checkboxInit();
	}

})(jQuery);