class Rectangle{
    constructor(width,height){
        this.width = width;
        this.height = height;
    }
    set width(newWidth){
        if(newWidth > 0){
            this._width = newWidth;
        }
        else{
            console.error("Width must be postive number");
        }
    }
    set height(newHeight){
        if(newHeight > 0){
            this._height = newHeight;
        }
        else{
            console.error("Height must be postive number");
        }
    }

    get width(){
        return this._width;
    }
    get height(){
        return this._height;
    }

    get area(){
        return this._width * this._height;
    }
}
// const rectangle = new Rectangle(-10000,"pizza");
const rectangle = new Rectangle(10,20);
console.log(rectangle); //Rectangle {_width: 10, _height: 20}
console.log(rectangle.area); //200