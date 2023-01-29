const navItems=document.querySelector('#nav-items');
const openNavBtn=document.querySelector('#open-navBtn');
const closeNavBtn=document.querySelector('#close-navBtn');
openNavBtn.addEventListener('click',()=>{
    navItems.style.display="flex";
    openNavBtn.style.display="none";
    closeNavBtn.style.display="inline-block"
})
const closeNav=()=>{
    navItems.style.display="none";
    openNavBtn.style.display="inline-block";
    closeNavBtn.style.display="none"
}
closeNavBtn.addEventListener('click',closeNav);