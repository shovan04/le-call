(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();let l=[];const c=r=>document.querySelector(r),u=c("#show-users-m-1");for(let r=0;r<20;r++)l.push(`<div class="user1 rounded-md flex items-center justify-start m-2 border-2 p-2 hover:border-blue-500" title="Test-${r}">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRinm5gbtIsaxputwomCq_38bG9Rw23Vg6vCARUGLA&s"
                        class="rounded-full w-10 h-10" title="Profile Photo" />
                    <div class="ms-3 flex w-full h-full justify-between items-center">
                        <p class="text-lg text-white font-semibold">Test-${r}</p>
                        <span class="text-gray-300 text-center w-12 h-full text-xl bottom-0">
                            <i class="fa-solid fa-phone-volume hover:text-blue-500 cursor-pointer" title="Call.."></i>
                        </span>
                    </div>
                </div>`);u.innerHTML=l;
