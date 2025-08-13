import React from "react";
import "./Contact.css";

const Contact = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Surisak Tivacharoenroj",
      role: "Chief Medical Officer",
      image:
        "https://scontent.fbkk28-1.fna.fbcdn.net/v/t1.15752-9/530232936_1287448056243677_3973052629924110348_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=0024fc&_nc_ohc=BfIch7aWsXcQ7kNvwExP2N9&_nc_oc=Adkrfw36dxfPDq6I5oqnFS-LpdHt1cSE3GpAZne6kzRroPnbPrZ4k3fGzir1iixU-5U&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.fbkk28-1.fna&oh=03_Q7cD3AFMneQeJmuhO3eDiNqpeqo_DxTcfYzPNl7tk2uPvQ8w5w&oe=68C3BDA5",
      email: "tawan.sws@gmail.com",
      instagram: "dr_sarahjohnson",
      facebook: "drsarahjohnson",
    },
    {
      id: 2,
      name: "Sarun Konsomboon",
      role: "Wellness Technology Director",
      image:
        "https://photos.google.com/search/CgAaKQonQUYxUWlwUEZIUkNMX2hkMHg2M18yeFZzQThKbVZVVWszRGEycTNFIjESLwotCisKKRInQUYxUWlwUEZIUkNMX2hkMHg2M18yeFZzQThKbVZVVWszRGEycTNFKLDqwJeKMw%3D%3D/photo/AF1QipMm7R3zo63VLO3Q7Q18CHi7_cD3aY5Z5Ril26KH",
      email: "sarun.deaw@gmail.com",
      instagram: "mike_wellness_tech",
      facebook: "michaelchentech",
    },
    {
      id: 3,
      name: "Ratchatapon Palahan",
      role: "Nutritionist & Health Coach",
      image:
        "https://instagram.fbkk28-1.fna.fbcdn.net/v/t1.15752-9/532972213_1301648141679564_1460291599006817861_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=0024fc&_nc_ohc=rrNBtjcy3GsQ7kNvwGWwOZu&_nc_oc=Adl_Tvd5Lv7jMyYFYR6-FCM54GanJAwiYnZV1ohZGvh87v5xLVAQ5tjK9KypubcWjtg&_nc_zt=23&_nc_ht=instagram.fbkk28-1.fna&oh=03_Q7cD3AHbS9_UZX-l0aPOGmc2-sGDRN4mNqyI4c0J3wPS6NTmNA&oe=68C3E0AB",
      email: "s6707012660191@email.kmutnb.ac.th",
      instagram: "dr_emily_nutrition",
      facebook: "dremilyrodriguez",
    },
    {
      id: 4,
      name: "Natlicha Boongthong",
      role: "Fitness & Wellness Specialist",
      image:
        "https://media.discordapp.net/attachments/1391118574071975938/1405098627386441758/IMG_4453.jpg?ex=689d9792&is=689c4612&hm=cd89258a9ce35b159bc7ddfb558bb48dfb732d64f55e06840df62ef917fd5884&=&format=webp&width=720&height=960",
      email: "natlichaboongthong@email.com",
      instagram: "james_fitness_guru",
      facebook: "jamesthompsonwellness",
    },
    {
      id: 5,
      name: "Sitanan Kansorn",
      role: "Mental Health & Mindfulness Expert",
      image:
        "https://scontent.fbkk28-1.fna.fbcdn.net/v/t1.15752-9/531603821_3965947163670976_9206917097849193438_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=0024fc&_nc_ohc=W2_mIKje7VYQ7kNvwEInDui&_nc_oc=AdnmGjFDNsEi1rC3Lt5iYlVQLSJbOkx6IMmrYNwkfbJYCju9Dv6c9r7CyRaeAfEzEwI&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.fbkk28-1.fna&oh=03_Q7cD3AFn_axRT8-HFPyBxu8UY7gWgM9QjtxvuIRSCnVB8ZDedA&oe=68C3C2B6",
      email: "Sitanankansorn@gmail.com",
      instagram: "dr_lisa_mindful",
      facebook: "drlisapark",
    },
    {
      id: 6,
      name: "Ukrit Sanitjai",
      role: "Home Environment Specialist",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop&crop=face",
      email: "s6707012660085@email.kmutnb.ac.th",
      instagram: "david_home_wellness",
      facebook: "davidkimwellness",
    },
  ];

  return (
    <div className="contact-page">
      <div className="contact-hero">
        <div className="container">
          <h1 className="contact-title">Meet Our Team</h1>
          <p className="contact-subtitle">
            Our dedicated professionals are here to support your wellness
            journey
          </p>
        </div>
      </div>

      <section className="team-section">
        <div className="container">
          <div className="team-grid">
            {teamMembers.map((member) => (
              <div key={member.id} className="team-card">
                <div className="team-image">
                  <img
                    src={member.image}
                    alt={member.name}
                    onError={(e) => {
                      e.target.src = `https://via.placeholder.com/300x300/68bb59/ffffff?text=${member.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}`;
                    }}
                  />
                </div>
                <div className="team-info">
                  <h3 className="team-name">{member.name}</h3>
                  <p className="team-role">{member.role}</p>

                  <div className="team-contact">
                    <a
                      href={`mailto:${member.email}`}
                      className="contact-email">
                      <span className="email-icon">✉️</span>
                      {member.email}
                    </a>
                  </div>

                  <div className="social-links">
                    <a
                      href={`https://instagram.com/${member.instagram}`}
                      className="social-link instagram"
                      target="_blank"
                      rel="noopener noreferrer">
                      <span className="social-icon">📷</span>
                      Instagram
                    </a>
                    <a
                      href={`https://facebook.com/${member.facebook}`}
                      className="social-link facebook"
                      target="_blank"
                      rel="noopener noreferrer">
                      <span className="social-icon">📘</span>
                      Facebook
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="contact-info">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-item">
              <h3>📱 Checkout our Mobile App</h3>
              <p>
                Download MyWellHome app
                <br />
                Available on iOS & Android
              </p>
              <a
                href="https://fbwuegfu.my.canva.site/mywellhome"
                target="_blank"
                rel="noopener noreferrer"
                className="app-link">
                Visit App Store
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
