const root = document.getElementById("root");
const iconContact = [
  {
    display: "Facebook",
    src: "./images/icon-facebook.png",
    url: "https:facebook.com",
    classbtn: "btn_facebook_main",
    classP: "logo_facebook_main",
  },
  {
    display: "Messenger",
    src: "./images/icon-messenger.png",
    classbtn: "btn_mess_main",
    classP: "logo_mess_main",
  },
  {
    display: "Zalo",
    src: "./images/icon-zalo.png",
    url: "http://zalo.me/0987654321",
    classbtn: "btn_zalo_main",
    classP: "logo_zalo_main",
  },
  {
    display: "",
    src: "./images/icon-call.png",
    url: "tel:0987654321",
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
divPlunginsMore.innerHTML += contact;
root.appendChild(divPlunginsMore)
