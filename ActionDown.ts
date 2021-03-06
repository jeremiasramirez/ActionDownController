export interface typeButtons {
    text: any;
    handler: VoidFunction;
    icon:string;
    size: string;
   
}
export interface typeDown {
    header:any;
    buttons: typeButtons[]
    
 }

class ActionDown_{
    
    private containerDown:any;
    private containerDownHeader:any;
    private containerDownTitleHeader:any;
    private containerDownBody:any; 
    private containerDownIcon:any;

   
    
     private setterElements(){
        this.containerDown = document.createElement("section");
        this.containerDownHeader = document.createElement("header");
        this.containerDownTitleHeader = document.createElement("h4"),
        this.containerDownBody = document.createElement("div"); 
        this.containerDownBody = document.createElement("div"); 
        this.containerDown.setAttribute("id","containerDown")
        this.containerDownBody.setAttribute("id","containerDownBody")
        
        this.containerDownHeader.classList.add("container__down__header")

      
        this.containerDownTitleHeader.classList.add("container__down__header__title")
        this.containerDown.append(this.containerDownHeader)
        this.containerDownHeader.append(this.containerDownTitleHeader)
     
        
      
       
    }
     
    private setterBodyDown(items){
        this.containerDown.append(this.containerDownBody);
        
        this.containerDownTitleHeader.textContent=items[0].header
         
        
    }
    public create ( items  :typeDown[] ){

    
        
        if (!document.getElementById("containerDown")){
            
            this.setterElements()
            this.setterBodyDown(items)
            
  
            let lenItems = items[0].buttons.length

            for(let i=0;i<items.length; i++){
                
                for(let k=0; k<lenItems; k+=1){
    
                    let newItem = document.createElement("div")
                    newItem.classList.add("container__down__body__item")
                    newItem.setAttribute("id","container__down__body__item" )  
                    
                   this.containerDownIcon = document.createElement("ion-icon"); 
                   this.containerDownIcon.setAttribute("name", items[0].buttons[k].icon)
                   this.containerDownIcon.setAttribute("size", items[0].buttons[k].size)
                   newItem.append(this.containerDownIcon)
                    
                    
                    this.containerDownBody.append(newItem);
 
                }
    
            }
    
          
            //container
            this.containerDown.classList.add("container__down")
            this.containerDownBody.classList.add("container__down__body")   
            document.body.append(this.containerDown)

            let allItem = document.getElementById("containerDownBody") 
            let allItem2 = allItem.getElementsByClassName("container__down__body__item")
           
            for(let i=0; i<allItem2.length; i++){
            
                allItem2[i].addEventListener("click", (e)=>{
                   

                   items[0].buttons[i].handler()
                  
                    this.removeDown()

                     
                })
    
            }
            if (document.getElementById("closeDowns")){
                document.getElementById("closeDowns").addEventListener("click", ()=>{
                  this.removeDown() 
                })
            }
 
             
        }
       
    }

    public dismiss(){
        if (document.getElementById("containerDown")) {
            document.body.addEventListener("click", (e)=>{
                this.removeDown()
            })
        }
        else{
            return 
        }
    }

    private removeDown(){
        let removeDownReference =  document.getElementById("containerDown")
        setTimeout(()=>{
            removeDownReference.remove()
        }, 1000)
        


        setTimeout(()=>{

            removeDownReference.style.transition=".4s"
            removeDownReference.style.transform="translateY(300px)"
            removeDownReference.style.opacity=".4";
            document.body.style.overflow="hidden";
           
        }, 300)
        
    }
    
    

}





export const ActionDownController = new ActionDown_() 

