const members = [
  {
    name: "Turingan, Maria Mamiracle",
    role: "20 Years Old · Frontend",
    image: "member1.jpeg",
    bio: "AY, AYY, AYYYYYYYYYYYYYYYYYY",
    instagram: "https://www.instagram.com/mi_ramennotyours"
  },
  {
    name: "Candava, Princess Xyrah",
    role: "Backend / 20",
    image: "member2.jpg",
    bio: "AYY LAVEEEEEEET!!",
    instagram: "https://www.instagram.com/xyrahcandava"
  },
  {
    name: "Ramos, Kyla",
    role: "Web Designer / 20",
    image: "member3.jpg",
    bio: "okay na to",
    instagram: "https://www.instagram.com/kialaramos"
  },
  {
    name: "Ramirez, Kleine Cyrus",
    role: "Backend / 21",
    image: "member4.jpg",
    bio: "ano",
    instagram: "https://www.instagram.com/ramirezkleined"
  },
  {
    name: "Marfil, Princess Angel",
    role: "Database / 19",
    image: "member5.jpg",
    bio: "Geww",
    instagram: "https://www.instagram.com/prncs_ngel"
  },
  {
    name: "Pedida, Janelle",
    role: "Web Designer / 19",
    image: "member6.jpg",
    bio: "Goodness Gracious",
    instagram: "https://www.instagram.com/jnllegm"
  },
  {
    name: "Dela Rea, Aizel Nicole",
    role: "DEVELOPER ADMINISTRATOR/ 19",
    course: "BSIT",
    year: "3rd Year",
    image: "member7.jpg",
    bio: "From this, To this",
    instagram: "https://www.instagram.com/nclvx_co"
  }
];

const container = document.getElementById("member-container");

if (container) {
  container.classList.add("team-grid");

  members.forEach(member => {
    const article = document.createElement("article");
    article.className = "member-card";

    const photoWrapper = document.createElement("div");
    photoWrapper.className = "photo-wrapper";

    const img = document.createElement("img");
    img.src = member.image;
    img.alt = member.name;
    photoWrapper.appendChild(img);

    const cardBody = document.createElement("div");
    cardBody.className = "card-body";

    const name = document.createElement("h2");
    name.className = "name";
    name.textContent = member.name;

    const role = document.createElement("p");
    role.className = "role";
    role.textContent = member.role + (member.year ? " · " + member.year : "");

    cardBody.appendChild(name);
    cardBody.appendChild(role);

    if (member.course) {
      const course = document.createElement("p");
      course.className = "bio";
      course.textContent = member.course;
      cardBody.appendChild(course);
    }

    const link = document.createElement("a");
    link.href = member.instagram;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    link.className = "instagram-link";
    link.textContent = "📷 Visit Instagram";

    cardBody.appendChild(link);

    article.appendChild(photoWrapper);
    article.appendChild(cardBody);
    container.appendChild(article);
  });
}
