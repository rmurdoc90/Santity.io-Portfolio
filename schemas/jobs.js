export default {
  name: "jobs",
  type: "document",
  title: "Jobs",
  fields: [
    {
      name: "companyName",
      type: "string",
      title: "Company Name",
    },
    {
      name: "startDate",
      type: "date",
      title: "Start date",
      options: {
        dateFormat: "YYYY-MM-DD",
      },
    },
    {
      name: "endDate",
      type: "date",
      title: "End date",
      options: {
        dateFormat: "YYYY-MM-DD",
      },
    },
    {
      name: "description",
      type: "text",
      title: "Description",
    },
    {
      name: "techStack",
      title: "Technology Used",
      type: "array",
      of: [{ type: "string" }],
    },
    {
      name: "projectImg",
      type: "image",
      title: "Project Thumbnail",
    },
  ],
};
