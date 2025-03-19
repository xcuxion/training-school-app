"use client";
import React, { useEffect, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";
import { fetch_all_applications } from "@/lib/actions/admission.actions";
import { IApplicant } from "@/store/applicant-store";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import ApplicantDetailModal from "@/components/admin/admission-details";

const AdmissionPage = () => {
  const [applicants, setApplicants] = useState<IApplicant[]>([]);
  const [filteredApplicants, setFilteredApplicants] = useState<IApplicant[]>([]);
  const [selectedApplicant, setSelectedApplicant] = useState<IApplicant | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [statusFilter, setStatusFilter] = useState<string>("all");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalApplicants, setTotalApplicants] = useState(0);
  const [pageSize, setPageSize] = useState(10);
  
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  useEffect(() => {
    const fetchApplicants = async () => {
      const data: IApplicant[] | any = await fetch_all_applications();
      setApplicants(data);
      setFilteredApplicants(data);
      setTotalApplicants(data.length);
    };
    fetchApplicants();
  }, []);

  const handleSearch = useDebouncedCallback((term: string) => {
    const params = new URLSearchParams(searchParams);
    if (term) {
      params.set("query", term);
    } else {
      params.delete("query");
    }
    replace(`${pathname}?${params.toString()}`);
    
    let results = applicants.filter(
      (applicant) =>
        applicant.fname.toLowerCase().includes(term.toLowerCase()) ||
        applicant.lname.toLowerCase().includes(term.toLowerCase()) ||
        (applicant.email && applicant.email.toLowerCase().includes(term.toLowerCase()))
    );
    
    if (statusFilter !== "all") {
      results = results.filter(applicant => applicant.status === statusFilter);
    }
    
    setFilteredApplicants(results);
    setTotalApplicants(results.length);
    setCurrentPage(1); // Reset to first page when searching
  }, 300);
  
  const handleStatusFilter = (status: string) => {
    setStatusFilter(status);
    const searchTerm = searchParams.get('query')?.toString() || "";
    
    let results = applicants;
    
    if (searchTerm) {
      results = results.filter(
        (applicant) =>
          applicant.fname.toLowerCase().includes(searchTerm.toLowerCase()) ||
          applicant.lname.toLowerCase().includes(searchTerm.toLowerCase()) ||
          (applicant.email && applicant.email.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }
    
    if (status !== "all") {
      results = results.filter(applicant => applicant.status === status);
    }
    
    setFilteredApplicants(results);
    setTotalApplicants(results.length);
    setCurrentPage(1); // Reset to first page when filtering
  };

  const handleViewApplicant = (applicant: IApplicant) => {
    setSelectedApplicant(applicant);
    setIsModalOpen(true);
  };
  
  const formatDate = (date: Date) => {
    return new Date(date).toLocaleDateString();
  };

  // Calculate pagination
  const totalPages = Math.ceil(totalApplicants / pageSize);
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = Math.min(startIndex + pageSize, totalApplicants);
  const currentApplicants = filteredApplicants.slice(startIndex, endIndex);

  // Generate page numbers for pagination
  const generatePaginationItems = () => {
    const items = [];
    const maxVisiblePages = 5;
    
    if (totalPages <= maxVisiblePages) {
      // Show all pages if there are fewer than maxVisiblePages
      for (let i = 1; i <= totalPages; i++) {
        items.push(
          <PaginationItem key={i}>
            <PaginationLink 
              onClick={() => setCurrentPage(i)} 
              isActive={currentPage === i}
            >
              {i}
            </PaginationLink>
          </PaginationItem>
        );
      }
    } else {
      // Always show first page
      items.push(
        <PaginationItem key={1}>
          <PaginationLink 
            onClick={() => setCurrentPage(1)} 
            isActive={currentPage === 1}
          >
            1
          </PaginationLink>
        </PaginationItem>
      );
      
      // Show ellipsis if current page is far from start
      if (currentPage > 3) {
        items.push(
          <PaginationItem key="ellipsis-start">
            <PaginationEllipsis />
          </PaginationItem>
        );
      }
      
      // Show pages around current page
      const startPage = Math.max(2, currentPage - 1);
      const endPage = Math.min(totalPages - 1, currentPage + 1);
      
      for (let i = startPage; i <= endPage; i++) {
        items.push(
          <PaginationItem key={i}>
            <PaginationLink 
              onClick={() => setCurrentPage(i)} 
              isActive={currentPage === i}
            >
              {i}
            </PaginationLink>
          </PaginationItem>
        );
      }
      
      // Show ellipsis if current page is far from end
      if (currentPage < totalPages - 2) {
        items.push(
          <PaginationItem key="ellipsis-end">
            <PaginationEllipsis />
          </PaginationItem>
        );
      }
      
      // Always show last page
      items.push(
        <PaginationItem key={totalPages}>
          <PaginationLink 
            onClick={() => setCurrentPage(totalPages)} 
            isActive={currentPage === totalPages}
          >
            {totalPages}
          </PaginationLink>
        </PaginationItem>
      );
    }
    
    return items;
  };

  const handlePageSizeChange = (size: string) => {
    const newSize = parseInt(size);
    setPageSize(newSize);
    setCurrentPage(1); // Reset to first page when changing page size
  };

  return (
    <main className="px-4 py-6">
      <section className="mb-6">
        <h1 className="text-2xl font-bold mb-4">Applicant Management</h1>
        <div className="flex gap-4 items-center">
          <div className="flex-1">
            <Input
              placeholder="Search by name or email"
              defaultValue={searchParams.get('query')?.toString() || ""}
              onChange={(e) => handleSearch(e.target.value)}
              className="w-full"
            />
          </div>
          <div className="w-48">
            <Select
              value={statusFilter}
              onValueChange={handleStatusFilter}
            >
              <SelectTrigger>
                <SelectValue placeholder="Filter by status" />
              </SelectTrigger>
              <SelectContent className="bg-black">
                <SelectItem value="all">All Statuses</SelectItem>
                <SelectItem value="pending">Pending</SelectItem>
                <SelectItem value="admitted">Admitted</SelectItem>
                <SelectItem value="rejected">Rejected</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </section>

      <section className="bg-secondary rounded-md shadow mb-4">
        <div className="p-4 border-b flex justify-between items-center">
          <div>
            <span className="font-medium">Total Applicants: </span>
            <span className="font-bold">{totalApplicants}</span>
            <span className="mx-2">|</span>
            <span className="text-sm text-muted-foreground">
              Showing {startIndex + 1}-{endIndex} of {totalApplicants}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-sm text-muted-foreground">Show:</span>
            <Select
              value={pageSize.toString()}
              onValueChange={handlePageSizeChange}
            >
              <SelectTrigger className="w-20">
                <SelectValue placeholder="10" />
              </SelectTrigger>
              <SelectContent className="bg-black">
                <SelectItem value="5">5</SelectItem>
                <SelectItem value="10">10</SelectItem>
                <SelectItem value="20">20</SelectItem>
                <SelectItem value="50">50</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Gender</TableHead>
                <TableHead>Track</TableHead>
                <TableHead>Country</TableHead>
                <TableHead>Applied On</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {currentApplicants.length > 0 ? (
                currentApplicants.map((applicant) => (
                  <TableRow key={applicant.id}>
                    <TableCell className="font-medium">
                      {applicant.fname} {applicant.oname} {applicant.lname}
                    </TableCell>
                    <TableCell className="capitalize">{applicant.gender}</TableCell>
                    <TableCell className="capitalize">{applicant.track}</TableCell>
                    <TableCell className="capitalize">{applicant.country}</TableCell>
                    <TableCell>{formatDate(applicant.createdAt as Date)}</TableCell>
                    <TableCell>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        applicant.status === "admitted" 
                          ? "bg-green-100 text-green-800" 
                          : applicant.status === "rejected" 
                          ? "bg-red-100 text-red-800" 
                          : "bg-yellow-100 text-yellow-800"
                      }`}>
                        {applicant.status}
                      </span>
                    </TableCell>
                    <TableCell>
                      <Button 
                        variant="outline" 
                        size="sm"
                        onClick={() => handleViewApplicant(applicant)}
                      >
                        View
                      </Button>
                    </TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={7} className="text-center py-6">
                    No applicants found
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
      </section>
      
      {totalPages > 1 && (
        <Pagination className="mt-4">
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious 
                onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
                aria-disabled={currentPage === 1}
                className={currentPage === 1 ? "pointer-events-none opacity-50" : ""}
              />
            </PaginationItem>
            
            {generatePaginationItems()}
            
            <PaginationItem>
              <PaginationNext 
                onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
                aria-disabled={currentPage === totalPages}
                className={currentPage === totalPages ? "pointer-events-none opacity-50" : ""}
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      )}
      
      {selectedApplicant && (
        <ApplicantDetailModal
          applicant={selectedApplicant}
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </main>
  );
};

export default AdmissionPage;

// "use client";
// import React, { useEffect, useState } from "react";
// import { usePathname, useRouter, useSearchParams } from "next/navigation";
// import { useDebouncedCallback } from "use-debounce";
// import { fetch_all_applications } from "@/lib/actions/admission.actions";
// import { IApplicant } from "@/store/applicant-store";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import {
//   Table,
//   TableBody,
//   TableCell,
//   TableHead,
//   TableHeader,
//   TableRow,
// } from "@/components/ui/table";
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select";
// import ApplicantDetailModal from "@/components/admin/prospect-card";

// const AdmissionPage = () => {
//   const [applicants, setApplicants] = useState<IApplicant[]>([]);
//   const [filteredApplicants, setFilteredApplicants] = useState<IApplicant[]>([]);
//   const [selectedApplicant, setSelectedApplicant] = useState<IApplicant | null>(null);
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [statusFilter, setStatusFilter] = useState<string>("all");
  
//   const searchParams = useSearchParams();
//   const pathname = usePathname();
//   const { replace } = useRouter();

//   useEffect(() => {
//     const fetchApplicants = async () => {
//       const data: IApplicant[] | any = await fetch_all_applications();
//       setApplicants(data);
//       setFilteredApplicants(data);
//     };
//     fetchApplicants();
//   }, []);

//   const handleSearch = useDebouncedCallback((term: string) => {
//     const params = new URLSearchParams(searchParams);
//     if (term) {
//       params.set("query", term);
//     } else {
//       params.delete("query");
//     }
//     replace(`${pathname}?${params.toString()}`);
    
//     let results = applicants.filter(
//       (applicant) =>
//         applicant.fname.toLowerCase().includes(term.toLowerCase()) ||
//         applicant.lname.toLowerCase().includes(term.toLowerCase()) ||
//         (applicant.email && applicant.email.toLowerCase().includes(term.toLowerCase()))
//     );
    
//     if (statusFilter !== "all") {
//       results = results.filter(applicant => applicant.status === statusFilter);
//     }
    
//     setFilteredApplicants(results);
//   }, 300);
  
//   const handleStatusFilter = (status: string) => {
//     setStatusFilter(status);
//     const searchTerm = searchParams.get('query')?.toString() || "";
    
//     let results = applicants;
    
//     if (searchTerm) {
//       results = results.filter(
//         (applicant) =>
//           applicant.fname.toLowerCase().includes(searchTerm.toLowerCase()) ||
//           applicant.lname.toLowerCase().includes(searchTerm.toLowerCase()) ||
//           (applicant.email && applicant.email.toLowerCase().includes(searchTerm.toLowerCase()))
//       );
//     }
    
//     if (status !== "all") {
//       results = results.filter(applicant => applicant.status === status);
//     }
    
//     setFilteredApplicants(results);
//   };

//   const handleViewApplicant = (applicant: IApplicant) => {
//     setSelectedApplicant(applicant);
//     setIsModalOpen(true);
//   };
  
//   const formatDate = (date: Date) => {
//     return new Date(date).toLocaleDateString();
//   };

//   return (
//     <main className="px-4 py-6">
//       <section className="mb-6">
//         <h1 className="text-2xl font-bold mb-4">Applicant Management</h1>
//         <div className="flex gap-4 items-center">
//           <div className="flex-1">
//             <Input
//               placeholder="Search by name or email"
//               defaultValue={searchParams.get('query')?.toString() || ""}
//               onChange={(e) => handleSearch(e.target.value)}
//               className="w-full"
//             />
//           </div>
//           <div className="w-48">
//             <Select
//               value={statusFilter}
//               onValueChange={handleStatusFilter}
//             >
//               <SelectTrigger>
//                 <SelectValue placeholder="Filter by status" />
//               </SelectTrigger>
//               <SelectContent className="bg-black">
//                 <SelectItem value="all">All Statuses</SelectItem>
//                 <SelectItem value="pending">Pending</SelectItem>
//                 <SelectItem value="admitted">Admitted</SelectItem>
//                 <SelectItem value="rejected">Rejected</SelectItem>
//               </SelectContent>
//             </Select>
//           </div>
//         </div>
//       </section>

//       <section className="bg-secondary rounded-md shadow">
//         <div className="overflow-x-auto">
//           <Table>
//             <TableHeader>
//               <TableRow>
//                 <TableHead>Name</TableHead>
//                 <TableHead>Gender</TableHead>
//                 <TableHead>Track</TableHead>
//                 <TableHead>Country</TableHead>
//                 <TableHead>Applied On</TableHead>
//                 <TableHead>Status</TableHead>
//                 <TableHead>Actions</TableHead>
//               </TableRow>
//             </TableHeader>
//             <TableBody>
//               {filteredApplicants.length > 0 ? (
//                 filteredApplicants.map((applicant) => (
//                   <TableRow key={applicant.id}>
//                     <TableCell className="font-medium">
//                       {applicant.fname} {applicant.oname} {applicant.lname}
//                     </TableCell>
//                     <TableCell className="capitalize">{applicant.gender}</TableCell>
//                     <TableCell className="capitalize">{applicant.track}</TableCell>
//                     <TableCell className="capitalize">{applicant.country}</TableCell>
//                     <TableCell>{formatDate(applicant.createdAt as Date)}</TableCell>
//                     <TableCell>
//                       <span className={`px-2 py-1 rounded-full text-xs font-medium ${
//                         applicant.status === "admitted" 
//                           ? "bg-green-100 text-green-800" 
//                           : applicant.status === "rejected" 
//                           ? "bg-red-100 text-red-800" 
//                           : "bg-yellow-100 text-yellow-800"
//                       }`}>
//                         {applicant.status}
//                       </span>
//                     </TableCell>
//                     <TableCell>
//                       <Button 
//                         variant="outline" 
//                         size="sm"
//                         onClick={() => handleViewApplicant(applicant)}
//                       >
//                         View
//                       </Button>
//                     </TableCell>
//                   </TableRow>
//                 ))
//               ) : (
//                 <TableRow>
//                   <TableCell colSpan={7} className="text-center py-6">
//                     No applicants found
//                   </TableCell>
//                 </TableRow>
//               )}
//             </TableBody>
//           </Table>
//         </div>
//       </section>
      
//       {selectedApplicant && (
//         <ApplicantDetailModal
//           applicant={selectedApplicant}
//           isOpen={isModalOpen}
//           onClose={() => setIsModalOpen(false)}
//         />
//       )}
//     </main>
//   );
// };

// export default AdmissionPage;