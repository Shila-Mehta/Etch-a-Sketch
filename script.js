


const button=document.querySelector('button');

let count =0;

button.addEventListener('click',(e)=>{

      if(count===0){

        let number = +prompt('Add  a number  (number  should be in the range of 1 - 100');

        if(number >=1 &&  number <=100){
    
            const container=document.querySelector('.container');
            container.setAttribute('style','border:4px solid red');
        
        
          function sketchpad(){
            const divs=document.createElement('div');
            divs.setAttribute('style',"display:flex;  margin: 2px;  justify-content: space-between;  align-items: center; ");
            
            for(let i=0;i<number;i++){
                const div=document.createElement('div');
                div.setAttribute('style','  margin: 2px;  background-color:red; outline:none ; border-radius:5px;');

                div.addEventListener('mouseenter', () => {
                    div.style.backgroundColor = generateRandomColor();
                });
            
                div.style.height='30px';
                div.style.width='30px';

                divs.appendChild(div);
            }
        
            return divs;
        }
        
        
        for(let i=0;i<number;i++){
            const div=sketchpad();
            div.classList=`div${i+1}`;
           container.append(div) ;
        
        }
        
        }
        else{
            alert(' Invalid Input The number should be in the range defined');
        }
        
        count++;

      }
      else{
        const container=document.querySelector('.container');
        container.innerHTML='';
        container.removeAttribute('style','border');
        count=0;
      } 

})




function  generateRandomColor() {
    let x = Math.floor(Math.random() * 256); 
    let y = Math.floor(Math.random() * 256);
    let z = Math.floor(Math.random() * 256);

    let background = `rgb(${x}, ${y}, ${z})`; 
    console.log(background);

    return background;
}







