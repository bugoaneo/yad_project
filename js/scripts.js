$(document).ready(function () {

  $('a[data-target^="anchor"]').bind('click.smoothscroll', function () {
    var target = $(this).attr('href'),
      bl_top = $(target).offset().top - 250;
    $('body, html').animate({ scrollTop: bl_top }, 700);
    return false;
  });

});

window.addEventListener('load', function () {
  var
    ac = new FastAverageColor(),
    items = document.querySelectorAll('.teaser__item'),
    comments = document.querySelectorAll('.comment');
  for (var i = 0; i < items.length; i++) {
    var
      item = items[i],
      image = item.querySelector('img'),
      isBottom = item.classList.contains('teaser__item--big'),
      gradient = item.querySelector('.item__gradient'),
      height = image.naturalHeight,
      size = 40,
      color = ac.getColor(image, isBottom ? { top: height - size, height: size } : { height: size }),
      colorEnd = [].concat(color.value.slice(0, 3), 0).join(',');

    item.style.background = color.rgb;
    item.style.color = color.isDark ? 'white' : 'black';

    if (isBottom) {
      gradient.style.background = 'linear-gradient(to left, ' +
        'rgba(' + colorEnd + ') 0%, ' + color.rgba + ' 60%)';
    } else {
      gradient.style.background = 'linear-gradient(to bottom, ' +
        'rgba(' + colorEnd + ') 0%, ' + color.rgba + ' 60%)';
    }
  }
  // comments.forEach(elem => {
  //   if (!color.isDark) {
  //     elem.style.background = 'black';
  //     elem.style.color = 'rgba(255,255,255,.7)';
  //   }
  //   ifelse(color.isDark){
  //     elem.style.background = 'white';
  //     elem.style.color = 'rgba(0,0,0,.7)';
  //   }
  // });
}, false);

var moreBtn = document.querySelector(".menu__item--more"),
hideBtn = document.querySelectorAll(".menu__item.hide");

moreBtn.onclick = function() {
hideBtn.forEach(function (item) {
item.classList.toggle('hide');
});
this.classList.toggle('active');
};