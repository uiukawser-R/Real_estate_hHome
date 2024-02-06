import React from "react";
import aboutUsImg from "../../assets/aboutus.png";
import profileImg from "../../assets/profile.png";

const AboutUs = () => {
  return (
    <div className="about-us my-12 max-w-screen-xl mx-auto">
      <div className="">
        <div className="flex ">
          <div className="w-full flex gap-5 items-center">
            <div className="w-[50%]">
              <img
                className="h-full w-full"
                src={aboutUsImg}
                alt="about us img"
                srcSet={aboutUsImg}
              />
            </div>
            <div className="w-[50%]">
              <h5 className="text-[20px]">About Us</h5>
              <div className="">
                <svg
                  width="91"
                  height="4"
                  viewBox="0 0 91 4"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="-0.00012207"
                    y="0.67334"
                    width="68.7007"
                    height="3.03282"
                    rx="1.51641"
                    fill="#FF5017"
                  />
                  <circle cx="72.8168" cy="2.18974" r="1.5164" fill="#FF5017" />
                  <circle cx="78.0711" cy="2.18974" r="1.5164" fill="#FF5017" />
                  <circle cx="83.3252" cy="2.18974" r="1.5164" fill="#FF5017" />
                  <circle cx="88.5794" cy="2.18974" r="1.5164" fill="#FF5017" />
                </svg>
              </div>
              <h1 className="text-[48px] font-bold">
                We Specialize In Quality <br />
                Home Renovations
              </h1>
              <p className="mt-5">
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id est laborum.
              </p>
              <div className="mt-5 flex flex-col gap-4">
                <div className="flex align-middle gap-3">
                  <svg
                    width="31"
                    height="32"
                    viewBox="0 0 31 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4.38769 0.233398C1.96754 0.233398 -0.00012207 2.21237 -0.00012207 4.64643V26.7116C-0.00012207 29.1457 1.96754 31.1246 4.38769 31.1246H26.3268C28.7469 31.1246 30.7146 29.1457 30.7146 26.7116V4.64643C30.7146 2.21237 28.7469 0.233398 26.3268 0.233398H4.38769ZM23.1045 12.4382L14.3288 21.2643C13.6844 21.9124 12.6423 21.9124 12.0047 21.2643L7.61685 16.8512C6.97239 16.2031 6.97239 15.155 7.61685 14.5137C8.26131 13.8724 9.30342 13.8655 9.94102 14.5137L13.1633 17.7545L20.7734 10.0938C21.4179 9.44561 22.46 9.44561 23.0976 10.0938C23.7352 10.7419 23.7421 11.79 23.0976 12.4313L23.1045 12.4382Z"
                      fill="#010F58"
                    />
                  </svg>
                  <p className="text-[20px]">Outstanding property</p>
                </div>
                <div className="flex align-middle gap-3">
                  <svg
                    width="31"
                    height="32"
                    viewBox="0 0 31 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4.38769 0.233398C1.96754 0.233398 -0.00012207 2.21237 -0.00012207 4.64643V26.7116C-0.00012207 29.1457 1.96754 31.1246 4.38769 31.1246H26.3268C28.7469 31.1246 30.7146 29.1457 30.7146 26.7116V4.64643C30.7146 2.21237 28.7469 0.233398 26.3268 0.233398H4.38769ZM23.1045 12.4382L14.3288 21.2643C13.6844 21.9124 12.6423 21.9124 12.0047 21.2643L7.61685 16.8512C6.97239 16.2031 6.97239 15.155 7.61685 14.5137C8.26131 13.8724 9.30342 13.8655 9.94102 14.5137L13.1633 17.7545L20.7734 10.0938C21.4179 9.44561 22.46 9.44561 23.0976 10.0938C23.7352 10.7419 23.7421 11.79 23.0976 12.4313L23.1045 12.4382Z"
                      fill="#010F58"
                    />
                  </svg>
                  <p className="text-[20px]">
                    Provide the best services for users
                  </p>
                </div>
                <div className="flex align-middle gap-3">
                  <svg
                    width="31"
                    height="32"
                    viewBox="0 0 31 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4.38769 0.233398C1.96754 0.233398 -0.00012207 2.21237 -0.00012207 4.64643V26.7116C-0.00012207 29.1457 1.96754 31.1246 4.38769 31.1246H26.3268C28.7469 31.1246 30.7146 29.1457 30.7146 26.7116V4.64643C30.7146 2.21237 28.7469 0.233398 26.3268 0.233398H4.38769ZM23.1045 12.4382L14.3288 21.2643C13.6844 21.9124 12.6423 21.9124 12.0047 21.2643L7.61685 16.8512C6.97239 16.2031 6.97239 15.155 7.61685 14.5137C8.26131 13.8724 9.30342 13.8655 9.94102 14.5137L13.1633 17.7545L20.7734 10.0938C21.4179 9.44561 22.46 9.44561 23.0976 10.0938C23.7352 10.7419 23.7421 11.79 23.0976 12.4313L23.1045 12.4382Z"
                      fill="#010F58"
                    />
                  </svg>
                  <p className="text-[20px]">
                    Modern city location & ecceptional lifestyle
                  </p>
                </div>
                <div className="flex align-middle gap-3">
                  <svg
                    width="31"
                    height="32"
                    viewBox="0 0 31 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4.38769 0.233398C1.96754 0.233398 -0.00012207 2.21237 -0.00012207 4.64643V26.7116C-0.00012207 29.1457 1.96754 31.1246 4.38769 31.1246H26.3268C28.7469 31.1246 30.7146 29.1457 30.7146 26.7116V4.64643C30.7146 2.21237 28.7469 0.233398 26.3268 0.233398H4.38769ZM23.1045 12.4382L14.3288 21.2643C13.6844 21.9124 12.6423 21.9124 12.0047 21.2643L7.61685 16.8512C6.97239 16.2031 6.97239 15.155 7.61685 14.5137C8.26131 13.8724 9.30342 13.8655 9.94102 14.5137L13.1633 17.7545L20.7734 10.0938C21.4179 9.44561 22.46 9.44561 23.0976 10.0938C23.7352 10.7419 23.7421 11.79 23.0976 12.4313L23.1045 12.4382Z"
                      fill="#010F58"
                    />
                  </svg>
                  <p className="text-[20px]">
                    Professional & experienced human resources
                  </p>
                </div>
              </div>
              <p className="text-base mt-[30px]">
                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
                aut fugit sed quia consequuntur magni dolores eos qui ratione
                voluptatem sequi nesciunt.
              </p>
              <div className="mt-[60px] flex gap-3 items-center">
                <button className="flex gap-3 align-middle justify-center px-6 py-4 bg-blue-950 text-white h-fit">
                  <span>Explore More</span>
                  <span>
                    <svg
                      width="30"
                      height="26"
                      viewBox="0 0 30 26"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M14.3897 24.1469C12.6931 24.4248 10.9559 24.3238 9.3029 23.8512C7.64987 23.3786 6.12188 22.5461 4.82849 21.4134C3.5351 20.2807 2.50836 18.8759 1.82187 17.2996C1.13538 15.7233 0.806157 14.0147 0.857806 12.2962C0.909455 10.5777 1.3407 8.89196 2.12061 7.35977C2.90052 5.82758 4.00979 4.48694 5.36887 3.43396C6.72795 2.38098 8.30317 1.64175 9.9816 1.26928C11.66 0.896805 13.4001 0.900316 15.077 1.27956"
                        stroke="#F8FAFA"
                      />
                      <path
                        d="M29.0026 13.3496C29.1979 13.1544 29.1979 12.8378 29.0026 12.6425L25.8206 9.46056C25.6254 9.2653 25.3088 9.2653 25.1135 9.46056C24.9183 9.65582 24.9183 9.97241 25.1135 10.1677L27.9419 12.9961L25.1135 15.8245C24.9183 16.0198 24.9183 16.3364 25.1135 16.5316C25.3088 16.7269 25.6254 16.7269 25.8206 16.5316L29.0026 13.3496ZM12.5557 13.4961L28.6491 13.4961L28.6491 12.4961L12.5557 12.4961L12.5557 13.4961Z"
                        fill="#F8FAFA"
                      />
                    </svg>
                  </span>
                </button>
                <div className="img">
                  <img src="" alt="" srcset={profileImg} />
                </div>
                <div className="">
                  <p>
                    <span className="text-orange-600 text-base font-bold">
                      David Smith
                    </span>{" "}
                    ( CEO Of Kavinax Property )
                    <div className="flex gap-3">
                      <svg
                        width="50"
                        height="51"
                        viewBox="0 0 50 51"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect
                          x="-0.00012207"
                          y="0.740234"
                          width="50"
                          height="50"
                          rx="5"
                          fill="#FF5017"
                        />
                        <path
                          d="M26.4827 21.2924H23.5175V24.2576H26.4827V21.2924ZM32.4132 21.2924H29.448V24.2576H32.4132V21.2924ZM36.861 30.9294C35.0078 30.9294 33.2286 30.6329 31.5681 30.0843C31.0492 29.9212 30.471 30.0398 30.0558 30.4401L26.7941 33.7019C22.5983 31.5669 19.1586 28.1421 17.0237 23.9463L20.2854 20.6697C20.7005 20.2694 20.8192 19.6912 20.6561 19.1723C20.1075 17.5117 19.811 15.7326 19.811 13.8793C19.811 13.0639 19.1438 12.3967 18.3284 12.3967H13.1392C12.3238 12.3967 11.6566 13.0639 11.6566 13.8793C11.6566 27.8011 22.9393 39.0837 36.861 39.0837C37.6765 39.0837 38.3436 38.4166 38.3436 37.6011V32.412C38.3436 31.5966 37.6765 30.9294 36.861 30.9294ZM35.3784 21.2924V24.2576H38.3436V21.2924H35.3784Z"
                          fill="#F8FAFA"
                        />
                      </svg>
                      <p className="text-base">
                        Call For Booking Appointment <br /> Date :{" "}
                        <span className="text-orange-600 font-bold">
                          +435 6789 4321
                        </span>
                      </p>
                    </div>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
