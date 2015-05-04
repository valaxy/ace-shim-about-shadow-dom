(function () {

	var fixStyle = function (el) {
		var style1 = document.getElementById('ace_editor.css')
		var style2 = document.getElementById('ace-tm')
		var style3 = style2.nextSibling
		el.appendChild(style1)
		el.appendChild(style2)
		el.appendChild(style3)
	}


	var hookDom = function (shadowRoot) {
		var domHook = ace.require('ace/lib/dom')
		var dom = {
			getDocumentHead: domHook.getDocumentHead,
			importCssString: domHook.importCssString,
			hasCssString   : domHook.hasCssString
		}


		domHook.getDocumentHead = function (doc) {
			if (doc === importCssStringDoc) {
				return shadowRoot
			}
			return dom.getDocumentHead.apply(doc, arguments)
		}

		domHook.hasCssString = function (doc) {
			return dom.hasCssString(shadowRoot)
		}

		var importCssStringDoc = {
			createElement : document.createElement.bind(document),
			createTextNode: document.createTextNode.bind(document)
		}
		domHook.importCssString = function (cssText, id, doc) {
			return dom.importCssString.call(this, cssText, id, importCssStringDoc)
		}
	}


	/** cssContainer: a dom to contain css
	 */
	window.aceShimAboutShadowDom = function (options) {
		fixStyle(options.cssContainer)
		hookDom(options.cssContainer)


		//
		var Editor = ace.require('ace/editor').Editor
		Editor.prototype
	}
})()