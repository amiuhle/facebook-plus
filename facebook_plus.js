$(function() {
  
  var facebook_sharer = 'http://www.facebook.com/sharer/sharer.php?u=%u&amp;t=%t';
  
  var profile_link = $('.a-b-Rf-dB');
  
  var profile_name = profile_link.text();
  var profile_id = profile_link.attr('href').replace(/^\//, '');
  
  console.log('Profile data:', profile_name, profile_id);
  
  if(profile_link.length == 0) {
    console.log('Profile not found, exiting...');
    return;
  }
  
  var share = '<div class="a-Ja-h d-ra a-Ja-h-Nt1BRe a-b-f-i-Ka-C" role="menuitem" style="-webkit-user-select: none;" aria-pressed="false"><div class="d-ra-p" style="-webkit-user-select: none;">Post to Facebook</div></div>';
  
  $('div[role="menu"]').each(function(undefined, menu) {
    var $menu = $(menu);
    var user_link_selector = 'a[oid="' + profile_id + '"]';
    //check if this is a post by the current user
    if($menu.parent().find(user_link_selector).length > 0) {
      $share = $(share);
      $share.click(function() {
        // console.log($menu.parent().find(user_link_selector));
        //TODO add visibility (Public/Limited)
        var title = profile_name + " shared something on Google+";
        var target = $menu.parent().find('a[href^="' + profile_id + '/posts"]').attr('href');
        var url = 'http://plus.google.com/' + target;
        console.log('share', url);
        //TODO make title work (FB may have disabled this)
        window.open(facebook_sharer.replace(/\%u/, encodeURIComponent(url)).replace(/\%t/, encodeURIComponent(title)), '', 'width=200,height=80');
      });
      $menu.append($share);
    }
  });
});
