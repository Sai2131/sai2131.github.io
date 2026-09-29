import UCSCLogo from '../assets/UC_Seal.png';
import UVALogo from '../assets/UVA.png';
import '../global.css';

export function Education() {
  return (
    <div className="text-start fs-8 w-80 mt-5 p-4 border-0 rounded blur shadow-sm">
      <h3 className='text-light text-center mb-4 text-uppercase tracking-wider' style={{ letterSpacing: '1px' }}>Education</h3>

      <div className="mb-4 ps-2">
        <div className="d-flex align-items-center mb-1">
          <img src={UVALogo} alt="UVA Logo" className="me-3" style={{ width: '30px' }} />
          <h5 className="text-light mb-0 fw-bold">University of Virginia</h5>
        </div>
        <div className="text-light ps-5 ms-1">
          <div className="fw-semibold">Master of Science in Computer Science</div>
          <div className="opacity-75 small">August 2026 - May 2028 (Expected) | Charlottesville, VA</div>
        </div>
      </div>

      <hr className="text-light opacity-25" />

      <div className="mt-4 ps-2">
        <div className="d-flex align-items-center mb-1">
          <img src={UCSCLogo} alt="UCSC Logo" className="me-3" style={{ width: '30px' }} />
          <h5 className="text-light mb-0 fw-bold">University of California, Santa Cruz</h5>
        </div>
        <div className="text-light ps-5 ms-1">
          <div className="fw-semibold">Bachelor of Science in Computer Science</div>
          <div className="opacity-75 small">September 2022 - December 2025 | Santa Cruz, CA | GPA: 3.82 / 4.0</div>
          
          <div className="mt-3">
            <p className="mb-1 small">
              <strong>Notable Coursework:</strong> Distributed Systems, Operating Systems, Database Systems, Compilers, Computer Architecture, Software Development, Theory of Computation, Data Structures & Algorithm Analysis.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}