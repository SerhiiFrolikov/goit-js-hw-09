const t=document.querySelector("body"),e=document.querySelector("button[data-start]"),a=document.querySelector("button[data-stop]");let o=`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,0)}`;e.addEventListener("click",(()=>{changeBgc=setInterval((()=>{e.disabled=!0,t.style.backgroundColor=o}),1e3)})),a.addEventListener("click",(()=>{clearInterval(changeBgc),e.disabled=!1}));
//# sourceMappingURL=01-color-switcher.242a8b1e.js.map
