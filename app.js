const root = document.getElementById("root");
const urlFacebook = "https://www.facebook.com/van.dung.2511";
const urlPhone = "0987654321";
const zalo = "0987654321";
const contactZalo = [
  {
    display: "Zalo",
    src: "./images/icon-zalo.png",
    url: `http://zalo.me/${zalo}`,
    classbtn: "btn_zalo_main",
    classP: "logo_zalo_main",
  },
];
const iconContact = [
  {
    display: "Facebook",
    src: "./images/icon-facebook.png",
    url: `${urlFacebook}`,
    classbtn: "btn_facebook_main",
    classP: "logo_facebook_main",
  },
  {
    display: "Messenger",
    src: "./images/icon-messenger.png",
    url: "",
    classbtn: "btn_mess_main",
    classP: "logo_mess_main",
  },

  {
    display: "",
    src: "./images/icon-call.png",
    url: `tel:${urlPhone}`,
    classbtn: "btn_zalo_main",
    classP: "logo_zalo_main",
  },
];
const divPlunginsMore = document.createElement("div");
divPlunginsMore.className = "plungins-more";
const contact = iconContact
  .map((item) => {
    return `
        <a href=${item.url} target="_blank" class =${item.classbtn}> 
            <p class=${item.classP} >
                <img src=${item.src} alt="" title=${item.display}> 
            </p>
        </a>`;
  })
  .join(",")
  .replaceAll(/,/g, "");
const contact_Zalo = contactZalo.map((item) => {
  return ` 
  <a href=${item.url} target="_blank" class =${item.classbtn}> 
    <p class=${item.classP} >
      <img src=${item.src} alt="" title=${item.display}> 
    </p>
  </a>`;
});
divPlunginsMore.innerHTML += contact;
divPlunginsMore.innerHTML += contact_Zalo;
root.appendChild(divPlunginsMore);