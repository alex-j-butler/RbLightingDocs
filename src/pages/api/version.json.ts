export function GET({ }) {
  return new Response(
    JSON.stringify({
      version: "1.3.27.15358",
      download_url: "https://rblighting.albiedj.com/downloads/RbLighting_1.3.27.msi",
      changelog: ""
  }),
  );
}