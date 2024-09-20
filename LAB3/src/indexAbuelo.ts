import * as components from "./components/indexPadre"
import Profile, { Attribute } from "./components/profile/profile";
import { data } from "./data/data";

class AppContainer extends HTMLElement {
    profiles: Profile[] = [];

    constructor(){
        super();
        this.attachShadow({mode:"open"});

        const filterData = data.filter(element => element.uid % 2== 0)

        filterData.forEach((user) => {
            const profileCard = this.ownerDocument.createElement("my-profile") as Profile;
            profileCard.setAttribute(Attribute.name,user.name);
            profileCard.setAttribute(Attribute.uid,String(user.uid));
            profileCard.setAttribute(Attribute.age,String(user.age));
            profileCard.setAttribute(Attribute.gender,user.gender);
            profileCard.setAttribute(Attribute.area,user.jobDetails.area);
            profileCard.setAttribute(Attribute.position,user.jobDetails.position);
            profileCard.setAttribute(Attribute.timeincompany,String(user.jobDetails.timeInCompany));
            profileCard.setAttribute(Attribute.experience,String(user.jobDetails.experience));
            this.profiles.push(profileCard);
        })
    }

    connectedCallback(){
        this.render();
    }

    render(){
        if(this.shadowRoot){
            this.shadowRoot.innerHTML = `
            <h1>Perfiles</h1>`;

            this.profiles.forEach((profile) => {
                this.shadowRoot?.appendChild(profile);
            })
        }
    }
}

customElements.define("app-container",AppContainer);