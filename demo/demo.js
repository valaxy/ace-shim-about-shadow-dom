(function () {
	var shadowFrame = document.querySelector('.shadow iframe')
	var normalFrame = document.querySelector('.normal iframe')

	var themes = [
		'ace/theme/chaos',
		'ace/theme/terminal',
		'ace/theme/chrome'
	]
	var themeIndex = -1
	window.changeTheme = function () {
		themeIndex = (themeIndex + 1) % themes.length
		shadowFrame.contentWindow.editor.setTheme(themes[themeIndex])
		normalFrame.contentWindow.editor.setTheme(themes[themeIndex])
	}



	window.changeModel = function () {

	}

})()