import { useEffect } from "react";
import { IconButton, Box } from "@chakra-ui/react";
import { FaArrowUp } from "react-icons/fa";
import useScrollStore from "@/hooks/useScrollStore";

const ScrollToTop = () => {
  const { showScrollTop, setShowScrollTop } = useScrollStore();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 650) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [setShowScrollTop]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

    setTimeout(() => {
      history.replaceState(null, "", "/");
    }, 500);
  };

  return (
    <>
      {showScrollTop && (
        <Box position="fixed" bottom="50px" right="50px" zIndex={10}>
          <IconButton
            icon={<FaArrowUp />}
            onClick={scrollToTop}
            colorScheme="blue"
            size="lg"
            isRound
            aria-label="Scroll to top"
            boxShadow="lg"
          />
        </Box>
      )}
    </>
  );
};

export default ScrollToTop;
