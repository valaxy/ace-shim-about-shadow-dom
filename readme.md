Makes ace editor instances work fine when some in shadow dom and some not in shadow dom

# Global Variable Solution
```html
<script src="bower_components/ace-builds/src-noconflict/ace.js"></script>
<script src="bower_components/ace-shim-about-shadow-dom/ace-shim.js"></script>
```

```javascript
	aceShimAboutShadowDom({
		cssHeads: [
			document.getElementsByTagName('head')[0],
			shadowRoot1,
			shadowRoot2
		]
	})
```

Check the demo to see how to use

# AMD Solution
Not has a AMD Solution for now.

# Addition Notes
- No matter how many ace editor instance exist, `aceShimAboutShadowDom` should only called once
- Style will be append to each shadow, so this behavior Consumes huge memory(maybe not that much huge)


> Please report a issue if there is a bug
> Please help correct grammar error by pulling a request