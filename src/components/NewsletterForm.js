const NewsletterForm = () => {
  return (
    <form className="flex-1 flex flex-col items-start w-full gap-y-6 lg:flex-row lg:gap-x-10">
      <input
        type="text"
        placeholder="Enter your email"
        className="input text-white placeholder:text-white placeholder:text-base"
      />

      <button className="btn bg-white text-darkblue px-8 hover:bg-white/70">
        Subscribe
      </button>
    </form>
  );
};

export default NewsletterForm;
