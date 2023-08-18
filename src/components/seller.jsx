import "../styles/seller.css";
import "bootstrap/dist/css/bootstrap.min.css";

function Seller() {
  return (
    // Recieve payments
    // Grow faster
    // Seller App
    // Help and Support
    <div>
      <nav>
        <img src="images/Seller_images/seller_logo.png" alt="" height="50px" />
        <div className="box-1">
          <ul className="navbar-1">
            <li>Sell Online</li>
            <li>Fees and commision</li>
            <li>Grow </li>
            <li>Learn</li>
            <li>Shopsy</li>
          </ul>
        </div>

        <div className="box-2">
          <ul className="navbar-2">
            <li>
              <a href="#">Login</a>
            </li>
            <li className="selling_btn">Start Selling</li>
          </ul>
        </div>
      </nav>

      <div className="sell_online">
        <img src="images/Seller_images/sell_online.png" alt="" height="230px" />
        <a href="#" style={{ textDecoration: "none" }}>
          Home
        </a>
        <a href="#" style={{ textDecoration: "none" }}>
          Sell Online
        </a>
        <p>Sell Online with Flipkart</p>
      </div>

      <div className="bookmark">
        <ul style={{ listStyleType: "none" }}>
          <li>
            <a href="#b1" style={{ listStyleType: "none" }}>
              Create Account
            </a>
          </li>
          <li href="#b2">
            <a href="#b2" style={{ listStyleType: "none" }}>
              List Products
            </a>
          </li>
          <li href="#b3">
            <a href="#b3" style={{ listStyleType: "none" }}>
              Storage and Shipping
            </a>
          </li>
          <li href="#b4">
            <a href="#b4" style={{ listStyleType: "none" }}>
              Recieve payments
            </a>
          </li>
          <li href="#b5">
            <a href="#b5" style={{ listStyleType: "none" }}>
              Grow faster
            </a>{" "}
          </li>
          <li href="#">
            <a href="#b6" style={{ listStyleType: "none" }}>
              Seller App
            </a>
          </li>
          <li href="#">
            <a href="#b7" style={{ listStyleType: "none" }}>
              Help and Support
            </a>
          </li>
        </ul>
      </div>

      <div className="positioner">
        <div className="create_account" id="b1">
          <h3>Create Account</h3>
          <div className="account_box">
            <p style={{ width: "50%", marginRight: "50px", marginTop: "20px" }}>
              Creating your Flipkart seller account is a quick process, taking
              less than 10 minutes, and requires only 3 documents. Follow the
              checklist to ensure a seamless account creation experience. By
              having these documents ready, you can streamline the account
              creation process and get started on Flipkart as an online seller
              in no time.
              <p>* for selling in all categories except for book</p>
              <p> ** for selling under books category</p>
            </p>
            <img
              src="images/Seller_images/create_account.png"
              alt=""
              style={{ height: "400px" }}
            />
          </div>
          <div className="a-container" style={{ marginTop: "20px" }}>
            <h6>Don’t have a GSTIN?</h6>
            <p>Follow the steps below to generate for your online business.</p>
            <div className="b-container">
              <div className="child_container">
                <img
                  src="images/Seller_images/login_logo.png"
                  alt="login_image"
                  style={{ width: "40px", height: "55px" }}
                />
                <p>
                  Register / Login to<p>www.gst.gov.in</p>
                </p>
              </div>
              <div className="child_container">
                <img
                  src="images/Seller_images/gst_logo.png"
                  alt="login_image"
                  style={{ width: "40px", height: "55px" }}
                />
                <p>
                  Fill in the GST Enrolment<p>Application form</p>
                </p>
              </div>
              <div className="child_container">
                <img
                  src="images/Seller_images/enrollment_logo.png"
                  alt="login_image"
                  style={{ width: "40px", height: "55px" }}
                />
                <p>
                  Submit Enrolment<p>Application</p>
                </p>
              </div>
            </div>
          </div>
          <p style={{ width: "100%", marginTop: "20px", marginBottom: "20px" }}>
            Flipkart offers a diverse range of over 3000+ categories where you
            can sell your products. These categories represent just a fraction
            of the wide variety available on Flipkart, providing ample
            opportunities for sellers to showcase their products to a large
            customer base. Here are some popular categories to consider for
            online selling:
          </p>

          <div
            style={{
              width: "100%",
              border: "1px solid rgb(205, 205, 205)",
              borderRadius: "8px",
              padding: "20px"
            }}
          >
            <h6 style={{ fontSize: "1.1rem", paddingBottom: "20px" }}>
              Popular categories to sell across India
            </h6>
            <div className="sell">
              <ul>
                <li>
                  <a href="#" style={{ textDecoration: "none" }}>
                    Sell Mobile Online{" "}
                  </a>
                </li>
                <li>
                  <a href="#" style={{ textDecoration: "none" }}>
                    Sell ELectronics Online
                  </a>
                </li>
                <li>
                  <a href="#" style={{ textDecoration: "none" }}>
                    Sell Jewellery Online
                  </a>
                </li>
                <li>
                  <a href="#" style={{ textDecoration: "none" }}>
                    Sell Makeup Online
                  </a>
                </li>
                <li>
                  <a href="#" style={{ textDecoration: "none" }}>
                    Sell Books Online
                  </a>
                </li>
                <li>
                  <a href="#" style={{ textDecoration: "none" }}>
                    Sell Beauty Products Online
                  </a>
                </li>
                <li>
                  <a href="#" style={{ textDecoration: "none" }}>
                    Sell Shirts Online
                  </a>
                </li>
              </ul>
              <ul>
                <li>
                  <a href="#" style={{ textDecoration: "none" }}>
                    Sell Clothes Online
                  </a>
                </li>
                <li>
                  <a href="#" style={{ textDecoration: "none" }}>
                    Sell Women Clothes Online
                  </a>
                </li>
                <li>
                  <a href=" #" style={{ textDecoration: "none" }}>
                    Sell Tshirts Online
                  </a>
                </li>
                <li>
                  <a href="#" style={{ textDecoration: "none" }}>
                    Sell Paintings Online
                  </a>
                </li>
                <li>
                  <a href="#" style={{ textDecoration: "none" }}>
                    Sell Home Products Online
                  </a>
                </li>
                <li>
                  <a href="#" style={{ textDecoration: "none" }}></a>Sell Toys
                  Online
                </li>
                <li>
                  <a href="#" style={{ textDecoration: "none" }}></a>Sell Indian
                  Clothes Online
                </li>
              </ul>
              <ul>
                <li>
                  <a href="#" style={{ textDecoration: "none" }}>
                    Sell Sarees Online
                  </a>
                </li>
                <li>
                  <a href="#" style={{ textDecoration: "none" }}>
                    Sell Shoes Online
                  </a>
                </li>
                <li>
                  <a href="#" style={{ textDecoration: "none" }}>
                    Sell Furniture Online
                  </a>
                </li>
                <li>
                  <a href="#" style={{ textDecoration: "none" }}>
                    Sell Watch Online
                  </a>
                </li>
                <li>
                  <a href="#" style={{ textDecoration: "none" }}>
                    Sell Kurtis Online
                  </a>
                </li>
                <li>
                  <a href="#" style={{ textDecoration: "none" }}>
                    Sell Appliances Online
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="list_products" id="b2">
          <h4>List products </h4>
          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "space-between"
            }}
          >
            <p style={{ width: "50%", paddingTop: "20px" }}>
              What is a listing? A listing refers to the process of registering
              your product on the Flipkart platform, making it visible to
              customers, and enabling them to view and purchase your product. It
              involves creating a detailed product page that includes essential
              information such as product title, description, images, pricing,
              and other relevant details. A well-crafted listing helps attract
              potential customers and facilitates the sale of your product on
              Flipkart.
            </p>
            <img
              src="images/List_products_images/demo.png"
              alt=""
              height="300px"
              width="400px"
            />
          </div>
          <p style={{ paddingTop: "20px", paddingBottom: "20px" }}>
            Did you know that providing precise and comprehensive information
            about your product, along with clear and captivating images, can
            increase its visibility on our platform by up to 15%.
          </p>

          <h6 style={{ marginTop: "20px", marginBottom: "20px" }}>
            Listing on Flipkart can be done in 2 different ways
          </h6>

          <div>
            <ol
              type="1"
              style={{ display: "flex", justifyContent: "space-between" }}
            >
              <li>
                <div style={{ padding: "0px" }}>
                  <p style={{ fontWeight: "500", color: "#333333" }}>
                    {" "}
                    Match with Existing products
                  </p>
                  <iframe
                    width="350"
                    height="200"
                    src="https://www.youtube.com/embed/jazZiaTb4_M"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen
                  ></iframe>
                  <p
                    style={{ textAlign: "left", width: "100%", padding: "0px" }}
                  >
                    If your product is already available on Flipkart, you have
                    the option to seamlessly link or 'Latch' onto the existing
                    product listing. This allows you to make your product live
                    on the platform without the need to create a separate
                    listing.
                  </p>
                </div>
              </li>
              <li>
                <p style={{ fontWeight: "500", color: "#333333" }}>
                  {" "}
                  New Products
                </p>
                <iframe
                  width="350"
                  height="200"
                  src="https://www.youtube.com/embed/oKPV5sIjXF8"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen
                ></iframe>
                <p style={{ width: "100%", textAlign: "left", padding: "0px" }}>
                  For products not currently available on Flipkart, you'll need
                  to provide complete information and create a new listing with
                  details like description, dimensions, features, images, and
                  usage instructions.
                </p>
              </li>
            </ol>
          </div>
        </div>

        <div
          className="storage"
          id="b3"
          style={{
            marginTop: "20px",
            marginBottom: "20px",
            position: "relative"
          }}
        >
          <h4 style={{}}>Storage and Shipping</h4>
          <p style={{ lineHeight: "1.8" }}>
            Congratulations on receiving your first order! When it comes to
            shipping your products to customers, Flipkart understands the
            importance of fast and reliable delivery in secure packaging.
          </p>
          <p>The two popular fulfilment options:</p>
          <ol>
            <li>Fulfilment by Flipkart (FBF)</li>
            <li>Non Fulfilment by Flipkart (NFBF)</li>
          </ol>
          <p style={{ lineHeight: "1.8" }}>
            Consider the fulfilment option that best suits your needs and
            preferences to ensure timely and secure delivery of your products to
            Flipkart customers.
          </p>

          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div style={{ width: "50%" }}>
              <h6>Fulfilment by Flipkart (FBF)</h6>
              <p style={{ lineHeight: "1.8" }}>
                Eliminate worries about storage, packing, shipping, and delivery
                by leveraging Flipkart's Fulfilment by Flipkart (FBF) service.
                FBF offers a comprehensive solution that handles all your
                shipping needs under one roof. With FBF, you can entrust
                Flipkart to efficiently manage the entire process, from storing
                your products to expertly packing and shipping them to
                customers. FBF maintains the standards required by FAssured,
                enabling a Flipkart seller to have access to the FAssured badge
                on their listings. Enjoy a hassle-free experience and focus on
                growing your business while Flipkart takes care of the
                logistics.
              </p>
            </div>
            <iframe
              width="400"
              height="215"
              src="https://www.youtube.com/embed/HUDj5NbChv0"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
              style={{ borderRadius: "8px" }}
            ></iframe>
          </div>

          <ol className="items">
            <li>Pick-up from seller location to Flipkart warehouse</li>
            <li>Faster delivery to customer</li>
            <li>Seamless order processing</li>
            <li>Customer returns handled end to end</li>
            <li>Warehouse space</li>
            <li>Quality selection recommendation</li>
            <li>Rigorous quality checks</li>
            <li>Quality packaging materials</li>
          </ol>

          <h6>Non Fulfilment by Flipkart (NFBF)</h6>
          <p style={{ lineHeight: "1.8" }}>
            With Non-Fulfillment by Flipkart (NFBF), you can benefit from
            end-to-end delivery of your products directly from your location to
            the customer. In NFBF, it is the responsibility of the seller to
            ensure that the product is properly packed and ready for dispatch
            before the delivery agent arrives at the seller's location. This
            service allows you to maintain control over the packaging process
            while leveraging Flipkart's logistics network for efficient and
            reliable delivery.
          </p>

          <ol>
            <li>Delivery to 19000+ pin codes across India</li>
            <li>Tracking of your product</li>
            <li>Customer returns support</li>
            <li>Logistics support from community warehouse available</li>
          </ol>

          <table>
            <thead>
              <tr style={{ backgroundColor: "#edf6fc" }}>
                <th width="300px" height="80px"></th>
                <th width="300px" height="80px">
                  Fulfilment by Flipkart (FBF)
                </th>
                <th width="300px" height="80px">
                  Non Fulfilment by Flipkart (NFBF)
                </th>
              </tr>
            </thead>
            <tbody>
              <tr style={{ height: "80px" }}>
                <td width="300px">Packaging</td>
                <td width="300px">Flipkart will pack your products</td>
                <td width="300px">
                  Seller will pack their products before pick-up
                </td>
              </tr>

              <tr style={{ height: "80px" }}>
                <td width="300px">Storage</td>
                <td width="300px">
                  Flipkart will store your products at the nearest Flipkart
                  warehouse
                </td>
                <td width="300px">
                  Seller will store products at their premise or community
                  warehouse
                </td>
              </tr>

              <tr style={{ height: "80px" }}>
                <td width="300px">Shipping</td>
                <td width="300px">
                  Flipkart will pick and deliver your products to the customer
                </td>
                <td width="300px">
                  Seller will schedule a pick-up & a delivery agent will pick
                  your order
                </td>
              </tr>

              <tr style={{ height: "80px" }}>
                <td width="300px">Fees</td>
                <td width="300px">Relevant FBF fees will be applicable</td>
                <td width="300px">
                  Normal shipping cost will be applicable to help deliver your
                  product to your customer, based on local, zonal or national
                  delivery.
                </td>
              </tr>

              <tr style={{ height: "80px" }}>
                <td width="300px">Returns</td>
                <td width="300px">Managed by Flipkart</td>
                <td width="300px">Managed by Flipkart</td>
              </tr>

              <tr style={{ height: "80px" }}>
                <td width="300px">Customer Service</td>
                <td width="300px">Managed by Flipkart</td>
                <td width="300px">Managed by Flipkart</td>
              </tr>
            </tbody>
          </table>
          <img src="images/Seller_images/assured.png" alt="" />
          <p style={{ lineHeight: "1.8" }}>
            FAssured by Flipkart is an exclusive reliability program designed to
            offer additional visibility and benefits to your products. By
            participating in FAssured, your products undergo extra quality
            checks and are guaranteed to be delivered within 2-4 days of
            ordering. The FAssured tag not only ensures faster delivery but also
            brings increased visibility, higher quality, and more orders for
            your products. It serves as Flipkart's seal of trust, emphasising
            reliability and speed. Earning the FAssured badge can lead to higher
            revenue and garner greater trust from customers, enhancing your
            overall online selling experience on Flipkart
          </p>
        </div>
        <div className="payments" id="b4">
          <img src="images/Seller_images/payment.png" alt="" height="80%" />
          <div style={{ width: "60%" }}>
            <h4>Recieve Payments</h4>
            <p style={{ lineHeight: "1.8" }}>
              With a customer base of over 45 crore+ on Flipkart, you can expect
              orders from customers across India. To ensure your convenience,
              Flipkart ensures timely payments directly into your registered
              bank account, which you provided during the Flipkart account
              creation process. You can receive your payments as fast as 7 days*
              from the date of dispatch, enabling you to manage your cash flow
              efficiently and focus on growing your business. Know more about
              Fees & Commission.
            </p>
          </div>
        </div>
        <div className="grow-faster" id="b5">
          <h4>Grow Faster </h4>
          <div>
            <p style={{ width: "60%", lineHeight: "1.8" }}>
              At Flipkart, we recognize that there may be times when you require
              additional assistance for your online business. That's why, with
              your Flipkart seller account, you gain access to a diverse range
              of tools and support functions designed to foster business growth.
              These include:
            </p>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <ol>
                <li>
                  Price Recommendation Tool : Helps you determine optimal
                  pricing for your products.
                </li>
                <li>
                  Product Recommendation Tool : Suggests popular and trending
                  products to expand your product selection.
                </li>
                <li>
                  Flipkart Ads : Enables you to advertise your products and
                  reach a larger customer base.
                </li>
                <li>
                  Paid Account Management services : Offers dedicated account
                  management support for personalised guidance.
                </li>
                <li>
                  Catalog & Photoshoot services : Assists with creating
                  high-quality product catalogues and images.
                </li>
                <li>
                  Shopping Festivals and more : Participate in exciting sales
                  events and promotional campaigns.
                </li>
              </ol>
              <img
                src="images/Seller_images/grow_faster.png"
                alt=""
                height="400px"
                width="300px"
              />
            </div>
            <p>
              <a href="#" style={{ textDecoration: "none" }}>
                Know more
              </a>{" "}
              on how to grow your business
            </p>
          </div>
        </div>

        <div className="seller_app" id="b6">
          <img
            src="images/Seller_images/seller_app_image.png"
            alt=""
            height="400px"
            style={{ marginTop: "150px" }}
          />
          <div style={{ width: "60%" }}>
            <h4>Seller App</h4>
            <p style={{ marginTop: "20px" }}>
              We recognize the significance of staying connected to your
              Flipkart online business no matter where you are. That's why we
              offer the Flipkart Seller Hub App, your trusted companion for
              managing your business on the go.
            </p>
            <h6>The Seller Hub App enables you to conveniently handle</h6>
            <ol>
              <li>Create and manage listing</li>
              <li>Manage orders and fulfilment</li>
              <li>Track inventory</li>
              <li>Payments</li>
              <li>Advertising</li>
              <li>Business Insights</li>
              <li>Seller Support and more</li>
            </ol>
            <p>
              Stay connected and in control of your Flipkart business with the
              Seller Hub App.
            </p>
            <div style={{ marginBottom: "10px" }}>
              <a href="#" style={{ textDecoration: "none" }}>
                {" "}
                Google Play
              </a>
            </div>
            <div>
              <a href="" style={{ textDecoration: "none" }}>
                Apple Store
              </a>
            </div>
          </div>
        </div>

        <div className="help" id="b7">
          <h4>Help and Support</h4>
          <div className="help_container">
            <div style={{ marginTop: "20px" }}>
              <p style={{ width: "80%", lineHeight: "1.8" }}>
                What sets us apart is our exceptional Flipkart seller support
                assistance. We prioritise your needs and are committed to
                providing you with prompt assistance, whether you have
                questions, doubts, or require any kind of support for your
                business. Our dedicated team is here to help you every step of
                the way, ensuring that you have a smooth and successful selling
                experience on Flipkart. Feel free to reach out to us whenever
                you need assistance - we're always here to support you.
              </p>
              <p style={{ width: "80%", lineHeight: "1.8" }}>
                {" "}
                <a href="#" style={{ textDecoration: "none" }}>
                  Know more
                </a>{" "}
                about the assistance we offer.{" "}
              </p>
              <p style={{ width: "80%", lineHeight: "1.8" }}>
                {" "}
                A step-by-step guide to help with your Flipkart account creation
                can be{" "}
                <a href="#" style={{ textDecoration: "none" }}>
                  downloaded from here.
                </a>
              </p>
            </div>

            <img src="images/Seller_images/help.png" alt="" height="400px" />
          </div>
        </div>
      </div>
      <div className="seller_footer">
        <table style={{ width: "100%" }}>
          <thead>
            <tr>
              <th
                colSpan="4"
                style={{
                  color: "white",
                  height: "100px",
                  fontSize: "2rem",
                  textAlign: "center"
                }}
              >
                Popular categories to sell across India
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <p>
                  <a href="#" style={{ textDecoration: "none" }}>
                    Sell Mobile Online
                  </a>
                </p>
                <p>
                  <a href="#" style={{ textDecoration: "none" }}>
                    Sell Clothes Online
                  </a>
                </p>
                <p>
                  <a href="#" style={{ textDecoration: "none" }}>
                    Sell Sarees Online
                  </a>
                </p>
                <p>
                  <a href="#" style={{ textDecoration: "none" }}>
                    Sell Electronics Online
                  </a>
                </p>
                <p>
                  <a href="#" style={{ textDecoration: "none" }}>
                    Sell Women Clothes Online
                  </a>
                </p>
              </td>
              <td>
                <p>
                  <a href="#" style={{ textDecoration: "none" }}>
                    Sell Shoes Online
                  </a>
                </p>
                <p>
                  <a href="#" style={{ textDecoration: "none" }}>
                    Sell Jewellery Online
                  </a>
                </p>
                <p>
                  <a href="#" style={{ textDecoration: "none" }}>
                    Sell Tshirts Online
                  </a>
                </p>
                <p>
                  <a href="#" style={{ textDecoration: "none" }}>
                    Sell Furniture Online
                  </a>
                </p>
                <p>
                  <a href="#" style={{ textDecoration: "none" }}>
                    Sell Makeup Online
                  </a>
                </p>
              </td>

              <td>
                <p>
                  <a href="#" style={{ textDecoration: "none" }}>
                    Sell Paintings Online
                  </a>
                </p>
                <p>
                  <a href="#" style={{ textDecoration: "none" }}>
                    Sell Watch Online
                  </a>
                </p>
                <p>
                  <a href="#" style={{ textDecoration: "none" }}>
                    Sell Books Online
                  </a>
                </p>
                <p>
                  <a href="#" style={{ textDecoration: "none" }}>
                    Sell Home Products Online
                  </a>
                </p>
                <p>
                  <a href="#" style={{ textDecoration: "none" }}>
                    Sell Kurtis Online
                  </a>
                </p>
              </td>

              <td>
                <p>
                  <a href="#" style={{ textDecoration: "none" }}>
                    Sell Beauty Products Online
                  </a>
                </p>
                <p>
                  <a href="#" style={{ textDecoration: "none" }}>
                    Sell Toys Online
                  </a>
                </p>
                <p>
                  <a href="#" style={{ textDecoration: "none" }}>
                    Sell Appliances Online
                  </a>
                </p>
                <p>
                  <a href="#" style={{ textDecoration: "none" }}>
                    Sell Shirts Online
                  </a>
                </p>
                <p>
                  <a href="#" style={{ textDecoration: "none" }}>
                    Sell Indian Clothes Online
                  </a>
                </p>
              </td>
            </tr>
            <tr>
              <td>
                <h6>Sell Online</h6>

                <p>
                  <a href="#" style={{ textDecoration: "none" }}>
                    Create Account
                  </a>
                </p>
                <p>
                  <a href="#" style={{ textDecoration: "none" }}>
                    List Products
                  </a>
                </p>
                <p>
                  <a href="#" style={{ textDecoration: "none" }}>
                    Storage & Shipping
                  </a>
                </p>
                <p>
                  <a href="#" style={{ textDecoration: "none" }}>
                    Fees & Commission
                  </a>
                </p>
                <p>
                  <a href="#" style={{ textDecoration: "none" }}>
                    Help & Support
                  </a>
                </p>
              </td>
              <td>
                <h6>Grow your Business</h6>
                <p>
                  <a href="#" style={{ textDecoration: "none" }}>
                    Insights & Tools
                  </a>
                </p>
                <p>
                  <a href="#" style={{ textDecoration: "none" }}>
                    Flipkart Ads
                  </a>
                </p>
                <p>
                  <a href="#" style={{ textDecoration: "none" }}>
                    Flipkart Value Services
                  </a>
                </p>
                <p>
                  <a href="#" style={{ textDecoration: "none" }}>
                    Shopping Festivals
                  </a>
                </p>
              </td>
              <td>
                <h6>Learn More</h6>
                <p>
                  <a href="#" style={{ textDecoration: "none" }}>
                    FAQs
                  </a>
                </p>
                <p>
                  <a href="#" style={{ textDecoration: "none" }}>
                    Seller Success Stories
                  </a>
                </p>
                <p>
                  <a href="#" style={{ textDecoration: "none" }}>
                    Seller Blogs
                  </a>
                </p>
              </td>
              <td>
                <p>Download Mobile App</p>
                <p>
                  <img
                    src="images/Seller_images/google_play.png"
                    alt=""
                    height="35px"
                  />
                </p>
                <p>
                  <img
                    src="images/Seller_images/app_store.png"
                    alt=""
                    height="42px"
                  />
                </p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Seller;
