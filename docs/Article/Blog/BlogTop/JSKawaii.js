window.addEventListener("scroll", () =>
{
    // const SCRO1 = document.getElementById("testtest");
    const value = 3250
    const SCRO1 = document.getElementById("Scroll1");
    const SCRO2 = document.getElementById("Scroll2");
    const SCRO3 = document.getElementById("Scroll3");
    const SCRO4 = document.getElementById("Scroll4");
    const scroll = window.scrollY;
    if (scroll > value)
    {
      SCRO1.style.opacity = "1";
      SCRO1.style.zIndex = "1";
    }
    else {
      SCRO1.style.opacity = "0";
      SCRO1.style.zIndex = "-1";
    }
    if(scroll > value + 2500)
    {
      SCRO2.style.opacity = "1";
      SCRO2.style.zIndex = "1";
    }
    else
    {
      SCRO2.style.opacity = "0";
      SCRO2.style.zIndex = "-1";
    }
    if(scroll > value + 4000)
    {
      SCRO3.style.opacity = "1";
      SCRO3.style.zIndex = "1";
    }
    else
    {
      SCRO3.style.opacity = "0";
      SCRO3.style.zIndex = "-1";
    }
    if(scroll > value + 5000)
    {
      SCRO4.style.opacity = "1";
      SCRO4.style.zIndex = "1";
    }
    else
    {
      SCRO4.style.opacity = "0";
      SCRO4.style.zIndex = "-1";
    }
});