const express = require("express");
const path = require("path");
const multer = require("multer");

const bookingController = require("../Controller/BookingControl");

const {
  createBooking,
  bulkCreateBookings,
  getAllBookings,
  getBookingById,
  updateBookingStatus,
  deleteBooking,
  bulkDeleteBookings,
  getUserBookings,
  getBookingsForMyResources,
  uploadReceipt,            // ✅ receipt upload without auto-confirm
  getBookingHistoryChartData,
  getResourceById,
  getBookingsForResource,
} = bookingController;

const router = express.Router();

// ================== MULTER CONFIGURATION ==================
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/"); // Make sure this folder exists
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, uniqueSuffix + path.extname(file.originalname));
  },
});

const upload = multer({ storage });

// ================== ROUTES ==================

// Get bookings for a specific resource
router.get("/resource/:id/bookings", getBookingsForResource);

// Chart data route (must come before "/:id")
router.get("/history/:resourceId", getBookingHistoryChartData);

// Bulk create bookings
router.post("/bulk", bulkCreateBookings);

// Create single booking
router.post("/", createBooking);

// Get all bookings
router.get("/", getAllBookings);

// Get bookings for a specific user
router.get("/user/:userId", getUserBookings);

// Get bookings for resources owned by a user
router.get("/my-resources/:userId", getBookingsForMyResources);

// Upload receipt WITHOUT auto-confirming booking
router.post("/:id/upload-receipt", upload.single("receipt"), uploadReceipt);

// Get single booking by ID
router.get("/:id", getBookingById);

// Update booking status manually
router.put("/:id/status", updateBookingStatus);

// Bulk delete bookings
router.delete("/bulk", bulkDeleteBookings);

// Delete single booking
router.delete("/:id", deleteBooking);

// ================== ADDITIONAL ENDPOINTS ==================

// Get single resource by ID
router.get("/resource/:id", getResourceById);

// Optional: get all resources
router.get("/resources", async (req, res) => {
  const Resource = require("../Model/Resources");
  try {
    const resources = await Resource.find();
    res.status(200).json(resources);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch resources", error: err.message });
  }
});

module.exports = router;
