export class LegoFirst extends HTMLElement{

    constructor(){
        super();
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


        const tdA=document.createElement('td');
        const tdB=document.createElement('td');
        const tdC=document.createElement('td');
        const tdD=document.createElement('td');


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

        tdA.dataset.id='tdA';
        tdB.dataset.id='tdB';
        tdC.dataset.id='tdC';
        tdD.dataset.id='tdD';

        tr1.appendChild(td1);
        tr1.appendChild(td2);
        tr1.appendChild(tdA);
    
        tr2.appendChild(td3);
        tr2.appendChild(td4);
        tr2.appendChild(tdB);
    
        tr3.appendChild(td5);
        tr3.appendChild(td6);
        tr3.appendChild(tdC);
    
        tr4.appendChild(td7);
        tr4.appendChild(td8);
        tr4.appendChild(tdD);

        this.appendChild(tr1);
        this.appendChild(tr2);
        this.appendChild(tr3);
        this.appendChild(tr4);
        
    }
    connectedCallback(){
        const td1=this.querySelector('[data-id="td1"]');
        const td2=this.querySelector('[data-id="td2"]');
        const td3=this.querySelector('[data-id="td3"]');
        const td4=this.querySelector('[data-id="td4"]');
        const td5=this.querySelector('[data-id="td5"]');
        const td6=this.querySelector('[data-id="td6"]');
        const td7=this.querySelector('[data-id="td7"]');
        const td8=this.querySelector('[data-id="td8"]');
  
        const tdA=this.querySelector('[data-id="tdA"]');
        const tdB=this.querySelector('[data-id="tdB"]');
        const tdC=this.querySelector('[data-id="tdC"]');
        const tdD=this.querySelector('[data-id="tdD"]');


        td5.classList.add('border-bottom-1');
        td6.classList.add('border-bottom-1');
        tdC.classList.add('border-bottom-1');
        

       

        td1.style.width='2em';
        td2.style.width='2em';
        td3.style.width='2em';
        td4.style.width='2em';
        td5.style.width='2em';
        td6.style.width='2em';
        td7.style.width='2em';
        td8.style.width='2em';
  
        tdA.style.width='2em';
        tdB.style.width='2em';
        tdC.style.width='2em';
        tdD.style.width='2em';
  
        td1.style.height='2em';
        td2.style.height='2em';
        td3.style.height='2em';
        td4.style.height='2em';
        td5.style.height='2em';
        td6.style.height='2em';
        td7.style.height='2em';
        td8.style.height='2em';
  
        tdA.style.height='2em';
        tdB.style.height='2em';
        tdC.style.height='2em';
        tdD.style.height='2em';
       
  

    }
}