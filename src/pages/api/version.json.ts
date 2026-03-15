export function GET({ }) {
  return new Response(
    JSON.stringify({
      version: "1.3.31.10348",
      download_url: "https://rblighting.albiedj.com/downloads/RbLighting_1.3.31.msi",
      changelog: ""
  }),
  );
}