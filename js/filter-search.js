// Place script in iife
(function ()
{
  // Get the Images
  var $imgs = $("#gallery img");
  // Get the input element
  var $search = $("#filter-search");
  // Create an array called cache
  var cache = [];

  // loop through each image
  $imgs.each(function()
  {
    // Add an object to the cache array
    cache.push(
      {
        // References current image
        element: this,
        // Uses alt text of image
        // chain trim and toLowercase to get rid of whitespace and because indexof is case sensitive
        text: this.alt.trim().toLowerCase()
      });
  });

  // Declare filter() function
  function filter()
  {
    // Get the query
    var query = this.value.trim().toLowerCase();

    // For each entry in cache
    cache.forEach(function(img)
    {
      // Set index to 0
      var index = 0;
      /* If query has a value, use indexOf() to check if the search term is in
          the text property of object
      */
      if (query)
      {
        index = img.text.indexOf(query);
      }

      /*
       If index is equal to -1, set display property to none, otherwise, set it
       to blank string
       */
       img.element.style.display = index === -1 ? "none" : "";
    });
  }

  // If browser supports inout event
  if ("oninput" in $search[0])
  {
    // Use input event to call filter()
    $search.on("input", filter);
  }
  // otherwise use keyup event to call filter
  else
  {
    $search.on("keyup", filter);
  }
}());
