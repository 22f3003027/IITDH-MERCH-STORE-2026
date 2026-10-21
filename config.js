// ============================================================
//  MERCH STORE - CONFIGURATION
//  Edit THIS file to customize your store (products, prices,
//  UPI ID, coupons, etc.). No need to touch index.html or app.js.
// ============================================================

const TEE_SIZES = ["XS", "S", "M", "L", "XL", "XXL"];
const HOODIE_SIZES = ["S", "M", "L", "XL", "XXL"];

const STORE_CONFIG = {

  // ---------- Store identity ----------
  storeName: "IIT DH MERCH STORE",
  tagline: "Your style, your way.",
  announcement: "Limited period offer - Order now!",   // scrolling red banner ("" to hide)

  // ---------- Payment ----------
  upiId: "yourname@upi",        // your UPI ID, shown at checkout
  qrImage: "images/qr.png",     // your UPI QR code image, put the file in the images folder

  // ---------- Order submission ----------
  // Paste your Google Apps Script Web App URL here.
  // Setup steps are written at the top of apps-script/Code.gs
  scriptURL: "https://script.google.com/macros/s/AKfycbzt1s7BFMe02AIR4xoi4eLLfhLzaoTBGJMOCY9_V1CXdho02_ahDZW2BbdUgKbmrHJG/exec",

  // ---------- Extra charges ----------
  customNameFee: 99,    // Rs. extra for a custom printed name
  xxlFee: 10,           // Rs. extra for XXL size

  // ---------- Contact (footer) ----------
  whatsapp: "918544074404",        // with country code, digits only

  // ---------- Coupon codes ----------
  // type: "flat" (fixed Rs. off) or "percent" (% off). minItems = minimum items in cart.
  coupons: [
    { code: "BUY2",   minItems: 2, type: "flat",    value: 50  },
    { code: "BUY3",   minItems: 3, type: "flat",    value: 100 },
  ],

  // ---------- Colors ----------
  colorMap: {
    "Black": "#000000",
    "Navy": "#000080",
    "White": "#FFFFFF",
    "Maroon": "#800000",
    "Grey": "#808080",
    "Olive": "#556b2f"
  },

  // ---------- Products ----------
  // sizes: "TEE_SIZES", "HOODIE_SIZES" or a custom array like ["Free Size"]
  // type "shirt"/"hoodie" shows the custom-name option; other types hide it.
  // Put your photo files in the images folder and update the paths here.
  products: [
    {
      id: 1, name: "Classic T-Shirt", price: 429, type: "shirt",
      sizes: "TEE_SIZES", colors: ["Black", "Navy"],
      images: {
        "Black": ["images/tshirt_black_front.jpg", "images/tshirt_black_back.jpg"],
        "Navy":  ["images/tshirt_navy_front.jpg",  "images/tshirt_navy_back.jpg"]
      }
    },
    {
      id: 2, name: "Polo T-Shirt", price: 479, type: "shirt",
      sizes: "TEE_SIZES", colors: ["Black", "Navy"],
      images: {
        "Black": ["images/polo_black_front.jpg", "images/polo_black_back.jpg"],
        "Navy":  ["images/polo_navy_front.jpg",  "images/polo_navy_back.jpg"]
      }
    },
    {
      id: 3, name: "Zipper Hoodie", price: 849, type: "hoodie",
      sizes: "HOODIE_SIZES", colors: ["Black"],
      images: {
        "Black": ["images/zipper_hoodie_black_front.jpg", "images/zipper_hoodie_black_back.jpg"]
      }
    },
    {
      id: 4, name: "CS Hoodie", price: 899, type: "hoodie",
      sizes: "HOODIE_SIZES", colors: ["Black"],
      images: {
        "Black": ["images/cs_hoodie_black_front.jpg", "images/cs_hoodie_black_back.jpg"]
      }
    },
    {
      id: 5, name: "EE Hoodie", price: 899, type: "hoodie",
      sizes: "HOODIE_SIZES", colors: ["Black"],
      images: {
        "Black": ["images/ee_hoodie_black_front.jpg", "images/ee_hoodie_black_back.jpg"]
      }
    }
  ]
};
