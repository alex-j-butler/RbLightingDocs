export function GET({ }) {
  return new Response(
    JSON.stringify({
      version: "1.3.26.39183",
      download_url: "https://rblighting.albiedj.com/downloads/RbLighting_1.3.26.msi",
      changelog: "UI Overhaul\nAdded support for Rekordbox 7.2.4\nAdded support for Rekordbox 7.2.7\n\nAdded support for Rekordbox 6.8.6\nBackport: Fixed SoundSwitch integration sending wrong values for Deck 2 time."
  }),
  );
}