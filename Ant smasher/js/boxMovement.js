var boxObjects = [];
var boxesGenerate = 1000;
var widthOfBoxes = 20;
var heightOfBoxes = 20;
var colorOfBoxes = 'blue';
var HorizontalSpeedOfBox = 1;
var VeticalSpeedOfBox = 2;
var antSmashed = document.getElementById('score');
var smashedCount = 0;
antSmashed.innerHTML = "Ant smashed = " + smashedCount;
var backgroundImage = "./img/ant-gif.gif";


function BoxProperty(x, y, parentElem) {

    this.flagX = true;
    this.flagY = true;
    this.xCoordinate = x;
    this.yCoordinate = y;
    this.box = null;
    this.dead = false;

    this.create = function () {

        this.box = document.createElement('div');
        this.box.style.backgroundColor = colorOfBoxes;
        this.box.style.background = "url( \'" + backgroundImage + "\') no-repeat";
        this.box.style.backgroundSize = 100 + '%';
        this.box.style.position = "absolute";
        this.box.style.height = heightOfBoxes + 'px';
        this.box.style.width = widthOfBoxes + 'px';
        parentElem.appendChild(this.box);
    }


    this.IncreaseMovement = function (i) {

        this.arrayIndex = i;

        if (this.flagX == true) {
            this.xCoordinate += HorizontalSpeedOfBox;
        }
        else {
            this.xCoordinate -= HorizontalSpeedOfBox;
        }

        if (this.flagY == true) {
            this.yCoordinate += VeticalSpeedOfBox;
        }
        else {
            this.yCoordinate -= VeticalSpeedOfBox;
        }

        this.box.onclick = function (event) {

            this.dead = true;
            event.target.style.background = "url('./img/blood.png') no-repeat";
            event.target.style.backgroundSize = 100 + "%";
            // parentElem.removeChild(this);
            smashedCount++;
            antSmashed.innerHTML = "Ant smashed = " + smashedCount;

            setTimeout(function () {

                parentElem.removeChild(event.target);
                boxObjects.splice(boxObjects[this.arrayIndex], 1)
                boxObjects.splice(i, 0, 'dead');

            }, 1000)

        }



    }

    this.setPosition = function () {

        this.box.style.left = this.xCoordinate + 'px';
        this.box.style.top = this.yCoordinate + 'px';

    }

    this.bounce = function () {

        this.box.style.left = this.xCoordinate + 'px';
        this.box.style.top = this.yCoordinate + 'px';

        if (this.xCoordinate >= (parentWidth - widthOfBoxes)) {
            this.flagX = false;
        }

        if (this.xCoordinate <= widthOfBoxes) {
            this.flagX = true;
        }

        if (this.yCoordinate >= (parentHeight - heightOfBoxes)) {
            this.flagY = false;
        }
        if (this.yCoordinate <= widthOfBoxes) {
            this.flagY = true;
        }

    }

    this.collusion = function () {

        for (var i = 0; i < boxObjects.length; i++) {


            for (var j = 0; j < boxObjects.length; j++) {

                if (boxObjects[i] == boxObjects[j]) {

                }

                else {
                    if (boxObjects[i].xCoordinate < boxObjects[j].xCoordinate + widthOfBoxes &&
                        boxObjects[i].xCoordinate + widthOfBoxes > boxObjects[j].xCoordinate &&
                        boxObjects[i].yCoordinate < boxObjects[j].yCoordinate + heightOfBoxes &&
                        boxObjects[i].yCoordinate + heightOfBoxes > boxObjects[j].yCoordinate) {

                        if (boxObjects[i].xCoordinate < boxObjects[j].xCoordinate + widthOfBoxes &&
                            boxObjects[i].xCoordinate + widthOfBoxes > boxObjects[j].xCoordinate) {

                            boxObjects[i].flagX = !boxObjects[i].flagX;

                        }

                        if (boxObjects[i].yCoordinate < boxObjects[j].yCoordinate + heightOfBoxes &&
                            boxObjects[i].yCoordinate + heightOfBoxes > boxObjects[j].yCoordinate) {

                            boxObjects[i].flagY = !boxObjects[i].flagY;

                        }

                    }
                }

            }


        }


    }



}


