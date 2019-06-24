var parentWidth = 1000;
var parentHeight = 600;

var parentElement = document.getElementById('container');
parentElement.style.border = "1px solid black";
parentElement.style.background = "url( './img/background.png ') no-repeat";
parentElement.style.backgroundSize = 100 + "%";

(function parentStyle(ele, parentWidth, parentHeight) {

    this.Element = ele;
    Element.style.width = parentWidth + 'px';
    Element.style.height = parentHeight + 'px';
    // Element.style.margin = 0 + 'px' + ' auto';

}(parentElement, parentWidth, parentHeight));




