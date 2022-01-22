//Terrain Rotation
AFRAME.registerComponent("terrain-rotation-reader", {
    schema: {
      speedOfRotation: { type: "number", default: 0 },
    },
    init: function () {
      window.addEventListener("keydown", (e) => {
        if (e.key === "ArrowRight") {
            this.data.speedOfRotation += 5;
        }
        if (e.key === "ArrowLeft") {
            this.data.speedOfRotation -= 5;
        }
        var mapRotation = this.el.getAttribute("rotation");
  
      mapRotation.y += this.data.speedOfRotation;
  
      this.el.setAttribute("rotation", {
        x: mapRotation.x,
        y: mapRotation.y,
        z: mapRotation.z,
      });
      });
    },
    // tick: function () {
    //   var mapRotation = this.el.getAttribute("rotation");
  
    //   mapRotation.y += this.data.speedOfRotation;
  
    //   this.el.setAttribute("rotation", {
    //     x: mapRotation.x,
    //     y: mapRotation.y,
    //     z: mapRotation.z,
    //   });
    // },
  });
  
  //Plane rotation component
  AFRAME.registerComponent("car-rotation-reader", {
    schema: {
      speedOfRotation: { type: "number", default: 0 },
      speedOfAscent: { type: "number", default: 0 },
    },
    init: function () {
      window.addEventListener("keydown", (e) => {
        var car = document.querySelector("#carModel")
        var player = document.querySelector("#carModel").object3D
        var direction = new THREE.Vector3()
        var cameraEL = document.querySelector("#camera")
        player.getWorldDirection(direction)
        //get the data from the attributes
        this.data.speedOfRotation = this.el.getAttribute("rotation");
        this.data.speedOfAscent = this.el.getAttribute("position");
  
        var planeRotation = this.data.speedOfRotation;
        var planePosition = this.data.speedOfAscent;

        console.log(planeRotation)
        //control the attributes with the Arrow Keys
        if (e.key === "ArrowRight") {
        //   if (planeRotation.x < 10) {
            planeRotation.y += 5;
            this.el.setAttribute("rotation", planeRotation);
            // this.el.setAttribute("velocity", direction.multiplyScalar(0))
        //   }
        }
        if (e.key === "ArrowLeft") {
        //   if (planeRotation.x > -10) {
            planeRotation.y -= 5;
            this.el.setAttribute("rotation", planeRotation);
            // this.el.setAttribute("velocity", direction.multiplyScalar(0))
        //   }
        }
        if(e.key === "ArrowUp"){
          planeRotation.y += 5;
          this.el.setAttribute("velocity", direction.multiplyScalar(10))
        }
        if(e.key === "ArrowDown"){
          planeRotation.y += 5;
          this.el.setAttribute("velocity", direction.multiplyScalar(-5))
        }
        if(e.key === 32){
          this.el.setAttribute("velocity", direction.multiplyScalar(0))
        }
        console.log(planeRotation)
      });

      
    },
  });
  AFRAME.registerComponent("camera-rotation-reader", {
    schema: {
      speedOfRotation: { type: "number", default: 0 },
      speedOfAscent: { type: "number", default: 0 },
    },
    init: function () {
      window.addEventListener("keydown", (e) => {
        
        //get the data from the attributes
        this.data.speedOfRotation = this.el.getAttribute("rotation");
        this.data.speedOfAscent = this.el.getAttribute("position");
  
        var planeRotation = this.data.speedOfRotation;
        var planePosition = this.data.speedOfAscent;

        console.log(planeRotation)
        //control the attributes with the Arrow Keys
        if (e.key === "ArrowRight") {
        //   if (planeRotation.x < 10) {
            planeRotation.y += 1;
            this.el.setAttribute("rotation", planeRotation);
            // this.el.setAttribute("velocity", direction.multiplyScalar(0))
        //   }
        }
        if (e.key === "ArrowLeft") {
        //   if (planeRotation.x > -10) {
            planeRotation.y -= 1;
            this.el.setAttribute("rotation", planeRotation);
            // this.el.setAttribute("velocity", direction.multiplyScalar(0))
        //   }
        }
      });

      
    },

    tick:function(){
      var car = document.querySelector("#carModel")
      var player = document.querySelector("#carModel").object3D
      var direction = new THREE.Vector3()
      var cameraEL = document.querySelector("#camera")
      var position = car.getAttribute("position")
        var x = position.x 
        var y = position.y + 5
        var z = position.z + 5
        var camPosition = {x:x, y:y, z:z}
        this.el.setAttribute("position", camPosition)
        player.getWorldDirection(direction)
        this.el.setAttribute("direction", direction.multiplyScalar(1.5))
    }
  });