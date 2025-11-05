export function GET({ }) {
  return new Response(
    JSON.stringify({
        version: "1.1.0"
    }),
  );
}