export function GET({ }) {
  return new Response(
    JSON.stringify({
        version: "1.2.4.43565",
        download_url: "https://rblighting.albiedj.com/downloads/RbLighting_1.2.4.msi"
    }),
  );
}