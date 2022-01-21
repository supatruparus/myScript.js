console.log('myScript ')
// Works now
let domElement = {
  get(){
      console.log('getter')
  },
  elem: document.querySelector('div'),
  class: 'circle',
  styleObject: {
      width: '340px',
      height: '100px',
      backgroundColor: 'yellow'
  },
  get style() {
      // console.log('Keys: ' + Object.keys(this.styleObject))
      // console.log(this.styleObject)
      return this.styleObject
      
          },
  set style(value) {
          this.styleObject = value
          let style = this.elem.style
          let keys = Object.keys(this.styleObject)
          let values = Object.values(this.styleObject)
          this.styleObject = value
          keys.forEach(function(key,index) {
          // console.log(`${key},  ${index}, ${this}`)
          style[key] = values[index]
         
     });
      
       },
          add() {
      myScript.addBlocks(this.class)
  }
      
}
const SetProperties = function(newvaluesObject){
  // console.log(targetObj)
  let targetObj = this
  let updatedObj = {}
  targetObjKeys = Object.keys(targetObj)
  let targetObjValues = Object.values(targetObj)
  let targetObjEntries = Object.entries(targetObj)

  let objectKeys = Object.keys(newvaluesObject)
  let newvaluesObjectEntries = Object.entries(newvaluesObject)
  objectKeys = Object.keys(newvaluesObject)
  console.log(objectKeys)
  // console.log('Целевой массив значений: ' + targetObjEntries )
  //Для каждого ключа нового объекта проверяем есть ли такой ключ в целевом объекте и если есть то
  objectKeys.forEach(elem => {
    let oldIndex = targetObjKeys.indexOf(elem)
    
    var newvaluesObjectIndex = objectKeys.indexOf(elem)
      
    if(targetObjKeys.includes(elem)){
      //если в целевом объекте есть такой ключ:
      
      var newvaluesObjectIndex = objectKeys.indexOf(elem)
    
      // console.log('ключ ' + key + ' есть в целевом массиве, старое значение = ' + oldValue + 'Ключ-значение = '
      //  + targetObjEntries[oldIndex] + ' Индекс = ' + oldIndex + 'Индекс в новом массиве = ' +  newvaluesObjectIndex + ' Ключ-значение = ' + newvaluesObjectEntries[newvaluesObjectIndex] )
      //заменяем значение этого ключа:
      targetObjEntries[oldIndex] = newvaluesObjectEntries[newvaluesObjectIndex]

    } else{
        //если нет такого ключа:
        // console.log(`Ключа ${key} нет в целевом объекте, ${newvaluesObjectEntries}`)
        targetObjEntries.push(newvaluesObjectEntries[newvaluesObjectIndex])
        console.log(newvaluesObjectEntries[newvaluesObjectIndex])
      }


      // Показать новый объект
    
 
  });
  // targetObjEntries.pop()
  // console.log(Object.fromEntries(targetObjEntries))
  // updatedObj = (Object.fromEntries(targetObjEntries))
  targetObj = updatedObj;
  // console.log(`Обновленный объект:  ${Object.values(updatedObj)} `)
  // console.log(updatedObj)
  // console.log(this)
  console.log(targetObjEntries)
  
  return targetObjEntries

}



let myScript = {
  addDraggable: function(){
  let maxZindex = 0;
  let draggables = document.getElementsByClassName("draggable");
for (var i = 0; i < draggables.length; i++) {
  let draggable = {
    startTouchX:"",
    startTouchY:"",
    offsetX:"",
    offsetY:"",
    startColor: getComputedStyle(draggables[i]).backgroundColor,
    zIndex: "",
    startWidth: "",
    startHeight: "",
  }
  //Set position absolute
  draggables[i].style.position = 'absolute'
  draggables[i].addEventListener('touchstart', function(e) {
    event.preventDefault(true);
    draggable.zIndex = parseInt(getComputedStyle(event.target).zIndex);
    let newzindex = maxZindex+1;
    if (maxZindex<newzindex) {
      maxZindex = newzindex;
    }
        event.target.style.zIndex= newzindex;
        
    draggable.startTouchX = event.changedTouches[0].clientX + parseInt(getComputedStyle(event.target).left);
    draggable.startTouchY = event.changedTouches[0].clientY + parseInt(getComputedStyle(event.target).top);
    draggable.offsetX = event.changedTouches[0].clientX - parseInt(getComputedStyle(event.target).left);
  
    draggable.offsetY = event.changedTouches[0].clientY - parseInt(getComputedStyle(event.target).top)
    draggable.startWidth = getComputedStyle(event.target).width;
    draggable.startHeight = getComputedStyle(event.target).height;
    // increaseSize(event.target, 110)
  });
  draggables[i].addEventListener('touchmove', drag);

function drag(){
  console.log('должен двигаться')
  //Change Color
  // event.target.style.backgroundColor = "red";
  let startX = parseInt(draggable.startTouchX);
  let startY = parseInt(draggable.startTouchY);
  let deltaX = event.changedTouches[0].clientX.toFixed(0) - parseInt(draggable.startTouchX) - draggable.offsetX;
  
  let deltaY = event.changedTouches[0].clientY.toFixed(0) - parseInt(draggable.startTouchY) - draggable.offsetY;
  
    
        let newposition = { 
      x: startX + deltaX + "px",
      y: startY + deltaY +"px",
    }
  event.target.style.left =newposition.x;
  event.target.style.top = newposition.y;
}
draggables[i].addEventListener('touchend', drop, event);

function drop() {
  // event.target.style.backgroundColor = draggable.startColor;
  event.target.style.width = draggable.startWidth;
  event.target.style.height = draggable.startHeight;
  
  // event.target.style.transform = "translate(+5%,+5%)";
}

}
},
 increaseSize: function(elem, percent) {

  let newWidth = parseInt(getComputedStyle(elem).width) / 100 * percent + "px";
  let newHeight = parseInt(getComputedStyle(elem).height) / 100 * percent + "px";
  elem.style.width = newWidth;
  elem.style.height = newHeight;
  let trpercent = (percent - 100) / 4;
  elem.style.transform = "translate(-"+(percent-100)/4+"%, -"+(percent-100)/4+"%)";
},

 addBlocks: function(myclass, left , top){
    let newBlock = document.body.appendChild(document.createElement("div"));
    newBlock.innerHTML = "NewBlock";
    newBlock.classList.add(myclass);
    newBlock.style.position = "absolute";
    newBlock.style.left = left;
    newBlock.style.top = top;
    let createdBlock = {
     
    }
    return newBlock;
  },
  getFirstElementByClass: function (classname){
    let elem = document.getElementsByClassName(classname)[0];
    return elem;
  },
  person: {
    firstName: {
      value: "Ivan",
      set(string){
        this.value = string;
      },
      get(){
        return this.value;
      }
    },
    lastName: {
      value: "Ivanov",
      set(string){
        this.value = string;
      },
      get(){
        return this.value;
      }
    },
    fullName: {
      value: "Alexandr Vasilievich",
      set(string){
        this.value = string;
      },
      get(){
        return this.value;
      }
    }
  },
   getDayfromNumber(x){
  switch(x){
    case 1:return("Понедельник");
    case 2:return("Вторник");
    case 3:return("Среда");
    case 4: return("Четверг");
    case 5:return("Пятница");
    case 6:return("Суббота");
    case 7:return("Воскресенье");
    case x<1:return ("меньше 1");
    default: return("Введите число от 1 до 7"+" ,а не " + typeof(x));
    }
  },
};
// export default function print(string){
//   console.log(string);
// }
// export {myScript};