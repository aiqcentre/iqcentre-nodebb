
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
    return "<!DOCTYPE html>\r\n<html lang=\"en\" xmlns=\"http://www.w3.org/1999/xhtml\" xmlns:v=\"urn:schemas-microsoft-com:vml\" xmlns:o=\"urn:schemas-microsoft-com:office:office\">\r\n<head>\r\n    <meta charset=\"utf-8\"> <!-- utf-8 works for most cases -->\r\n    <meta name=\"viewport\" content=\"width=device-width\"> <!-- Forcing initial-scale shouldn't be necessary -->\r\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\"> <!-- Use the latest (edge) version of IE rendering engine -->\r\n    <meta name=\"x-apple-disable-message-reformatting\">  <!-- Disable auto-scale in iOS 10 Mail entirely -->\r\n    <title></title> <!-- The title tag shows in email notifications, like Android 4.4. -->\r\n\r\n    <!-- Web Font / @font-face : BEGIN -->\r\n    <!-- NOTE: If web fonts are not required, lines 10 - 27 can be safely removed. -->\r\n\r\n    <!-- Desktop Outlook chokes on web font references and defaults to Times New Roman, so we force a safe fallback font. -->\r\n    <!--[if mso]>\r\n        <style>\r\n            * {\r\n                font-family: sans-serif !important;\r\n            }\r\n        </style>\r\n    <![endif]-->\r\n\r\n    <!-- All other clients get the webfont reference; some will render the font and others will silently fail to the fallbacks. More on that here: http://stylecampaign.com/blog/2015/02/webfont-support-in-email/ -->\r\n    <!--[if !mso]><!-->\r\n        <!-- insert web font reference, eg: <link href='https://fonts.googleapis.com/css?family=Roboto:400,700' rel='stylesheet' type='text/css'> -->\r\n    <!--<![endif]-->\r\n\r\n    <!-- Web Font / @font-face : END -->\r\n\r\n    <!-- CSS Reset -->\r\n    <style>\r\n\r\n        /* What it does: Remove spaces around the email design added by some email clients. */\r\n        /* Beware: It can remove the padding / margin and add a background color to the compose a reply window. */\r\n        html,\r\n        body {\r\n            margin: 0 auto !important;\r\n            padding: 0 !important;\r\n            height: 100% !important;\r\n            width: 100% !important;\r\n        }\r\n\r\n        /* What it does: Stops email clients resizing small text. */\r\n        * {\r\n            -ms-text-size-adjust: 100%;\r\n            -webkit-text-size-adjust: 100%;\r\n        }\r\n\r\n        /* What it does: Centers email on Android 4.4 */\r\n        div[style*=\"margin: 16px 0\"] {\r\n            margin:0 !important;\r\n        }\r\n\r\n        /* What it does: Stops Outlook from adding extra spacing to tables. */\r\n        table,\r\n        td {\r\n            mso-table-lspace: 0pt !important;\r\n            mso-table-rspace: 0pt !important;\r\n        }\r\n\r\n        /* What it does: Fixes webkit padding issue. Fix for Yahoo mail table alignment bug. Applies table-layout to the first 2 tables then removes for anything nested deeper. */\r\n        table {\r\n            border-spacing: 0 !important;\r\n            border-collapse: collapse !important;\r\n            table-layout: fixed !important;\r\n            margin: 0 auto !important;\r\n        }\r\n        table table table {\r\n            table-layout: auto;\r\n        }\r\n\r\n        /* What it does: Uses a better rendering method when resizing images in IE. */\r\n        img {\r\n            -ms-interpolation-mode:bicubic;\r\n        }\r\n\r\n        /* What it does: A work-around for email clients meddling in triggered links. */\r\n        *[x-apple-data-detectors],\t/* iOS */\r\n        .x-gmail-data-detectors, \t/* Gmail */\r\n        .x-gmail-data-detectors *,\r\n        .aBn {\r\n            border-bottom: 0 !important;\r\n            cursor: default !important;\r\n            color: inherit !important;\r\n            text-decoration: none !important;\r\n            font-size: inherit !important;\r\n            font-family: inherit !important;\r\n            font-weight: inherit !important;\r\n            line-height: inherit !important;\r\n        }\r\n\r\n        /* What it does: Prevents Gmail from displaying an download button on large, non-linked images. */\r\n        .a6S {\r\n            display: none !important;\r\n            opacity: 0.01 !important;\r\n        }\r\n        /* If the above doesn't work, add a .g-img class to any image in question. */\r\n        img.g-img + div {\r\n            display:none !important;\r\n           }\r\n\r\n        /* What it does: Prevents underlining the button text in Windows 10 */\r\n        .button-link {\r\n            text-decoration: none !important;\r\n        }\r\n\r\n        /* What it does: Removes right gutter in Gmail iOS app: https://github.com/TedGoas/Cerberus/issues/89  */\r\n        /* Create one of these media queries for each additional viewport size you'd like to fix */\r\n        /* Thanks to Eric Lepetit (@ericlepetitsf) for help troubleshooting */\r\n        @media only screen and (min-device-width: 375px) and (max-device-width: 413px) { /* iPhone 6 and 6+ */\r\n            .email-container {\r\n                min-width: 375px !important;\r\n            }\r\n        }\r\n\r\n    </style>\r\n\r\n    <!-- Progressive Enhancements -->\r\n    <style>\r\n\r\n        /* What it does: Hover styles for buttons */\r\n        .button-td,\r\n        .button-a {\r\n            transition: all 100ms ease-in;\r\n        }\r\n        .button-td:hover,\r\n        .button-a:hover {\r\n            background: #555555 !important;\r\n            border-color: #555555 !important;\r\n        }\r\n\r\n        /* Media Queries */\r\n        @media screen and (max-width: 600px) {\r\n\r\n            /* What it does: Adjust typography on small screens to improve readability */\r\n            .email-container p {\r\n                font-size: 17px !important;\r\n                line-height: 26px !important;\r\n            }\r\n        }\r\n\r\n        .notification-body img {\r\n            max-width: 100%;\r\n            height: auto;\r\n        }\r\n    </style>\r\n\r\n    <!-- What it does: Makes background images in 72ppi Outlook render at correct size. -->\r\n    <!--[if gte mso 9]>\r\n    <xml>\r\n        <o:OfficeDocumentSettings>\r\n            <o:AllowPNG/>\r\n            <o:PixelsPerInch>96</o:PixelsPerInch>\r\n        </o:OfficeDocumentSettings>\r\n    </xml>\r\n    <![endif]-->\r\n\r\n</head>\r\n\r\n<body width=\"100%\" bgcolor=\"#f6f6f6\" style=\"margin: 0; mso-line-height-rule: exactly;\">\r\n    <center style=\"width: 100%; background: #f6f6f6; text-align: left;\">\r\n\r\n        <!--\r\n            Set the email width. Defined in two places:\r\n            1. max-width for all clients except Desktop Windows Outlook, allowing the email to squish on narrow but never go wider than 600px.\r\n            2. MSO tags for Desktop Windows Outlook enforce a 600px width.\r\n        -->\r\n        <div style=\"max-width: 600px; margin: auto;" + 
      (guard((context != null) ? context['rtl'] : null) ?
        " text-align: right; direction: rtl;" :
        "") + 
      "\" class=\"email-container\">\r\n            <!--[if mso]>\r\n            <table role=\"presentation\" cellspacing=\"0\" cellpadding=\"0\" border=\"0\" width=\"600\" align=\"center\">\r\n            <tr>\r\n            <td>\r\n            <![endif]-->\r\n\r\n            <!-- Email Header : BEGIN -->\r\n            <table role=\"presentation\" cellspacing=\"0\" cellpadding=\"0\" border=\"0\" align=\"center\" width=\"100%\" style=\"max-width: 600px;\">\r\n                <tr>\r\n                    <td style=\"padding: 20px 0; text-align: center\">\r\n                        " + 
      (guard((context != null && context['logo'] != null) ? context['logo']['src'] : null) ?
        "\r\n                        <img src=\"" + 
          __escape(guard((context != null && context['logo'] != null) ? context['logo']['src'] : null)) + 
          "\" height=\"auto\" width=\"" + 
          __escape(guard((context != null && context['logo'] != null) ? context['logo']['width'] : null)) + 
          "\" alt=\"" + 
          __escape(guard((context != null) ? context['site_title'] : null)) + 
          "\" border=\"0\" style=\"height: auto; width: " + 
          __escape(guard((context != null && context['logo'] != null) ? context['logo']['width'] : null)) + 
          "px; background: #f6f6f6; font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol; font-size: 15px; line-height: 20px; color: #333333;\">\r\n                        " :
        "\r\n                        &nbsp;\r\n                        ") + 
      "\r\n                    </td>\r\n                </tr>\r\n            </table>\r\n            <!-- Email Header : END -->\r\n\r\n<!-- Email Body : BEGIN -->\r\n<table role=\"presentation\" cellspacing=\"0\" cellpadding=\"0\" border=\"0\" align=\"center\" width=\"100%\" style=\"max-width: 600px;\">\r\n\r\n\t<!-- 1 Column Text + Button : BEGIN -->\r\n\t<tr>\r\n\t\t<td bgcolor=\"#ffffff\">\r\n\t\t\t<table role=\"presentation\" cellspacing=\"0\" cellpadding=\"0\" border=\"0\" width=\"100%\">\r\n\t\t\t\t<tr>\r\n\t\t\t\t\t<td style=\"padding: 40px 40px 6px 40px; font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol; font-size: 15px; line-height: 20px; color: #555555;\">\r\n\t\t\t\t\t\t<h1 style=\"margin: 0; font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol; font-size: 24px; line-height: 27px; color: #333333; font-weight: normal;\">[[email:greeting_with_name, " + 
      __escape(guard((context != null) ? context['username'] : null)) + 
      "]]</h1>\r\n\t\t\t\t\t</td>\r\n\t\t\t\t</tr>\r\n\t\t\t\t<tr>\r\n\t\t\t\t\t<td style=\"padding: 0px 40px; font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol; font-size: 15px; line-height: 20px; color: #555555;\">\r\n\t\t\t\t\t\t<h1 style=\"margin: 0 0 10px 0; font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol; font-size: 18px; line-height: 21px; color: #aaaaaa; font-weight: normal;\">[[email:digest.title." + 
      __escape(guard((context != null) ? context['interval'] : null)) + 
      "]]</h1>\r\n\t\t\t\t\t</td>\r\n\t\t\t\t</tr>\r\n\t\t\t\t" + 
      (guard((context != null && context['notifications'] != null) ? context['notifications']['length'] : null) ?
        "\r\n\t\t\t\t<tr>\r\n\t\t\t\t\t<td style=\"padding: 0px 40px; font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol; font-size: 15px; line-height: 20px; color: #555555;\">\r\n\t\t\t\t\t\t<ul style=\"margin: 0; padding: 0;\">\r\n\t\t\t\t\t\t\t" + 
          compiled.blocks['notifications'](helpers, context, guard, iter, helper) + 
          "\r\n\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t</td>\r\n\t\t\t\t</tr>\r\n\t\t\t\t" :
        "") + 
      "\r\n\t\t\t\t" + 
      (guard((context != null && context['publicRooms'] != null) ? context['publicRooms']['length'] : null) ?
        "\r\n\t\t\t\t<tr>\r\n\t\t\t\t\t<td style=\"padding: 0px 40px; font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol; font-size: 15px; line-height: 20px; color: #555555;\">\r\n\t\t\t\t\t\t<h1 style=\"margin: 16px 0 24px 0; font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol; font-size: 18px; line-height: 21px; color: #aaaaaa; font-weight: normal;\">[[email:digest.unread-rooms]]</h1>\r\n\t\t\t\t\t\t<ul style=\"margin: 0; padding: 0;\">\r\n\t\t\t\t\t\t\t" + 
          compiled.blocks['publicRooms'](helpers, context, guard, iter, helper) + 
          "\r\n\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t</td>\r\n\t\t\t\t</tr>\r\n\t\t\t\t" :
        "") + 
      "\r\n\t\t\t\t" + 
      (guard((context != null && context['topTopics'] != null) ? context['topTopics']['length'] : null) ?
        "\r\n\t\t\t\t<tr>\r\n\t\t\t\t\t<td style=\"padding: 0px 40px; font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol; font-size: 15px; line-height: 20px; color: #555555;\">\r\n\t\t\t\t\t\t<h1 style=\"margin: 16px 0 24px 0; font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol; font-size: 18px; line-height: 21px; color: #aaaaaa; font-weight: normal;\">[[email:digest.top-topics, " + 
          __escape(guard((context != null) ? context['site_title'] : null)) + 
          "]]</h1>\r\n\t\t\t\t\t\t<ul style=\"margin: 0; padding: 0;\">\r\n\t\t\t\t\t\t\t" + 
          compiled.blocks['topTopics'](helpers, context, guard, iter, helper) + 
          "\r\n\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t</td>\r\n\t\t\t\t</tr>\r\n\t\t\t\t" :
        "") + 
      "\r\n\t\t\t\t" + 
      (guard((context != null && context['popularTopics'] != null) ? context['popularTopics']['length'] : null) ?
        "\r\n\t\t\t\t<tr>\r\n\t\t\t\t\t<td style=\"padding: 0px 40px; font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol; font-size: 15px; line-height: 20px; color: #555555;\">\r\n\t\t\t\t\t\t<h1 style=\"margin: 16px 0 24px 0; font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol; font-size: 18px; line-height: 21px; color: #aaaaaa; font-weight: normal;\">[[email:digest.popular-topics, " + 
          __escape(guard((context != null) ? context['site_title'] : null)) + 
          "]]</h1>\r\n\t\t\t\t\t\t<ul style=\"margin: 0; padding: 0;\">\r\n\t\t\t\t\t\t\t" + 
          compiled.blocks['popularTopics'](helpers, context, guard, iter, helper) + 
          "\r\n\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t</td>\r\n\t\t\t\t</tr>\r\n\t\t\t\t" :
        "") + 
      "\r\n\t\t\t\t" + 
      (guard((context != null && context['recent'] != null) ? context['recent']['length'] : null) ?
        "\r\n\t\t\t\t<tr>\r\n\t\t\t\t\t<td style=\"padding: 0px 40px; font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol; font-size: 15px; line-height: 20px; color: #555555;\">\r\n\t\t\t\t\t\t<h1 style=\"margin: 16px 0 24px 0; font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol; font-size: 18px; line-height: 21px; color: #aaaaaa; font-weight: normal;\">[[email:digest.latest_topics, " + 
          __escape(guard((context != null) ? context['site_title'] : null)) + 
          "]]</h1>\r\n\t\t\t\t\t\t<ul style=\"margin: 0; padding: 0;\">\r\n\t\t\t\t\t\t\t" + 
          compiled.blocks['recent'](helpers, context, guard, iter, helper) + 
          "\r\n\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t</td>\r\n\t\t\t\t</tr>\r\n\t\t\t\t" :
        "") + 
      "\r\n\t\t\t\t<tr>\r\n\t\t\t\t\t<td style=\"padding: 32px 40px; font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol; font-size: 15px; line-height: 20px; color: #555555;\">\r\n\t\t\t\t\t\t<!-- Button : BEGIN -->\r\n\t\t\t\t\t\t<table role=\"presentation\" cellspacing=\"0\" cellpadding=\"0\" border=\"0\" align=\"center\" style=\"margin: auto;\">\r\n\t\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t\t<td style=\"border-radius: 3px; background: #222222; text-align: center;\" class=\"button-td\">\r\n\t\t\t\t\t\t\t\t\t<a href=\"" + 
      __escape(guard((context != null) ? context['url'] : null)) + 
      "\" style=\"background: #222222; border: 15px solid #222222; font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol; font-size: 13px; line-height: 1.1; text-align: center; text-decoration: none; display: block; border-radius: 3px; font-weight: bold;\" class=\"button-a\">\r\n\t\t\t\t\t\t\t\t\t\t<span style=\"color:#ffffff;\" class=\"button-link\">[[email:digest.cta, " + 
      __escape(guard((context != null) ? context['site_title'] : null)) + 
      "]] &rarr;</span>\r\n\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t</table>\r\n\t\t\t\t\t\t<!-- Button : END -->\r\n\t\t\t\t\t</td>\r\n\t\t\t\t</tr>\r\n\t\t\t</table>\r\n\t\t</td>\r\n\t</tr>\r\n\t<!-- 1 Column Text + Button : END -->\r\n\r\n</table>\r\n<!-- Email Body : END -->\r\n\r\n\t\t\t<!-- Email Footer : BEGIN -->\r\n\t\t\t<table role=\"presentation\" cellspacing=\"0\" cellpadding=\"0\" border=\"0\" align=\"center\" width=\"100%\" style=\"max-width: 680px;\">\r\n\t\t\t\t<tr>\r\n\t\t\t\t\t<td style=\"padding: 40px 10px;width: 100%;font-size: 12px; font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol; line-height:18px; text-align: center; color: #888888;\">\r\n\t\t\t\t\t\t<br><br>\r\n\t\t\t\t\t\t" + 
      (guard((context != null) ? context['showUnsubscribe'] : null) ?
        "\r\n\t\t\t\t\t\t[[email:notif.post.unsub.info]] <a href=\"" + 
          __escape(guard((context != null) ? context['url'] : null)) + 
          "/uid/" + 
          __escape(guard((context != null) ? context['uid'] : null)) + 
          "/settings\">[[email:unsub.cta]]</a>.\r\n\t\t\t\t\t\t<br />[[email:notif.post.unsub.one-click]] <a href=\"" + 
          __escape(guard((context != null) ? context['unsubUrl'] : null)) + 
          "\">[[email:unsubscribe]]</a>.\r\n\t\t\t\t\t\t" :
        "") + 
      "\r\n\t\t\t\t\t\t<br><br>\r\n\t\t\t\t\t</td>\r\n\t\t\t\t</tr>\r\n\t\t\t</table>\r\n\t\t\t<!-- Email Footer : END -->\r\n\r\n\t\t\t<!--[if mso]>\r\n\t\t\t</td>\r\n\t\t\t</tr>\r\n\t\t\t</table>\r\n\t\t\t<![endif]-->\r\n\t\t</div>\r\n\r\n\t</center>\r\n</body>\r\n\r\n</html>\r\n";
  }

  compiled.blocks = {
    'notifications': function notifications(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['notifications'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\r\n\t\t\t\t\t\t\t<li style=\"text-decoration: none; list-style-type: none; padding-bottom: 0.5em;\">\r\n\t\t\t\t\t\t\t\t<table role=\"presentation\" cellspacing=\"0\" cellpadding=\"0\" border=\"0\" width=\"100%\">\r\n\t\t\t\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t\t\t\t<td style=\"padding: 16px; font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol; width: 32px;\">\r\n\t\t\t\t\t\t\t\t\t\t\t" + 
          (guard((context != null && context['notifications'] != null && context['notifications'][key0] != null) ? context['notifications'][key0]['image'] : null) ?
            "\r\n\t\t\t\t\t\t\t\t\t\t\t<img style=\"vertical-align: middle; width: 32px; height: 32px; border-radius: 50%\" src=\"" + 
              __escape(guard((context != null && context['notifications'] != null && context['notifications'][key0] != null) ? context['notifications'][key0]['image'] : null)) + 
              "\" alt=\"\" />\r\n\t\t\t\t\t\t\t\t\t\t\t" :
            "\r\n\t\t\t\t\t\t\t\t\t\t\t<div style=\"vertical-align: middle; width: 32px; height: 32px; line-height: 32px; font-size: 16px; background-color: " + 
              __escape(guard((context != null && context['notifications'] != null && context['notifications'][key0] != null && context['notifications'][key0]['user'] != null) ? context['notifications'][key0]['user']['icon:bgColor'] : null)) + 
              "; color: white; text-align: center; display: inline-block; border-radius: 50%\">" + 
              __escape(guard((context != null && context['notifications'] != null && context['notifications'][key0] != null && context['notifications'][key0]['user'] != null) ? context['notifications'][key0]['user']['icon:text'] : null)) + 
              "</div>\r\n\t\t\t\t\t\t\t\t\t\t\t") + 
          "\r\n\t\t\t\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t\t\t\t<td style=\"padding: 16px; font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol; line-height: 16px; color: #333333;\">\r\n\t\t\t\t\t\t\t\t\t\t\t<p style=\"margin: 0;\"><a style=\"text-decoration:none !important; text-decoration:none; color: #333333;\" href=\"" + 
          __escape(guard((context != null && context['notifications'] != null && context['notifications'][key0] != null) ? context['notifications'][key0]['notification_url'] : null)) + 
          "\">" + 
          __escape(guard((context != null && context['notifications'] != null && context['notifications'][key0] != null) ? context['notifications'][key0]['bodyShort'] : null)) + 
          "</a></p>\r\n\t\t\t\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t\t</table>\r\n\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t";
      }, function alt() {
        return "";
      });
    },
    'publicRooms': function publicRooms(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['publicRooms'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\r\n\t\t\t\t\t\t\t<li style=\"text-decoration: none; list-style-type: none; padding-bottom: 0.5em;\">\r\n\t\t\t\t\t\t\t\t<table role=\"presentation\" cellspacing=\"0\" cellpadding=\"0\" border=\"0\" width=\"100%\">\r\n\t\t\t\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t\t\t\t<td style=\"padding: 16px; font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol; line-height: 16px; color: #333333;\">\r\n\t\t\t\t\t\t\t\t\t\t\t<p style=\"margin: 0;\"><a style=\"text-decoration:none !important; text-decoration:none; color: #333333;\" href=\"" + 
          __escape(guard((context != null) ? context['url'] : null)) + 
          "/chats/" + 
          __escape(guard((context != null && context['publicRooms'] != null && context['publicRooms'][key0] != null) ? context['publicRooms'][key0]['roomId'] : null)) + 
          "\"># [[email:digest.room-name-unreadcount, " + 
          __escape(guard((context != null && context['publicRooms'] != null && context['publicRooms'][key0] != null) ? context['publicRooms'][key0]['roomName'] : null)) + 
          ", " + 
          __escape(guard((context != null && context['publicRooms'] != null && context['publicRooms'][key0] != null) ? context['publicRooms'][key0]['unreadCountText'] : null)) + 
          "]]</a></p>\r\n\t\t\t\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t\t</table>\r\n\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t";
      }, function alt() {
        return "";
      });
    },
    'topTopics': function topTopics(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['topTopics'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\r\n\t\t\t\t\t\t\t<li style=\"text-decoration: none; list-style-type: none; padding-bottom: 0.5em;\">\r\n\t\t\t\t\t\t\t\t<table role=\"presentation\" cellspacing=\"0\" cellpadding=\"0\" border=\"0\" width=\"100%\">\r\n\t\t\t\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t\t\t\t<td style=\"padding: 6px 16px; font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol; width: 32px; vertical-align: middle;\">" + 
          __escape(helper(context, helpers, 'renderDigestAvatar', [guard(value)])) + 
          "</td>\r\n\t\t\t\t\t\t\t\t\t\t<td style=\"padding: 6px 16px; font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol; line-height: 16px; color: #333333;\">\r\n\t\t\t\t\t\t\t\t\t\t\t<p style=\"margin: 0;\"><a style=\"text-decoration:none !important; text-decoration:none; color: #333333;\" href=\"" + 
          __escape(guard((context != null) ? context['url'] : null)) + 
          "/topic/" + 
          __escape(guard((context != null && context['topTopics'] != null && context['topTopics'][key0] != null) ? context['topTopics'][key0]['slug'] : null)) + 
          "\"><strong>" + 
          __escape(guard((context != null && context['topTopics'] != null && context['topTopics'][key0] != null) ? context['topTopics'][key0]['title'] : null)) + 
          "</strong></a></p>\r\n\t\t\t\t\t\t\t\t\t\t\t<p style=\"margin: 0; font-size: 12px;\"><a style=\"text-decoration:none !important; text-decoration:none; color: #aaaaaa; line-height: 16px;\" href=\"" + 
          __escape(guard((context != null) ? context['url'] : null)) + 
          "/uid/" + 
          __escape(guard((context != null && context['topTopics'] != null && context['topTopics'][key0] != null && context['topTopics'][key0]['teaser'] != null && context['topTopics'][key0]['teaser']['user'] != null) ? context['topTopics'][key0]['teaser']['user']['uid'] : null)) + 
          "\"><strong>" + 
          __escape(guard((context != null && context['topTopics'] != null && context['topTopics'][key0] != null && context['topTopics'][key0]['teaser'] != null && context['topTopics'][key0]['teaser']['user'] != null) ? context['topTopics'][key0]['teaser']['user']['username'] : null)) + 
          "</strong></a></p>\r\n\t\t\t\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t\t\t\t<td colspan=\"2\" style=\"padding: 8px 16px; font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol; line-height: 16px; color: #333333;\">\r\n\t\t\t\t\t\t\t\t\t\t\t<p style=\"margin: 0; padding: 6px 0px; font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol; font-size: 13px; line-height: 26px; color: #666666;\">" + 
          __escape(guard((context != null && context['topTopics'] != null && context['topTopics'][key0] != null && context['topTopics'][key0]['teaser'] != null) ? context['topTopics'][key0]['teaser']['content'] : null)) + 
          "</p>\r\n\t\t\t\t\t\t\t\t\t\t\t<p style=\"margin: 0; padding: 6px 0px; font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol; line-height: 16px;\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<a style=\"text-decoration:none !important; text-decoration:none; text-transform: capitalize; color: #666666; line-height: 16px;\" href=\"" + 
          __escape(guard((context != null) ? context['url'] : null)) + 
          "/topic/" + 
          __escape(guard((context != null && context['topTopics'] != null && context['topTopics'][key0] != null) ? context['topTopics'][key0]['slug'] : null)) + 
          "\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<small><strong><span style=\"color: #aaaaaa;\">&rsaquo;</span> [[global:read_more]]</strong></small>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t\t\t</p>\r\n\t\t\t\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t\t</table>\r\n\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t" + 
          (index === length - 1 ?
            "" :
            "\r\n\t\t\t\t\t\t\t<li style=\"text-decoration: none; list-style-type: none; margin: 0px 64px 16px 64px; border-bottom: 1px solid #dddddd\"></li>\r\n\t\t\t\t\t\t\t") + 
          "\r\n\t\t\t\t\t\t\t";
      }, function alt() {
        return "";
      });
    },
    'popularTopics': function popularTopics(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['popularTopics'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\r\n\t\t\t\t\t\t\t<li style=\"text-decoration: none; list-style-type: none; padding-bottom: 0.5em;\">\r\n\t\t\t\t\t\t\t\t<table role=\"presentation\" cellspacing=\"0\" cellpadding=\"0\" border=\"0\" width=\"100%\">\r\n\t\t\t\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t\t\t\t<td style=\"padding: 6px 16px; font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol; width: 32px; vertical-align: middle;\">" + 
          __escape(helper(context, helpers, 'renderDigestAvatar', [guard(value)])) + 
          "</td>\r\n\t\t\t\t\t\t\t\t\t\t<td style=\"padding: 6px 16px; font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol; line-height: 16px; color: #333333;\">\r\n\t\t\t\t\t\t\t\t\t\t\t<p style=\"margin: 0;\"><a style=\"text-decoration:none !important; text-decoration:none; color: #333333;\" href=\"" + 
          __escape(guard((context != null) ? context['url'] : null)) + 
          "/topic/" + 
          __escape(guard((context != null && context['popularTopics'] != null && context['popularTopics'][key0] != null) ? context['popularTopics'][key0]['slug'] : null)) + 
          "\"><strong>" + 
          __escape(guard((context != null && context['popularTopics'] != null && context['popularTopics'][key0] != null) ? context['popularTopics'][key0]['title'] : null)) + 
          "</strong></a></p>\r\n\t\t\t\t\t\t\t\t\t\t\t<p style=\"margin: 0; font-size: 12px;\"><a style=\"text-decoration:none !important; text-decoration:none; color: #aaaaaa; line-height: 16px;\" href=\"" + 
          __escape(guard((context != null) ? context['url'] : null)) + 
          "/uid/" + 
          __escape(guard((context != null && context['popularTopics'] != null && context['popularTopics'][key0] != null && context['popularTopics'][key0]['teaser'] != null && context['popularTopics'][key0]['teaser']['user'] != null) ? context['popularTopics'][key0]['teaser']['user']['uid'] : null)) + 
          "\"><strong>" + 
          __escape(guard((context != null && context['popularTopics'] != null && context['popularTopics'][key0] != null && context['popularTopics'][key0]['teaser'] != null && context['popularTopics'][key0]['teaser']['user'] != null) ? context['popularTopics'][key0]['teaser']['user']['username'] : null)) + 
          "</strong></a></p>\r\n\t\t\t\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t\t\t\t<td colspan=\"2\" style=\"padding: 8px 16px; font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol; line-height: 16px; color: #333333;\">\r\n\t\t\t\t\t\t\t\t\t\t\t<p style=\"margin: 0; padding: 6px 0px; font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol; font-size: 13px; line-height: 26px; color: #666666;\">" + 
          __escape(guard((context != null && context['popularTopics'] != null && context['popularTopics'][key0] != null && context['popularTopics'][key0]['teaser'] != null) ? context['popularTopics'][key0]['teaser']['content'] : null)) + 
          "</p>\r\n\t\t\t\t\t\t\t\t\t\t\t<p style=\"margin: 0; padding: 6px 0px; font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol; line-height: 16px;\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<a style=\"text-decoration:none !important; text-decoration:none; text-transform: capitalize; color: #666666; line-height: 16px;\" href=\"" + 
          __escape(guard((context != null) ? context['url'] : null)) + 
          "/topic/" + 
          __escape(guard((context != null && context['popularTopics'] != null && context['popularTopics'][key0] != null) ? context['popularTopics'][key0]['slug'] : null)) + 
          "\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<small><strong><span style=\"color: #aaaaaa;\">&rsaquo;</span> [[global:read_more]]</strong></small>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t\t\t</p>\r\n\t\t\t\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t\t</table>\r\n\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t" + 
          (index === length - 1 ?
            "" :
            "\r\n\t\t\t\t\t\t\t<li style=\"text-decoration: none; list-style-type: none; margin: 0px 64px 16px 64px; border-bottom: 1px solid #dddddd\"></li>\r\n\t\t\t\t\t\t\t") + 
          "\r\n\t\t\t\t\t\t\t";
      }, function alt() {
        return "";
      });
    },
    'recent': function recent(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['recent'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\r\n\t\t\t\t\t\t\t<li style=\"text-decoration: none; list-style-type: none; padding-bottom: 0.5em;\">\r\n\t\t\t\t\t\t\t\t<table role=\"presentation\" cellspacing=\"0\" cellpadding=\"0\" border=\"0\" width=\"100%\">\r\n\t\t\t\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t\t\t\t<td style=\"padding: 6px 16px; font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol; width: 32px; vertical-align: middle;\">" + 
          __escape(helper(context, helpers, 'renderDigestAvatar', [guard(value)])) + 
          "</td>\r\n\t\t\t\t\t\t\t\t\t\t<td style=\"padding: 6px 16px; font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol; line-height: 16px; color: #333333;\">\r\n\t\t\t\t\t\t\t\t\t\t\t<p style=\"margin: 0;\"><a style=\"text-decoration:none !important; text-decoration:none; color: #333333;\" href=\"" + 
          __escape(guard((context != null) ? context['url'] : null)) + 
          "/topic/" + 
          __escape(guard((context != null && context['recent'] != null && context['recent'][key0] != null) ? context['recent'][key0]['slug'] : null)) + 
          "\"><strong>" + 
          __escape(guard((context != null && context['recent'] != null && context['recent'][key0] != null) ? context['recent'][key0]['title'] : null)) + 
          "</strong></a></p>\r\n\t\t\t\t\t\t\t\t\t\t\t<p style=\"margin: 0; font-size: 12px;\"><a style=\"text-decoration:none !important; text-decoration:none; color: #aaaaaa; line-height: 16px;\" href=\"" + 
          __escape(guard((context != null) ? context['url'] : null)) + 
          "/uid/" + 
          __escape(guard((context != null && context['recent'] != null && context['recent'][key0] != null && context['recent'][key0]['teaser'] != null && context['recent'][key0]['teaser']['user'] != null) ? context['recent'][key0]['teaser']['user']['uid'] : null)) + 
          "\"><strong>" + 
          __escape(guard((context != null && context['recent'] != null && context['recent'][key0] != null && context['recent'][key0]['teaser'] != null && context['recent'][key0]['teaser']['user'] != null) ? context['recent'][key0]['teaser']['user']['username'] : null)) + 
          "</strong></a></p>\r\n\t\t\t\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t\t\t\t<td colspan=\"2\" style=\"padding: 8px 16px; font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol; line-height: 16px; color: #333333;\">\r\n\t\t\t\t\t\t\t\t\t\t\t<p style=\"margin: 0; padding: 6px 0px; font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol; font-size: 13px; line-height: 26px; color: #666666;\">" + 
          __escape(guard((context != null && context['recent'] != null && context['recent'][key0] != null && context['recent'][key0]['teaser'] != null) ? context['recent'][key0]['teaser']['content'] : null)) + 
          "</p>\r\n\t\t\t\t\t\t\t\t\t\t\t<p style=\"margin: 0; padding: 6px 0px; font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol; line-height: 16px;\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<a style=\"text-decoration:none !important; text-decoration:none; text-transform: capitalize; color: #666666; line-height: 16px;\" href=\"" + 
          __escape(guard((context != null) ? context['url'] : null)) + 
          "/topic/" + 
          __escape(guard((context != null && context['recent'] != null && context['recent'][key0] != null) ? context['recent'][key0]['slug'] : null)) + 
          "\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<small><strong><span style=\"color: #aaaaaa;\">&rsaquo;</span> [[global:read_more]]</strong></small>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t\t\t</p>\r\n\t\t\t\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t\t</table>\r\n\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t" + 
          (index === length - 1 ?
            "" :
            "\r\n\t\t\t\t\t\t\t<li style=\"text-decoration: none; list-style-type: none; margin: 0px 64px 16px 64px; border-bottom: 1px solid #dddddd\"></li>\r\n\t\t\t\t\t\t\t") + 
          "\r\n\t\t\t\t\t\t\t";
      }, function alt() {
        return "";
      });
    }
  };

  return compiled;
})
