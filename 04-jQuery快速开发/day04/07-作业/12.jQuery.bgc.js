$.fn.bgc = function (color) {
    console.log(this);
    this.css('backgroundColor', color);
    return this;
}