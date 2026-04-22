"use client";

export default function HowItWorks() {
  return (
    <>
      <section className="how-section pb-24">

        <div className="container">
          
          <h2 className="how-title">How It Works</h2>

          <div className="how-cards">
            
            <div className="how-card">
              <img src="https://static.vecteezy.com/system/resources/previews/060/528/149/non_2x/edit-profile-icon-concept-vector.jpg" alt="profile" />
              <h3>1. Create Your Profile</h3>
              <p>Add your skills & resume</p>
            </div>

            <div className="how-card">
              <img src="https://media.istockphoto.com/id/901634176/vector/vector-target-and-arrow.jpg?s=612x612&w=0&k=20&c=PkNvEyMPZ9-p39U4IZfbzOgIF9lb6A-YnG-USGrrER8=" alt="match" />
              <h3>2. Get Matched</h3>
              <p>Find internships that fit your skills</p>
            </div>

            <div className="how-card">
              <img src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTF999v4XozfYl82iotWHmwh0O66OHumpLvUJeVnLYU-spkrWYn" alt="hired" />
              <h3>3. Apply & Get Hired</h3>
              <p>Apply for best-fit internships</p>
            </div>

            <div className="how-card">
              <img src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" alt="apply" />
              <h3>4. Apply in One Click</h3>
              <p>Submit instantly and track your applications</p>
            </div>
            <div className="how-card">
              <img src="https://cdn-icons-png.flaticon.com/512/190/190411.png" alt="job" />
              <h3>5. Get Hired</h3>
              <p>Receive interview calls and job offers</p>
            </div>

          </div>

        </div>
      </section>

      <style jsx>{`
        .how-section {
          padding: 80px 20px;
          margin-bottom: 120px;
        }

        .container {
          max-width: 1100px;
          margin: 0 auto;
          text-align: center;
        }

        .how-title {
          font-size: 32px;
          font-weight: 700;
          color: #ffffff;
          margin-bottom: 40px;
        }

        .how-cards {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 30px;
        }

        .how-card {
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          padding: 25px;
          border-radius: 16px;
          box-shadow: 0 10px 25px rgba(0,0,0,0.2);
          transition: 0.3s;
          color: white;
        }

        .how-card:hover {
          transform: translateY(-8px);
        }

        .how-card img {
          width: 100px;
          height: 100px;
          object-fit: contain;
          margin-bottom: 15px;
        }

        .how-card h3 {
          font-size: 18px;
          color: #fff;
          margin-bottom: 8px;
        }

        .how-card p {
          color: #ddd;
          font-size: 14px;
        }

        @media (max-width: 1024px) {
          .how-cards {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 600px) {
          .how-cards {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </>
  );
}