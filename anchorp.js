function Anchorp() {

  // Used to get all anchor tags.
  var Get = function() {
    if (location.hash!="") {
      var params = location.hash.replace("#", "").split("&")
      return (params.length>0) ? params : []
    }
  }

  // Used to clear all the anchor tags.
  // https://stackoverflow.com/questions/1397329/how-to-remove-the-hash-from-window-location-url-with-javascript-without-page-r
  var Clear = function() {
    var scrollV, scrollH, loc = window.location;
    if ("pushState" in history)
      history.pushState("", document.title, loc.pathname + loc.search);
    else {
      scrollV = document.body.scrollTop;
      scrollH = document.body.scrollLeft;
      loc.hash = "";
      document.body.scrollTop = scrollV;
      document.body.scrollLeft = scrollH;
    }
  }

  return {
    Get: Get,
    Clear: Clear
  }
}

const anchorp = Anchorp()