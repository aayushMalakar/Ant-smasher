var Run = function () {

    for (var i = 0; i <= boxesGenerate; i++) {

        var boxObj = new BoxProperty(Math.floor(Math.random() * 500), Math.floor(Math.random() * 500), parentElement);
        boxObj.create();
        boxObj.setPosition();
        boxObjects.push(boxObj);
    }

    // this.distance = function (box1XCoordinate, box1YCoordinate, box2XCoordinate, box2YCoordinate) {

    //     var checkdistance = Math.sqrt(Math.pow(box1XCoordinate, 2) + Math.pow(box1YCoordinate, 2));

    // }


    this.movement = function () {

        for (var i = 0; i < boxObjects.length; i++) {

            // for (var j = 0; j < boxObjects.length; j++) {

            //     distance(boxObjects[i].x, boxObjects[i].y, boxObjects[j].x, boxObjects[j].y)
            // }

            if (boxObjects[i].dead == false) {

                boxObjects[i].collusion(boxObjects);
                boxObjects[i].IncreaseMovement(i);
                boxObjects[i].bounce();
            }

            if (boxObjects[i].dead == true) {
                console.log("dead");
            }

        }

    }

    setInterval(this.movement, 60);
}

Run();