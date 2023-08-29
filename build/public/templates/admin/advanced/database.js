
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
    return "<div class=\"acp-page-container\">\r\n\t<div class=\"row database\">\r\n\t\t" + 
      (guard((context != null) ? context['mongo'] : null) ?
        "\r\n\t\t<div class=\"" + 
          (guard((context != null) ? context['redis'] : null) ?
            "col-lg-6" :
            "col-lg-12") + 
          "\">\r\n\t\t\t" + 
          (guard((context != null && context['mongo'] != null) ? context['mongo']['serverStatusError'] : null) ?
            "\r\n\t\t\t<div class=\"alert alert-warning\">\r\n\t\t\t\t" + 
              __escape(guard((context != null && context['mongo'] != null) ? context['mongo']['serverStatusError'] : null)) + 
              "\r\n\t\t\t</div>\r\n\t\t\t" :
            "") + 
          "\r\n\t\t\t<div class=\"card\">\r\n\t\t\t\t<div class=\"card-header\"><i class=\"fa fa-hdd-o\"></i> [[admin/advanced/database:mongo]]</div>\r\n\t\t\t\t<div class=\"card-body\">\r\n\t\t\t\t\t<div class=\"database-info\">\r\n\t\t\t\t\t\t<div class=\"d-flex justify-content-between\"><span>[[admin/advanced/database:mongo.version]]</span> <span class=\"text-end\">" + 
          __escape(guard((context != null && context['mongo'] != null) ? context['mongo']['version'] : null)) + 
          "</span></div>\r\n\t\t\t\t\t\t<hr/>\r\n\t\t\t\t\t\t<div class=\"d-flex justify-content-between\"><span>[[admin/advanced/database:uptime-seconds]]</span> <span class=\"text-end\">" + 
          __escape(helper(context, helpers, 'formattedNumber', [guard((context != null && context['mongo'] != null) ? context['mongo']['uptime'] : null)])) + 
          "</span></div>\r\n\t\t\t\t\t\t<div class=\"d-flex justify-content-between\"><span>[[admin/advanced/database:mongo.storage-engine]]</span> <span class=\"text-end\">" + 
          __escape(guard((context != null && context['mongo'] != null) ? context['mongo']['storageEngine'] : null)) + 
          "</span></div>\r\n\t\t\t\t\t\t<div class=\"d-flex justify-content-between\"><span>[[admin/advanced/database:mongo.collections]]</span> <span class=\"text-end\">" + 
          __escape(helper(context, helpers, 'formattedNumber', [guard((context != null && context['mongo'] != null) ? context['mongo']['collections'] : null)])) + 
          "</span></div>\r\n\t\t\t\t\t\t<div class=\"d-flex justify-content-between\"><span>[[admin/advanced/database:mongo.objects]]</span> <span class=\"text-end\">" + 
          __escape(helper(context, helpers, 'formattedNumber', [guard((context != null && context['mongo'] != null) ? context['mongo']['objects'] : null)])) + 
          "</span></div>\r\n\t\t\t\t\t\t<div class=\"d-flex justify-content-between\"><span>[[admin/advanced/database:mongo.avg-object-size]]</span> <span class=\"text-end\">[[admin/advanced/database:x-b, " + 
          __escape(guard((context != null && context['mongo'] != null) ? context['mongo']['avgObjSize'] : null)) + 
          "]]</span></div>\r\n\t\t\t\t\t\t<hr/>\r\n\t\t\t\t\t\t<div class=\"d-flex justify-content-between\"><span>[[admin/advanced/database:mongo.data-size]]</span> <span class=\"text-end\">[[admin/advanced/database:x-gb, " + 
          __escape(guard((context != null && context['mongo'] != null) ? context['mongo']['dataSize'] : null)) + 
          "]]</span></div>\r\n\t\t\t\t\t\t<div class=\"d-flex justify-content-between\"><span>[[admin/advanced/database:mongo.storage-size]]</span> <span class=\"text-end\">[[admin/advanced/database:x-gb, " + 
          __escape(guard((context != null && context['mongo'] != null) ? context['mongo']['storageSize'] : null)) + 
          "]]</span></div>\r\n\t\t\t\t\t\t<div class=\"d-flex justify-content-between\"><span>[[admin/advanced/database:mongo.index-size]]</span> <span class=\"text-end\">[[admin/advanced/database:x-gb, " + 
          __escape(guard((context != null && context['mongo'] != null) ? context['mongo']['indexSize'] : null)) + 
          "]]</span></div>\r\n\t\t\t\t\t\t" + 
          (guard((context != null && context['mongo'] != null) ? context['mongo']['fileSize'] : null) ?
            "\r\n\t\t\t\t\t\t<div class=\"d-flex justify-content-between\"><span>[[admin/advanced/database:mongo.file-size]]</span> <span class=\"text-end\">[[admin/advanced/database:x-gb, " + 
              __escape(guard((context != null && context['mongo'] != null) ? context['mongo']['fileSize'] : null)) + 
              "]]</span></div>\r\n\t\t\t\t\t\t" :
            "") + 
          "\r\n\t\t\t\t\t\t<hr/>\r\n\t\t\t\t\t\t<div class=\"d-flex justify-content-between\"><span>[[admin/advanced/database:mongo.resident-memory]]</span> <span class=\"text-end\">[[admin/advanced/database:x-gb, " + 
          __escape(guard((context != null && context['mongo'] != null && context['mongo']['mem'] != null) ? context['mongo']['mem']['resident'] : null)) + 
          "]]</span></div>\r\n\t\t\t\t\t\t<div class=\"d-flex justify-content-between\"><span>[[admin/advanced/database:mongo.virtual-memory]]</span> <span class=\"text-end\">[[admin/advanced/database:x-gb, " + 
          __escape(guard((context != null && context['mongo'] != null && context['mongo']['mem'] != null) ? context['mongo']['mem']['virtual'] : null)) + 
          "]]</span></div>\r\n\t\t\t\t\t\t<div class=\"d-flex justify-content-between\"><span>[[admin/advanced/database:mongo.mapped-memory]]</span> <span class=\"text-end\">[[admin/advanced/database:x-gb, " + 
          __escape(guard((context != null && context['mongo'] != null && context['mongo']['mem'] != null) ? context['mongo']['mem']['mapped'] : null)) + 
          "]]</span></div>\r\n\t\t\t\t\t\t<hr/>\r\n\t\t\t\t\t\t<div class=\"d-flex justify-content-between\"><span>[[admin/advanced/database:mongo.bytes-in]]</span> <span class=\"text-end\">[[admin/advanced/database:x-gb, " + 
          __escape(guard((context != null && context['mongo'] != null && context['mongo']['network'] != null) ? context['mongo']['network']['bytesIn'] : null)) + 
          "]]</span></div>\r\n\t\t\t\t\t\t<div class=\"d-flex justify-content-between\"><span>[[admin/advanced/database:mongo.bytes-out]]</span> <span class=\"text-end\">[[admin/advanced/database:x-gb, " + 
          __escape(guard((context != null && context['mongo'] != null && context['mongo']['network'] != null) ? context['mongo']['network']['bytesOut'] : null)) + 
          "]]</span></div>\r\n\t\t\t\t\t\t<div class=\"d-flex justify-content-between\"><span>[[admin/advanced/database:mongo.num-requests]]</span> <span class=\"text-end\">" + 
          __escape(guard((context != null && context['mongo'] != null && context['mongo']['network'] != null) ? context['mongo']['network']['numRequests'] : null)) + 
          "</span></div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t" :
        "") + 
      "\r\n\r\n\t\t" + 
      (guard((context != null) ? context['redis'] : null) ?
        "\r\n\t\t<div class=\"col-lg-6\">\r\n\t\t\t<div class=\"card\">\r\n\t\t\t\t<div class=\"card-header\"><i class=\"fa fa-hdd-o\"></i> [[admin/advanced/database:redis]]</div>\r\n\t\t\t\t<div class=\"card-body\">\r\n\t\t\t\t\t<div class=\"database-info\">\r\n\t\t\t\t\t\t<div class=\"d-flex justify-content-between\"><span>[[admin/advanced/database:redis.version]]</span> <span class=\"text-end\">" + 
          __escape(guard((context != null && context['redis'] != null) ? context['redis']['redis_version'] : null)) + 
          "</span></div>\r\n\t\t\t\t\t\t<hr/>\r\n\t\t\t\t\t\t<div class=\"d-flex justify-content-between\"><span>[[admin/advanced/database:uptime-seconds]]</span> <span class=\"text-end\">" + 
          __escape(helper(context, helpers, 'formattedNumber', [guard((context != null && context['redis'] != null) ? context['redis']['uptime_in_seconds'] : null)])) + 
          "</span></div>\r\n\t\t\t\t\t\t<div class=\"d-flex justify-content-between\"><span>[[admin/advanced/database:uptime-days]]</span> <span class=\"text-end\">" + 
          __escape(guard((context != null && context['redis'] != null) ? context['redis']['uptime_in_days'] : null)) + 
          "</span></div>\r\n\t\t\t\t\t\t<hr/>\r\n\t\t\t\t\t\t<div class=\"d-flex justify-content-between\"><span>[[admin/advanced/database:redis.keys]]</span> <span class=\"text-end\">" + 
          __escape(helper(context, helpers, 'formattedNumber', [guard((context != null && context['redis'] != null) ? context['redis']['keys'] : null)])) + 
          "</span></div>\r\n\t\t\t\t\t\t<div class=\"d-flex justify-content-between\"><span>[[admin/advanced/database:redis.expires]]</span> <span class=\"text-end\">" + 
          __escape(helper(context, helpers, 'formattedNumber', [guard((context != null && context['redis'] != null) ? context['redis']['expires'] : null)])) + 
          "</span></div>\r\n\t\t\t\t\t\t<div class=\"d-flex justify-content-between\"><span>[[admin/advanced/database:redis.avg-ttl]]</span> <span class=\"text-end\">" + 
          __escape(helper(context, helpers, 'formattedNumber', [guard((context != null && context['redis'] != null) ? context['redis']['avg_ttl'] : null)])) + 
          "</span></div>\r\n\t\t\t\t\t\t<div class=\"d-flex justify-content-between\"><span>[[admin/advanced/database:redis.connected-clients]]</span> <span class=\"text-end\">" + 
          __escape(helper(context, helpers, 'formattedNumber', [guard((context != null && context['redis'] != null) ? context['redis']['connected_clients'] : null)])) + 
          "</span></div>\r\n\t\t\t\t\t\t<div class=\"d-flex justify-content-between\"><span>[[admin/advanced/database:redis.connected-slaves]]</span> <span class=\"text-end\">" + 
          __escape(helper(context, helpers, 'formattedNumber', [guard((context != null && context['redis'] != null) ? context['redis']['connected_slaves'] : null)])) + 
          "</span></div>\r\n\t\t\t\t\t\t<div class=\"d-flex justify-content-between\"><span>[[admin/advanced/database:redis.blocked-clients]]</span> <span class=\"text-end\">" + 
          __escape(guard((context != null && context['redis'] != null) ? context['redis']['blocked_clients'] : null)) + 
          "</span></div>\r\n\t\t\t\t\t\t<hr/>\r\n\r\n\t\t\t\t\t\t<div class=\"d-flex justify-content-between\"><span>[[admin/advanced/database:redis.used-memory]]</span> <span class=\"text-end\">[[admin/advanced/database:x-gb, " + 
          __escape(guard((context != null && context['redis'] != null) ? context['redis']['used_memory_human'] : null)) + 
          "]]</span></div>\r\n\t\t\t\t\t\t<div class=\"d-flex justify-content-between\"><span>[[admin/advanced/database:redis.memory-frag-ratio]]</span> <span class=\"text-end\">" + 
          __escape(guard((context != null && context['redis'] != null) ? context['redis']['mem_fragmentation_ratio'] : null)) + 
          "</span></div>\r\n\t\t\t\t\t\t<hr/>\r\n\t\t\t\t\t\t<div class=\"d-flex justify-content-between\"><span>[[admin/advanced/database:redis.total-connections-recieved]]</span> <span class=\"text-end\">" + 
          __escape(helper(context, helpers, 'formattedNumber', [guard((context != null && context['redis'] != null) ? context['redis']['total_connections_received'] : null)])) + 
          "</span></div>\r\n\t\t\t\t\t\t<div class=\"d-flex justify-content-between\"><span>[[admin/advanced/database:redis.total-commands-processed]]</span> <span class=\"text-end\">" + 
          __escape(helper(context, helpers, 'formattedNumber', [guard((context != null && context['redis'] != null) ? context['redis']['total_commands_processed'] : null)])) + 
          "</span></div>\r\n\t\t\t\t\t\t<div class=\"d-flex justify-content-between\"><span>[[admin/advanced/database:redis.iops]]</span> <span class=\"text-end\">" + 
          __escape(helper(context, helpers, 'formattedNumber', [guard((context != null && context['redis'] != null) ? context['redis']['instantaneous_ops_per_sec'] : null)])) + 
          "</span></div>\r\n\r\n\t\t\t\t\t\t<div class=\"d-flex justify-content-between\"><span>[[admin/advanced/database:redis.iinput]]</span> <span class=\"text-end\">[[admin/advanced/database:x-mb, " + 
          __escape(guard((context != null && context['redis'] != null) ? context['redis']['instantaneous_input'] : null)) + 
          "]]</span></div>\r\n\t\t\t\t\t\t<div class=\"d-flex justify-content-between\"><span>[[admin/advanced/database:redis.ioutput]]</span> <span class=\"text-end\">[[admin/advanced/database:x-mb, " + 
          __escape(guard((context != null && context['redis'] != null) ? context['redis']['instantaneous_output'] : null)) + 
          "]]</span></div>\r\n\t\t\t\t\t\t<div class=\"d-flex justify-content-between\"><span>[[admin/advanced/database:redis.total-input]]</span> <span class=\"text-end\">[[admin/advanced/database:x-gb, " + 
          __escape(guard((context != null && context['redis'] != null) ? context['redis']['total_net_input'] : null)) + 
          "]]</span></div>\r\n\t\t\t\t\t\t<div class=\"d-flex justify-content-between\"><span>[[admin/advanced/database:redis.total-output]]</span> <span class=\"text-end\">[[admin/advanced/database:x-gb, " + 
          __escape(guard((context != null && context['redis'] != null) ? context['redis']['total_net_output'] : null)) + 
          "]]</span></div>\r\n\r\n\t\t\t\t\t\t<hr/>\r\n\t\t\t\t\t\t<div class=\"d-flex justify-content-between\"><span>[[admin/advanced/database:redis.keyspace-hits]]</span> <span class=\"text-end\">" + 
          __escape(helper(context, helpers, 'formattedNumber', [guard((context != null && context['redis'] != null) ? context['redis']['keyspace_hits'] : null)])) + 
          "</span></div>\r\n\t\t\t\t\t\t<div class=\"d-flex justify-content-between\"><span>[[admin/advanced/database:redis.keyspace-misses]]</span> <span class=\"text-end\">" + 
          __escape(helper(context, helpers, 'formattedNumber', [guard((context != null && context['redis'] != null) ? context['redis']['keyspace_misses'] : null)])) + 
          "</span></div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t" :
        "") + 
      "\r\n\r\n\t\t" + 
      (guard((context != null) ? context['postgres'] : null) ?
        "\r\n\t\t<div class=\"col-lg-6\">\r\n\t\t\t<div class=\"card\">\r\n\t\t\t\t<div class=\"card-header\"><i class=\"fa fa-hdd-o\"></i> [[admin/advanced/database:postgres]]</div>\r\n\t\t\t\t<div class=\"card-body\">\r\n\t\t\t\t\t<div class=\"database-info\">\r\n\t\t\t\t\t\t<div class=\"d-flex justify-content-between\"><span>[[admin/advanced/database:postgres.version]]</span> <span class=\"text-end\">" + 
          __escape(guard((context != null && context['postgres'] != null) ? context['postgres']['version'] : null)) + 
          "</span></div>\r\n\t\t\t\t\t\t<hr/>\r\n\t\t\t\t\t\t<div class=\"d-flex justify-content-between\"><span>[[admin/advanced/database:uptime-seconds]]</span> <span class=\"text-end\">" + 
          __escape(helper(context, helpers, 'formattedNumber', [guard((context != null && context['postgres'] != null) ? context['postgres']['uptime'] : null)])) + 
          "</span></div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t" :
        "") + 
      "\r\n\t</div>\r\n\r\n\t<div class=\"row\">\r\n\t\t" + 
      (guard((context != null) ? context['mongo'] : null) ?
        "\r\n\t\t<div class=\"" + 
          (guard((context != null) ? context['redis'] : null) ?
            "col-lg-6" :
            "col-lg-12") + 
          "\">\r\n\t\t\t<div class=\"card\">\r\n\t\t\t\t<h5 class=\"card-header\" data-bs-toggle=\"collapse\" data-bs-target=\".mongodb-raw\">\r\n\t\t\t\t\t<i class=\"fa fa-caret-down\"></i> [[admin/advanced/database:mongo.raw-info]]\r\n\t\t\t\t</h5>\r\n\r\n\t\t\t\t<div class=\"card-body mongodb-raw collapse\">\r\n\t\t\t\t\t<div class=\"highlight\">\r\n\t\t\t\t\t\t<pre>" + 
          __escape(guard((context != null && context['mongo'] != null) ? context['mongo']['raw'] : null)) + 
          "</pre>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t" :
        "") + 
      "\r\n\r\n\t\t" + 
      (guard((context != null) ? context['redis'] : null) ?
        "\r\n\t\t<div class=\"col-lg-6\">\r\n\t\t\t<div class=\"card\">\r\n\t\t\t\t<h5 class=\"card-header\" data-bs-toggle=\"collapse\" data-bs-target=\".redis-raw\">\r\n\t\t\t\t\t<i class=\"fa fa-caret-down\"></i> [[admin/advanced/database:redis.raw-info]]\r\n\t\t\t\t</h5>\r\n\r\n\t\t\t\t<div class=\"card-body redis-raw collapse\">\r\n\t\t\t\t\t<div class=\"highlight\">\r\n\t\t\t\t\t\t<pre>" + 
          __escape(guard((context != null && context['redis'] != null) ? context['redis']['raw'] : null)) + 
          "</pre>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t" :
        "") + 
      "\r\n\r\n\t\t" + 
      (guard((context != null) ? context['postgres'] : null) ?
        "\r\n\t\t<div class=\"col-lg-6\">\r\n\t\t\t<div class=\"card\">\r\n\t\t\t\t<h5 class=\"card-header\" data-bs-toggle=\"collapse\" data-bs-target=\".postgresql-raw\">\r\n\t\t\t\t\t<i class=\"fa fa-caret-down\"></i> [[admin/advanced/database:postgres.raw-info]]\r\n\t\t\t\t</h5>\r\n\r\n\t\t\t\t<div class=\"card-body postgresql-raw collapse\">\r\n\t\t\t\t\t<div class=\"highlight\">\r\n\t\t\t\t\t\t<pre>" + 
          __escape(guard((context != null && context['postgres'] != null) ? context['postgres']['raw'] : null)) + 
          "</pre>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t" :
        "") + 
      "\r\n\t</div>\r\n</div>";
  }

  compiled.blocks = {
    
  };

  return compiled;
})
