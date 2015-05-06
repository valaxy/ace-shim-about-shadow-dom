(function () {

	var fixStyle = function (cssHeads) {
		var style1 = document.getElementById('ace_editor.css') || document.getElementById('ace_editor')
		var style2 = document.getElementById('ace-tm')
		var style3 = style2.nextSibling

		var ss = [style1, style2, style3]
		ss.forEach(function (style) {
			cssHeads.forEach(function (el) {
				var s = style.cloneNode(true)
				el.appendChild(s)
				style.remove()
			})
		})
	}


	var hookDom = function (cssHeads) {
		var domHook = ace.require('ace/lib/dom')
		var dom = {
			getDocumentHead: domHook.getDocumentHead,
			importCssString: domHook.importCssString,
			hasCssString   : domHook.hasCssString
		}


		domHook.getDocumentHead = function (doc) {
			if (doc === importCssStringDoc) {
				return importCssStringDoc.cssHead
			}
			return dom.getDocumentHead.apply(doc, arguments)
		}

		domHook.hasCssString = function (id, doc) {
			if (doc === importCssStringDoc) {
				return dom.hasCssString(id, importCssStringDoc.cssHead)
			}
			return dom.hasCssString(id, doc)
		}

		var importCssStringDoc = {
			createElement : document.createElement.bind(document),
			createTextNode: document.createTextNode.bind(document),
			cssHead       : null // change by importCssString
		}
		domHook.importCssString = function (cssText, id, doc) {
			var result
			cssHeads.forEach(function (cssHead) {
				importCssStringDoc.cssHead = cssHead
				result = dom.importCssString.call(this, cssText, id, importCssStringDoc)
			})
			return result
		}
	}


	/** cssContainer: a dom to contain css
	 */
	window.aceShimAboutShadowDom = function (options) {
		options = options || {}
		options.cssHeads = options.cssHeads || [document.getElementsByTagName('head')[0]]// a array

		fixStyle(options.cssHeads)
		hookDom(options.cssHeads)


		//
		//var Editor = ace.require('ace/editor').Editor
		//Editor.prototype
	}
})()