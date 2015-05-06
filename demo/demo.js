(function () {
	var themeIndex = 0
	var themes = [
		'ace/theme/chrome',
		'ace/theme/chaos',
		'ace/theme/terminal'
	]


	var initShadowEditor = function (shadowHost) {
		var root = shadowHost.createShadowRoot()
		var editor = document.createElement('div')
		root.appendChild(editor)

		// init editor
		editor = ace.edit(editor)
		editor.setTheme(themes[0])
		editor.session.setMode("ace/mode/javascript")
		return {root: root, editor: editor}
	}

	var initNormalEditor = function (editor) {
		editor = ace.edit(editor)
		editor.setTheme(themes[0])
		editor.session.setMode("ace/mode/javascript")
		return editor
	}

	var normalEditor = initNormalEditor($('.normal .root')[0])
	var r1 = initShadowEditor($('.shadow1 .root')[0])
	var r2 = initShadowEditor($('.shadow2 .root')[0])


	// init shim
	aceShimAboutShadowDom({
		cssHeads: [
			document.getElementsByTagName('head')[0],
			r1.root,
			r2.root
		]
	})


	var editors = [
		normalEditor,
		r1.editor,
		r2.editor
	]
	window.changeTheme = function () {
		themeIndex = (themeIndex + 1) % themes.length
		editors.forEach(function (editor) {
			editor.setTheme(themes[themeIndex])
		})
	}


	window.changeModel = function () {

	}

})()