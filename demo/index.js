(function () {
	// create shadow dom
	var editorDom = document.getElementById('editor')
	var root = wrap.createShadowRoot()
	root.appendChild(editorDom)


	// init shim
	aceShimAboutShadowDom({
		cssContainer: root
	})


	//// shadow dom
	//var wrap = document.getElementById('wrap')


	var editor = window.editor = ace.edit(editorDom)
	editor.setTheme("ace/theme/chrome")
	editor.session.setMode("ace/mode/javascript");
})()