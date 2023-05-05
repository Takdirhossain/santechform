import { useEffect, useRef, useState } from "react";
import logo from "../assets/letus.png";
import PhoneInput from "react-phone-input-2";
import ReCAPTCHA from "react-google-recaptcha";
import Swal from "sweetalert2";

import "react-phone-input-2/lib/style.css";
import axios from "axios";
import Loading from "../components/Loading";

const packagePrices = {
  Asia: {
    Turkey: "TRY 7499",
    Thailand: "Thai B. 17500",
    Singapore: "SGD 1099",
    UAE: "Dirham 4900 ",
    Hong_Kong: "HK$ 6900",
  },
  North_America: {
    Canada: "CAD 1200",
    USA: "US$ 1350 ",

    // add more countries and prices as needed
  },
  Europe: {
    UK: "GBP",
    Germany: "Euro 950",
    France: "Euro 950",
    Italy: "Euro 950 ",
    Netherlands: "Euro 950 ",
    Ireland: "Euro 950 ",
    Switzerland: "CHF",
    Poland: "PLN",
    Belgium: "Euro 950 ",
    Portugal: "Euro 950 ",
    Spain: "Euro 950 ",
    Slovakia: "SKK",
    Greece: "Euro 950 ",
    Austria: "Euro 950 ",
    Hungary: "HUF ",
    Czech_Republic: "CZK",
    Serbia: "RSD",
    Denmark: "DKK",
    Sweden: "SEK",
    Norway: "NOK",
    Lithuania: "LTL",
    Romania: "RON",
    // add more countries and prices as needed
  },
};

