

  // ===========================================

  window.onload = function() {
    let myElement = document.body;
    console.log(myElement)
    let mySparticles = new Sparticles(myElement, {

      "composition":"source-over",
      "count":30,
      "speed":5,
      "parallax":1,
      "direction":180,
      "xVariance":2,
      "yVariance":2,
      "rotate":true,
      "rotation":1,
      "alphaSpeed":10,
      "alphaVariance":1,
      "minAlpha":0,
      "maxAlpha":1,
      "minSize":1,
      "maxSize":10,
      "style":"fill",
      "bounce":false,
      "drift":1,
      "glow":0,
      "twinkle":false,
      "color":["random"],
      "shape":"circle",
      "imageUrl":""
    
    
      }, 400);
  }


  //==================================================
  