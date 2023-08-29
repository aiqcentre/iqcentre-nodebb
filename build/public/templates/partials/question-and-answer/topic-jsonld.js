
(function (factory) {
  if (typeof module === 'object' && module.exports) {
    module.exports = factory();
  } else if (typeof define === 'function' && define.amd) {
    define(factory);
  }
})(function () {
  function compiled(helpers, context, guard, iter, helper) {
    var __escape = helpers.__escape;
    var value = context;
    return "<script type=\"application/ld+json\">\n  {\n    \"@context\": \"https://schema.org\",\n    \"@type\": \"QAPage\",\n    \"mainEntity\": {\n      \"@type\": \"Question\",\n      \"name\": \"" + 
      __escape(guard((context != null) ? context['title'] : null)) + 
      "\",\n      \"text\": \"" + 
      guard((context != null && context['mainPost'] != null) ? context['mainPost']['content'] : null) + 
      "\",\n      \"url\": \"" + 
      __escape(guard((context != null) ? context['topicURL'] : null)) + 
      "\",\n      \"answerCount\": " + 
      __escape(guard((context != null) ? context['postcount'] : null)) + 
      ",\n      \"upvoteCount\": " + 
      __escape(guard((context != null) ? context['votes'] : null)) + 
      ",\n      \"dateCreated\": \"" + 
      __escape(guard((context != null) ? context['timestampISO'] : null)) + 
      "\",\n      \"author\": {\n        \"@type\": \"Person\",\n        \"name\": \"" + 
      __escape(guard((context != null && context['mainPost'] != null && context['mainPost']['user'] != null) ? context['mainPost']['user']['username'] : null)) + 
      "\"\n      },\n      \"acceptedAnswer\": [\n        " + 
      (guard((context != null && context['acceptedAnswer'] != null) ? context['acceptedAnswer']['content'] : null) ?
        "\n        {\n          \"@type\": \"Answer\",\n          \"text\": \"" + 
          guard((context != null && context['acceptedAnswer'] != null) ? context['acceptedAnswer']['content'] : null) + 
          "\",\n          \"dateCreated\": \"" + 
          __escape(guard((context != null && context['acceptedAnswer'] != null) ? context['acceptedAnswer']['timestampISO'] : null)) + 
          "\",\n          \"url\": \"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/post/" + 
          __escape(guard((context != null && context['acceptedAnswer'] != null) ? context['acceptedAnswer']['pid'] : null)) + 
          "\",\n          \"author\": {\n            \"@type\": \"Person\",\n            \"name\": \"" + 
          __escape(guard((context != null && context['acceptedAnswer'] != null && context['acceptedAnswer']['user'] != null) ? context['acceptedAnswer']['user']['username'] : null)) + 
          "\"\n          },\n          \"upvoteCount\": " + 
          __escape(guard((context != null && context['acceptedAnswer'] != null) ? context['acceptedAnswer']['votes'] : null)) + 
          "\n        }\n        " :
        "") + 
      "\n      ],\n      \"suggestedAnswer\": [\n        " + 
      (guard((context != null && context['suggestedAnswer'] != null) ? context['suggestedAnswer']['content'] : null) ?
        "\n        {\n          \"@type\": \"Answer\",\n          \"text\": \"" + 
          guard((context != null && context['suggestedAnswer'] != null) ? context['suggestedAnswer']['content'] : null) + 
          "\",\n          \"dateCreated\": \"" + 
          __escape(guard((context != null && context['suggestedAnswer'] != null) ? context['suggestedAnswer']['timestampISO'] : null)) + 
          "\",\n          \"url\": \"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/post/" + 
          __escape(guard((context != null && context['suggestedAnswer'] != null) ? context['suggestedAnswer']['pid'] : null)) + 
          "\",\n          \"author\": {\n          \"@type\": \"Person\",\n            \"name\": \"" + 
          __escape(guard((context != null && context['suggestedAnswer'] != null && context['suggestedAnswer']['user'] != null) ? context['suggestedAnswer']['user']['username'] : null)) + 
          "\"\n          },\n          \"upvoteCount\": " + 
          __escape(guard((context != null && context['suggestedAnswer'] != null) ? context['suggestedAnswer']['votes'] : null)) + 
          "\n        }\n        " :
        "") + 
      "\n      ]\n    }\n  }\n</script>";
  }

  compiled.blocks = {
    
  };

  return compiled;
})
