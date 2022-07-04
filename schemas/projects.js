export default {
  name: "projects",
  type: "document",
  title: "Projects",
  fields: [
    {
      name: "projectName",
      type: "string",
      title: "Project Name",
    },
    {
      name: "description",
      type: "text",
      title: "Description",
    },
    {
      name: "projectSlug",
      type: "slug",
      title: "Project Slug",
    },
    {
      name: "githubSlug",
      type: "slug",
      title: "Github Slug",
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
