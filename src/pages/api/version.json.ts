export function GET({ }) {
  return new Response(
    JSON.stringify({
      version: "1.3.28.29656",
      download_url: "https://rblighting.albiedj.com/downloads/RbLighting_1.3.28.msi",
      changelog: ""
  }),
  );
}