# Anchorp
Small JavaScript library, used to access anchor tags as GET variables. Sometimes it's inconvenient to pass parameters to a page using GET, but you might still want to get information from A to B. This library allows you to do this by using anchors.

## Example

example.html#foo&bar
```
console.log(anchorp.Get())
>> ["foo", "bar"]
```

Anchor tags can also be cleared from the current page/url by using `anchorp.Clear()`.
