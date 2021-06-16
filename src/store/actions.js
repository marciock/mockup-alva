
export default{
 
    template(payload){

     // console.log(payload);
        const table=document.querySelector('table');

        table.innerHTML='';
        
        const url=`src/templates/template-${payload}.html`;
        fetch(url).then(res=>{
          return res.text()
        }).then(data=>{
          
            let parser=new DOMParser();

            let doc=parser.parseFromString(data,'text/html');
            const template=doc.getElementById(payload);

            table.appendChild(template.content.cloneNode(true))
            
        })
      

    },

}