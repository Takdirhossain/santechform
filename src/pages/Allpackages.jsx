import React from "react";
import "../style/packages.css";
const Allpackages = () => {
  return (
    <>
      <p
        style={{
          textAlign: "center",
          color: "blue",
          fontSize: "27px",
          fontFamily: "fantasy",
        }}
      >
        Enterprise Sales Model:
      </p>
      <p
        style={{
          color: "black",
          fontSize: "27px",
          fontWeight: "bolder",
          marginLeft: "20px",
        }}
      >
        All Solutions Package-
      </p>
      <div className="tablecontainer1">
        <p
          style={{
            color: "black",
            fontSize: "27px",
            fontWeight: "bold",
            marginLeft: "20px",
          }}
        >
          Asia-
        </p>
        <table className="table css">
          <thead className="thead-dark">
            <tr>
              <th scope="col">No</th>
              <th scope="col">Country</th>
              <th scope="col">Standard [Monthly]</th>
              <th scope="col">Growth [Monthly]</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>India</td>
              <td>INR 3,20,000</td>
              <td>INR 6,40,000</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Thailand</td>
              <td>Thai B. 5,40,000</td>
              <td>Thai B. 10,80,000</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Singapore</td>
              <td>SGD$ 29000</td>
              <td>SGD$ 58000</td>
            </tr>
            <tr>
              <th scope="row">4</th>
              <td>Hong Kong</td>
              <td>HK$ 3,60,000</td>
              <td>HK$ 7,20,000</td>
            </tr>
            <tr>
              <th scope="row">5</th>
              <td>United Arab Emirates</td>
              <td>Dirham 38000</td>
              <td>Dirham 76000</td>
            </tr>
          </tbody>
        </table>

        <hr />

        <p
          style={{
            color: "black",
            fontSize: "27px",
            fontWeight: "bold",
            marginLeft: "20px",
          }}
        >
          Europe Region-
        </p>
        <div>
          <table className="table css">
            <thead className="thead-dark">
              <tr>
                <th scope="col">No</th>
                <th scope="col">Country</th>
                <th scope="col">Standard [Monthly]</th>
                <th scope="col">Growth [Monthly]</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Europe Union Nations</td>
                <td>Euro 33500</td>
                <td>Euro 67000</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>United Kingdom</td>
                <td>GBP 33000</td>
                <td>GBP 66000</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>Switzerland</td>
                <td>-</td>
                <td>-</td>
              </tr>
              <tr>
                <th scope="row">4</th>
                <td>Denmark</td>
                <td>-</td>
                <td>-</td>
              </tr>
              <tr>
                <th scope="row">5</th>
                <td>Sweden</td>
                <td>-</td>
                <td>-</td>
              </tr>
              <tr>
                <th scope="row">6</th>
                <td>Hungary</td>
                <td>-</td>
                <td>-</td>
              </tr>
              <tr>
                <th scope="row">7</th>
                <td>Poland</td>
                <td>-</td>
                <td>-</td>
              </tr>
            </tbody>
          </table>
        </div>
        <hr />
        <p
          style={{
            color: "black",
            fontSize: "27px",
            fontWeight: "bold",
            marginLeft: "20px",
          }}
        >
          North America Region-
        </p>
        <div>
          <table className="table css">
            <thead className="thead-dark">
              <tr>
                <th scope="col">No</th>
                <th scope="col">Country</th>
                <th scope="col">Standard [Monthly]</th>
                <th scope="col">Growth [Monthly]</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Canada</td>
                <td>CAD 43000</td>
                <td>CAD 86000</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>United States</td>
                <td>US$ 45000</td>
                <td>US$ 90000</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      {/*  */}

      <p
        style={{
          color: "black",
          fontSize: "27px",
          fontWeight: "bolder",
          marginLeft: "20px",
        }}
      >
        <hr />
        As per Services Package:-
      </p>
      <div className="tablecontainer1">
        <p
          style={{
            color: "black",
            fontSize: "27px",
            fontWeight: "bold",
            marginLeft: "20px",
          }}
        >
          Asia-
        </p>
        <table class="table">
          <thead class="thead-dark">
            <tr>
              <th scope="col">No</th>
              <th scope="col">Country</th>
              <th scope="col">Type of Services</th>
              <th scope="col">Monthly Fee</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>India</td>
              <td>Electrical &amp; Electronics Maintenance</td>
              <td>INR 50000</td>
            </tr>
            <tr>
              <th scope="row"></th>
              <td></td>
              <td>Plumbing Maintenance</td>
              <td>INR 50000</td>
            </tr>
            <tr>
              <th scope="row"></th>
              <td></td>
              <td>Computer System Maintenance</td>
              <td>INR 70000</td>
            </tr>
            <tr>
              <th scope="row"></th>
              <td></td>
              <td>Carpenter Services</td>
              <td>INR 50000</td>
            </tr>
            <tr>
              <th scope="row"></th>
              <td></td>
              <td>Cleaning Solutions</td>
              <td>INR 60000</td>
            </tr>
            <tr>
              <th scope="row"></th>
              <td></td>
              <td>Landscaping Services</td>
              <td>INR 60000</td>
            </tr>

            {/*  */}
            <tr>
              <th scope="row">2</th>
              <td>Thailand</td>
              <td>Electrical &amp; Electronics Maintenance</td>
              <td>Thai B. 100000</td>
            </tr>
            <tr>
              <th scope="row"></th>
              <td></td>
              <td>Plumbing Maintenance</td>
              <td>Thai B. 100000</td>
            </tr>
            <tr>
              <th scope="row"></th>
              <td></td>
              <td>Computer System Maintenance</td>
              <td>Thai B. 115000</td>
            </tr>
            <tr>
              <th scope="row"></th>
              <td></td>
              <td>Carpenter Services</td>
              <td>Thai B. 100000</td>
            </tr>
            <tr>
              <th scope="row"></th>
              <td></td>
              <td>Cleaning Solutions</td>
              <td>Thai B. 85000</td>
            </tr>
            <tr>
              <th scope="row"></th>
              <td></td>
              <td>Landscaping Services</td>
              <td>Thai B. 85000</td>
            </tr>

            {/*  */}

            <tr>
              <th scope="row">3</th>
              <td>Singapore</td>
              <td>Electrical &amp; Electronics Maintenance</td>
              <td>SGD$ 5000</td>
            </tr>
            <tr>
              <th scope="row"></th>
              <td></td>
              <td>Plumbing Maintenance</td>
              <td>SGD$ 5000</td>
            </tr>
            <tr>
              <th scope="row"></th>
              <td></td>
              <td>Computer System Maintenance</td>
              <td>SGD$ 6500</td>
            </tr>
            <tr>
              <th scope="row"></th>
              <td></td>
              <td>Carpenter Services</td>
              <td>SGD$ 5000</td>
            </tr>
            <tr>
              <th scope="row"></th>
              <td></td>
              <td>Cleaning Solutions</td>
              <td>SGD$ 5500</td>
            </tr>
            <tr>
              <th scope="row"></th>
              <td></td>
              <td>Landscaping Services</td>
              <td>SGD$ 5500</td>
            </tr>

            {/*  */}

            <tr>
              <th scope="row">4</th>
              <td>Hong Kong</td>
              <td>Electrical &amp; Electronics Maintenance</td>
              <td>HK$ 70000</td>
            </tr>
            <tr>
              <th scope="row"></th>
              <td></td>
              <td>Plumbing Maintenance</td>
              <td>HK$ 70000</td>
            </tr>
            <tr>
              <th scope="row"></th>
              <td></td>
              <td>Computer System Maintenance</td>
              <td>HK$ 90000</td>
            </tr>
            <tr>
              <th scope="row"></th>
              <td></td>
              <td>Carpenter Services</td>
              <td>HK$ 70000</td>
            </tr>
            <tr>
              <th scope="row"></th>
              <td></td>
              <td>Cleaning Solutions</td>
              <td>HK$ 60000</td>
            </tr>
            <tr>
              <th scope="row"></th>
              <td></td>
              <td>Landscaping Services</td>
              <td>HK$ 60000</td>
            </tr>

            {/*  */}
            <tr>
              <th scope="row">5</th>
              <td>UAE</td>
              <td>Electrical &amp; Electronics Maintenance</td>
              <td>Dirham 6500</td>
            </tr>
            <tr>
              <th scope="row"></th>
              <td></td>
              <td>Plumbing Maintenance</td>
              <td>Dirham 6500</td>
            </tr>
            <tr>
              <th scope="row"></th>
              <td></td>
              <td>Computer System Maintenance</td>
              <td>Dirham 8500</td>
            </tr>
            <tr>
              <th scope="row"></th>
              <td></td>
              <td>Carpenter Services</td>
              <td>Dirham 6500</td>
            </tr>
            <tr>
              <th scope="row"></th>
              <td></td>
              <td>Cleaning Solutions</td>
              <td>Dirham 7500</td>
            </tr>
            <tr>
              <th scope="row"></th>
              <td></td>
              <td>Landscaping Services</td>
              <td>Dirham 7500</td>
            </tr>
          </tbody>
        </table>

        {/*  */}
      </div>
      <br />
      {/* ---------- */}
      <div className="tablecontainer1">
        <p
          style={{
            color: "black",
            fontSize: "27px",
            fontWeight: "bold",
            marginLeft: "20px",
          }}
        >
          Europe Region-
        </p>
        <table class="table">
          <thead class="thead-dark">
            <tr>
              <th scope="col">No</th>
              <th scope="col">Country</th>
              <th scope="col">Type of Services</th>
              <th scope="col">Monthly Fee</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Europe Union Nations</td>
              <td>Electrical &amp; Electronics Maintenance</td>
              <td>Euro 5400</td>
            </tr>
            <tr>
              <th scope="row"></th>
              <td></td>
              <td>Plumbing Maintenance</td>
              <td>Euro 5400</td>
            </tr>
            <tr>
              <th scope="row"></th>
              <td></td>
              <td>Computer System Maintenance</td>
              <td>Euro Euro 6900</td>
            </tr>
            <tr>
              <th scope="row"></th>
              <td></td>
              <td>Carpenter Services</td>
              <td>Euro 5400</td>
            </tr>
            <tr>
              <th scope="row"></th>
              <td></td>
              <td>Cleaning Solutions</td>
              <td>Euro 6400</td>
            </tr>
            <tr>
              <th scope="row"></th>
              <td></td>
              <td>Landscaping Services</td>
              <td>Euro 5900</td>
            </tr>

            {/*  */}
            <tr>
              <th scope="row">2</th>
              <td>United Kingdom</td>
              <td>Electrical &amp; Electronics Maintenance</td>
              <td>GBP 4900</td>
            </tr>
            <tr>
              <th scope="row"></th>
              <td></td>
              <td>Plumbing Maintenance</td>
              <td>GBP 4900</td>
            </tr>
            <tr>
              <th scope="row"></th>
              <td></td>
              <td>Computer System Maintenance</td>
              <td>GBP 6900</td>
            </tr>
            <tr>
              <th scope="row"></th>
              <td></td>
              <td>Carpenter Services</td>
              <td>GBP 4900</td>
            </tr>
            <tr>
              <th scope="row"></th>
              <td></td>
              <td>Cleaning Solutions</td>
              <td>GBP 6500</td>
            </tr>
            <tr>
              <th scope="row"></th>
              <td></td>
              <td>Landscaping Services</td>
              <td>GBP 6000</td>
            </tr>

            {/*  */}

            <tr>
              <th scope="row">3</th>
              <td>Switzerland</td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <th scope="row">4</th>
              <td>Denmark</td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <th scope="row">5</th>
              <td>Sweden</td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <th scope="row">6</th>
              <td>Hungary</td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <th scope="row">7</th>
              <td>poland</td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </table>

        {/*  */}
      </div>
     <br />
    
      {/* ////////////////////// */}
      <div className="tablecontainer1">
        <p
          style={{
            color: "black",
            fontSize: "27px",
            fontWeight: "bold",
            marginLeft: "20px",
          }}
        >
          North America Region-
        </p>
        <table class="table">
          <thead class="thead-dark">
            <tr>
              <th scope="col">No</th>
              <th scope="col">Country</th>
              <th scope="col">Type of Services</th>
              <th scope="col">Monthly Fee</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Canada</td>
              <td>Electrical &amp; Electronics Maintenance</td>
              <td>CAD 6900</td>
            </tr>
            <tr>
              <th scope="row"></th>
              <td></td>
              <td>Plumbing Maintenance</td>
              <td>CAD 6900</td>
            </tr>
            <tr>
              <th scope="row"></th>
              <td></td>
              <td>Computer System Maintenance</td>
              <td>CAD 6900</td>
            </tr>
            <tr>
              <th scope="row"></th>
              <td></td>
              <td>Carpenter Services</td>
              <td>CAD 8900</td>
            </tr>
            <tr>
              <th scope="row"></th>
              <td></td>
              <td>Cleaning Solutions</td>
              <td>CAD 7900</td>
            </tr>
            <tr>
              <th scope="row"></th>
              <td></td>
              <td>Landscaping Services</td>
              <td>CAD 7900</td>
            </tr>

            {/*  */}
            <tr>
              <th scope="row">2</th>
              <td>United States</td>
              <td>Electrical &amp; Electronics Maintenance</td>
              <td>US$ 7000</td>
            </tr>
            <tr>
              <th scope="row"></th>
              <td></td>
              <td>Plumbing Maintenance</td>
              <td>US$ 7000</td>
            </tr>
            <tr>
              <th scope="row"></th>
              <td></td>
              <td>Computer System Maintenance</td>
              <td>US$ 7000</td>
            </tr>
            <tr>
              <th scope="row"></th>
              <td></td>
              <td>Carpenter Services</td>
              <td>US$ 9000</td>
            </tr>
            <tr>
              <th scope="row"></th>
              <td></td>
              <td>Cleaning Solutions</td>
              <td>US$ 9000</td>
            </tr>
            <tr>
              <th scope="row"></th>
              <td></td>
              <td>Landscaping Services</td>
              <td>US$ 9000</td>
            </tr>

            {/*  */}

          
          </tbody>
        </table>

        {/*  */}
      </div>
      {/*  */}
      <p
        style={{
          color: "black",
          fontSize: "27px",
          fontWeight: "bolder",
          marginLeft: "20px",
        }}
      >
        <hr />
        Individual Sales Model:-
      </p>

      <div className="tablecontainer1">
        <p
          style={{
            color: "black",
            fontSize: "27px",
            fontWeight: "bold",
            marginLeft: "20px",
          }}
        >
          Asia-
        </p>
        <table class="table">
          <thead class="thead-dark">
            <tr>
              <th scope="col">No</th>
              <th scope="col">Country</th>
              <th scope="col">Package Cost [Yearly]</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>India</td>
              <td>INR 9999</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Turkey</td>
              <td>TRY 7499</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Thailand</td>
              <td>Thai B. 17500</td>
            </tr>
            <tr>
              <th scope="row">4</th>
              <td>Singapore</td>
              <td>SGD$ 1099</td>
            </tr>
            <tr>
              <th scope="row">5</th>
              <td>Hong Kong</td>
              <td>HK$ 6900</td>
            </tr>
            <tr>
              <th scope="row">6</th>
              <td>United Arab Emirates</td>
              <td>Dirham 4900</td>
            </tr>
          </tbody>
        </table>
        <p
          style={{
            color: "black",
            fontSize: "27px",
            fontWeight: "bold",
            marginLeft: "20px",
          }}
        >
          Europe Region-
        </p>
        <table class="table">
          <thead class="thead-dark">
            <tr>
              <th scope="col">No</th>
              <th scope="col">Country</th>
              <th scope="col">Package Cost [Yearly]</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Europe Union Nations</td>
              <td>Euro 950</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>United Kingdom</td>
              <td>GBP 900</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Switzerland</td>
              <td>-</td>
            </tr>
            <tr>
              <th scope="row">4</th>
              <td>Denmark</td>
              <td>-</td>
            </tr>
            <tr>
              <th scope="row">5</th>
              <td>Sweden</td>
              <td>-</td>
            </tr>
            <tr>
              <th scope="row">6</th>
              <td>Hungary</td>
              <td>-</td>
            </tr>
          </tbody>
        </table>
        <p
          style={{
            color: "black",
            fontSize: "27px",
            fontWeight: "bold",
            marginLeft: "20px",
          }}
        >
          North America Region-
        </p>
        <table class="table">
          <thead class="thead-dark">
            <tr>
              <th scope="col">No</th>
              <th scope="col">Country</th>
              <th scope="col">Package Cost [Yearly]</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Canada</td>
              <td>CAD 1200</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>United States</td>
              <td>US$ 1350</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Allpackages;
