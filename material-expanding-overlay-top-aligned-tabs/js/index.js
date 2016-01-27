var bHeight, bWidth, block, bname, closeBtn, closeContent, content, expand, openContent, updateValues, container, cHeight, cWidth, xVal, yVal;
container = $('#container');
block = $('.blocks__block');
bname = $('.blocks__name');
content = $('.blocks-content__content');
closeBtn = $('.blocks__content-close-dark, .blocks__content-close-light');
cHeight = container.height();
cWidth = container.width();
bHeight = block.height();
bWidth = block.width();
xVal = Math.round(cWidth / bWidth) + 0.03;
yVal = cHeight / bHeight + 0.03;
expand = function() {
    var aBlock, num;
    num = $(this).index();
    aBlock = block.eq(num);
    if (!aBlock.hasClass('active')) {
        bname.css('opacity', '0');  
      	aBlock.css({
            'transform': 'scale(' + xVal + ',' + yVal + ')',
            '-webkit-transform': 'scale(' + xVal + ',' + yVal + ')'
        });
        aBlock.addClass('active');
        openContent(num);
    }
};
openContent = function(num) {
    var aContent;
    content.css({
        'transition': 'all 0.3s 0.4s ease-out',
        '-webkit-transition': 'all 0.3s 0.4s ease-out'
    });
    aContent = content.eq(num);
    aContent.addClass('active');
};
closeContent = function() {
    bname.css('opacity', '1');
    content.css({
        'transition': 'all 0.1s 0 ease-out',
        '-webkit-transition': 'all 0.1s 0 ease-out'
    });
    block.css({
        'transform': 'scale(1)',
        '-webkit-transform': 'scale(1)'
    });
    block.removeClass('active');
    content.removeClass('active');
};
updateValues = function() {
    var yVal;
    var xVal;
    var bWidth;
    var bHeight;
    var cWidth;
    var cHeight;
    var aBlock;
    if (block.hasClass('active')) {
        aBlock = $('.blocks__block.active');
        cHeight = container.height();
        cWidth = container.width();
        bHeight = block.height();
        bWidth = block.width();
        xVal = Math.round(cWidth / bWidth) + 0.03;
        yVal = cHeight / bHeight + 0.03;
        aBlock.css({
            'transform': 'scale(' + xVal + ',' + yVal + ')',
            '-webkit-transform': 'scale(' + xVal + ',' + yVal + ')'
        });
    }
};

container.on('resize', updateValues);
bname.on('click', expand);
closeBtn.on('click', closeContent);