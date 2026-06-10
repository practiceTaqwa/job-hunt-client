"use client";

import React, { useState } from "react";

// Hero UI Components
import {
  Form,
  Button,
  TextField,
  Label,
  Input,
  Description,
  FieldError,
} from "@heroui/react";

// Icons
import {
  ArrowRight,
  Link,
  FileText,
  LayoutHeaderCells,
} from "@gravity-ui/icons";

const JobApply = ({ job, applicant }) => {
  const [formData, setFormData] = useState({
    resumeLink: "",
    portfolioLink: "",
    additionalNotes: "",
  });

  const [loading, setLoading] = useState(false);

  // ✅ Safe change handler (HeroUI compatible)
  const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    const name = e.target?.name;
    const value = e.target?.value;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // ✅ Submit handler
  const handleSubmit = async (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // validation
    if (!formData.resumeLink) {
      alert("Resume link is required");
      return;
    }

    const submissionData = {
      jobId: job?._id,
      jobTitle: job?.jobTitle,
      companyName: job?.companyName,

      applicantId: applicant?.id,
      applicantName: applicant?.name,
      applicantEmail: applicant?.email,

      ...formData,
    };

    try {
      setLoading(true);

      const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/applications`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(submissionData),
      });

      if (res.ok) {
        alert("Application submitted successfully!");

        setFormData({
          resumeLink: "",
          portfolioLink: "",
          additionalNotes: "",
        });
      } else {
        alert("Failed to submit application");
      }
    } catch (error) {
      console.error(error);
      alert("Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-xl mx-auto p-6 bg-white dark:bg-zinc-900 rounded-xl shadow-sm border border-zinc-200 dark:border-zinc-800">
      {/* Header */}
      <div className="mb-6">
        <span className="text-xs font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wider">
          Application Form
        </span>

        <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50 mt-1">
          Apply for {job?.title || "this position"}
        </h2>

        {applicant?.name && (
          <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-1">
            Applying as:{" "}
            <span className="font-medium text-zinc-700 dark:text-zinc-300">
              {applicant.name}
            </span>{" "}
            ({applicant.email})
          </p>
        )}
      </div>

      <hr className="border-zinc-200 dark:border-zinc-800 mb-6" />

      {/* FORM */}
      <Form onSubmit={handleSubmit} className="flex flex-col gap-5 w-full">
        {/* Resume */}
        <TextField isRequired name="resumeLink" className="w-full">
          <Label className="flex items-center gap-2 text-sm mb-1.5">
            <FileText className="w-4 h-4 text-zinc-400" />
            Resume Link
          </Label>

          <Input
            name="resumeLink"
            type="url"
            placeholder="https://drive.google.com/..."
            value={formData.resumeLink}
            onChange={handleChange}
            className="w-full px-3 py-2 rounded-lg border border-zinc-300 dark:border-zinc-700"
          />

          <Description className="text-xs text-zinc-400 mt-1">
            Google Drive / Dropbox / Notion link
          </Description>

          <FieldError />
        </TextField>

        {/* Portfolio */}
        <TextField name="portfolioLink" className="w-full">
          <Label className="flex items-center gap-2 text-sm mb-1.5">
            <Link className="w-4 h-4 text-zinc-400" />
            Portfolio (Optional)
          </Label>

          <Input
            name="portfolioLink"
            type="url"
            placeholder="https://yourportfolio.com"
            value={formData.portfolioLink}
            onChange={handleChange}
            className="w-full px-3 py-2 rounded-lg border border-zinc-300 dark:border-zinc-700"
          />

          <Description className="text-xs text-zinc-400 mt-1">
            GitHub / Behance / personal site
          </Description>
        </TextField>

        {/* Notes */}
        <TextField name="additionalNotes" className="w-full">
          <Label className="flex items-center gap-2 text-sm mb-1.5">
            <LayoutHeaderCells className="w-4 h-4 text-zinc-400" />
            Short Message (Optional)
          </Label>

          <textarea
            name="additionalNotes"
            rows={4}
            placeholder="Write something about yourself..."
            value={formData.additionalNotes}
            onChange={handleChange}
            className="w-full px-3 py-2 rounded-lg border border-zinc-300 dark:border-zinc-700 bg-transparent text-sm resize-none"
          />
        </TextField>

        {/* Actions */}
        <div className="flex justify-end gap-3 pt-4 border-t border-zinc-100 dark:border-zinc-800">
          <Button
            type="button"
            onClick={() =>
              setFormData({
                resumeLink: "",
                portfolioLink: "",
                additionalNotes: "",
              })
            }
            className="px-4 py-2 text-sm"
          >
            Clear
          </Button>

          <Button
            type="submit"
            disabled={loading}
            className="px-5 py-2 text-sm bg-blue-600 text-white flex items-center gap-2"
          >
            {loading ? "Submitting..." : "Submit Application"}
            <ArrowRight className="w-4 h-4" />
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default JobApply;
