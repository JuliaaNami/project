var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["00e46d60-0468-4c14-80ff-ef7cec4baec2","41fb2270-4145-4ce8-bba4-76626683adec","d9adb0af-672d-4cb1-91d4-c2a258a4b4a5","ca758cbe-d5ac-49eb-922f-e965a725b9db","548785ac-f8db-46ba-b891-1bf162fa3109","abd59bbd-c70f-4dec-abf3-37bf0edfaf36"],"propsByKey":{"00e46d60-0468-4c14-80ff-ef7cec4baec2":{"name":"carrot","sourceUrl":"assets/v3/animations/8OUdxH2YQ3Iwb5WYxPW70l5yhN6iiLEuMKi6B00DTWc/00e46d60-0468-4c14-80ff-ef7cec4baec2.png","frameSize":{"x":17,"y":43},"frameCount":1,"looping":true,"frameDelay":4,"version":"ruJaejmRfJNaMxr3SuZuJnYnnHMNFi3J","loadedFromSource":true,"saved":true,"sourceSize":{"x":17,"y":43},"rootRelativePath":"assets/v3/animations/8OUdxH2YQ3Iwb5WYxPW70l5yhN6iiLEuMKi6B00DTWc/00e46d60-0468-4c14-80ff-ef7cec4baec2.png"},"41fb2270-4145-4ce8-bba4-76626683adec":{"name":"brinjal","sourceUrl":"assets/v3/animations/8OUdxH2YQ3Iwb5WYxPW70l5yhN6iiLEuMKi6B00DTWc/41fb2270-4145-4ce8-bba4-76626683adec.png","frameSize":{"x":25,"y":43},"frameCount":1,"looping":true,"frameDelay":4,"version":"lQjJZZm3HbE3Viq42HpevHDScfHhBLiv","loadedFromSource":true,"saved":true,"sourceSize":{"x":25,"y":43},"rootRelativePath":"assets/v3/animations/8OUdxH2YQ3Iwb5WYxPW70l5yhN6iiLEuMKi6B00DTWc/41fb2270-4145-4ce8-bba4-76626683adec.png"},"d9adb0af-672d-4cb1-91d4-c2a258a4b4a5":{"name":"capcisum","sourceUrl":"assets/v3/animations/8OUdxH2YQ3Iwb5WYxPW70l5yhN6iiLEuMKi6B00DTWc/d9adb0af-672d-4cb1-91d4-c2a258a4b4a5.png","frameSize":{"x":27,"y":43},"frameCount":1,"looping":true,"frameDelay":4,"version":"42alhbxZDw3x3Bs9p4OEQmywT3Ug0.Gt","loadedFromSource":true,"saved":true,"sourceSize":{"x":27,"y":43},"rootRelativePath":"assets/v3/animations/8OUdxH2YQ3Iwb5WYxPW70l5yhN6iiLEuMKi6B00DTWc/d9adb0af-672d-4cb1-91d4-c2a258a4b4a5.png"},"ca758cbe-d5ac-49eb-922f-e965a725b9db":{"name":"orange","sourceUrl":"assets/v3/animations/8OUdxH2YQ3Iwb5WYxPW70l5yhN6iiLEuMKi6B00DTWc/ca758cbe-d5ac-49eb-922f-e965a725b9db.png","frameSize":{"x":35,"y":43},"frameCount":1,"looping":true,"frameDelay":4,"version":"am1ZsN9iJVDGz6j1kdR6F.Uwqa8Geqzn","loadedFromSource":true,"saved":true,"sourceSize":{"x":35,"y":43},"rootRelativePath":"assets/v3/animations/8OUdxH2YQ3Iwb5WYxPW70l5yhN6iiLEuMKi6B00DTWc/ca758cbe-d5ac-49eb-922f-e965a725b9db.png"},"548785ac-f8db-46ba-b891-1bf162fa3109":{"name":"tomato","sourceUrl":"assets/v3/animations/8OUdxH2YQ3Iwb5WYxPW70l5yhN6iiLEuMKi6B00DTWc/548785ac-f8db-46ba-b891-1bf162fa3109.png","frameSize":{"x":39,"y":43},"frameCount":1,"looping":true,"frameDelay":4,"version":"wHF4nX5_XBvm_nw07gY1_q5uyxqKuu6T","loadedFromSource":true,"saved":true,"sourceSize":{"x":39,"y":43},"rootRelativePath":"assets/v3/animations/8OUdxH2YQ3Iwb5WYxPW70l5yhN6iiLEuMKi6B00DTWc/548785ac-f8db-46ba-b891-1bf162fa3109.png"},"abd59bbd-c70f-4dec-abf3-37bf0edfaf36":{"name":"onion","sourceUrl":"assets/v3/animations/8OUdxH2YQ3Iwb5WYxPW70l5yhN6iiLEuMKi6B00DTWc/abd59bbd-c70f-4dec-abf3-37bf0edfaf36.png","frameSize":{"x":25,"y":43},"frameCount":1,"looping":true,"frameDelay":4,"version":"f1Ej.UF09fzgWUTlYQGQiF0iDTWqPt2s","loadedFromSource":true,"saved":true,"sourceSize":{"x":25,"y":43},"rootRelativePath":"assets/v3/animations/8OUdxH2YQ3Iwb5WYxPW70l5yhN6iiLEuMKi6B00DTWc/abd59bbd-c70f-4dec-abf3-37bf0edfaf36.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var carrot = createSprite(50,50,20,20)
var carrot2 = createSprite(120,50,20,20)
var carrot3 = createSprite(190,50,20,20)
var carrot4 = createSprite(260,50,20,20)
var carrot5 = createSprite (330,50,20,20)

carrot.setAnimation("carrot")
carrot2.setAnimation("carrot")
carrot3.setAnimation("carrot")
carrot4.setAnimation("carrot")
carrot5.setAnimation("carrot")

var brinjal = createSprite(50,120,20,20)
var brinjal2 = createSprite(120,120,20,20)
var brinjal3 = createSprite(190,120,20,20)
var brinjal4 = createSprite(260,120,20,20)
var brinjal5 = createSprite (330,120,20,20)

brinjal.setAnimation("brinjal")
brinjal2.setAnimation("brinjal")
brinjal3.setAnimation("brinjal")
brinjal4.setAnimation("brinjal")
brinjal5.setAnimation("brinjal")

var capcisum = createSprite(50,190,20,20)
var capcisum2 = createSprite(120,190,20,20)
var capcisum3 = createSprite(190,190,20,20)
var capcisum4 = createSprite(260,190,20,20)
var capcisum5 = createSprite (330,190,20,20)

capcisum.setAnimation("capcisum")
capcisum2.setAnimation("capcisum")
 capcisum3.setAnimation("capcisum")
 capcisum4.setAnimation("capcisum")
capcisum5.setAnimation("capcisum")

var onion = createSprite(50,260,20,20)
var onion2 = createSprite(120,260,20,20)
var onion3 = createSprite(190,260,20,20)
var onion4 = createSprite(260,260,20,20)
var onion5 = createSprite (330,260,20,20)

onion.setAnimation("onion")
onion2.setAnimation("onion")
 onion3.setAnimation("onion")
onion4.setAnimation("onion")
onion5.setAnimation("onion")

var tomato = createSprite(50,330,20,20)
var tomato2 = createSprite(120,330,20,20)
var tomato3 = createSprite(190,330,20,20)
var tomato4 = createSprite(260,330,20,20)
var tomato5 = createSprite (330,330,20,20)

tomato.setAnimation("tomato")
tomato2.setAnimation("tomato")
 tomato3.setAnimation("tomato")
tomato4.setAnimation("tomato")
tomato5.setAnimation("tomato")
function draw() {
  background("brown")
  drawSprites()
  
}



// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
