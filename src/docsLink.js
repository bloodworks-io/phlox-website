// In dev the docs run on a separate Docusaurus dev server (port 3001);
// in production both apps share one origin and /docs is merged into the build.
const isDev = process.env.NODE_ENV === "development";

export const docsHref = isDev ? "http://localhost:3001/docs" : "/docs";
export const docsIsExternal = isDev;
