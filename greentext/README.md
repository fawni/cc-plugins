# greentext

convert blockquotes and text preceded by \">\" to greentext.

## notes

by default the plugin uses a custom shade of green `#b3c45e` instead of 4chan's default `#789922`.

if you want to use a different color, you can simply do so with css and the `greentext` class.

```css
.greentext {
    color: #789922 !important;
}
```

or set a different color to blockquotes:

```css
.greentext blockquote {
    color: grey;
}
```