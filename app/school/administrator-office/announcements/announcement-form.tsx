"use client"
import { useState } from "react";
import FormModal from "@/components/form-modal";
import { SingleImageDropzone } from "@/components/single-image-drpzone";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { sendAnnouncement } from "@/lib/actions/announcement.actions";

const Announcement = ({
  show,
  onClose,
}: {
  show: boolean;
  onClose: () => void;
}) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [file, setFile] = useState<File | undefined>(undefined);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !content) {
      toast({
        title: "Error",
        description: "Title and content are required",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    try {
      await sendAnnouncement({
        title,
        content,
        file,
      });
      
      toast({
        title: "Success",
        description: "Announcement sent successfully",
      });
      
      setTitle("");
      setContent("");
      setFile(undefined);
      onClose();
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send announcement",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <FormModal isOpen={show} title="Create Announcement" onClose={onClose}>
      <form onSubmit={handleSubmit} className="flex flex-col gap-y-6 w-full">
        <div className="flex flex-col gap-y-2">
          <Label htmlFor="title">Title</Label>
          <Input 
            id="title"
            type="text" 
            name="title" 
            placeholder="Enter announcement title" 
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            disabled={isSubmitting}
            required
          />
        </div>
        
        <div className="flex flex-col gap-y-2">
          <Label htmlFor="content">Content</Label>
          <Textarea 
            id="content"
            name="content" 
            placeholder="Enter announcement content" 
            rows={5}
            value={content}
            onChange={(e) => setContent(e.target.value)}
            disabled={isSubmitting}
            required
          />
        </div>
        
        <div className="flex flex-col gap-y-2">
          <Label>Attachment (Optional)</Label>
          <SingleImageDropzone 
            height={200} 
            width={200} 
            value={file ? URL.createObjectURL(file) : undefined}
            onChange={setFile}
            disabled={isSubmitting}
          />
          <p className="text-xs text-muted-foreground mt-1">
            Supported formats: JPG, PNG, PDF (max 5MB)
          </p>
        </div>
        
        <div className="flex justify-end gap-x-2 mt-4">
          <Button 
            type="button" 
            variant="outline" 
            onClick={onClose}
            disabled={isSubmitting}
          >
            Cancel
          </Button>
          <Button 
            type="submit"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Sending..." : "Send Announcement"}
          </Button>
        </div>
      </form>
    </FormModal>
  );
};

export default Announcement;