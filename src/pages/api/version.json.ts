export function GET({ }) {
  return new Response(
    JSON.stringify({
        version: "1.2.6.41985",
        download_url: "https://rblighting.albiedj.com/downloads/RbLighting_1.2.6.msi",
        changelog: "Added support for Rekordbox 7.2.7"
    }),
  );
}