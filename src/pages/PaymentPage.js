import React, { useState } from "react";
import {
  Card,
  TextField,
  Button,
  FormControl,
  Select,
  MenuItem,
  Modal,
  Box,
  Grid,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import QrCodeScannerIcon from "@mui/icons-material/QrCodeScanner";
import PaymentIcon from "@mui/icons-material/Payment";
import PersonIcon from "@mui/icons-material/Person";
import HomeIcon from "@mui/icons-material/Home";
import AssignmentIndIcon from "@mui/icons-material/AssignmentInd";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import Navbar from "../components/Navbar";
import done from "../assets/Icons/done.gif";
import { useNavigate } from "react-router-dom";
import ContactlessIcon from "@mui/icons-material/Contactless";

const PaymentPage = () => {
  const navigate = useNavigate();
  const [customerDetails, setCustomerDetails] = useState({
    name: "",
    address: "",
    dlNumber: "",
    panCard: "",
  });

  const [paymentMethod, setPaymentMethod] = useState("");
  const [scannerModalOpen, setScannerModalOpen] = useState(false);
  const [confirmationModalOpen, setConfirmationModalOpen] = useState(false);

  const handleCustomerDetailsChange = (e) => {
    const { name, value } = e.target;
    setCustomerDetails({ ...customerDetails, [name]: value });
  };

  const handlePaymentMethodChange = (e) => {
    setPaymentMethod(e.target.value);
  };

  const handleOpenScannerModal = () => {
    setScannerModalOpen(true);
  };

  const handleCloseScannerModal = () => {
    setScannerModalOpen(false);
    setConfirmationModalOpen(true);
  };

  const handleCloseConfirmationModal = () => {
    setConfirmationModalOpen(false);
    navigate("/bookings");
  };

  return (
    <>
      <Box sx={{ backgroundColor: "#121212", width: "100dvw" }}>
        <Navbar />
      </Box>
      <div style={{ padding: "20px" }}>
        <p style={{ fontWeight: 500, fontSize: "25px", color: "#00695C" }}>
          Booking Details
        </p>

        <Card sx={{ padding: "20px", margin: "1px", marginBottom:"10px" }}>
          <Grid container spacing={2}>
            <Grid item lg={4} md={6} xs={12}>
              <TextField
                label="Name"
                name="name"
                value={customerDetails.name}
                onChange={handleCustomerDetailsChange}
                fullWidth
                margin="normal"
                InputProps={{
                  startAdornment: <PersonIcon position="start" />,
                }}
              />
            </Grid>
            <Grid item lg={4} md={6} xs={12}>
              <TextField
                label="Address"
                name="address"
                value={customerDetails.address}
                onChange={handleCustomerDetailsChange}
                fullWidth
                margin="normal"
                InputProps={{
                  startAdornment: <HomeIcon position="start" />,
                }}
              />
            </Grid>
            <Grid item lg={4} md={6} xs={12}>
              <TextField
                label="DL No"
                name="dlNumber"
                value={customerDetails.dlNumber}
                onChange={handleCustomerDetailsChange}
                fullWidth
                margin="normal"
                InputProps={{
                  startAdornment: <AssignmentIndIcon position="start" />,
                }}
              />
            </Grid>
            <Grid item lg={4} md={6} xs={12}>
              <TextField
                label="PAN Card No"
                name="panCard"
                value={customerDetails.panCard}
                onChange={handleCustomerDetailsChange}
                fullWidth
                margin="normal"
                InputProps={{
                  startAdornment: <AlternateEmailIcon position="start" />,
                }}
              />
            </Grid>
            <Grid item lg={4} md={6} xs={12}>
              <FormControl fullWidth margin="normal">
                <Select
                  value={paymentMethod}
                  onChange={handlePaymentMethodChange}
                  startAdornment={
                    <PaymentIcon position="start" sx={{ mr: 1 }} />
                  }
                  displayEmpty
                >
                  <MenuItem value="" disabled>
                    Select Payment Method
                  </MenuItem>
                  <MenuItem value="Cash">Cash</MenuItem>
                  <MenuItem value="PhonePay">Phone Pay</MenuItem>
                  <MenuItem value="CreditCard">Credit Card</MenuItem>
                  <MenuItem value="NetBanking">Net Banking</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item lg={3} md={6} xs={12}>
              <Button
                variant="contained"
                color="info"
                onClick={handleOpenScannerModal}
                sx={{ marginTop: "24px", float: "right", textTransform: "" }}
                startIcon={<ContactlessIcon />}
              >
                Pay Now
              </Button>
            </Grid>
          </Grid>
        </Card>
        {/* Prime Fee Structure Accordion */}
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="prime-fee-structure-content"
            id="prime-fee-structure-header"
          >
            <Typography
              sx={{ fontWeight: 500, fontSize: "20px", color: "#00695C" }}
            >
              Prime Fee Structure
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <ul style={{ fontFamily: "Poppins", fontSize: "16px", lineHeight: "1.5" }}>
              <li>
                <strong>Base Rental Fee</strong>: A standard 10% charge is
                applied to cover the basic cost of renting the vehicle, ensuring
                you have access to the car for the duration of your booking.
              </li>
              <li>
                <strong>Late Return Fee</strong>: A penalty of 5% will be added
                for returning the vehicle beyond the agreed-upon time, helping
                to manage availability for other customers.
              </li>
              <li>
                <strong>Damage Coverage Fee</strong>: A 15% fee is included to
                cover potential damages to the vehicle, offering peace of mind
                during your rental period.
              </li>
              <li>
                <strong>Insurance Contribution</strong>: An 8% contribution is
                required to ensure the vehicle is properly insured throughout
                your rental, protecting you from unforeseen circumstances.
              </li>
              <li>
                <strong>Maintenance & Service Fee</strong>: A 12% charge is
                applied to cover the regular upkeep, cleaning, and servicing of
                the vehicle, ensuring it's in top condition for every ride.
              </li>
            </ul>
          </AccordionDetails>
        </Accordion>

        <br />

        {/* Prime Guidelines Accordion */}
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="prime-guidelines-content"
            id="prime-guidelines-header"
          >
            <Typography
              sx={{ fontWeight: 500, fontSize: "20px", color: "#00695C" }}
            >
              Prime Guidelines
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <ul style={{ fontFamily: "Poppins", fontSize: "16px", lineHeight: "1.5" }}>
              <li>
                Age Requirement: Renters must be at least 21 years old to rent a
                car, with certain vehicle categories requiring a higher minimum
                age.
              </li>
              <li>
                Driver's License: A valid driver's license must be presented at
                the time of rental. International renters should carry both
                their local license and an international driving permit.
              </li>
              <li>
                Fuel Policy: The car must be returned with the same fuel level
                as when rented, or additional refueling charges may apply.
              </li>
              <li>
                Rental Duration: The minimum rental period is 24 hours. Late
                returns may incur additional fees based on the rental terms.
              </li>
              <li>
                Authorized Drivers: Only drivers listed on the rental agreement
                are authorized to operate the vehicle. Additional drivers must
                be added at the time of rental for an extra fee.
              </li>
              <li>
                No Smoking: Smoking inside the rental vehicle is strictly
                prohibited and may result in additional cleaning fees.
              </li>
            </ul>
          </AccordionDetails>
        </Accordion>

        {/* Scanner Modal */}
        <Modal
          open={scannerModalOpen}
          onClose={handleCloseScannerModal}
          aria-labelledby="scanner-modal"
          aria-describedby="scanner-modal-description"
        >
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: 600,
              bgcolor: "background.paper",
              border: "2px solid #EEEEEE",
              boxShadow: 24,
              p: 4,
              textAlign: "center",
            }}
          >
            <QrCodeScannerIcon
              style={{ height: "50px", width: "50px", color: "#00695C" }}
            />
            <Typography variant="h5" component="h2" sx={{ mb: 2 }}>
              Scan QR Code to Pay
            </Typography>
            <Button
              onClick={handleCloseScannerModal}
              variant="contained"
              sx={{ textTransform: "none", mt: 2 }}
            >
              Mark Payment Complete
            </Button>
          </Box>
        </Modal>

        {/* Confirmation Modal */}
        <Modal
          open={confirmationModalOpen}
          onClose={handleCloseConfirmationModal}
          aria-labelledby="confirmation-modal"
          aria-describedby="confirmation-modal-description"
        >
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: 500,
              bgcolor: "background.paper",
              border: "2px solid #EEEEEE",
              boxShadow: 24,
              p: 4,
              textAlign: "center",
            }}
          >
            <img src={done} alt="Done" style={{ width: "100px", height: "100px" }} />
            <p  sx={{ mb: 2 }}>
              Payment Completed  successfully
            </p>
            
            <Button variant="contained" color="warning"  size="medium"
              sx={{ textTransform: "none", mt: 2 }}>Print Recipt
              </Button>&nbsp;
              <Button
              onClick={handleCloseConfirmationModal}
              variant="contained"
              sx={{ textTransform: "none", mt: 2 }}
              size="medium"
            >
             My  Bookings
            </Button>
          </Box>
        </Modal>
      </div>
    </>
  );
};

export default PaymentPage;
