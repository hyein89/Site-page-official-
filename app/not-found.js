import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="not-found-wrapper">
      {/* Internal CSS for Animation */}
      <style>{`
        body {
          margin: 0;
          overflow: hidden; /* Mencegah scroll */
          background: #1a1a1a;
        }
        .not-found-wrapper {
          height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          text-align: center;
          background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
          background-size: 400% 400%;
          animation: gradientBG 15s ease infinite;
          color: white;
          font-family: 'Roboto', sans-serif;
        }

        .error-code {
          font-size: 150px;
          font-weight: 900;
          letter-spacing: 10px;
          margin: 0;
          text-shadow: 4px 4px 0px rgba(0,0,0,0.2);
          animation: float 6s ease-in-out infinite;
        }

        .error-message {
          font-size: 24px;
          margin-bottom: 30px;
          font-weight: 300;
          opacity: 0.9;
        }

        .btn-custom {
          padding: 15px 30px;
          font-size: 18px;
          background: white;
          color: #333;
          border-radius: 50px;
          text-decoration: none;
          font-weight: bold;
          box-shadow: 0 10px 20px rgba(0,0,0,0.2);
          transition: all 0.3s ease;
          border: none;
        }

        .btn-custom:hover {
          transform: translateY(-5px);
          box-shadow: 0 15px 25px rgba(0,0,0,0.3);
          background: #fff;
          color: #e73c7e;
          text-decoration: none;
        }

        /* Animations */
        @keyframes float {
          0% { transform: translatey(0px); }
          50% { transform: translatey(-20px); }
          100% { transform: translatey(0px); }
        }

        @keyframes gradientBG {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>

      {/* Content */}
      <h1 className="error-code">404</h1>
      <h2 className="error-message">Oops! Looks like you're lost in space.</h2>
      
      <a href="/" className="btn btn-custom">
        <i className="glyphicon glyphicon-home"></i> Go Back Home
      </a>
      
    </div>
  );
}
