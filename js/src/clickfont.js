/* 鼠标特效 */
var a_idx = 0;
jQuery(document).ready(function($) {
   $("body").click(function(e) {
       var a = new Array("写1个BUG", "不改BUG", "写10个BUG", "打死不改BUG", "写100个BUG", "BUG万岁", "别拦我写BUG" ,"写1000个BUG", "一个BUG一块钱", "改两个BUG打折", "这个不是BUG", "写无数个BUG");
       var $i = $("<span/>").text(a[a_idx]);
       a_idx = (a_idx + 1) % a.length;
       var x = e.pageX,
       y = e.pageY;
       $i.css({
           "z-index": 999999999999999999999999999999999999999999999999999999999999999999999,
           "top": y - 20,
           "left": x,
           "position": "absolute",
           "font-weight": "bold",
           "color": "#ff6651"
       });
       $("body").append($i);
       $i.animate({
           "top": y - 180,
           "opacity": 0
       },
       1500,
       function() {
           $i.remove();
       });
   });
});
