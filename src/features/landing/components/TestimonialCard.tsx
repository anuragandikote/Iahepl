import FormatQuoteIcon from "@mui/icons-material/FormatQuote";

const TestimonialCard = () => (
  <div className="mt-8 card-with-gradient-border rounded-xl shadow-md max-w-4xl mx-auto p-6 relative">
    <FormatQuoteIcon
      className="absolute top-4 left-4 text-[a68272] rotate-180 scale-x-[1]"
      fontSize="large"
    />
    <p className="text-black text-xl italic mt-8">
      "Joining this community has been life-changing. The instructors are incredibly knowledgeable,
      and the classes have helped me find inner peace and improve my flexibility."
    </p>
    <p className="mt-4 font-semibold text-sm text-gray-900">Army Recommended</p>
    <FormatQuoteIcon className="absolute bottom-4 right-4 text-[a68272]" fontSize="large" />
  </div>
);

export default TestimonialCard;