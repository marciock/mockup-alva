import actions from '../store/actions.js';
export class InitAction extends HTMLElement{

    static get observedAttributes(){
        return ['template']
    }

    constructor(){
        super();

        this.actions=actions;
       


        const div=document.createElement('div');

        this.appendChild(div);
    }
    connectedCallback(){
        const div=this.querySelector('div');
        
    }
    attributeChangedCallback(name,oldValue,newValue){

        if(name==='template'){
           

            this.actions.template(newValue);
        }
       
    }
}