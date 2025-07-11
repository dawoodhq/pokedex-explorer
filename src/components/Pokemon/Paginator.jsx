import { useEffect, useState } from "react";
import { Loader2Icon, ArrowBigRight, ArrowBigLeft } from "lucide-react";

import Button from "../Button";

const Paginator = ({ previous, next, isLoading }) => {
  const [isPreviousPageLoading, setIsPreviousPageLoading] = useState(false);
  const [isNextPageLoading, setIsNextPageLoading] = useState(false);

  const fetchPreviousPage = () => { setIsPreviousPageLoading(true); previous(); };
  const fetchNextPage = () => { setIsNextPageLoading(true); next(); };

  useEffect(() => {
    if (!isLoading) {
      setIsNextPageLoading(false);
      setIsPreviousPageLoading(false);
    };
  }, [isLoading]);

  return (
    <div className="flex flex-row gap-x-4 2xl:text-lg mb-2">
        <Button onClick={fetchPreviousPage} disabled={previous == null || isLoading}>
          {isPreviousPageLoading ? <Loader2Icon className="animate-spin" /> : <ArrowBigLeft />}
          Previous Page
        </Button>
        <Button onClick={fetchNextPage} disabled={next == null || isLoading}>
          Next Page
          {!isNextPageLoading ? <ArrowBigRight /> : <Loader2Icon className="animate-spin" />}
        </Button>
    </div>
  );
};

export default Paginator;