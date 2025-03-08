"use client";

import React, { useState } from "react";

import { useAdminStore } from "@/store/admin-store";
import { Button } from "@/components/ui/button";
import { confirm_otp, send_verification_email } from "@/lib/actions/admin.actions";
import { useRouter } from "next/navigation";
import { InputOTP, InputOTPGroup, InputOTPSeparator, InputOTPSlot } from "@/components/ui/input-otp";

const Confirmation = () => {
  const { admin } = useAdminStore();
  const [otp, setOtp] = useState<string>(""); // Store OTP as a string
  const router = useRouter()

  // Verify OTP
  const handleVerifyOTP = async (otpCode: string) => {
    if (!admin?.id) return;
    if (!(/^\d{0,6}$/.test(otpCode))) {
      return {message: "Code invalid"}
    }

    const otpNumber = parseInt(otpCode, 10); // Convert OTP to number

    if (isNaN(otpNumber)) {
      // console.error("Invalid OTP format");
      return {message: "Invalid OTP format"}
    }

    try {
      const response = await confirm_otp(admin.id, otpNumber);
      // console.log("OTP Verified:", response);

      const userRole = admin.permissions;
      switch (userRole) {
        case "head":
          router.push("/school/administrator-office/overview");
          break;
        case "registrar":
          router.push("/school/administrator-office/admissions");
          break;
        case "librarian":
          router.push("/school/administrator-office/overview");
          break;
        case "support":
          router.push("/school/administrator-office/support");
          break;
      }

    } catch (error) {
      console.error("OTP Verification Failed:", error);
    }
  };

  // Request new OTP
  const handleRequestNewOTP = async () => {
    console.log(admin)
    if (!admin?.email) return;
    try {
      const response = await send_verification_email(admin.email);
      console.log("New OTP Requested:", response);
    } catch (error) {
      console.error("Failed to request new OTP:", error);
    }
  };

  return (
    <div className="w-full h-screen flex flex-col flex-center gap-4">
      <h1 className="text-2xl font-bold">Enter Your OTP Passkey</h1>

      <InputOTP maxLength={6} value={otp} onChange={(value)=>setOtp(value)}>
        <InputOTPGroup>
          <InputOTPSlot index={0} />
          <InputOTPSlot index={1} />
          <InputOTPSlot index={2} />
        </InputOTPGroup>
        <InputOTPSeparator />
        <InputOTPGroup>
          <InputOTPSlot index={3} />
          <InputOTPSlot index={4} />
          <InputOTPSlot index={5} />
        </InputOTPGroup>
      </InputOTP>

      {/* Request New OTP Button */}
      <Button onClick={handleRequestNewOTP} variant="outline">
        Request New OTP
      </Button>

      <Button onClick={() => handleVerifyOTP(otp)} variant="outline">
        Verify
      </Button>
    </div>
  );
};

export default Confirmation;
