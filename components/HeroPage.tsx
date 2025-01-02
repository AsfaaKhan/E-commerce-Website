

// components/ScrollspyComponent.tsx

import Container from "./Container";

export default function Section() {


    return (
        <Container>
        <div className="h-screen mt-40">
  {/* Hero Container */}
  <div className="container mx-auto h-screen overflow-y-scroll scroll-smooth">

    {/* Navigation Bar */}
    <div className="bg-dark text-white p-4">
      <ul className="flex justify-center space-x-8">
        <li>
          <a className="text-lg hover:text-gray-300" href="#section1">
            Section 1
          </a>
        </li>
        <li>
          <a className="text-lg hover:text-gray-300" href="#section2">
            Section 2
          </a>
        </li>
        <li>
          <a className="text-lg hover:text-gray-300" href="#section3">
            Section 3
          </a>
        </li>
      </ul>
    </div>

    {/* Section 1 */}
    <div
      id="section1"
      className="h-screen bg-success text-white flex flex-col justify-center items-center"
    >
      <div className="bg-[url('/images/5.jpg')] h-[100%]  w-full bg-no-repeat bg-cover bg-center">
      <div className="p-8 text-center">
       
      </div></div>
      
    </div>

    {/* Section 2 */}
    <div
      id="section2"
      className="h-screen bg-warning flex flex-col justify-center items-center"
    >
      <div className="bg-[url('/images/5.jpg')] h-[100%]  w-full bg-no-repeat bg-cover bg-center">
      <div className="p-8 text-center">
       
      </div></div>
    </div>

    {/* Section 3 */}
    <div
      id="section3"
      className="h-screen bg-secondary text-white flex flex-col justify-center items-center"
    >
      <div className="bg-[url('/images/5.jpg')] h-[100%]  w-full bg-no-repeat bg-cover bg-center">
      <div className="p-8 text-center flex justify-center item-center">
            <h1></h1>
            <p></p>
      </div>
      </div>
    </div>
  </div>
</div>

        </Container>
    );
};

