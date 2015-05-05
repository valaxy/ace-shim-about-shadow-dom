> This is under development

A Shim Solution about ace in shadow dom


# Global Variable Solution
```html
<script src="bower_components/ace-builds/src-noconflict/ace.js"></script>
<script src="bower_components/ace-shim-about-shadow-dom/ace-shim.js"></script>
```

```javascript
aceShimAboutShadowDom({
    cssContainer: root // the shadow root
})
```

# AMD Solution
Not has a AMD Solution for now.


# If it doesn't work well
Please report for a issue