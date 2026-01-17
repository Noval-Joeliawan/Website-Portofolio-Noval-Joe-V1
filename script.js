document.addEventListener("DOMContentLoaded", () => {
  // menu hamburger untuk hp
  const hamburger = document.querySelector(".hamburger");
  const navMenu = document.querySelector(".nav-menu");

  hamburger.addEventListener("click", () => {
    navMenu.classList.toggle("active");
    hamburger.classList.toggle("active");
  });

  //  zoom ketika pencet sertifikat
  const modal = document.getElementById("imgModal");
  const modalImg = document.getElementById("modalImg");
  const closeBtn = document.querySelector(".close");

  document.querySelectorAll(".cert-card img").forEach((img) => {
    img.onclick = () => {
      modal.style.display = "flex";
      modalImg.src = img.src;
    };
  });

  closeBtn.onclick = () => (modal.style.display = "none");

  modal.onclick = (e) => {
    if (e.target === modal) modal.style.display = "none";
  };
});
