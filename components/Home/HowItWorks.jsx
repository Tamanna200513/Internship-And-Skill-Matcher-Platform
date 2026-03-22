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

            <span className="arrow">›</span>

            <div className="how-card">
              <img src="https://media.istockphoto.com/id/901634176/vector/vector-target-and-arrow.jpg?s=612x612&w=0&k=20&c=PkNvEyMPZ9-p39U4IZfbzOgIF9lb6A-YnG-USGrrER8=" alt="match" />
              <h3>2. Get Matched</h3>
              <p>Find internships that fit your skills</p>
            </div>

            <span className="arrow">›</span>

            <div className="how-card">
              <img src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTF999v4XozfYl82iotWHmwh0O66OHumpLvUJeVnLYU-spkrWYn" alt="hired" />
              <h3>3. Apply & Get Hired</h3>
              <p>Apply for best-fit internships</p>
            </div>
          </div>

        </div>
      </section>

      <style jsx>{`
        .how-section {
          padding: 80px 20px;
          background: linear-gradient(to bottom, #f4f9ff, #ffffff);
        }

        /* 🔥 MAIN CENTER FIX */
        .container {
          max-width: 1100px;
          margin: 0 auto;
          text-align: center;
        }

        .how-title {
          font-size: 32px;
          font-weight: 700;
          color: #1e3a8a;
          margin-bottom: 50px;
        }

        .how-cards {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 30px;
          flex-wrap: wrap;
        }

        .how-card {
          background: white;
          width: 260px;
          padding: 25px;
          border-radius: 16px;
          box-shadow: 0 10px 25px rgba(0,0,0,0.08);
          transition: 0.3s;
        }

        .how-card:hover {
          transform: translateY(-8px);
        }

        .how-card img {
          width: 120px;
          height: auto;
          display: block;
          margin: 0 auto 20px;
        }

        .how-card h3 {
          font-size: 18px;
          color: #1e40af;
          margin-bottom: 8px;
        }

        .how-card p {
          color: #555;
          font-size: 14px;
        }

        .arrow {
          font-size: 40px;
          color: #2563eb;
          font-weight: bold;
        }

        /* 🔥 FOOTER GAP FIX */
        .how-section {
          margin-bottom: 80px;
        }

        /* 📱 MOBILE FIX */
        @media (max-width: 768px) {
          .arrow {
            display: none; /* mobile pe arrows hata do */
          }
        }
      `}</style>
    </>
  );
}