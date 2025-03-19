"use client"
import { IApplicant } from "@/store/applicant-store";
import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  admit_applicant,
  reject_applicant,
} from "@/lib/actions/admission.actions";
import { toast } from "sonner";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";

interface ApplicantDetailModalProps {
  applicant: IApplicant;
  isOpen: boolean;
  onClose: () => void;
}

const ApplicantDetailModal = ({
  applicant,
  isOpen,
  onClose,
}: ApplicantDetailModalProps) => {
  const [admissionType, setAdmissionType] = useState<
    "full" | "student" | "nonStudent"
  >("student");
  const [loading, setLoading] = useState<boolean>(false);

  const handleRejection = async () => {
    try {
      setLoading(true);
      const response = await reject_applicant(applicant.id);
      toast(response?.message || "Applicant rejected successfully");
      onClose();
    } catch (error) {
      console.error(error);
      toast("Failed to reject applicant");
    } finally {
      setLoading(false);
    }
  };

  const handleAcceptance = async () => {
    try {
      setLoading(true);
      const response = await admit_applicant(applicant.id, admissionType);
      toast(response?.message || "Applicant admitted successfully");
      onClose();
    } catch (error) {
      console.error(error);
      toast("Failed to admit applicant");
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (date: Date) => {
    return new Date(date).toDateString();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-3xl max-h-[90vh]">
        <DialogHeader>
          <DialogTitle className="text-xl">
            Applicant Details: {applicant.fname} {applicant.lname}
          </DialogTitle>
        </DialogHeader>
        
        <ScrollArea className="pr-4 max-h-[calc(90vh-120px)]">
          <Tabs defaultValue="personal">
            <TabsList className="mb-4">
              <TabsTrigger value="personal">Personal Info</TabsTrigger>
              <TabsTrigger value="academic">Academic Info</TabsTrigger>
              <TabsTrigger value="statements">Statements</TabsTrigger>
            </TabsList>
            
            <TabsContent value="personal">
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="space-y-1">
                  <p className="text-sm text-muted-foreground">Full Name</p>
                  <p className="font-medium">
                    {applicant.fname} {applicant.oname} {applicant.lname}
                  </p>
                </div>
                <div className="space-y-1">
                  <p className="text-sm text-muted-foreground">Gender</p>
                  <p className="font-medium capitalize">{applicant.gender}</p>
                </div>
                <div className="space-y-1">
                  <p className="text-sm text-muted-foreground">Date of Birth</p>
                  <p className="font-medium">{formatDate(applicant.dob as Date)}</p>
                </div>
                <div className="space-y-1">
                  <p className="text-sm text-muted-foreground">Country</p>
                  <p className="font-medium capitalize">{applicant.country}</p>
                </div>
                <div className="space-y-1">
                  <p className="text-sm text-muted-foreground">Email</p>
                  <p className="font-medium">{applicant.email}</p>
                </div>
                <div className="space-y-1">
                  <p className="text-sm text-muted-foreground">WhatsApp</p>
                  <p className="font-medium">{applicant.contact}</p>
                </div>
                <div className="space-y-1">
                  <p className="text-sm text-muted-foreground">Application Date</p>
                  <p className="font-medium">{formatDate(applicant.createdAt as Date)}</p>
                </div>
                <div className="space-y-1">
                  <p className="text-sm text-muted-foreground">Has Laptop</p>
                  <p className="font-medium">{applicant.laptop ? "Yes" : "No"}</p>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="academic">
              <div className="grid grid-cols-2 gap-4 mb-4">
                {applicant.student && (
                  <>
                    <div className="space-y-1">
                      <p className="text-sm text-muted-foreground">School</p>
                      <p className="font-medium capitalize">{applicant.school}</p>
                    </div>
                    <div className="space-y-1">
                      <p className="text-sm text-muted-foreground">Programme</p>
                      <p className="font-medium">{applicant.programme}</p>
                    </div>
                    <div className="space-y-1">
                      <p className="text-sm text-muted-foreground">Year</p>
                      <p className="font-medium">{applicant.year}</p>
                    </div>
                  </>
                )}
                <div className="space-y-1">
                  <p className="text-sm text-muted-foreground">Track</p>
                  <p className="font-medium capitalize">{applicant.track}</p>
                </div>
                <div className="space-y-1">
                  <p className="text-sm text-muted-foreground">Batch</p>
                  <p className="font-medium">
                    {applicant.batch === "batch25" ? "Batch'25" : ""}
                  </p>
                </div>
                <div className="space-y-1">
                  <p className="text-sm text-muted-foreground">Current Status</p>
                  <p className={`font-medium inline-block px-2 py-1 rounded-full text-xs ${
                    applicant.status === "admitted" 
                      ? "bg-green-100 text-green-800" 
                      : applicant.status === "rejected" 
                      ? "bg-red-100 text-red-800" 
                      : "bg-yellow-100 text-yellow-800"
                  }`}>
                    {applicant.status}
                  </p>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="statements">
              {applicant.statement && (
                <div className="mb-4">
                  <h3 className="text-sm font-medium text-muted-foreground mb-2">
                    Scholarship Need Request
                  </h3>
                  <div className="p-3 bg-muted rounded-md">
                    {applicant.statement}
                  </div>
                </div>
              )}
              
              <div className="mb-4">
                <h3 className="text-sm font-medium text-muted-foreground mb-2">
                  Intention on Balance
                </h3>
                <div className="p-3 bg-muted rounded-md">
                  {applicant.balance}
                </div>
              </div>
              
              <div className="mb-4">
                <h3 className="text-sm font-medium text-muted-foreground mb-2">
                  Statement of Purpose
                </h3>
                <div className="p-3 bg-muted rounded-md">
                  {applicant.reason}
                </div>
              </div>
            </TabsContent>
          </Tabs>
          
          <Separator className="my-6" />
          
          <div className="flex items-center justify-between gap-4">
            <Button
              variant="destructive"
              onClick={handleRejection}
              disabled={loading}
            >
              {loading ? "Processing..." : "Decline Application"}
            </Button>
            
            <div className="flex items-center gap-2">
              <Select
                value={admissionType}
                onValueChange={(value) => 
                  setAdmissionType(value as "student" | "full" | "nonStudent")
                }
              >
                <SelectTrigger className="w-48">
                  <SelectValue placeholder="Select offer type" />
                </SelectTrigger>
                <SelectContent className="bg-black ">
                  <SelectItem value="full">Full Scholarship</SelectItem>
                  <SelectItem value="student">Student Offer</SelectItem>
                  <SelectItem value="nonStudent">Non-student Offer</SelectItem>
                </SelectContent>
              </Select>
              
              <Button
                variant="default"
                onClick={handleAcceptance}
                disabled={loading}
                className="min-w-24"
              >
                {loading ? "Processing..." : "Admit"}
              </Button>
            </div>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
};

export default ApplicantDetailModal;

