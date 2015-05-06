A Shim Solution about ace working in shadow dom 

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
- no matter how many ace editor instance exist, `aceShimAboutShadowDom` should only called once

# If it doesn't work well
Please report for a issue