function BOXPROPERTY(x, y, parentElem) {

    this.flagX = true;
    this.flagY = true;
    this.x = x;
    this.y = y;
    this.box = null;

    this.create = function () {

        this.box = document.createElement('div');
        this.box.style.backgroundColor = "red";
        this.box.style.position = "absolute";
        this.box.style.height = 100 + 'px';
        this.box.style.width = 100 + 'px';
        parentElem.appendChild(this.box);

    }

    this.IncreaseMovement = function () {

        if (this.flagX == true) {
            // this.x = this.x + 3;
            this.x++;
        }
        else {
            // this.x = this.x - 3;
            this.x--;
        }

        if (this.flagY == true) {
            this.y++;
        }
        else {
            this.y--;
        }

    }

    this.move = function () {

        this.box.style.left = this.x + 'px';
        this.box.style.top = this.y + 'px';
    }

    this.bounce = function () {

        if (this.x >= 500) {
            this.flagX = false;
        }

        if (this.x <= 0) {
            this.flagX = true;
        }

        if (this.y >= 500) {
            this.flagY = false;
        }
        if (this.y <= 0) {
            this.flagY = true;
        }

    }

    this.collusion = function (arr) {

        for (var i = 0; i < 10; i++) {

            for (var j = 0; j < 10; j++) {

            }
        }

        // console.log(arr);
    }

    this.remove = function () {
        parentElem.removeChild(this.box);
    }

}


function controller() {

    var arr = [];

    for (var i = 0; i < 2; i++) {
        var boxObj = new BOXPROPERTY(Math.floor(Math.random() * 500), Math.floor(Math.random() * 500), parentElement);
        boxObj.create();
        boxObj.move();
        arr.push(boxObj);
    }

    arr[0].box.style.backgroundColor = "green";
    
    for (var i = 0; i < 2; i++) {
        for (var j = i + 1; j < arr.length; j++) {

            console.log(arr[i].x);
            if (((arr[i].x - (arr[j].x + 100)) >= -100) && ((arr[i].x - (arr[j].x + 100)) <= -1)) {

                console.log(arr[i].x - (arr[j].x + 150));
                console.log("hello");

                for (var k = 0; k <= 200; k++) {
                    arr[j].x++;

                }
                arr[j].move();

                console.log(arr[j].x);
            }
        }
    }

    this.movement = function () {

        for (var i = 0; i < arr.length; i++) {

            for (var j = i + 1; j < arr.length; j++) {
                console.log(arr[i].x, 'i');
                console.log(arr[j].x, 'j');


                // if (((arr[j].x) - (arr[i].x + 100)) == 0) { //&& (arr[i].x+100 < arr[j].x) ){//|| (arr[i] + 100 > arr[j])) {

                //     arr[i].box.style.backgroundColor = "yellow";
                //     arr[i].flagX = !arr[i].flagX;
                //     arr[j].flagX = !arr[j].flagX;

                // }

                if (((arr[i].x - (arr[j].x + 100)) <= 0)) {

                    arr[j].flagX = !arr[j].flagX;
                }

                // if (((arr[i].x - (arr[j].x + 100)) == 0)) { //|| (arr[j] + 100 > arr[i])) {

                //     arr[i].box.style.backgroundColor = "green";
                //     arr[i].flagX = !arr[i].flagX;
                //     arr[j].flagX = !arr[j].flagX;

                // }

                // if (((arr[i].x - (arr[j].x - 100)) <= 0)){ //|| (arr[j] + 100 > arr[i])) {

                //     arr[i].box.style.backgroundColor = "blue";
                //     arr[i].flagX = !arr[i].flagX;
                //     arr[j].flagX = !arr[j].flagX;


                // }

                // if (arr[i].x <= arr[j].x + 80) {

                //     arr[j].box.style.backgroundColor = "green";

                // }



            }

            // console.log(arr[i].x );

            arr[i].IncreaseMovement();
            arr[i].bounce();
            arr[i].move();
        }

    }
}

// setInterval(this.movement, 10);


controller();