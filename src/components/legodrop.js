
export class LegoDrop extends HTMLElement{

    static get observedAttributes(){
        return ['oculta','rodada','referencia','jogador'];
    };
    constructor(){
       
    super();

    //const template=document.createElement('template');
    const tr1=document.createElement('tr');
    const tr2=document.createElement('tr');
    const tr3=document.createElement('tr');
    const tr4=document.createElement('tr');

    const td1=document.createElement('td');
    const td2=document.createElement('td');
    const td3=document.createElement('td');
    const td4=document.createElement('td');
    const td5=document.createElement('td');
    const td6=document.createElement('td');
    const td7=document.createElement('td');
    const td8=document.createElement('td');

    const formGroup3=document.createElement('div');
    const formGroup4=document.createElement('div');
    const formGroup5=document.createElement('div');
    const formGroup6=document.createElement('div');
    const formGroup7=document.createElement('div');
    const formGroup8=document.createElement('div');

    const rodada=document.createElement('h5');

    const jogador1=document.createElement('select');
    const jogador2=document.createElement('select');

    const point1=document.createElement('input');
    const point2=document.createElement('input');

    const dateTime=document.createElement('input');

    const buttonSave=document.createElement('button');

    tr1.dataset.id='tr1';
    tr2.dataset.id='tr2';
    tr3.dataset.id='tr3';
    tr4.dataset.id='tr4';

    td1.dataset.id='td1';
    td2.dataset.id='td2';
    td3.dataset.id='td3';
    td4.dataset.id='td4';
    td5.dataset.id='td5';
    td6.dataset.id='td6';
    td7.dataset.id='td7';
    td8.dataset.id='td8';

    rodada.dataset.id='rodada';

    jogador1.dataset.id='jogador1';
    jogador2.dataset.id='jogador2';

    point1.dataset.id='point1';
    point2.dataset.id='point2';

    dateTime.dataset.id='dateTime';

    buttonSave.dataset.id='buttonSave';


    formGroup3.dataset.id='formGroup3';
    formGroup4.dataset.id='formGroup4';
    formGroup5.dataset.id='formGroup5';
    formGroup6.dataset.id='formGroup6';
    formGroup7.dataset.id='formGroup7';
    formGroup8.dataset.id='formGroup8';


    formGroup3.appendChild(jogador1);
    formGroup4.appendChild(point1);
    formGroup5.appendChild(jogador2);
    formGroup6.appendChild(point2);
    formGroup7.appendChild(dateTime);
    formGroup8.appendChild(buttonSave);



    td1.appendChild(rodada);
    //td2.appendChild();
    td3.appendChild(formGroup3);
    td4.appendChild(formGroup4);
    td5.appendChild(formGroup5);
    td6.appendChild(formGroup6);
    td7.appendChild(formGroup7);
    td8.appendChild(formGroup8);

    tr1.appendChild(td1);
    tr1.appendChild(td2);

    tr2.appendChild(td3);
    tr2.appendChild(td4);

    tr3.appendChild(td5);
    tr3.appendChild(td6);

    tr4.appendChild(td7);
    tr4.appendChild(td8);


    this.appendChild(tr1);
    this.appendChild(tr2);
    this.appendChild(tr3);
    this.appendChild(tr4);
    
  //   this.appendChild(template)
       
        
        
    }
    connectedCallback(){

    
    const opt1=document.createElement('option');
    const opt2=document.createElement('option');

    const rodadaTirulo=this.querySelector('[data-id="rodada"]');
     
     const formGroup3=this.querySelector('[data-id="formGroup3"]');
     const formGroup4=this.querySelector('[data-id="formGroup4"]');
     const formGroup5=this.querySelector('[data-id="formGroup5"]');
     const formGroup6=this.querySelector('[data-id="formGroup6"]');
     const formGroup7=this.querySelector('[data-id="formGroup7"]');
     const formGroup8=this.querySelector('[data-id="formGroup8"]');


     /* const tr1=this.querySelector('[data-id="tr1"]');
      const tr2=this.querySelector('[data-id="tr2"]');
      const tr3=this.querySelector('[data-id="tr3"]');*/

      const td1=this.querySelector('[data-id="td1"]');
      const td2=this.querySelector('[data-id="td2"]');
      const td3=this.querySelector('[data-id="td3"]');
      const td4=this.querySelector('[data-id="td4"]');
      const td5=this.querySelector('[data-id="td5"]');
      const td6=this.querySelector('[data-id="td6"]');
      const td7=this.querySelector('[data-id="td7"]');
      const td8=this.querySelector('[data-id="td8"]');


       /* td1.classList.add('border');
        td2.classList.add('border');
        td3.classList.add('border');
        td4.classList.add('border');
        td5.classList.add('border');
        td6.classList.add('border');
        td7.classList.add('border');
        td8.classList.add('border');*/
       


      //formGroup1.appendChild(jogador1);
     // formGroup2.appendChild(jogador1);
     
      const jogador1=this.querySelector('[data-id="jogador1"]');
      const jogador2=this.querySelector('[data-id="jogador2"]');


      const point1=this.querySelector('[data-id="point1"]');
      const point2=this.querySelector('[data-id="point2"]');

      
      const dateTime=this.querySelector('[data-id="dateTime"]');
      const buttonSave=this.querySelector('[data-id="buttonSave"]');



      point1.type='text';
      point2.type='text';
      
      dateTime.type='datetime-local';
      
      buttonSave.type='button';

      formGroup3.classList.add('form-group');
      formGroup4.classList.add('form-group');
      formGroup5.classList.add('form-group');
      formGroup6.classList.add('form-group');
      formGroup7.classList.add('form-group');
      formGroup8.classList.add('form-group');

      jogador1.classList.add('form-control');
      jogador2.classList.add('form-control');

      opt1.value='0';
      opt1.text='';

      opt2.value='0';
      opt2.text='';

     

      jogador1.appendChild(opt1);
      jogador2.appendChild(opt2);


      point1.classList.add('form-control','border-info');
      point2.classList.add('form-contol','border-info');

      dateTime.classList.add('form-control');
      buttonSave.classList.add('btn','btn-sn','btn-success','rounded-pill');
      const icon=`<span class="fa fa-save"></span>`;
      buttonSave.innerHTML=icon;

     // rodadaTirulo.innerHTML='Rodada -';

      td3.style.width='5em';
      td5.style.width='5em';


      point1.style.width='3em';
      point2.style.width='3em';

      dateTime.style.width='10em';

      td1.style.height='2em';
      td2.style.height='2em';
      td3.style.height='2em';
      td4.style.height='2em';
      td5.style.height='2em';
      td6.style.height='2em';
      td7.style.height='2em';
      td8.style.height='2em';


      
     
       
    }
    attributeChangedCallback(name, oldValue,newValue){

       if(name==='rodada'){
        
          
        const rodadaTirulo=this.querySelector('[data-id="rodada"]');

        
        const titulo=`Rodada - ${newValue}`;

        rodadaTirulo.innerHTML=titulo;

          
          
              
       }
       if(name==='oculta'){
               
        const td3=this.querySelector('[data-id="td3"]');
         const td4=this.querySelector('[data-id="td4"]');
        
        // this.setAttribute('rodada',data[0].rodada)
       switch (newValue) {
           case 'none':
            td3.style=`display:${newValue};`;
             // point_2.inputMode='text';
               td4.style=`display:${newValue};`;
               //'width:4em;height:auto`;
               
               break;
            case 'block':
                td2.style='diplay:block';
                //'width:4em;height:auto;';
                 break;
           default:
               break;
       }  
       
          
     }
     if(name==='referencia'){
        let data=JSON.parse(newValue)
      const jogador1=this.querySelector('[data-id="jogador1"]');
      const jogador2=this.querySelector('[data-id="jogador2"]');
        
        if(data!==undefined ){
            
           jogador1.dataset.anterior=data[0];
           jogador2.dataset.anterior=data[1];
          
          
            
        }
       
      }
    }
}