    // Script has to be before the a-scene. It runs oddly or breaks the scene completely
    // Should multiple objects be allowed at a time here? The BYOH system will have 1 trait at a time. How many traits will be choosable?

    let colorVal; // redVis will be a bool variable that dictates whether the red square is visible or not 
    let sizeVal;

    function setup () { // *** getItem(X); needs to be in the setup() function for p5js. This is a requirement.

      colorVal = getItem('colorVal'); // On the first run through, getItem will run. If getItem hasn't been saved before, it will start as null.
      sizeVal = getItem('sizeVal');

      if (colorVal === null) {
        colorVal = null; // If the value is null then the initial value is false, meaning that the red box will not be on screen.
        document.querySelector('#box').setAttribute('color', '#000000'); // After assigning the value you then have to set the attribute. If you do not set it initially, it'll be created with the default value in the a-scene
      } else if (colorVal === 'red') { // If redVis is true, the red box will be visible.
        alert("Box will be Red");
        document.querySelector('#box').setAttribute('color', '#DB4F40');
      } else if (colorVal === 'blue') { // If redVis is false, the red box will not be visible.
        alert("Box will be Blue");
        document.querySelector('#box').setAttribute('color', Red );
      } 

      if (sizeVal === null) {
        sizeVal = 'small';
        document.querySelector('#box').setAttribute('depth', '0.5');
        document.querySelector('#box').setAttribute('height', '0.5');
        document.querySelector('#box').setAttribute('width', '0.5');
      } else if (sizeVal === 'small') {
        alert("Box will be small");
        document.querySelector('#box').setAttribute('depth', '0.5');
        document.querySelector('#box').setAttribute('height', '0.5');
        document.querySelector('#box').setAttribute('width', '0.5');
      } else if (sizeVal === 'big') {
        alert("Box will be big");
        document.querySelector('#box').setAttribute('depth', '1');
        document.querySelector('#box').setAttribute('height', '1');
        document.querySelector('#box').setAttribute('width', '1');
      }

    }

    // This function occurs when the window has loaded
    window.onload = function () { //Is this needed? Is this important?

      document.querySelector('#navColor').addEventListener("click", function() {
        alert("You're going to the Color page");
        document.querySelector('#size').style.visibility = 'hidden';
        document.querySelector('#color').style.visibility = 'visible';
      });

      document.querySelector('#navOrient').addEventListener("click", function() {
        alert("You're going to the Size page");
        document.querySelector('#color').style.visibility = 'hidden';
        document.querySelector('#size').style.visibility = 'visible';
      });






      // this refers to the red-box-button class and adds an event to the class that makes 
      document.querySelector('.red-button').addEventListener("click", function () {
        alert("Box will become Red"); // alert("string") is great for debugging and also holds up the code from running further
        document.querySelector('#box').setAttribute('color', Red); // Selects the object "red-box" by it's ID and changes the attribute 'visible' to the value 'false'.
        colorVal = 'red'; // After changing the value of the box, it's variable needs to be updated too.
        storeItem('colorVal', colorVal); // This stores the value as a 'Key' and then the 'data'. Using getItem will read the key and equal a value
      });

      // this refers to the blue-box-button. It is not currently set up to do anything.
      document.querySelector('.blue-button').addEventListener("click", function () {
        alert("Box will become Blue");
        document.querySelector('#box').setAttribute('color','#2A37AD');
        colorVal = 'blue';
        storeItem('colorVal', colorVal);
      });

      document.querySelector(".big-button").addEventListener("click", function () {
        alert("Box will be big");
        document.querySelector('#box').setAttribute('depth', '1');
        document.querySelector('#box').setAttribute('height', '1');
        document.querySelector('#box').setAttribute('width', '1');
        sizeVal = 'big';
        storeItem('sizeVal', sizeVal);
      });

      document.querySelector('.small-button').addEventListener("click", function () {
        alert("Box will be small");
        document.querySelector('#box').setAttribute('depth', '0.5');
        document.querySelector('#box').setAttribute('height', '0.5');
        document.querySelector('#box').setAttribute('width', '0.5');
        sizeVal = 'small';
        storeItem('sizeVal', sizeVal);
      })


    };

    // AFRAME.registerComponent('color', { //Only works outside of window.onload. did not work inside of window.onload
    //   init: function () {
    //     this.el.sceneEl.addEventListener('markerFound', () => {
    //   window.location = '/test-ar-target-color.html';
    //   })
    // }
    // });

    // AFRAME.registerComponent('size', { //Only works outside of window.onload. did not work inside of window.onload
    //   init: function () {
    //     this.el.sceneEl.addEventListener('markerFound', () => {
    //   window.location = '/test-ar-target-size.html';
    //   })
    // }
    // });