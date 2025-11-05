export function GET({ }) {
  return new Response(
    JSON.stringify({
        version: "1.1.1",
        download_url: "https://rblighting.albiedj.com/downloads/RbLighting_v1.1.1.msi"
    }),
  );
}