window.onload = function () {
   // selecion de area donde estara el cursor flonate y del cursor
   const general = document.querySelector(".general");
   const cursor = document.querySelector(".cursor");

   // mostrar cursor
   general.addEventListener("mouseenter", function () {
      cursor.style.display = "block";
   });

   // Ocultar cursor
   general.addEventListener("mouseleave", function () {
      cursor.style.display = "none";
   });
   // evento raton donde cojemos cordenadas
   document.addEventListener("mousemove", function (e) {
      var rect = general.getBoundingClientRect();
      cursor.style.left = e.clientX - rect.left - cursor.offsetWidth / 2 + "px";
      cursor.style.top = e.clientY - rect.top - cursor.offsetHeight / 2 + "px";
   });
};
