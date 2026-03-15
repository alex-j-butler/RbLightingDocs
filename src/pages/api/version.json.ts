export function GET({ }) {
  return new Response(
    JSON.stringify({
      version: "1.3.32.30560",
      download_url: "https://rblighting.albiedj.com/downloads/RbLighting_1.3.32.msi",
      changelog: ""
  }),
  );
}