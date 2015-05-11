(function () {
	var initShadowEditor = function (shadowHost) {
		var root = shadowHost.createShadowRoot()
		var editor = document.createElement('div')
		root.appendChild(editor)

		// init editor
		editor = ace.edit(editor)
		aceShim.addEditor(editor, {
			cssHead: root
		})
		return editor
	}


	var initNormalEditor = function (editor) {
		editor = ace.edit(editor)
		aceShim.addEditor(editor, {
			cssHead: document.getElementsByTagName('head')[0]
		})
		return editor
	}

	aceShim.init()

	var editors = [
		initNormalEditor($('.normal .root')[0]),
		initShadowEditor($('.shadow1 .root')[0]),
		initShadowEditor($('.shadow2 .root')[0])
	]


	var themeIndex = 0
	var themes = [
		'ace/theme/chrome',
		'ace/theme/chaos',
		'ace/theme/terminal'
	]
	window.changeTheme = function () {
		themeIndex = (themeIndex + 1) % themes.length
		editors.forEach(function (editor) {
			editor.setTheme(themes[themeIndex])
		})
	}


	window.changeMode = function () {

	}

	changeTheme()

})()