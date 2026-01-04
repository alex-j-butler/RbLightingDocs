export function GET({ }) {
  return new Response(
    JSON.stringify({
        version: "1.2.7.56306",
        download_url: "https://rblighting.albiedj.com/downloads/RbLighting_1.2.7.msi",
        changelog: "Added support for Rekordbox 7.2.8"
    }),
  );
}