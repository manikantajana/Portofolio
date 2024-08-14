let cont = document.getElementById("cont");
let bgimg = document.getElementById("bgimg");
const mainhead = document.getElementById("mainhead");
const lpara = document.getElementById("lpara");
const dpara = document.getElementById("dpara");
const profilehead = document.getElementById("profilehead");
const profilepara = document.getElementById("profilepara");
const skillhead = document.getElementById("skillhead");
const skillset = document.getElementById("skillset");
const skill1i = document.getElementById("skill1i");
const skill1p = document.getElementById("skill1p");
const skill2i = document.getElementById("skill2i");
const skill2p = document.getElementById("skill2p");
const skill3i = document.getElementById("skill3i");
const skill3p = document.getElementById("skill3p");
const skill4i = document.getElementById("skill4i");
const skill4p = document.getElementById("skill4p");
const skill5i = document.getElementById("skill5i");
const skill5p = document.getElementById("skill5p");
const skill6i = document.getElementById("skill6i");
const skill6p = document.getElementById("skill6p");
const contpro = document.getElementById("contpro");
const projhead = document.getElementById("projhead");
const cardcont = document.getElementById("cardcont");
const cardhead = document.getElementById("cardhead");
const foot = document.getElementById("sectioncontact");
const mail = document.getElementById("mail");
const mainpara = document.getElementById("mainpara");
const skillset2 = document.getElementById("skillset2");
const certhead = document.getElementById("certhead");
const certpara = document.getElementById("certpara");


document.addEventListener('DOMContentLoaded', (event) => {
    // Get the checkbox input element
    const toggleSwitch = document.getElementById('toggleSwitch');

    // Add an event listener to the checkbox
    toggleSwitch.onclick = function() {
        if (toggleSwitch.checked) {

            cont.style.backgroundColor = "black";
            bgimg.style.backgroundImage = "url('https://images.unsplash.com/photo-1554470938-85886688c6e6?q=80&w=1776&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')";
            mainhead.style.color = "white";
            lpara.style.color = "white";
            dpara.style.color = "white";
            profilepara.style.color = "white";
            profilepara.style.borderColor = "white";
            profilehead.style.color = "white";
            skillhead.style.color = "white";
            skillset.style.backgroundColor = "white";
            skill1i.style.color = "black";
            skill1p.style.color = "black";
            skill2i.style.color = "black";
            skill2p.style.color = "black";
            skill3i.style.color = "black";
            skill3p.style.color = "black";
            skill4i.style.color = "black";
            skill4p.style.color = "black";
            skill5i.style.color = "black";
            skill5p.style.color = "black";
            skill6i.style.color = "black";
            skill6p.style.color = "black";
            contpro.style.backgroundColor = "black";
            projhead.style.color = "white";
            cardcont.style.borderColor = "black";
            mainpara.style.color = "white";
            skillset2.style.backgroundColor = "white";
            certhead.style.color = "white";
            certpara.style.color = "black";

            // Perform actions when the switch is ON
        } else {

            // Perform actions when the switch is OFF
            cont.style.backgroundColor = "white";
            bgimg.style.backgroundImage = "url('https://images.unsplash.com/photo-1518655048521-f130df041f66?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')";
            mainhead.style.color = "black";
            lpara.style.color = "black";
            dpara.style.color = "black";
            profilepara.style.borderColor = "black";
            profilepara.style.color = "black";
            profilehead.style.color = "black";
            skillhead.style.color = "black";
            skillset.style.backgroundColor = "black";
            skill1i.style.color = "white";
            skill1p.style.color = "white";
            skill2i.style.color = "white";
            skill2p.style.color = "white";
            skill3i.style.color = "white";
            skill3p.style.color = "white";
            skill4i.style.color = "white";
            skill4p.style.color = "white";
            skill5i.style.color = "white";
            skill5p.style.color = "white";
            skill6i.style.color = "white";
            skill6p.style.color = "white";
            contpro.style.backgroundColor = "white";
            projhead.style.color = "black";
            cardcont.style.borderColor = "black";
            mainpara.style.color = "black";
            skillset2.style.backgroundColor = "black";
            certhead.style.color = "black";
            certpara.style.color = "white";

        }
    };
});
