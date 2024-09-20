export enum Attribute {
    
    "image" = "image",
    "name" = "name",
    "uid" = "uid",
    "age" = "age",
    "gender" = "gender",
    "area" = "area",
    "position" = "position",
    "timeincompany" = "timeincompany",
    "experience" = "experience",

}

class Profile extends HTMLElement{
    
    image?: string;
    name?: string;
    uid?: number;
    age?: number;
    gender?: string;
    area?: string;
    position?: string;
    timeincompany?: number;
    experience?: number;
    
    static get observedAttributes(){
        const attrs: Record<Attribute,null> = {
            
            image: null,
            name: null,
            uid: null,
            age: null,
            gender: null,
            area: null,
            position: null,
            timeincompany: null,
            experience: null
        }
        return Object.keys(attrs); 
    }
    
    attributeChangedCallback(propName:Attribute,oldValue: string | undefined,newValue: string | undefined){
        switch(propName){
            case Attribute.uid :

                this.uid = newValue ? Number(newValue) : undefined;
            break;

            case Attribute.age:

            this.age = newValue ? Number(newValue) : undefined;
        break;
            
        case Attribute.timeincompany:
        this.timeincompany = newValue ? Number(newValue) : undefined;
        break;

        case Attribute.experience:
        this.experience = newValue ? Number(newValue) : undefined;
        break;
        

            default: 
            this[propName] = newValue;
            break;
        }
        
        this.render();
    }
    
    constructor(){
        super();
        this.attachShadow({mode: "open"});
    }
    
    connectedCallback(){
        this.render();
    }
    
    render(){
        if(this.shadowRoot){
            this.shadowRoot.innerHTML = `
            <section>
            <img src="${this.image}" alt="">
            <h1>${this.name}</h1>
            <p>ID : ${this.uid}</p>
            <p>Edad: ${this.age}</p>
            <p>Genero: ${this.gender}</p>
            <p>Posicion: ${this.position}</p>
            <p>Tiempo en la compañia: ${this.timeincompany}</p>
            <p>experiencia: ${this.experience}</p>

            </section>
            `
        }
    }
}

customElements.define("my-profile",Profile);
export default Profile;