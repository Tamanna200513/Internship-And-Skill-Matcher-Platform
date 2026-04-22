"use client";
export default function AboutPage() {
  return (
    <>
      <section className="aboutSection">
        <div className="container">

          <h1 className="title text-white">About Us</h1>

          {/* Top Section */}
          <div className="aboutTop">
            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
              alt="students working"
              className="aboutImage"
            />

            <p className="description text-white">
              Internship and Skill Matcher Platform is designed to bridge the gap
              between students and companies. Our goal is to help students find
              internships based on their skills and interests while helping
              companies discover talented candidates efficiently.
            </p>
          </div>

          {/* Cards Section */}
          <div className="cards">

            <div className="card text-white">
              <img
                src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
                className="icon"
              />
              <h3 className="text-white">Our Mission</h3>
              <p>
                To simplify the internship search process by providing
                skill-based matching and personalized recommendations.
              </p>
            </div>

            <div className="card">
              <img
                src="https://cdn-icons-png.flaticon.com/512/1055/1055687.png"
                className="icon"
              />
              <h3 className="text-white">Our Vision</h3>
              <p>
                To become a leading platform that connects students and
                recruiters efficiently using smart technology.
              </p>
            </div>

            <div className="card">
              <img
                src="https://cdn-icons-png.flaticon.com/512/4149/4149671.png"
                className="icon"
              />
              <h3 className="text-white">What We Do</h3>
              <p>
                We analyze student skills, match them with company requirements,
                and provide a seamless application experience.
              </p>
            </div>

          </div>
        </div>
      </section>

      <style jsx>{`
        .aboutSection {
          padding: 80px 20px;
         
        }

        .container {
          max-width: 1100px;
          margin: auto;
          text-align: center;
        }

        .title {
          font-size: 38px;
          font-weight: bold;
          margin-bottom: 40px;
          color: #4452d3;
        }

        .aboutTop {
          display: flex;
          align-items: center;
          gap: 40px;
          margin-bottom: 60px;
          flex-wrap: wrap;
          justify-content: center;
        }

        .aboutImage {
          width: 420px;
          border-radius: 12px;
          box-shadow: 0 8px 20px rgba(0,0,0,0.15);
        }

        .description {
          font-size: 18px;
          color: #555;
          max-width: 500px;
          line-height: 1.7;
          text-align: left;
        }

        .cards {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
          gap: 25px;
          
        }

      .card {
  background: rgba(255, 255, 255, 0.1);  
  backdrop-filter: blur(25px);           
  -webkit-backdrop-filter: blur(10px);  
  
  padding: 30px;
  border-radius: 12px;

  border: 1px solid rgba(255, 255, 255, 0.2); 
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.15);

  transition: 0.3s ease;
}

        .card:hover {
          transform: translateY(-10px);
          box-shadow: 0 12px 28px rgba(0,0,0,0.15);
        }

        .icon {
          width: 60px;
          margin-bottom: 15px;
        }

        .card h3 {
          margin-bottom: 10px;
          color: #0070f3;
        }

        .card p {
          color: #666;
          font-size: 15px;
        }

        @media (max-width: 768px) {

          .aboutTop {
            flex-direction: column;
          }

          .aboutImage {
            width: 100%;
          }

          .description {
            text-align: center;
          }

          .title {
            font-size: 30px;
          }
        }
      `}</style>
    </>
  );
}
