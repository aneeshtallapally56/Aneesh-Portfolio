import { Link } from "react-router";

function Test() {
    return (
        <div>
        <a
          href="#"
          style={{ color: 'blue', display: 'block', backgroundColor: 'yellow' }}
          onMouseEnter={(e) => e.target.style.color = 'red'}
          onMouseLeave={(e) => e.target.style.color = 'blue'}
        >
          Test Anchor
        </a>
        {/* <Link
          to="/test"
          style={{ color: 'blue', display: 'block', backgroundColor: 'yellow' }}
          onMouseEnter={(e) => e.target.style.color = 'red'}
          onMouseLeave={(e) => e.target.style.color = 'blue'}
        >
          Test Link
        </Link> */}
      </div>
    );
  }
  export default Test;