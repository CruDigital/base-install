<!DOCTYPE html>
<!--[if lt IE 7]>      <html class="no-js lt-ie9 lt-ie8 lt-ie7"> <![endif]-->
<!--[if IE 7]>         <html class="no-js lt-ie9 lt-ie8"> <![endif]-->
<!--[if IE 8]>         <html class="no-js lt-ie9"> <![endif]-->
<!--[if gt IE 8]><!--> <html class="no-js"> <!--<![endif]-->
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
        <title>Base install - Snippets - Nice Radio and Checkboxes</title>
        <meta name="description" content="">
        <meta name="viewport" content="width=device-width">

        <!-- NOTE: THIS SHOULD NOT BE INCLUDED FROM A CDN - NO CSS SHOULD! -->
        <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/normalize/2.1.0/normalize.css">

        <link rel="stylesheet" href="../css/snippets/forms.css">

        <script src="//cdnjs.cloudflare.com/ajax/libs/modernizr/2.6.2/modernizr.min.js"></script>
    </head>
    <body>

		<form>
			<legend>Fancy Radio &amp; Checkboxes - with CSS &amp; JS fallback to IE7</legend>

		<!-- Start: Checkboxes Snippet -->
			<fieldset id="checkboxes">
				<div>
					<input class="styledCheckbox" name="checkbox" type="checkbox" id="checkbox-1" value="some value">
					<label for="checkbox-1" class="checkboxLabel">
						<span class="checkbox"></span>
						Checkbox 1
					</label>
				</div>
				<div>
					<input class="styledCheckbox" name="checkbox" type="checkbox" id="checkbox-2" value="some value">
					<label for="checkbox-2" class="checkboxLabel">
						<span class="checkbox"></span>
						Checkbox 2
					</label>
				</div>
			</fieldset>


		<!-- Start: Radio Buttons Snippet -->
			<fieldset id="radioButtons">

				<div>
					<input class="styledRadioBtn" name="radiobtn" type="radio" id="radiobtn-1" value="some value">
					<label for="radiobtn-1" class="radiobtnLabel">
						<span class="radiobtn"></span>
						Radio Button 1
					</label>
				</div>
				<div>
					<input class="styledRadioBtn" name="radiobtn" type="radio" id="radiobtn-2" value="some value">
					<label for="radiobtn-2" class="radiobtnLabel">
						<span class="radiobtn"></span>
						Radio Button 2
					</label>
				</div>
			</fieldset>
		</form>

		<?php include("jquery-include.html"); ?>

		<script src="../javascript/snippets/forms.js"></script>
	</body>
</html>