const CountryPackages = () => {
  const [selectedRegion, setSelectedRegion] = useState("");
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedPackagePrice, setSelectedPackagePrice] = useState("");
  const [gender, setGender] = useState("");

  const [distance, setDistance] = useState("");

  const [city, setcity] = useState([]);
  const [phone, setPhone] = useState("");
  const [captcha, setcaptcha] = useState(false);
  const [captchaerror, setCaptchaerror] = useState("");
  const [loading, setLoading] = useState(false);

  const handleRegionSelection = (e) => {
    const selectregion = e.target.value;
    setSelectedRegion(selectregion);
    setSelectedCountry("");
    setSelectedPackagePrice("");
  };

  const onChange = () => {
    setcaptcha(true);
    setCaptchaerror("");
  };

  const handleCountrySelection = (e) => {
    const country = e.target.value;
    setSelectedCountry(country);
    setSelectedPackagePrice(packagePrices[selectedRegion][country]);
  };

  const handleOnChange = (value) => {
    setPhone(value);
  };
  const randomNumber = Math.floor(Math.random() * 900000) + 100000;

  const handalesubmit = (e) => {
    e.preventDefault();

    const fulladdress = e.target.fulladdress.value;
    const password = e.target.password.value;
    const name = e.target.full_name.value;
    const email = e.target.emailaddress.value;
    const packagePrices = selectedPackagePrice;
    // console.log(fulladdress, password, name, email, packagePrices);
    if (captcha) {
      setLoading(true);
      const formData = {
        name: name,
        email: email,
        password: password,
        packagePrices: packagePrices,
        fulladdress: fulladdress,
        
       
      };

      console.log(formData);
      // fetch("https://santechserver.vercel.app/registration", {
      //   method: "POST",
      //   headers: {
      //     "content-type": "application/json",
      //   },
      //   body: JSON.stringify(formData),
      // })
      //   .then((res) => res.json())
      //   .then((data) => {
      //     console.log(data);
      //     setLoading(false);
      //     Swal.fire(
      //       "Application Received",
      //       `Your Channel Partner ID Is ${data.partnerId}`,
      //       "success"
      //     );
      //     e.target.reset();
      //   })
      //   .catch((error) => console.log(error));
    } else {
      setCaptchaerror("please fill captcha");
    }
  };
  return (
    <div>
      <div>
        <img
          className="relative hidden lg:block  h-[1400px] "
          src="https://static.vecteezy.com/system/resources/thumbnails/016/803/058/small/blurry-background-business-office-office-desks-with-computers-along-the-window-business-background-photo.jpg"
          alt=""
        />
        <div className=" lg:w-8/12 m-auto">
          <div class="min-h-screen absolute top-0  flex ml-0 lg:ml-60">
            <div class="container max-w-screen-lg ">
              <div className="">
                <div className="flex justify-between items-center">
                  <div className="">
                    <h2 class="font-semibold text-xl text-gray-600">
                      Please Fill in the below details{" "}
                    </h2>
                  </div>
                  <img src={logo} alt="" />
                </div>

                <div class="bg-white  rounded shadow-lg p-4 px-4 md:p-8 mb-6">
                  <div class="grid  gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
                    <form onSubmit={handalesubmit} class="lg:col-span-3 ">
                      <div class="grid gap-4 gap-y-5 text-sm grid-cols-1 ">
                        <div class="md:col-span-4">
                          <label for="full_name">Full Name*</label>
                          <input
                            required
                            placeholder="Jhone Die"
                            type="text"
                            name="full_name"
                            id="full_name"
                            class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                          />
                        </div>

                        <div class="md:col-span-4">
                          <label for="email">Email Address*</label>
                          <input
                            required
                            type="email"
                            name="emailaddress"
                            id="email"
                            class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                            placeholder="email@domain.com"
                          />
                        </div>
                        <div class="md:col-span-4">
                          <label>Set A Password*</label>
                          <input
                            required
                            type="text"
                            name="password"
                            id="email"
                            class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                            placeholder="Your Business name"
                          />
                        </div>
                        <div class="md:col-span-4">
                          <label for="email">Your Full Address*</label>
                          <input
                            required
                            type="text"
                            name="fulladdress"
                            id="email"
                            class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                            placeholder="Jerry Seinfeld Apartment 5A 129 West 81st Street"
                          />
                        </div>

                        <div class="md:col-span-2 ">
                          <label for="address">Permission Type : </label>
                          <input
                            type="radio"
                            className="ml-5"
                            id="Apartment"
                            name="gender"
                            value="Apartment"
                            onChange={(e) => setGender(e.target.value)}
                            checked={gender === "Apartment"}
                          />
                          <label className="ml-2" htmlFor="Apartment">
                            Apartment
                          </label>
                          <input
                            type="radio"
                            id="House"
                            name="gender"
                            className="ml-5"
                            value="House"
                            onChange={(e) => setGender(e.target.value)}
                            checked={gender === "House"}
                          />
                          <label className="ml-2" htmlFor="House">
                            House/Villa
                          </label>
                          <input
                            type="radio"
                            id="other"
                            name="gender"
                            className="ml-5"
                            value="Farm"
                            onChange={(e) => setGender(e.target.value)}
                            checked={gender === "Farm"}
                          />
                          <label className="ml-2" htmlFor="">
                            Farm House
                          </label>
                        </div>
                        <div class="md:col-span-4 ">
                          <label for="address">Distance from Center : </label>
                          <input
                            type="radio"
                            className="ml-5"
                            id="5km"
                            name="distance"
                            value="5km"
                            onChange={(e) => setDistance(e.target.value)}
                            checked={distance === "5km"}
                          />
                          <label className="ml-2" htmlFor="Apartment">
                            With In 5km
                          </label>
                          <input
                            type="radio"
                            id="10km"
                            name="distance"
                            className="ml-5"
                            value="10km"
                            onChange={(e) => setDistance(e.target.value)}
                            checked={distance === "10km"}
                          />
                          <label className="ml-2" htmlFor="House">
                            10KM
                          </label>
                          <input
                            type="radio"
                            id="other"
                            name="distance"
                            className="ml-5"
                            value="20km"
                            onChange={(e) => setDistance(e.target.value)}
                            checked={distance === "20km"}
                          />
                          <label className="ml-2" htmlFor="">
                            20KM
                          </label>
                          <input
                            type="radio"
                            id="other"
                            name="distance"
                            className="ml-5"
                            value="above20"
                            onChange={(e) => setDistance(e.target.value)}
                            checked={distance === "above20"}
                          />
                          <label className="ml-2" htmlFor="">
                            Above 20KM
                          </label>
                        </div>

                        <div class="md:col-span-2">
                          <label for="country">Have Reffer Code?</label>
                          <div class="h-10 bg-gray-50 flex border border-gray-200 rounded items-center mt-1">
                            <input
                              
                              type="text"
                              name="zip"
                              id="email"
                              class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                              placeholder=""
                            />
                          </div>
                        </div>

                        <div class="md:col-span-2 z-10 ">
                          <label for="country">Phone Number </label>
                          <div class="h-9 flex border  items-center mt-1">
                            <PhoneInput
                              inputStyle={{
                                border: "none",
                                background: "transparent",
                              }}
                             
                              value={phone}
                              onChange={handleOnChange}
                              country={"in"}
                            />
                          </div>
                        </div>

                        <div class="md:col-span-2">
                          <label for="country">Select Region*</label>
                          <div class="h-10 bg-gray-50 flex border border-gray-200 rounded items-center mt-1">
                            <select
                              required
                              onClick={(e) => handleRegionSelection(e)}
                              name="country"
                              className="focus:outline-none w-full bg-transparent"
                              id=""
                            >
                              {Object.keys(packagePrices).map((region) => (
                                <option key={region} value={region}>
                                  {region}
                                </option>
                              ))}
                            </select>
                          </div>
                        </div>

                        <div class="md:col-span-2">
                          <label for="country">Country*</label>
                          <div class="h-10 bg-gray-50 flex border border-gray-200 rounded items-center mt-1">
                            {selectedRegion && (
                              <>
                                <select
                                  className="focus:outline-none w-full bg-transparent"
                                  onClick={(e) => handleCountrySelection(e)}
                                >
                                  {Object.keys(
                                    packagePrices[selectedRegion]
                                  ).map((country) => (
                                    <option key={country} value={country}>
                                      {country}
                                    </option>
                                  ))}
                                </select>
                              </>
                            )}
                          </div>
                        </div>

                       
                        <div class="md:col-span-5 z-0">
                          <label for="country">Services in Package: </label>
                          <div class=" ">
                            <div className="overflow-x-auto w-full">
                              <table className="table w-full">
                                {/* head */}
                                <thead>
                                  <tr>
                                    <th> Type of Services </th>
                                    <th>Number Of Visits</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  {/* row 1 */}
                                  <tr>
                                    <td>
                                      <div className="flex items-center space-x-3">
                                        <div>
                                          <div className="font-bold">
                                            Hart Hagerty
                                          </div>
                                        </div>
                                      </div>
                                    </td>
                                    <td>
                                      18
                                      <br />
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <div className="flex items-center space-x-3">
                                        <div>
                                          <div className="font-bold">
                                            Plumbing Maintenance
                                          </div>
                                        </div>
                                      </div>
                                    </td>
                                    <td>
                                      10
                                      <br />
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <div className="flex items-center space-x-3">
                                        <div>
                                          <div className="font-bold">
                                            Computer System Maintenance
                                            (Hardware & Software){" "}
                                          </div>
                                        </div>
                                      </div>
                                    </td>
                                    <td>
                                      8
                                      <br />
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <div className="flex items-center space-x-3">
                                        <div>
                                          <div className="font-bold">
                                            Carpenter Services
                                          </div>
                                        </div>
                                      </div>
                                    </td>
                                    <td>
                                      6
                                      <br />
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <div className="flex items-center space-x-3">
                                        <div>
                                          <div className="font-bold">
                                            F.M.O Review{" "}
                                          </div>
                                        </div>
                                      </div>
                                    </td>
                                    <td>
                                      Half Yearly Site Audit
                                      <br />
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <div className="flex items-center space-x-3">
                                        <div>
                                          <div className="font-bold">
                                            Yearly Fee{" "}
                                          </div>
                                        </div>
                                      </div>
                                    </td>
                                    <td className="mt-10 -mb-20">
                                     <h2 className="text-xl w-40 font-bold bg-[#00ff00] pl-5 pt-2 pb-2 text-white rounded">
                                     {selectedPackagePrice
                                        ? selectedPackagePrice
                                        : "SGD 950 "}
                                     </h2>
                                      <br />
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <div className="flex items-center space-x-3">
                                        <div>
                                          <div className="font-bold"></div>
                                        </div>
                                      </div>
                                    </td>
                                    <td className="btn border-none bg-[#3b82f6] ">
                                      Selected
                                      <br />
                                    </td>
                                  </tr>
                                </tbody>
                                {/* foot */}
                              </table>
                            </div>
                          </div>
                        </div>

                        <div class="md:col-span-2">
                          <ReCAPTCHA
                            sitekey="6LeM1swlAAAAABoXDNzY-heV1SEr_IF1dXRGoBOD"
                            required 
                            onChange={onChange}
                          />
                          <p className="text-red-600">{captchaerror}</p>
                        </div>

                        <div class="md:col-span-5 text-right">
                          <div class="">
                            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-5 px-9 rounded">
                              {loading ? (
                                <Loading />
                              ) : (
                                <>
                                  <span>Subscribe Now</span>
                                </>
                              )}
                            </button>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountryPackages;
