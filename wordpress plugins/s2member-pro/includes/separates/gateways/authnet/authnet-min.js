jQuery(document).ready(function(y){var e,p,i,l,o,I,x,v={"aria-required":"true"},b={"aria-required":"false"},z={disabled:"disabled"},g={"aria-required":"false",disabled:"disabled"};x=new Image(),x.src='<?php echo $vars["i"]; ?>/ajax-loader.gif';if(y("form.s2member-pro-authnet-registration-form").length>1||y("form.s2member-pro-authnet-checkout-form").length>1||y("form.s2member-pro-authnet-sp-checkout-form").length>1){return alert("Detected more than one s2Member Pro-Form.\n\nPlease use only ONE s2Member Pro-Form Shortcode on each Post/Page. Attempting to serve more than one Pro-Form on each Post/Page (even w/ DHTML) may result in unexpected/broken functionality.")}if((e=y("form#s2member-pro-authnet-cancellation-form")).length===1){var L="div#s2member-pro-authnet-cancellation-form-captcha-section",m="div#s2member-pro-authnet-cancellation-form-submission-section",u=y(m+" button#s2member-pro-authnet-cancellation-submit");ws_plugin__s2member_animateProcessing(u,"reset"),u.removeAttr("disabled");e.submit(function(){var R=this,P="",O="",S="";var Q=y(L+" input#recaptcha_response_field");y(":input",R).each(function(){var T=y.trim(y(this).attr("id")).replace(/---[0-9]+$/g,"");if(T&&(P=y.trim(y('label[for="'+T+'"]',R).first().children("span").first().text().replace(/[\r\n\t]+/g," ")))){if(O=ws_plugin__s2member_validationErrors(P,this,R)){S+=O+"\n\n"}}});if(S=y.trim(S)){alert('<?php echo c_ws_plugin__s2member_utils_strings::esc_js_sq (_x ("— Oops, you missed something: —", "s2member-front", "s2member")); ?>\n\n'+S);return false}else{if(Q.length&&!Q.val()){alert('<?php echo c_ws_plugin__s2member_utils_strings::esc_js_sq (_x ("— Oops, you missed something: —", "s2member-front", "s2member")); ?>\n\n<?php echo c_ws_plugin__s2member_utils_strings::esc_js_sq (_x ("Security Code missing. Please try again.", "s2member-front", "s2member")); ?>');return false}}u.attr(z),ws_plugin__s2member_animateProcessing(u);return true})}else{if((p=y("form#s2member-pro-authnet-update-form")).length===1){var s,t="div#s2member-pro-authnet-update-form-billing-method-section",F="div#s2member-pro-authnet-update-form-billing-address-section",k=t+' input[name="s2member_pro_authnet_update[card_type]"]',L="div#s2member-pro-authnet-update-form-captcha-section",m="div#s2member-pro-authnet-update-form-submission-section",u=y(m+" button#s2member-pro-authnet-update-submit");ws_plugin__s2member_animateProcessing(u,"reset"),u.removeAttr("disabled");(s=function(O){var P=y(k+":checked").val();if(y.inArray(P,["Visa","MasterCard","Amex","Discover"])!==-1){y(t+" > div.s2member-pro-authnet-update-form-div").show();y(t+" > div.s2member-pro-authnet-update-form-div :input").attr(v);y(t+" > div#s2member-pro-authnet-update-form-card-start-date-issue-number-div").hide();y(t+" > div#s2member-pro-authnet-update-form-card-start-date-issue-number-div :input").attr(b);y(F+" > div.s2member-pro-authnet-update-form-div").show();y(F+" > div.s2member-pro-authnet-update-form-div :input").attr(v);y(F).show(),(O)?y(t+" input#s2member-pro-authnet-update-card-number").focus():null}else{if(y.inArray(P,["Maestro","Solo"])!==-1){y(t+" > div.s2member-pro-authnet-update-form-div").show();y(t+" > div.s2member-pro-authnet-update-form-div :input").attr(v);y(F+" > div.s2member-pro-authnet-update-form-div").show();y(F+" > div.s2member-pro-authnet-update-form-div :input").attr(v);y(F).show(),(O)?y(t+" input#s2member-pro-authnet-update-card-number").focus():null}else{if(!P){y(t+" > div.s2member-pro-authnet-update-form-div").hide();y(t+" > div.s2member-pro-authnet-update-form-div :input").attr(b);y(t+" > div#s2member-pro-authnet-update-form-card-type-div").show();y(t+" > div#s2member-pro-authnet-update-form-card-type-div :input").attr(v);y(F+" > div.s2member-pro-authnet-update-form-div").hide();y(F+" > div.s2member-pro-authnet-update-form-div :input").attr(b);y(F).hide(),(O)?y(m+" button#s2member-pro-authnet-update-submit").focus():null}}}})();y(k).click(s).change(s);p.submit(function(){var R=this,P="",O="",S="";var Q=y(L+" input#recaptcha_response_field");if(!y(k+":checked").val()){alert('<?php echo c_ws_plugin__s2member_utils_strings::esc_js_sq (_x ("Please choose a Billing Method.", "s2member-front", "s2member")); ?>');return false}y(":input",R).each(function(){var T=y.trim(y(this).attr("id")).replace(/---[0-9]+$/g,"");if(T&&(P=y.trim(y('label[for="'+T.replace(/-(month|year)/,"")+'"]',R).first().children("span").first().text().replace(/[\r\n\t]+/g," ")))){if(O=ws_plugin__s2member_validationErrors(P,this,R)){S+=O+"\n\n"}}});if(S=y.trim(S)){alert('<?php echo c_ws_plugin__s2member_utils_strings::esc_js_sq (_x ("— Oops, you missed something: —", "s2member-front", "s2member")); ?>\n\n'+S);return false}else{if(Q.length&&!Q.val()){alert('<?php echo c_ws_plugin__s2member_utils_strings::esc_js_sq (_x ("— Oops, you missed something: —", "s2member-front", "s2member")); ?>\n\n<?php echo c_ws_plugin__s2member_utils_strings::esc_js_sq (_x ("Security Code missing. Please try again.", "s2member-front", "s2member")); ?>');return false}}u.attr(z),ws_plugin__s2member_animateProcessing(u);return true})}else{if((i=y("form#s2member-pro-authnet-registration-form")).length===1){var h,J,q,a="div#s2member-pro-authnet-registration-form-options-section",D="div#s2member-pro-authnet-registration-form-description-section",K="div#s2member-pro-authnet-registration-form-registration-section",L="div#s2member-pro-authnet-registration-form-captcha-section",m="div#s2member-pro-authnet-registration-form-submission-section",j=m+" input#s2member-pro-authnet-registration-nonce",u=y(m+" button#s2member-pro-authnet-registration-submit");ws_plugin__s2member_animateProcessing(u,"reset"),u.removeAttr("disabled");(h=function(O){if(!y(a+" select#s2member-pro-authnet-registration-options option").length){y(a).hide();y(D).show()}else{y(a).show();y(D).hide();y(a+" select#s2member-pro-authnet-registration-options").change(function(){y(j).val("option");i.attr("action",i.attr("action").replace(/#.*$/,"")+"#s2p-form");i.submit()})}})();(J=function(O){if(y(m+" input#s2member-pro-authnet-registration-names-not-required-or-not-possible").length){y(K+" > div#s2member-pro-authnet-registration-form-first-name-div").hide();y(K+" > div#s2member-pro-authnet-registration-form-first-name-div :input").attr(g);y(K+" > div#s2member-pro-authnet-registration-form-last-name-div").hide();y(K+" > div#s2member-pro-authnet-registration-form-last-name-div :input").attr(g)}})();(q=function(O){if(y(m+" input#s2member-pro-authnet-registration-password-not-required-or-not-possible").length){y(K+" > div#s2member-pro-authnet-registration-form-password-div").hide();y(K+" > div#s2member-pro-authnet-registration-form-password-div :input").attr(g)}})();y(K+" > div#s2member-pro-authnet-registration-form-password-div :input").keyup(function(){ws_plugin__s2member_passwordStrength(y(K+" input#s2member-pro-authnet-registration-username"),y(K+" input#s2member-pro-authnet-registration-password1"),y(K+" input#s2member-pro-authnet-registration-password2"),y(K+" div#s2member-pro-authnet-registration-form-password-strength"))});i.submit(function(){if(y.inArray(y(j).val(),["option"])===-1){var R=this,P="",O="",U="";var Q=y(L+" input#recaptcha_response_field");var T=y(K+' input#s2member-pro-authnet-registration-password1[aria-required="true"]');var S=y(K+" input#s2member-pro-authnet-registration-password2");y(":input",R).each(function(){var V=y.trim(y(this).attr("id")).replace(/---[0-9]+$/g,"");if(V&&(P=y.trim(y('label[for="'+V+'"]',R).first().children("span").first().text().replace(/[\r\n\t]+/g," ")))){if(O=ws_plugin__s2member_validationErrors(P,this,R)){U+=O+"\n\n"}}});if(U=y.trim(U)){alert('<?php echo c_ws_plugin__s2member_utils_strings::esc_js_sq (_x ("— Oops, you missed something: —", "s2member-front", "s2member")); ?>\n\n'+U);return false}else{if(T.length&&y.trim(T.val())!==y.trim(S.val())){alert('<?php echo c_ws_plugin__s2member_utils_strings::esc_js_sq (_x ("— Oops, you missed something: —", "s2member-front", "s2member")); ?>\n\n<?php echo c_ws_plugin__s2member_utils_strings::esc_js_sq (_x ("Passwords do not match up. Please try again.", "s2member-front", "s2member")); ?>');return false}else{if(T.length&&y.trim(T.val()).length<6){alert('<?php echo c_ws_plugin__s2member_utils_strings::esc_js_sq (_x ("— Oops, you missed something: —", "s2member-front", "s2member")); ?>\n\n<?php echo c_ws_plugin__s2member_utils_strings::esc_js_sq (_x ("Password MUST be at least 6 characters. Please try again.", "s2member-front", "s2member")); ?>');return false}else{if(Q.length&&!Q.val()){alert('<?php echo c_ws_plugin__s2member_utils_strings::esc_js_sq (_x ("— Oops, you missed something: —", "s2member-front", "s2member")); ?>\n\n<?php echo c_ws_plugin__s2member_utils_strings::esc_js_sq (_x ("Security Code missing. Please try again.", "s2member-front", "s2member")); ?>');return false}}}}}u.attr(z),ws_plugin__s2member_animateProcessing(u);return true})}else{if((l=y("form#s2member-pro-authnet-sp-checkout-form")).length===1){var h,C,H,r=true,G,n,f,A,c,B,s,a="div#s2member-pro-authnet-sp-checkout-form-options-section",D="div#s2member-pro-authnet-sp-checkout-form-description-section",E="div#s2member-pro-authnet-sp-checkout-form-coupon-section",M=E+" input#s2member-pro-authnet-sp-checkout-coupon-apply",K="div#s2member-pro-authnet-sp-checkout-form-registration-section",t="div#s2member-pro-authnet-sp-checkout-form-billing-method-section",k=t+' input[name="s2member_pro_authnet_sp_checkout[card_type]"]',F="div#s2member-pro-authnet-sp-checkout-form-billing-address-section",w=y(F+" > div#s2member-pro-authnet-sp-checkout-form-ajax-tax-div"),L="div#s2member-pro-authnet-sp-checkout-form-captcha-section",m="div#s2member-pro-authnet-sp-checkout-form-submission-section",j=m+" input#s2member-pro-authnet-sp-checkout-nonce",d=m+" button#s2member-pro-authnet-sp-checkout-submit";ws_plugin__s2member_animateProcessing(y(d),"reset"),y(d).removeAttr("disabled"),y(M).removeAttr("disabled");(h=function(O){if(!y(a+" select#s2member-pro-authnet-sp-checkout-options option").length){y(a).hide();y(D).show()}else{y(a).show();y(D).hide();y(a+" select#s2member-pro-authnet-sp-checkout-options").change(function(){y(j).val("option");l.attr("action",l.attr("action").replace(/#.*$/,"")+"#s2p-form");l.submit()})}})();(C=function(O){if(y(m+" input#s2member-pro-authnet-sp-checkout-coupons-not-required-or-not-possible").length){y(E).hide()}else{y(E).show()}})();(H=function(O){if(y(m+" input#s2member-pro-authnet-sp-checkout-tax-not-required-or-not-possible").length){w.hide(),r=false}})();(G=function(P){if(r&&!(P&&P.interval&&document.activeElement.id==="s2member-pro-authnet-sp-checkout-country")){var O=y(m+" input#s2member-pro-authnet-sp-checkout-attr").val();var S=y.trim(y(F+" input#s2member-pro-authnet-sp-checkout-state").val());var T=y(F+" select#s2member-pro-authnet-sp-checkout-country").val();var R=y.trim(y(F+" input#s2member-pro-authnet-sp-checkout-zip").val());var Q=S+"|"+T+"|"+R;if(S&&T&&R&&Q&&(!c||c!==Q)&&(c=Q)){(A)?A.abort():null,clearTimeout(f),f=null;w.html('<div><img src="<?php echo $vars["i"]; ?>/ajax-loader.gif" alt="<?php echo c_ws_plugin__s2member_utils_strings::esc_js_sq (esc_attr (_x ("Calculating Sales Tax...", "s2member-front", "s2member"))); ?>" /> <?php echo c_ws_plugin__s2member_utils_strings::esc_js_sq (_x ("calculating sales tax...", "s2member-front", "s2member")); ?></div>');f=setTimeout(function(){A=y.post('<?php echo c_ws_plugin__s2member_utils_strings::esc_js_sq (admin_url ("/admin-ajax.php")); ?>',{action:"ws_plugin__s2member_pro_authnet_ajax_tax",ws_plugin__s2member_pro_authnet_ajax_tax:'<?php echo c_ws_plugin__s2member_utils_strings::esc_js_sq (c_ws_plugin__s2member_utils_encryption::encrypt ("ws-plugin--s2member-pro-authnet-ajax-tax")); ?>',"ws_plugin__s2member_pro_authnet_ajax_tax_vars[attr]":O,"ws_plugin__s2member_pro_authnet_ajax_tax_vars[state]":S,"ws_plugin__s2member_pro_authnet_ajax_tax_vars[country]":T,"ws_plugin__s2member_pro_authnet_ajax_tax_vars[zip]":R},function(U){clearTimeout(f),f=null;try{w.html("<div>"+y.sprintf('<?php echo c_ws_plugin__s2member_utils_strings::esc_js_sq (_x ("<strong>Sales Tax%s:</strong> %s<br /><strong>— Total%s:</strong> %s", "s2member-front", "s2member")); ?>',((U.trial)?' <?php echo c_ws_plugin__s2member_utils_strings::esc_js_sq (_x ("Today", "s2member-front", "s2member")); ?>':""),((U.tax_per)?"<em>"+U.tax_per+"</em> ( "+U.cur_symbol+""+U.tax+" )":U.cur_symbol+""+U.tax),((U.trial)?' <?php echo c_ws_plugin__s2member_utils_strings::esc_js_sq (_x ("Today", "s2member-front", "s2member")); ?>':""),U.cur_symbol+""+U.total)+"</div>")}catch(V){}},"json")},((P&&P.keyCode)?1000:100))}else{if(!S||!T||!R||!Q){w.html(""),c=null}}}})();n=function(O){setTimeout(function(){G(O)},10)};y(F+" input#s2member-pro-authnet-sp-checkout-state").bind("keyup blur",G).bind("cut paste",n);y(F+" input#s2member-pro-authnet-sp-checkout-zip").bind("keyup blur",G).bind("cut paste",n);y(F+" select#s2member-pro-authnet-sp-checkout-country").bind("change",G);setInterval(function(){G({interval:true})},1000);(B=function(O){if(S2MEMBER_CURRENT_USER_IS_LOGGED_IN){y(K+" input#s2member-pro-authnet-sp-checkout-first-name").each(function(){var P=y(this),Q=P.val();(!Q)?P.val(S2MEMBER_CURRENT_USER_FIRST_NAME):null});y(K+" input#s2member-pro-authnet-sp-checkout-last-name").each(function(){var P=y(this),Q=P.val();(!Q)?P.val(S2MEMBER_CURRENT_USER_LAST_NAME):null});y(K+" input#s2member-pro-authnet-sp-checkout-email").each(function(){var P=y(this),Q=P.val();(!Q)?P.val(S2MEMBER_CURRENT_USER_EMAIL):null})}})();(s=function(O){if(y(m+" input#s2member-pro-authnet-sp-checkout-payment-not-required-or-not-possible").length){y(k).val(["Free"])}var P=y(k+":checked").val();if(y.inArray(P,["Free"])!==-1){y(t).hide(),y(F).hide();y(t+" > div.s2member-pro-authnet-sp-checkout-form-div").hide();y(t+" > div.s2member-pro-authnet-sp-checkout-form-div :input").attr(b);y(F+" > div.s2member-pro-authnet-sp-checkout-form-div").hide();y(F+" > div.s2member-pro-authnet-sp-checkout-form-div :input").attr(b);(!r)?w.hide():null;(O)?y(m+" button#s2member-pro-authnet-sp-checkout-submit").focus():null}else{if(y.inArray(P,["Visa","MasterCard","Amex","Discover"])!==-1){y(t).show(),y(F).show();y(t+" > div.s2member-pro-authnet-sp-checkout-form-div").show();y(t+" > div.s2member-pro-authnet-sp-checkout-form-div :input").attr(v);y(t+" > div#s2member-pro-authnet-sp-checkout-form-card-start-date-issue-number-div").hide();y(t+" > div#s2member-pro-authnet-sp-checkout-form-card-start-date-issue-number-div :input").attr(b);y(F+" > div.s2member-pro-authnet-sp-checkout-form-div").show();y(F+" > div.s2member-pro-authnet-sp-checkout-form-div :input").attr(v);(!r)?w.hide():null;(O)?y(t+" input#s2member-pro-authnet-sp-checkout-card-number").focus():null}else{if(y.inArray(P,["Maestro","Solo"])!==-1){y(t).show(),y(F).show();y(t+" > div.s2member-pro-authnet-sp-checkout-form-div").show();y(t+" > div.s2member-pro-authnet-sp-checkout-form-div :input").attr(v);y(F+" > div.s2member-pro-authnet-sp-checkout-form-div").show();y(F+" > div.s2member-pro-authnet-sp-checkout-form-div :input").attr(v);(!r)?w.hide():null;(O)?y(t+" input#s2member-pro-authnet-sp-checkout-card-number").focus():null}else{if(!P){y(t).show(),y(F).hide();y(t+" > div.s2member-pro-authnet-sp-checkout-form-div").hide();y(t+" > div.s2member-pro-authnet-sp-checkout-form-div :input").attr(b);y(t+" > div#s2member-pro-authnet-sp-checkout-form-card-type-div").show();y(t+" > div#s2member-pro-authnet-sp-checkout-form-card-type-div :input").attr(v);y(F+" > div.s2member-pro-authnet-sp-checkout-form-div").hide();y(F+" > div.s2member-pro-authnet-sp-checkout-form-div :input").attr(b);(!r)?w.hide():null;(O)?y(m+" button#s2member-pro-authnet-sp-checkout-submit").focus():null}}}}H()})();y(k).click(s).change(s);y(M).click(function(){y(j).val("apply-coupon"),l.submit()});l.submit(function(){if(y.inArray(y(j).val(),["option","apply-coupon"])===-1){var R=this,P="",O="",S="";var Q=y(L+" input#recaptcha_response_field");if(!y(k+":checked").val()){alert('<?php echo c_ws_plugin__s2member_utils_strings::esc_js_sq (_x ("Please choose a Billing Method.", "s2member-front", "s2member")); ?>');return false}y(":input",R).each(function(){var T=y.trim(y(this).attr("id")).replace(/---[0-9]+$/g,"");if(T&&(P=y.trim(y('label[for="'+T.replace(/-(month|year)/,"")+'"]',R).first().children("span").first().text().replace(/[\r\n\t]+/g," ")))){if(O=ws_plugin__s2member_validationErrors(P,this,R)){S+=O+"\n\n"}}});if(S=y.trim(S)){alert('<?php echo c_ws_plugin__s2member_utils_strings::esc_js_sq (_x ("— Oops, you missed something: —", "s2member-front", "s2member")); ?>\n\n'+S);return false}else{if(Q.length&&!Q.val()){alert('<?php echo c_ws_plugin__s2member_utils_strings::esc_js_sq (_x ("— Oops, you missed something: —", "s2member-front", "s2member")); ?>\n\n<?php echo c_ws_plugin__s2member_utils_strings::esc_js_sq (_x ("Security Code missing. Please try again.", "s2member-front", "s2member")); ?>');return false}}}y(d).attr(z),ws_plugin__s2member_animateProcessing(y(d)),y(M).attr(z);return true})}else{if((o=y("form#s2member-pro-authnet-checkout-form")).length===1){var h,C,H,r=true,G,n,f,A,c,q,s,B,a="div#s2member-pro-authnet-checkout-form-options-section",D="div#s2member-pro-authnet-checkout-form-description-section",E="div#s2member-pro-authnet-checkout-form-coupon-section",M=E+" input#s2member-pro-authnet-checkout-coupon-apply",K="div#s2member-pro-authnet-checkout-form-registration-section",N="div#s2member-pro-authnet-checkout-form-custom-fields-section",t="div#s2member-pro-authnet-checkout-form-billing-method-section",k=t+' input[name="s2member_pro_authnet_checkout[card_type]"]',F="div#s2member-pro-authnet-checkout-form-billing-address-section",w=y(F+" > div#s2member-pro-authnet-checkout-form-ajax-tax-div"),L="div#s2member-pro-authnet-checkout-form-captcha-section",m="div#s2member-pro-authnet-checkout-form-submission-section",j=m+" input#s2member-pro-authnet-checkout-nonce",d=m+" button#s2member-pro-authnet-checkout-submit";ws_plugin__s2member_animateProcessing(y(d),"reset"),y(d).removeAttr("disabled"),y(M).removeAttr("disabled");(h=function(O){if(!y(a+" select#s2member-pro-authnet-checkout-options option").length){y(a).hide();y(D).show()}else{y(a).show();y(D).hide();y(a+" select#s2member-pro-authnet-checkout-options").change(function(){y(j).val("option");o.attr("action",o.attr("action").replace(/#.*$/,"")+"#s2p-form");o.submit()})}})();(C=function(O){if(y(m+" input#s2member-pro-authnet-checkout-coupons-not-required-or-not-possible").length){y(E).hide()}else{y(E).show()}})();(H=function(O){if(y(m+" input#s2member-pro-authnet-checkout-tax-not-required-or-not-possible").length){w.hide(),r=false}})();(G=function(P){if(r&&!(P&&P.interval&&document.activeElement.id==="s2member-pro-authnet-checkout-country")){var O=y(m+" input#s2member-pro-authnet-checkout-attr").val();var S=y.trim(y(F+" input#s2member-pro-authnet-checkout-state").val());var T=y(F+" select#s2member-pro-authnet-checkout-country").val();var R=y.trim(y(F+" input#s2member-pro-authnet-checkout-zip").val());var Q=S+"|"+T+"|"+R;if(S&&T&&R&&Q&&(!c||c!==Q)&&(c=Q)){(A)?A.abort():null,clearTimeout(f),f=null;w.html('<div><img src="<?php echo $vars["i"]; ?>/ajax-loader.gif" alt="<?php echo c_ws_plugin__s2member_utils_strings::esc_js_sq (esc_attr (_x ("Calculating Sales Tax...", "s2member-front", "s2member"))); ?>" /> <?php echo c_ws_plugin__s2member_utils_strings::esc_js_sq (_x ("calculating sales tax...", "s2member-front", "s2member")); ?></div>');f=setTimeout(function(){A=y.post('<?php echo c_ws_plugin__s2member_utils_strings::esc_js_sq (admin_url ("/admin-ajax.php")); ?>',{action:"ws_plugin__s2member_pro_authnet_ajax_tax",ws_plugin__s2member_pro_authnet_ajax_tax:'<?php echo c_ws_plugin__s2member_utils_strings::esc_js_sq (c_ws_plugin__s2member_utils_encryption::encrypt ("ws-plugin--s2member-pro-authnet-ajax-tax")); ?>',"ws_plugin__s2member_pro_authnet_ajax_tax_vars[attr]":O,"ws_plugin__s2member_pro_authnet_ajax_tax_vars[state]":S,"ws_plugin__s2member_pro_authnet_ajax_tax_vars[country]":T,"ws_plugin__s2member_pro_authnet_ajax_tax_vars[zip]":R},function(U,W){clearTimeout(f),f=null;try{w.html("<div>"+y.sprintf('<?php echo c_ws_plugin__s2member_utils_strings::esc_js_sq (_x ("<strong>Sales Tax%s:</strong> %s<br /><strong>— Total%s:</strong> %s", "s2member-front", "s2member")); ?>',((U.trial)?' <?php echo c_ws_plugin__s2member_utils_strings::esc_js_sq (_x ("Today", "s2member-front", "s2member")); ?>':""),((U.tax_per)?"<em>"+U.tax_per+"</em> ( "+U.cur_symbol+""+U.tax+" )":U.cur_symbol+""+U.tax),((U.trial)?' <?php echo c_ws_plugin__s2member_utils_strings::esc_js_sq (_x ("Today", "s2member-front", "s2member")); ?>':""),U.cur_symbol+""+U.total)+"</div>")}catch(V){}},"json")},((P&&P.keyCode)?1000:100))}else{if(!S||!T||!R||!Q){w.html(""),c=null}}}})();n=function(O){setTimeout(function(){G(O)},10)};y(F+" input#s2member-pro-authnet-checkout-state").bind("keyup blur",G).bind("cut paste",n);y(F+" input#s2member-pro-authnet-checkout-zip").bind("keyup blur",G).bind("cut paste",n);y(F+" select#s2member-pro-authnet-checkout-country").bind("change",G);setInterval(function(){G({interval:true})},1000);(q=function(O){if(y(m+" input#s2member-pro-authnet-checkout-password-not-required-or-not-possible").length){y(K+" > div#s2member-pro-authnet-checkout-form-password-div").hide();y(K+" > div#s2member-pro-authnet-checkout-form-password-div :input").attr(g)}})();(B=function(O){if(S2MEMBER_CURRENT_USER_IS_LOGGED_IN){y(K+" input#s2member-pro-authnet-checkout-first-name").each(function(){var P=y(this),Q=P.val();(!Q)?P.val(S2MEMBER_CURRENT_USER_FIRST_NAME):null});y(K+" input#s2member-pro-authnet-checkout-last-name").each(function(){var P=y(this),Q=P.val();(!Q)?P.val(S2MEMBER_CURRENT_USER_LAST_NAME):null});y(K+" input#s2member-pro-authnet-checkout-email").val(S2MEMBER_CURRENT_USER_EMAIL).attr(g);y(K+" input#s2member-pro-authnet-checkout-username").val(S2MEMBER_CURRENT_USER_LOGIN).attr(g);y(K+" > div#s2member-pro-authnet-checkout-form-password-div").hide();y(K+" > div#s2member-pro-authnet-checkout-form-password-div :input").attr(g);if(y.trim(y(K+" > div#s2member-pro-authnet-checkout-form-registration-section-title").html())==='<?php echo c_ws_plugin__s2member_utils_strings::esc_js_sq (_x ("Create Profile", "s2member-front", "s2member")); ?>'){y(K+" > div#s2member-pro-authnet-checkout-form-registration-section-title").html('<?php echo c_ws_plugin__s2member_utils_strings::esc_js_sq (_x ("Your Profile", "s2member-front", "s2member")); ?>')}y(N).hide(),y(N+" :input").attr(g)}})();(s=function(O){if(y(m+" input#s2member-pro-authnet-checkout-payment-not-required-or-not-possible").length){y(k).val(["Free"])}var P=y(k+":checked").val();if(y.inArray(P,["Free"])!==-1){y(t).hide(),y(F).hide();y(t+" > div.s2member-pro-authnet-checkout-form-div").hide();y(t+" > div.s2member-pro-authnet-checkout-form-div :input").attr(b);y(F+" > div.s2member-pro-authnet-checkout-form-div").hide();y(F+" > div.s2member-pro-authnet-checkout-form-div :input").attr(b);(!r)?w.hide():null;(O)?y(m+" button#s2member-pro-authnet-checkout-submit").focus():null}else{if(y.inArray(P,["Visa","MasterCard","Amex","Discover"])!==-1){y(t).show(),y(F).show();y(t+" > div.s2member-pro-authnet-checkout-form-div").show();y(t+" > div.s2member-pro-authnet-checkout-form-div :input").attr(v);y(t+" > div#s2member-pro-authnet-checkout-form-card-start-date-issue-number-div").hide();y(t+" > div#s2member-pro-authnet-checkout-form-card-start-date-issue-number-div :input").attr(b);y(F+" > div.s2member-pro-authnet-checkout-form-div").show();y(F+" > div.s2member-pro-authnet-checkout-form-div :input").attr(v);(!r)?w.hide():null;(O)?y(t+" input#s2member-pro-authnet-checkout-card-number").focus():null}else{if(y.inArray(P,["Maestro","Solo"])!==-1){y(t).show(),y(F).show();y(t+" > div.s2member-pro-authnet-checkout-form-div").show();y(t+" > div.s2member-pro-authnet-checkout-form-div :input").attr(v);y(F+" > div.s2member-pro-authnet-checkout-form-div").show();y(F+" > div.s2member-pro-authnet-checkout-form-div :input").attr(v);(!r)?w.hide():null;(O)?y(t+" input#s2member-pro-authnet-checkout-card-number").focus():null}else{if(!P){y(t).show(),y(F).hide();y(t+" > div.s2member-pro-authnet-checkout-form-div").hide();y(t+" > div.s2member-pro-authnet-checkout-form-div :input").attr(b);y(t+" > div#s2member-pro-authnet-checkout-form-card-type-div").show();y(t+" > div#s2member-pro-authnet-checkout-form-card-type-div :input").attr(v);y(F+" > div.s2member-pro-authnet-checkout-form-div").hide();y(F+" > div.s2member-pro-authnet-checkout-form-div :input").attr(b);(!r)?w.hide():null;(O)?y(m+" button#s2member-pro-authnet-checkout-submit").focus():null}}}}})();y(k).click(s).change(s);y(M).click(function(){y(j).val("apply-coupon"),o.submit()});y(K+" > div#s2member-pro-authnet-checkout-form-password-div :input").keyup(function(){ws_plugin__s2member_passwordStrength(y(K+" input#s2member-pro-authnet-checkout-username"),y(K+" input#s2member-pro-authnet-checkout-password1"),y(K+" input#s2member-pro-authnet-checkout-password2"),y(K+" div#s2member-pro-authnet-checkout-form-password-strength"))});o.submit(function(){if(y.inArray(y(j).val(),["option","apply-coupon"])===-1){var R=this,P="",O="",U="";var Q=y(L+" input#recaptcha_response_field");var T=y(K+' input#s2member-pro-authnet-checkout-password1[aria-required="true"]');var S=y(K+" input#s2member-pro-authnet-checkout-password2");if(!y(k+":checked").val()){alert('<?php echo c_ws_plugin__s2member_utils_strings::esc_js_sq (_x ("Please choose a Billing Method.", "s2member-front", "s2member")); ?>');return false}y(":input",R).each(function(){var V=y.trim(y(this).attr("id")).replace(/---[0-9]+$/g,"");if(V&&(P=y.trim(y('label[for="'+V.replace(/-(month|year)/,"")+'"]',R).first().children("span").first().text().replace(/[\r\n\t]+/g," ")))){if(O=ws_plugin__s2member_validationErrors(P,this,R)){U+=O+"\n\n"}}});if(U=y.trim(U)){alert('<?php echo c_ws_plugin__s2member_utils_strings::esc_js_sq (_x ("— Oops, you missed something: —", "s2member-front", "s2member")); ?>\n\n'+U);return false}else{if(T.length&&y.trim(T.val())!==y.trim(S.val())){alert('<?php echo c_ws_plugin__s2member_utils_strings::esc_js_sq (_x ("— Oops, you missed something: —", "s2member-front", "s2member")); ?>\n\n<?php echo c_ws_plugin__s2member_utils_strings::esc_js_sq (_x ("Passwords do not match up. Please try again.", "s2member-front", "s2member")); ?>');return false}else{if(T.length&&y.trim(T.val()).length<6){alert('<?php echo c_ws_plugin__s2member_utils_strings::esc_js_sq (_x ("— Oops, you missed something: —", "s2member-front", "s2member")); ?>\n\n<?php echo c_ws_plugin__s2member_utils_strings::esc_js_sq (_x ("Password MUST be at least 6 characters. Please try again.", "s2member-front", "s2member")); ?>');return false}else{if(Q.length&&!Q.val()){alert('<?php echo c_ws_plugin__s2member_utils_strings::esc_js_sq (_x ("— Oops, you missed something: —", "s2member-front", "s2member")); ?>\n\n<?php echo c_ws_plugin__s2member_utils_strings::esc_js_sq (_x ("Security Code missing. Please try again.", "s2member-front", "s2member")); ?>');return false}}}}}y(d).attr(z),ws_plugin__s2member_animateProcessing(y(d)),y(M).attr(z);return true})}}}}}(I=function(){y("div#s2member-pro-authnet-form-response").each(function(){var O=y(this).offset();window.scrollTo(0,O.top-100)})})()});