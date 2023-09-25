export const IngredientsDataManager = function(ind){
    let self = this;
    let currentIndex = 0;
    let data = self.loadIngredients();
};

//This function will set this.data as array and split it by , (hopefully this works wink wink)
IngredientsDataManager.prototype.loadIngredients = function(){
};

//this function will replace old ingredients list with a new one, we will call this function usually
// whenever change is made to the ingredient list and after that we will reload this whole class????
IngredientsDataManager.prototype.saveIngredients = function(){

}

IngredientsDataManager.prototype.getNextIngredient = function(){
    this.currentIndex++;
    return data[this.currentIndex];
};

//this will return whole data
IngredientsDataManager.prototype.getAllIngredients = function(){
    return this.data;
};

IngredientsDataManager.prototype.removeIngredient = function(index){
    
};

IngredientsDataManager.prototype.addIngredient = function(ingredientName){

};