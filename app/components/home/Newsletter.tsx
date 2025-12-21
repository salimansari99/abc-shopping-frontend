export default function Newsletter() {
  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-4 text-center">
        <h3 className="text-2xl font-semibold">Join Our Newsletter</h3>
        <p className="mt-2 text-sm text-muted-foreground">
          Get early access to new drops & exclusive offers.
        </p>

        <form className="mx-auto mt-6 flex max-w-md gap-2">
          <input
            type="email"
            required
            placeholder="Enter your email"
            className="w-full rounded-md border px-4 py-2 text-sm"
          />
          <button
            type="submit"
            className="rounded-md bg-black px-6 py-2 text-sm text-white"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
}
